// server/src/routes/adminRoutes.ts
// New routes file for admin-specific endpoints
import { Router, Request, Response } from 'express';
import {
  getDashboardStats,
  getPendingApprovals,
  approveJob,
  getStudentTracking,
  getDepartmentAnalytics,
  getReports,
  generateReport,
  getRecentActivity,
  bulkApproveJobs,
  addCompany,
  sendNotification,
} from '../controllers/adminControllers';
import { isAdmin } from '../middleware/auth'; // Assume auth middleware exists
import { validateApproval } from '../middleware/validate'; // Reuse or create specific validation

const router: Router = Router();

// Protect all routes with admin auth
router.use(isAdmin);

// Dashboard stats
router.get('/stats', getDashboardStats);

// Pending job approvals
router.get('/approvals', getPendingApprovals);
router.post('/approvals/:id/approve', validateApproval, approveJob);
router.post('/approvals/bulk', bulkApproveJobs);

// Student tracking
router.get('/students', getStudentTracking);

// Department analytics
router.get('/analytics', getDepartmentAnalytics);

// Reports
router.get('/reports', getReports);
router.post('/reports/generate', generateReport);

// Recent activity
router.get('/activity', getRecentActivity);

// Quick actions
router.post('/companies/add', addCompany);
router.post('/notifications/send', sendNotification);

export default router;