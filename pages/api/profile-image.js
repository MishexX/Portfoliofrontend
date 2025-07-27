import fs from 'fs';
import path from 'path';
import { IncomingForm } from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

const PROFILE_IMAGE_PATH = path.join(process.cwd(), 'public', 'profile.jpg');

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      if (fs.existsSync(PROFILE_IMAGE_PATH)) {
        return res.status(200).json({ image: '/profile.jpg' });
      } else {
        return res.status(404).json({ error: 'Kein Profilbild gefunden.' });
      }
    } catch (error) {
      console.error('GET Error:', error);
      return res.status(500).json({ error: 'Fehler beim Laden des Profilbilds.' });
    }
  }

  if (req.method === 'POST') {
    try {
      console.log('POST /api/profile-image - Upload started');
      
      // Create a temporary directory if it doesn't exist
      const tempDir = path.join(process.cwd(), 'public', 'temp');
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true });
      }
      
      const form = new IncomingForm({
        uploadDir: tempDir,
        keepExtensions: true,
        maxFileSize: 2 * 1024 * 1024, // 2MB
        multiples: false,
      });

      const [fields, files] = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) {
            console.error('Formidable parse error:', err);
            reject(err);
          } else {
            console.log('Formidable parsed successfully');
            console.log('Fields:', fields);
            console.log('Files:', files);
            resolve([fields, files]);
          }
        });
      });

      console.log('Files received:', Object.keys(files || {}));
      
      // Check if files object exists and has the image property
      if (!files || !files.image) {
        console.log('No image file found in request');
        console.log('Files object:', files);
        return res.status(400).json({ error: 'Keine Datei hochgeladen.' });
      }

      const file = files.image;
      
      // Handle both single file and array of files
      const fileToProcess = Array.isArray(file) ? file[0] : file;
      
      console.log('File details:', {
        originalName: fileToProcess.originalFilename,
        mimetype: fileToProcess.mimetype,
        size: fileToProcess.size,
        filepath: fileToProcess.filepath
      });

      // Validate file type
      const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
      if (!fileToProcess.mimetype || !validTypes.includes(fileToProcess.mimetype)) {
        console.log('Invalid file type:', fileToProcess.mimetype);
        return res.status(400).json({ error: 'Nur JPG und PNG erlaubt.' });
      }

      // Validate file size
      if (fileToProcess.size > 2 * 1024 * 1024) {
        console.log('File too large:', fileToProcess.size);
        return res.status(400).json({ error: 'Datei zu groß. Maximal 2MB erlaubt.' });
      }

      // Delete old file if it exists
      if (fs.existsSync(PROFILE_IMAGE_PATH)) {
        fs.unlinkSync(PROFILE_IMAGE_PATH);
        console.log('Old profile image deleted');
      }

      // Copy new file to profile location
      fs.copyFileSync(fileToProcess.filepath, PROFILE_IMAGE_PATH);
      
      // Clean up temporary file
      try {
        fs.unlinkSync(fileToProcess.filepath);
      } catch (cleanupError) {
        console.log('Could not clean up temp file:', cleanupError);
      }
      
      console.log('File saved successfully as:', PROFILE_IMAGE_PATH);
      return res.status(200).json({ image: '/profile.jpg' });

    } catch (error) {
      console.error('POST Error:', error);
      return res.status(500).json({ error: 'Interner Serverfehler: ' + error.message });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
} 