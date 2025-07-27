import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  date: { type: String, required: true },
  title: { type: String, required: true },
  company: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Education || mongoose.model('Education', educationSchema); 