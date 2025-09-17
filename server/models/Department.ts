// server/src/models/Department.ts
// Model for departments, used for analytics
import mongoose, { Schema, Document } from 'mongoose';

interface IDepartment extends Document {
  name: string;
  students: number;
  avgCGPA?: number;
  avgPackage?: number; // In LPA or currency unit
}

const DepartmentSchema: Schema<IDepartment> = new Schema(
  {
    name: { type: String, required: true, unique: true },
    students: { type: Number, default: 0 },
    avgCGPA: { type: Number },
    avgPackage: { type: Number },
  },
  { timestamps: true }
);

export default mongoose.model<IDepartment>('Department', DepartmentSchema);