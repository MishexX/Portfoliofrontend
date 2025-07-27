import dbConnect from '../../lib/dbConnect';
import CvDownloadToken from '../../lib/models/CvDownloadToken';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end('Method Not Allowed');
  await dbConnect();
  try {
    const stats = await CvDownloadToken.find({}, '-__v -_id').sort({ createdAt: -1 });
    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: 'Fehler beim Laden der Statistik.' });
  }
} 