import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://tamasidzemikheil:Kroos19800@cluster0.olnfkbg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const experienceSchema = new mongoose.Schema({
  date: { type: String, required: true },
  title: { type: String, required: true },
  company: { type: String, required: true },
  description: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now }
});

const Experience = mongoose.models.Experience || mongoose.model('Experience', experienceSchema);

export default async function handler(req, res) {
  try {
    console.log('Connecting to MongoDB...');
    
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(MONGODB_URI);
      console.log('Connected to MongoDB');
    }
    
    if (req.method === 'GET') {
      const experience = await Experience.find().sort({ createdAt: -1 });
      console.log('Found experience items:', experience.length);
      return res.status(200).json(experience);
    }
    
    if (req.method === 'POST') {
      const { date, title, company, description } = req.body;
      const exp = new Experience({ date, title, company, description });
      await exp.save();
      return res.status(201).json(exp);
    }
    
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: error.message });
  }
} 