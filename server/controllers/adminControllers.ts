// server/src/controllers/adminController.ts
// New controller for admin dashboard logic
import { Request, Response } from 'express';
import Job from '../models/Job';
import Company from '../models/Company';
import User from '../models/User';
import Application from '../models/Application';
import Department from '../models/Department';
import Report from '../models/Report';
import ActivityLog from '../models/ActivityLog';

// Get dashboard stats (pending approvals, active companies, total students, placement rate)
export const getDashboardStats = async (req: Request, res: Response): Promise<void> => {
  try {
    const pendingApprovals = await Job.countDocuments({ status: 'pending' });
    const activeCompanies = await Company.countDocuments({ active: true });
    const totalStudents = await User.countDocuments({ role: 'student' });
    const placedStudents = await Application.countDocuments({ status: 'placed' });
    const placementRate = totalStudents > 0 ? ((placedStudents / totalStudents) * 100).toFixed(1) + '%' : '0%';

    res.status(200).json({
      pendingApprovals,
      activeCompanies,
      totalStudents,
      placementRate,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching stats', error });
  }
};

// Get pending approvals list
export const getPendingApprovals = async (req: Request, res: Response): Promise<void> => {
  try {
    const jobs = await Job.find({ status: 'pending' }).populate('company', 'name logo');
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching pending approvals', error });
  }
};

// Approve a job
export const approveJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, { status: 'approved' }, { new: true });
    if (!job) {
      res.status(404).json({ message: 'Job not found' });
      return;
    }
    // Log activity
    await new ActivityLog({
      type: 'approval',
      message: `${job.position} at ${job.company} approved`,
      status: 'completed',
    }).save();
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error approving job', error });
  }
};

// Bulk approve jobs
export const bulkApproveJobs = async (req: Request, res: Response): Promise<void> => {
  try {
    const { jobIds } = req.body;
    await Job.updateMany({ _id: { $in: jobIds } }, { status: 'approved' });
    // Log activity
    await new ActivityLog({
      type: 'approval',
      message: `Bulk approved ${jobIds.length} jobs`,
      status: 'completed',
    }).save();
    res.status(200).json({ message: 'Jobs approved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error in bulk approval', error });
  }
};

// Get student tracking list
export const getStudentTracking = async (req: Request, res: Response): Promise<void> => {
  try {
    const students = await User.find({ role: 'student' }).select('fullName department graduationYear');
    // For each student, aggregate applications, interviews, offers
    const tracking = await Promise.all(
      students.map(async (student) => {
        const applications = await Application.countDocuments({ student: student._id });
        const interviews = await Application.countDocuments({ student: student._id, status: 'interviewing' });
        const offers = await Application.countDocuments({ student: student._id, status: { $in: ['offered', 'placed'] } });
        return {
          ...student.toObject(),
          applications,
          interviews,
          offers,
          status: offers > 0 ? 'placed' : applications > 0 ? 'interviewing' : 'no applications',
        };
      })
    );
    res.status(200).json(tracking);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching student tracking', error });
  }
};

// Get department analytics
export const getDepartmentAnalytics = async (req: Request, res: Response): Promise<void> => {
  try {
    const departments = await Department.find();
    const analytics = await Promise.all(
      departments.map(async (dept) => {
        const students = await User.countDocuments({ department: dept.name, role: 'student' });
        const applications = await Application.countDocuments({ 'student.department': dept.name });
        const placements = await Application.countDocuments({ 'student.department': dept.name, status: 'placed' });
        const rate = students > 0 ? ((placements / students) * 100).toFixed(1) + '%' : '0%';
        return {
          name: dept.name,
          students,
          applications,
          placements,
          rate,
          avgPackage: dept.avgPackage ? `₹${dept.avgPackage} LPA` : 'N/A',
        };
      })
    );
    res.status(200).json(analytics);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching department analytics', error });
  }
};

// Get reports list
export const getReports = async (req: Request, res: Response): Promise<void> => {
  try {
    const reports = await Report.find().sort({ generatedAt: -1 });
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reports', error });
  }
};

// Generate new report (placeholder; implement actual generation logic, e.g., using pdfkit or exceljs)
export const generateReport = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, type } = req.body;
    // Simulate generation
    const report = new Report({
      name,
      type,
      size: '1 MB', // Placeholder
      status: 'ready',
      filePath: `/reports/${name}.${type.toLowerCase()}`,
    });
    await report.save();
    // Log activity
    await new ActivityLog({
      type: 'report',
      message: `Generated report: ${name}`,
      status: 'completed',
    }).save();
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ message: 'Error generating report', error });
  }
};

// Get recent activity
export const getRecentActivity = async (req: Request, res: Response): Promise<void> => {
  try {
    const activities = await ActivityLog.find().sort({ time: -1 }).limit(10);
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching activity', error });
  }
};

// Add new company
export const addCompany = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description, logo } = req.body;
    const company = new Company({ name, description, logo });
    await company.save();
    // Log activity
    await new ActivityLog({
      type: 'company',
      message: `${name} added as new company`,
      status: 'new',
    }).save();
    res.status(201).json(company);
  } catch (error) {
    res.status(500).json({ message: 'Error adding company', error });
  }
};

// Send notification (placeholder; implement actual notification system, e.g., via email or push)
export const sendNotification = async (req: Request, res: Response): Promise<void> => {
  try {
    const { message, recipients } = req.body;
    // Simulate sending
    // Log activity
    await new ActivityLog({
      type: 'other',
      message: `Notification sent: ${message}`,
      status: 'completed',
    }).save();
    res.status(200).json({ message: 'Notification sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending notification', error });
  }
};