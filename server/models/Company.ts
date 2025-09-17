// server/src/models/Company.ts
// Model for companies, used for active companies stats and job references
import mongoose, { Schema, Document } from 'mongoose';

interface ICompany extends Document {
  name: string;
  description?: string;
  logo?: string;
  active: boolean;
  registeredAt: Date;
}

const CompanySchema: Schema<ICompany> = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    logo: { type: String },
    active: { type: Boolean, default: true },
    registeredAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model<ICompany>('Company', CompanySchema);