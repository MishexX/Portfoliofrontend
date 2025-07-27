import dbConnect from '../../../lib/dbConnect';
import Education from '../../../lib/models/Education';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'GET') {
    const education = await Education.find().sort({ createdAt: -1 });
    return res.status(200).json(education);
  }
  if (req.method === 'POST') {
    const { date, title, company } = req.body;
    const edu = new Education({ date, title, company });
    await edu.save();
    return res.status(201).json(edu);
  }
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
} 