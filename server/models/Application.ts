// server/src/models/Application.ts
// Model for student applications, used for tracking and analytics
import mongoose, { Schema, Document } from 'mongoose';

interface IApplication extends Document {
  student: mongoose.Types.ObjectId; // Reference to User (student)
  job: mongoose.Types.ObjectId; // Reference to Job
  status: 'applied' | 'interviewing' | 'offered' | 'placed' | 'rejected';
  appliedAt: Date;
  interviewDate?: Date;
  offerDate?: Date;
}

const ApplicationSchema: Schema<IApplication> = new Schema(
  {
    student: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    job: { type: Schema.Types.ObjectId, ref: 'Job', required: true },
    status: { type: String, enum: ['applied', 'interviewing', 'offered', 'placed', 'rejected'], default: 'applied' },
    appliedAt: { type: Date, default: Date.now },
    interviewDate: { type: Date },
    offerDate: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model<IApplication>('Application', ApplicationSchema);