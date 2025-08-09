export type UserRole = 'student' | 'alumni' | 'hod' | 'company-hr' | 'university-admin' | 'super-admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  department?: string;
  university?: string;
  company?: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'internship';
  salary?: string;
  skills: string[];
  description: string;
  requirements: string[];
  cgpaRequirement?: number;
  postedBy: string;
  postedAt: Date;
  status: 'pending' | 'approved' | 'rejected';
  applicants?: string[];
}

export interface Application {
  id: string;
  jobId: string;
  studentId: string;
  status: 'applied' | 'shortlisted' | 'rejected' | 'hired';
  appliedAt: Date;
  notes?: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

export interface AlumniProfile {
  id: string;
  userId: string;
  currentRole: string;
  company: string;
  experience: number;
  skills: string[];
  mentorshipAreas: string[];
  availability: boolean;
}