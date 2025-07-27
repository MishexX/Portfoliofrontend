import dbConnect from '../../../lib/dbConnect';
import CvDownloadToken from '../../../lib/models/CvDownloadToken';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end('Method Not Allowed');
  }

  try {
    await dbConnect();
    const { token } = req.query;

    if (!token) {
      return res.status(400).json({ message: 'Token erforderlich.' });
    }

    // Token validieren
    const tokenDoc = await CvDownloadToken.findOne({
      token: token,
      type: 'download',
      expiresAt: { $gt: new Date() }
    });

    if (!tokenDoc) {
      return res.status(404).send(`
        <!DOCTYPE html>
        <html lang="de">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Token ungültig - Mikheil Tamasidze</title>
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
            .error-icon {
              width: 80px;
              height: 80px;
              background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 20px;
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
            <div class="error-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <path d="M6 18L18 6M6 6l12 12" stroke="white"/>
              </svg>
            </div>
            <h2>Link ungültig</h2>
            <p>Der Download-Link ist ungültig oder abgelaufen. Bitte fordere einen neuen Link an.</p>
            <div class="back-link">
              <a href="/">← Zurück zur Startseite</a>
            </div>
          </div>
        </body>
        </html>
      `);
    }

    // CV-Datei-Pfad
    const cvPath = path.join(process.cwd(), 'public', 'protected', 'Lebenslauf_Mikheil_Tamasidze.pdf');

    // Prüfen ob Datei existiert
    if (!fs.existsSync(cvPath)) {
      return res.status(404).json({ message: 'CV-Datei nicht gefunden.' });
    }

    // Download-Statistik aktualisieren
    try {
      await CvDownloadToken.findOneAndUpdate(
        { token: token },
        { 
          $set: { 
            downloadedAt: new Date(),
            downloadCount: (tokenDoc.downloadCount || 0) + 1,
            used: true
          }
        }
      );
    } catch (error) {
      console.error('Error updating download stats:', error);
    }

    // Datei senden
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Lebenslauf_Mikheil_Tamasidze.pdf"');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    const fileStream = fs.createReadStream(cvPath);
    fileStream.pipe(res);

  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ message: 'Interner Serverfehler.' });
  }
} 