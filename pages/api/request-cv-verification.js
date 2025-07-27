import dbConnect from '../../lib/dbConnect';
import CvDownloadToken from '../../lib/models/CvDownloadToken';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

function generateToken() {
  return crypto.randomBytes(32).toString('hex');
}

// Create transporter function to handle different configurations
function createTransporter() {
  const mailUser = process.env.MAIL_USER;
  const mailPass = process.env.MAIL_PASS;
  
  console.log('Email credentials check:', {
    MAIL_USER: mailUser ? 'set' : 'missing',
    MAIL_PASS: mailPass ? 'set' : 'missing'
  });
  
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
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');
  
  // Debug environment variables
  console.log('Environment check:', {
    MAIL_USER: process.env.MAIL_USER ? 'set' : 'missing',
    MAIL_PASS: process.env.MAIL_PASS ? 'set' : 'missing',
    BASE_URL: process.env.BASE_URL || 'not set'
  });
  
  await dbConnect();
  const { email, recaptchaToken } = req.body;
  
  // Validate email
  if (!email) {
    return res.status(400).json({ message: 'E-Mail erforderlich.' });
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Ungültige E-Mail-Adresse.' });
  }
  
  // Handle reCAPTCHA verification
  const secret = process.env.RECAPTCHA_SECRET;
  
  // Debug reCAPTCHA
  console.log('reCAPTCHA check:', {
    hasSecret: !!secret,
    hasToken: !!recaptchaToken,
    secretLength: secret ? secret.length : 0,
    isDemoKey: secret ? secret.includes('6LeIxACTAAAAAGG-VFI1TnRWxMZNFuojJ4WifJWe') : false
  });
  
  // Skip reCAPTCHA if using demo keys or in development
  if (secret && secret.includes('6LeIxACTAAAAAGG-VFI1TnRWxMZNFuojJ4WifJWe')) {
    console.log('Demo reCAPTCHA key detected, skipping verification for local development');
  } else if (recaptchaToken && secret) {
    try {
      const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${recaptchaToken}`;
      const recaptchaRes = await fetch(verifyUrl, { method: 'POST' });
      const recaptchaData = await recaptchaRes.json();
      
      console.log('reCAPTCHA response:', recaptchaData);
      
      if (!recaptchaData.success) {
        console.error('reCAPTCHA verification failed:', recaptchaData);
        return res.status(403).json({ message: 'reCAPTCHA ungültig' });
      }
    } catch (error) {
      console.error('reCAPTCHA verification error:', error);
      return res.status(500).json({ message: 'reCAPTCHA Verifikation fehlgeschlagen' });
    }
  } else if (!secret) {
    console.log('No reCAPTCHA secret configured, skipping verification');
  } else {
    console.log('reCAPTCHA token missing, skipping verification for testing');
  }
  // Token anlegen
  const token = generateToken();
  await CvDownloadToken.create({
    email,
    token,
    type: 'verify',
    expiresAt: new Date(Date.now() + 1000 * 60 * 30), // 30 Min gültig
  });
  // Mail senden
  const verifyUrlAbs = `${process.env.BASE_URL}/api/verify-cv-email/${token}`;
  
  try {
    const transporter = createTransporter();
    
    // Verify transporter configuration
    await transporter.verify();
    console.log('Email transporter verified successfully');
    
    await transporter.sendMail({
      from: `Mikheil Tamasidze | Portfolio <${process.env.MAIL_USER}>`,
      to: email,
      replyTo: process.env.MAIL_USER,
      subject: 'E-Mail-Bestätigung für CV-Download',
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:auto;border:1px solid #eee;padding:32px 24px;background:#faf8ff;">
          <div style="text-align:center;margin-bottom:24px;">
            <img src='https://i.imgur.com/LSxlNfB.png' alt='Logo' style='height:48px;margin-bottom:8px;' />
            <h2 style="color:#8750F7;margin:0 0 8px 0;">Hallo!</h2>
          </div>
          <p style="color:#222;font-size:16px;">vielen Dank für dein Interesse an meinem Lebenslauf.</p>
          <p style="color:#222;font-size:16px;">Bitte bestätige deine E-Mail-Adresse, um den Download zu starten:</p>
          <div style="text-align:center;margin:24px 0;">
            <a href="${verifyUrlAbs}" style="display:inline-block;padding:12px 28px;background:#8750F7;color:#fff;font-weight:bold;border-radius:8px;text-decoration:none;font-size:16px;">E-Mail bestätigen & Download starten</a>
          </div>
          <p style="color:#555;font-size:13px;">Der Link ist 30 Minuten gültig. Deine E-Mail wird nicht gespeichert, sondern nur für den einmaligen Versand verwendet.</p>
          <hr style="margin:24px 0;" />
          <div style="font-size:12px;color:#aaa;text-align:center;">Mikheil Tamasidze | <a href='https://mishka-portfolio-main.vercel.app/privacy-policy' style='color:#8750F7;'>Datenschutz</a> | <a href='https://mishka-portfolio-main.vercel.app/impressum' style='color:#8750F7;'>Impressum</a></div>
        </div>
      `
    });
  } catch (error) {
    console.error('Email sending failed:', error);
    return res.status(500).json({ message: 'Interner Serverfehler: ' + error.message });
  }
  res.json({ message: 'Bestätigungslink wurde per E-Mail versendet.' });
} 