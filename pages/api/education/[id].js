import dbConnect from '../../../lib/dbConnect';
import Education from '../../../lib/models/Education';

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;
  if (req.method === 'PUT') {
    const { date, title, company } = req.body;
    const edu = await Education.findByIdAndUpdate(
      id,
      { date, title, company },
      { new: true }
    );
    if (!edu) return res.status(404).json({ message: 'Nicht gefunden' });
    return res.status(200).json(edu);
  }
  if (req.method === 'DELETE') {
    const edu = await Education.findByIdAndDelete(id);
    if (!edu) return res.status(404).json({ message: 'Nicht gefunden' });
    return res.status(200).json({ message: 'Ausbildung gelöscht' });
  }
  res.setHeader('Allow', ['PUT', 'DELETE']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
} 