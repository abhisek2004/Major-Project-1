// server/src/models/User.ts (update existing to include admin role and more fields)
import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  role: 'student' | 'alumni' | 'hr' | 'admin';
  department?: string;
  graduationYear?: string;
  company?: string;
  cgpa?: number;
  avatar?: string;
  rollNo?: string;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'alumni', 'hr', 'admin'], required: true },
    department: {
      type: String,
      required: function (this: IUser) {
        return this.role === 'student';
      },
    },
    graduationYear: {
      type: String,
      required: function (this: IUser) {
        return this.role === 'student';
      },
    },
    company: {
      type: String,
      required: function (this: IUser) {
        return this.role === 'alumni' || this.role === 'hr';
      },
    },
    cgpa: { type: Number },
    avatar: { type: String },
    rollNo: { type: String, unique: true },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>('User', UserSchema);