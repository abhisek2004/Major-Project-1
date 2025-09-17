// server/src/models/Report.ts
// Model for generated reports, shown in exports section
import mongoose, { Schema, Document } from 'mongoose';

interface IReport extends Document {
  name: string;
  type: 'PDF' | 'Excel' | 'CSV';
  size: string; // e.g., '2.4 MB'
  generatedAt: Date;
  status: 'ready' | 'generating' | 'failed';
  downloads: number;
  filePath?: string; // Path to stored file
}

const ReportSchema: Schema<IReport> = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, enum: ['PDF', 'Excel', 'CSV'], required: true },
    size: { type: String, required: true },
    generatedAt: { type: Date, default: Date.now },
    status: { type: String, enum: ['ready', 'generating', 'failed'], default: 'generating' },
    downloads: { type: Number, default: 0 },
    filePath: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IReport>('Report', ReportSchema);