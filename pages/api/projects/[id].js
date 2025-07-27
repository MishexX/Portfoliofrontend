import dbConnect from '../../../lib/dbConnect';
import Project from '../../../lib/models/Project';

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;
  if (req.method === 'GET') {
    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ message: 'Nicht gefunden' });
    return res.status(200).json(project);
  }
  if (req.method === 'PUT') {
    const { title, description, image, link, tags, categories } = req.body;
    const project = await Project.findByIdAndUpdate(
      id,
      { title, description, image, link, tags, categories },
      { new: true }
    );
    if (!project) return res.status(404).json({ message: 'Nicht gefunden' });
    return res.status(200).json(project);
  }
  if (req.method === 'DELETE') {
    const project = await Project.findByIdAndDelete(id);
    if (!project) return res.status(404).json({ message: 'Nicht gefunden' });
    return res.status(200).json({ message: 'Projekt gelöscht' });
  }
  res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
} 