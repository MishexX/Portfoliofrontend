import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { recaptchaToken } = req.body;
  if (!recaptchaToken) {
    return res.status(400).json({ message: 'reCAPTCHA-Token fehlt' });
  }

  // reCAPTCHA-Token prüfen
  const secret = process.env.RECAPTCHA_SECRET;
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${recaptchaToken}`;
  const recaptchaRes = await fetch(verifyUrl, { method: 'POST' });
  const recaptchaData = await recaptchaRes.json();
  if (!recaptchaData.success || recaptchaData.score < 0.5) {
    return res.status(403).json({ message: 'reCAPTCHA ungültig oder verdächtig' });
  }

  // PDF ausliefern
  const filePath = path.join(process.cwd(), 'public', 'protected', 'Lebenslauf_Mikheil_Tamasidze.pdf');
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: 'Datei nicht gefunden' });
  }
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="Lebenslauf_Mikheil_Tamasidze.pdf"');
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
} 