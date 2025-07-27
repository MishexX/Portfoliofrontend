import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  date: { type: String, required: true },
  title: { type: String, required: true },
  company: { type: String, required: true },
  description: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Experience || mongoose.model('Experience', experienceSchema); 