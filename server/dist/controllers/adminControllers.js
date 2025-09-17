"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendNotification = exports.addCompany = exports.getRecentActivity = exports.generateReport = exports.getReports = exports.getDepartmentAnalytics = exports.getStudentTracking = exports.bulkApproveJobs = exports.approveJob = exports.getPendingApprovals = exports.getDashboardStats = void 0;
const Job_1 = __importDefault(require("../models/Job"));
const Company_1 = __importDefault(require("../models/Company"));
const User_1 = __importDefault(require("../models/User"));
const Application_1 = __importDefault(require("../models/Application"));
const Department_1 = __importDefault(require("../models/Department"));
const Report_1 = __importDefault(require("../models/Report"));
const ActivityLog_1 = __importDefault(require("../models/ActivityLog"));
// Get dashboard stats (pending approvals, active companies, total students, placement rate)
const getDashboardStats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pendingApprovals = yield Job_1.default.countDocuments({ status: 'pending' });
        const activeCompanies = yield Company_1.default.countDocuments({ active: true });
        const totalStudents = yield User_1.default.countDocuments({ role: 'student' });
        const placedStudents = yield Application_1.default.countDocuments({ status: 'placed' });
        const placementRate = totalStudents > 0 ? ((placedStudents / totalStudents) * 100).toFixed(1) + '%' : '0%';
        res.status(200).json({
            pendingApprovals,
            activeCompanies,
            totalStudents,
            placementRate,
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching stats', error });
    }
});
exports.getDashboardStats = getDashboardStats;
// Get pending approvals list
const getPendingApprovals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jobs = yield Job_1.default.find({ status: 'pending' }).populate('company', 'name logo');
        res.status(200).json(jobs);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching pending approvals', error });
    }
});
exports.getPendingApprovals = getPendingApprovals;
// Approve a job
const approveJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const job = yield Job_1.default.findByIdAndUpdate(req.params.id, { status: 'approved' }, { new: true });
        if (!job) {
            res.status(404).json({ message: 'Job not found' });
            return;
        }
        // Log activity
        yield new ActivityLog_1.default({
            type: 'approval',
            message: `${job.position} at ${job.company} approved`,
            status: 'completed',
        }).save();
        res.status(200).json(job);
    }
    catch (error) {
        res.status(500).json({ message: 'Error approving job', error });
    }
});
exports.approveJob = approveJob;
// Bulk approve jobs
const bulkApproveJobs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { jobIds } = req.body;
        yield Job_1.default.updateMany({ _id: { $in: jobIds } }, { status: 'approved' });
        // Log activity
        yield new ActivityLog_1.default({
            type: 'approval',
            message: `Bulk approved ${jobIds.length} jobs`,
            status: 'completed',
        }).save();
        res.status(200).json({ message: 'Jobs approved successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error in bulk approval', error });
    }
});
exports.bulkApproveJobs = bulkApproveJobs;
// Get student tracking list
const getStudentTracking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield User_1.default.find({ role: 'student' }).select('fullName department graduationYear');
        // For each student, aggregate applications, interviews, offers
        const tracking = yield Promise.all(students.map((student) => __awaiter(void 0, void 0, void 0, function* () {
            const applications = yield Application_1.default.countDocuments({ student: student._id });
            const interviews = yield Application_1.default.countDocuments({ student: student._id, status: 'interviewing' });
            const offers = yield Application_1.default.countDocuments({ student: student._id, status: { $in: ['offered', 'placed'] } });
            return Object.assign(Object.assign({}, student.toObject()), { applications,
                interviews,
                offers, status: offers > 0 ? 'placed' : applications > 0 ? 'interviewing' : 'no applications' });
        })));
        res.status(200).json(tracking);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching student tracking', error });
    }
});
exports.getStudentTracking = getStudentTracking;
// Get department analytics
const getDepartmentAnalytics = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const departments = yield Department_1.default.find();
        const analytics = yield Promise.all(departments.map((dept) => __awaiter(void 0, void 0, void 0, function* () {
            const students = yield User_1.default.countDocuments({ department: dept.name, role: 'student' });
            const applications = yield Application_1.default.countDocuments({ 'student.department': dept.name });
            const placements = yield Application_1.default.countDocuments({ 'student.department': dept.name, status: 'placed' });
            const rate = students > 0 ? ((placements / students) * 100).toFixed(1) + '%' : '0%';
            return {
                name: dept.name,
                students,
                applications,
                placements,
                rate,
                avgPackage: dept.avgPackage ? `₹${dept.avgPackage} LPA` : 'N/A',
            };
        })));
        res.status(200).json(analytics);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching department analytics', error });
    }
});
exports.getDepartmentAnalytics = getDepartmentAnalytics;
// Get reports list
const getReports = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reports = yield Report_1.default.find().sort({ generatedAt: -1 });
        res.status(200).json(reports);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching reports', error });
    }
});
exports.getReports = getReports;
// Generate new report (placeholder; implement actual generation logic, e.g., using pdfkit or exceljs)
const generateReport = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, type } = req.body;
        // Simulate generation
        const report = new Report_1.default({
            name,
            type,
            size: '1 MB', // Placeholder
            status: 'ready',
            filePath: `/reports/${name}.${type.toLowerCase()}`,
        });
        yield report.save();
        // Log activity
        yield new ActivityLog_1.default({
            type: 'report',
            message: `Generated report: ${name}`,
            status: 'completed',
        }).save();
        res.status(201).json(report);
    }
    catch (error) {
        res.status(500).json({ message: 'Error generating report', error });
    }
});
exports.generateReport = generateReport;
// Get recent activity
const getRecentActivity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const activities = yield ActivityLog_1.default.find().sort({ time: -1 }).limit(10);
        res.status(200).json(activities);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching activity', error });
    }
});
exports.getRecentActivity = getRecentActivity;
// Add new company
const addCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, logo } = req.body;
        const company = new Company_1.default({ name, description, logo });
        yield company.save();
        // Log activity
        yield new ActivityLog_1.default({
            type: 'company',
            message: `${name} added as new company`,
            status: 'new',
        }).save();
        res.status(201).json(company);
    }
    catch (error) {
        res.status(500).json({ message: 'Error adding company', error });
    }
});
exports.addCompany = addCompany;
// Send notification (placeholder; implement actual notification system, e.g., via email or push)
const sendNotification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { message, recipients } = req.body;
        // Simulate sending
        // Log activity
        yield new ActivityLog_1.default({
            type: 'other',
            message: `Notification sent: ${message}`,
            status: 'completed',
        }).save();
        res.status(200).json({ message: 'Notification sent successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error sending notification', error });
    }
});
exports.sendNotification = sendNotification;
