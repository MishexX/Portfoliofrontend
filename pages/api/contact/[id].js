import dbConnect from '../../../lib/dbConnect';
import Contact from '../../../lib/models/Contact';

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;
  if (req.method === 'DELETE') {
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) return res.status(404).json({ message: 'Nicht gefunden' });
    return res.status(200).json({ message: 'Kontakt gelöscht' });
  }
  res.setHeader('Allow', ['DELETE']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
} 