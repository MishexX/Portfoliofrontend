import dbConnect from '../../../lib/dbConnect';
import Project from '../../../lib/models/Project';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'GET') {
    const projects = await Project.find().sort({ createdAt: -1 });
    return res.status(200).json(projects);
  }
  if (req.method === 'POST') {
    const { title, description, image, link, tags, categories } = req.body;
    const project = new Project({ title, description, image, link, tags, categories });
    await project.save();
    return res.status(201).json(project);
  }
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
} 