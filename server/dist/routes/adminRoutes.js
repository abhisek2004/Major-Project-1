"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// server/src/routes/adminRoutes.ts
// New routes file for admin-specific endpoints
const express_1 = require("express");
const adminControllers_1 = require("../controllers/adminControllers");
const auth_1 = require("../middleware/auth"); // Assume auth middleware exists
const validate_1 = require("../middleware/validate"); // Reuse or create specific validation
const router = (0, express_1.Router)();
// Protect all routes with admin auth
router.use(auth_1.isAdmin);
// Dashboard stats
router.get('/stats', adminControllers_1.getDashboardStats);
// Pending job approvals
router.get('/approvals', adminControllers_1.getPendingApprovals);
router.post('/approvals/:id/approve', validate_1.validateApproval, adminControllers_1.approveJob);
router.post('/approvals/bulk', adminControllers_1.bulkApproveJobs);
// Student tracking
router.get('/students', adminControllers_1.getStudentTracking);
// Department analytics
router.get('/analytics', adminControllers_1.getDepartmentAnalytics);
// Reports
router.get('/reports', adminControllers_1.getReports);
router.post('/reports/generate', adminControllers_1.generateReport);
// Recent activity
router.get('/activity', adminControllers_1.getRecentActivity);
// Quick actions
router.post('/companies/add', adminControllers_1.addCompany);
router.post('/notifications/send', adminControllers_1.sendNotification);
exports.default = router;
