import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import SuperAdminDashboard from './pages/dashboards/SuperAdminDashboard';
import AdminDashboard from './pages/dashboards/AdminDashboard';
import HODDashboard from './pages/dashboards/HODDashboard';
import AlumniDashboard from './pages/dashboards/AlumniDashboard';
import StudentDashboard from './pages/dashboards/StudentDashboard';
import HRDashboard from './pages/dashboards/HRDashboard';

// Student Pages
import StudentJobRecommendations from './pages/student/JobRecommendations';
import StudentApplications from './pages/student/MyApplications';
import StudentMentorship from './pages/student/MentorshipChat';
import StudentProfile from './pages/student/ProfileResume';
import StudentNotifications from './pages/student/Notifications';
import StudentSettings from './pages/student/Settings';

// Super Admin Pages
import ManageAdmins from './pages/super-admin/ManageAdmins';
import ApproveJobs from './pages/super-admin/ApproveJobs';
import GlobalReports from './pages/super-admin/GlobalReports';
import SuperAdminNotifications from './pages/super-admin/Notifications';
import SuperAdminSettings from './pages/super-admin/Settings';

// Alumni Pages
import AlumniMentorshipChat from './pages/dashboards/alumni/AlumniMentorshipChat';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 dark:bg-slate-950 bg-gray-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/super-admin" element={<SuperAdminDashboard />} />
          <Route path="/super-admin/admins" element={<ManageAdmins />} />
          <Route path="/super-admin/jobs" element={<ApproveJobs />} />
          <Route path="/super-admin/reports" element={<GlobalReports />} />
          <Route path="/super-admin/notifications" element={<SuperAdminNotifications />} />
          <Route path="/super-admin/settings" element={<SuperAdminSettings />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/hod" element={<HODDashboard />} />
          <Route path="/alumni" element={<AlumniDashboard />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/student/jobs" element={<StudentJobRecommendations />} />
          <Route path="/student/applications" element={<StudentApplications />} />
          <Route path="/student/mentorship" element={<StudentMentorship />} />
          <Route path="/student/profile" element={<StudentProfile />} />
          <Route path="/student/notifications" element={<StudentNotifications />} />
          <Route path="/student/settings" element={<StudentSettings />} />
          <Route path="/hr" element={<HRDashboard />} />
          <Route path="/alumni/mentorship" element={<AlumniMentorshipChat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;