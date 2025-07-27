import dbConnect from '../../../lib/dbConnect';
import Contact from '../../../lib/models/Contact';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'GET') {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json(contacts);
  }
  if (req.method === 'POST') {
    const { name, email, message, firma } = req.body;
    const contact = new Contact({ name, email, message, firma });
    await contact.save();
    return res.status(201).json(contact);
  }
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
} 