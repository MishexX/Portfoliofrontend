import mongoose from 'mongoose';

const cvDownloadTokenSchema = new mongoose.Schema({
  email: { type: String, required: true },
  token: { type: String, required: true, unique: true },
  type: { type: String, enum: ['verify', 'download'], required: true },
  expiresAt: { type: Date, required: true },
  used: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.models.CvDownloadToken || mongoose.model('CvDownloadToken', cvDownloadTokenSchema); 