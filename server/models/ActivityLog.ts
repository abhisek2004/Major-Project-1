// server/src/models/ActivityLog.ts
// Model for recent activities, for dashboard feed
import mongoose, { Schema, Document } from 'mongoose';

interface IActivityLog extends Document {
  type: 'approval' | 'application' | 'company' | 'report' | 'urgent' | 'other';
  message: string;
  time: Date;
  status: 'completed' | 'info' | 'new' | 'urgent' | 'error';
  user?: mongoose.Types.ObjectId; // Optional reference to User
}

const ActivityLogSchema: Schema<IActivityLog> = new Schema(
  {
    type: { type: String, enum: ['approval', 'application', 'company', 'report', 'urgent', 'other'], required: true },
    message: { type: String, required: true },
    time: { type: Date, default: Date.now },
    status: { type: String, enum: ['completed', 'info', 'new', 'urgent', 'error'], default: 'info' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

export default mongoose.model<IActivityLog>('ActivityLog', ActivityLogSchema);