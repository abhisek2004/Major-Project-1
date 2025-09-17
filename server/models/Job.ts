// server/src/models/Job.ts
// Model for job postings, including approvals and details shown in dashboard
import mongoose, { Schema, Document } from 'mongoose';

interface IJob extends Document {
  company: mongoose.Types.ObjectId; // Reference to Company
  position: string;
  department: string;
  description?: string;
  deadline: Date;
  applications: number; // Count of applications
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'pending' | 'approved' | 'rejected' | 'active' | 'closed';
  submittedAt: Date;
  logo?: string; // Company logo URL
}

const JobSchema: Schema<IJob> = new Schema(
  {
    company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
    position: { type: String, required: true },
    department: { type: String, required: true },
    description: { type: String },
    deadline: { type: Date, required: true },
    applications: { type: Number, default: 0 },
    priority: { type: String, enum: ['low', 'medium', 'high', 'urgent'], default: 'medium' },
    status: { type: String, enum: ['pending', 'approved', 'rejected', 'active', 'closed'], default: 'pending' },
    submittedAt: { type: Date, default: Date.now },
    logo: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IJob>('Job', JobSchema);