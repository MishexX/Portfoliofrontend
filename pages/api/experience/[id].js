import dbConnect from '../../../lib/dbConnect';
import Experience from '../../../lib/models/Experience';

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;
  if (req.method === 'PUT') {
    const { date, title, company, description } = req.body;
    const exp = await Experience.findByIdAndUpdate(
      id,
      { date, title, company, description },
      { new: true }
    );
    if (!exp) return res.status(404).json({ message: 'Nicht gefunden' });
    return res.status(200).json(exp);
  }
  if (req.method === 'DELETE') {
    const exp = await Experience.findByIdAndDelete(id);
    if (!exp) return res.status(404).json({ message: 'Nicht gefunden' });
    return res.status(200).json({ message: 'Erfahrung gelöscht' });
  }
  res.setHeader('Allow', ['PUT', 'DELETE']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
} 