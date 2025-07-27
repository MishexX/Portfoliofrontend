import dbConnect from '../../../lib/dbConnect';
import CvDownloadToken from '../../../lib/models/CvDownloadToken';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

function generateToken() {
  return crypto.randomBytes(32).toString('hex');
}

// Create transporter function to handle different configurations
function createTransporter() {
  const mailUser = process.env.MAIL_USER;
  const mailPass = process.env.MAIL_PASS;
  
  if (!mailUser || !mailPass) {
    throw new Error('Email credentials are missing. Please check your .env file.');
  }
  
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: mailUser,
      pass: mailPass,
    },
    secure: true,
    tls: {
      rejectUnauthorized: false
    }
  });
}

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end('Method Not Allowed');
  await dbConnect();
  const { token } = req.query;
  const entry = await CvDownloadToken.findOne({ token, type: 'verify', used: false, expiresAt: { $gt: new Date() } });
  if (!entry) return res.status(400).send('Link ungültig oder abgelaufen.');
  // Download-Token generieren
  const downloadToken = generateToken();
  await CvDownloadToken.create({
    email: entry.email,
    token: downloadToken,
    type: 'download',
    expiresAt: new Date(Date.now() + 1000 * 60 * 10), // 10 Min gültig
  });
  entry.used = true;
  await entry.save();
  // Download-Link senden
  const downloadUrl = `${process.env.BASE_URL}/api/download-cv/${downloadToken}`;
  
  try {
    const transporter = createTransporter();
    await transporter.sendMail({
    from: `Mikheil Tamasidze | Portfolio <${process.env.MAIL_USER}>`,
    to: entry.email,
    replyTo: process.env.MAIL_USER,
    subject: 'Dein Download-Link für den Lebenslauf',
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:auto;border:1px solid #eee;padding:32px 24px;background:#faf8ff;">
        <div style="text-align:center;margin-bottom:24px;">
          <img src='https://i.imgur.com/LSxlNfB.png' alt='Logo' style='height:48px;margin-bottom:8px;' />
          <h2 style="color:#8750F7;margin:0 0 8px 0;">Dein Download-Link</h2>
        </div>
        <p style="color:#222;font-size:16px;">Hier ist dein persönlicher Download-Link für meinen Lebenslauf:</p>
        <div style="text-align:center;margin:24px 0;">
          <a href="${downloadUrl}" style="display:inline-block;padding:12px 28px;background:#8750F7;color:#fff;font-weight:bold;border-radius:8px;text-decoration:none;font-size:16px;">Lebenslauf herunterladen</a>
        </div>
        <p style="color:#555;font-size:13px;">Der Link ist nur einmal gültig und läuft nach 10 Minuten ab. Viel Erfolg bei deinem Projekt!</p>
        <hr style="margin:24px 0;" />
        <div style="font-size:12px;color:#aaa;text-align:center;">Mikheil Tamasidze | <a href='https://mishka-portfolio-main.vercel.app/privacy-policy' style='color:#8750F7;'>Datenschutz</a> | <a href='https://mishka-portfolio-main.vercel.app/impressum' style='color:#8750F7;'>Impressum</a></div>
      </div>
    `
  });
  } catch (error) {
    console.error('Email sending failed:', error);
    return res.status(500).send(`
      <!DOCTYPE html>
      <html lang="de">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Fehler - Mikheil Tamasidze</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0F0715 0%, #2A1454 100%);
            margin: 0;
            padding: 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .container {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 40px;
            text-align: center;
            max-width: 500px;
            width: 90%;
            border: 1px solid rgba(255, 0, 0, 0.3);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          }
          h2 {
            color: #ff6b6b;
            font-size: 2rem;
            margin: 0 0 15px 0;
            font-weight: bold;
          }
          p {
            color: #ffffff;
            font-size: 1.1rem;
            line-height: 1.6;
            margin: 0;
          }
          .back-link {
            margin-top: 30px;
          }
          .back-link a {
            color: #8750F7;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
          }
          .back-link a:hover {
            color: #a084f7;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Fehler beim Senden</h2>
          <p>Es gab ein Problem beim Senden der E-Mail. Bitte versuche es später erneut oder kontaktiere mich direkt.</p>
          <div class="back-link">
            <a href="/">← Zurück zur Startseite</a>
          </div>
        </div>
      </body>
      </html>
    `);
  }
  res.send(`
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>E-Mail bestätigt - Mikheil Tamasidze</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #0F0715 0%, #2A1454 100%);
          margin: 0;
          padding: 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .container {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 40px;
          text-align: center;
          max-width: 500px;
          width: 90%;
          border: 1px solid rgba(135, 80, 247, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        .success-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #8750F7, #a084f7);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        h2 {
          color: #8750F7;
          font-size: 2rem;
          margin: 0 0 15px 0;
          font-weight: bold;
        }
        p {
          color: #ffffff;
          font-size: 1.1rem;
          line-height: 1.6;
          margin: 0;
        }
        .logo {
          width: 60px;
          height: 60px;
          border-radius: 10px;
          margin-bottom: 20px;
        }
        .back-link {
          margin-top: 30px;
        }
        .back-link a {
          color: #8750F7;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        .back-link a:hover {
          color: #a084f7;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <img src="https://i.imgur.com/LSxlNfB.png" alt="Logo" class="logo">
        <div class="success-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <path d="M20 6L9 17l-5-5" stroke="white"/>
          </svg>
        </div>
        <h2>E-Mail bestätigt!</h2>
        <p>Der Download-Link wurde dir per E-Mail zugeschickt. Bitte prüfe dein Postfach und klicke auf den Link, um deinen Lebenslauf herunterzuladen.</p>
        <div class="back-link">
          <a href="/">← Zurück zur Startseite</a>
        </div>
      </div>
    </body>
    </html>
  `);
} 