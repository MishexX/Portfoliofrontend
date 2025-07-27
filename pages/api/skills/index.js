import dbConnect from '../../../lib/dbConnect';
import Skill from '../../../lib/models/Skill';
import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  await dbConnect();
  
  if (req.method === 'GET') {
    const skills = await Skill.find().sort({ createdAt: -1 });
    return res.status(200).json(skills);
  }
  
  if (req.method === 'POST') {
    try {
      console.log('POST /api/skills - Creating new skill');
      
      // Create uploads directory if it doesn't exist
      const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }
      
      const form = new IncomingForm({
        uploadDir: uploadsDir,
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
            resolve([fields, files]);
          }
        });
      });

      console.log('Fields received:', fields);
      console.log('Files received:', Object.keys(files || {}));

      const { name, percent, category } = fields;
      
      if (!name || !percent || !category) {
        return res.status(400).json({ message: 'Name, percent, and category are required' });
      }

      let iconPath = '';
      
      // Handle icon upload if provided
      if (files && files.icon) {
        const file = files.icon;
        const fileToProcess = Array.isArray(file) ? file[0] : file;
        
        console.log('Icon file details:', {
          originalName: fileToProcess.originalFilename,
          mimetype: fileToProcess.mimetype,
          size: fileToProcess.size
        });

        // Validate file type
        const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif', 'image/svg+xml'];
        if (!fileToProcess.mimetype || !validTypes.includes(fileToProcess.mimetype)) {
          return res.status(400).json({ message: 'Invalid file type. Only images allowed.' });
        }

        // Generate unique filename
        const timestamp = Date.now();
        const extension = path.extname(fileToProcess.originalFilename || 'icon.png');
        const filename = `skill-icon-${timestamp}${extension}`;
        const fullIconPath = path.join(uploadsDir, filename);
        
        // Copy file to uploads directory
        fs.copyFileSync(fileToProcess.filepath, fullIconPath);
        
        // Clean up temporary file
        try {
          fs.unlinkSync(fileToProcess.filepath);
        } catch (cleanupError) {
          console.log('Could not clean up temp file:', cleanupError);
        }
        
        iconPath = `/uploads/${filename}`;
        console.log('Icon saved as:', iconPath);
      }

      const skill = new Skill({ 
        name: name.toString(), 
        percent: parseInt(percent.toString()), 
        icon: iconPath, 
        category: category.toString() 
      });
      
      await skill.save();
      console.log('Skill created successfully:', skill);
      return res.status(201).json(skill);
      
    } catch (error) {
      console.error('POST Error:', error);
      return res.status(500).json({ message: 'Internal server error: ' + error.message });
    }
  }
  
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
} 