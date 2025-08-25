import React from 'react';
import { motion } from 'framer-motion';
import DashboardSidebar from '../../components/DashboardSidebar';
import DashboardCard from '../../components/DashboardCard';
import {
  BarChart3,
  CheckSquare,
  Users,
  TrendingUp,
  Bell,
  FileText,
  Briefcase,
  GraduationCap,
  Clock,
  AlertCircle,
  CheckCircle,
  Building2,
  Calendar
} from 'lucide-react';

const AdminDashboard = () => {
  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', path: '/admin' },
    { icon: CheckSquare, label: 'Job Approvals', path: '/admin/approvals', badge: '15' },
    { icon: Users, label: 'Student Tracking', path: '/admin/students' },
    { icon: TrendingUp, label: 'Department Analytics', path: '/admin/analytics' },
    { icon: FileText, label: 'Reports Export', path: '/admin/reports' },
    { icon: Bell, label: 'Notifications', path: '/admin/notifications', badge: '7' }
  ];

  const statsCards = [
    {
      title: 'Pending Approvals',
      value: '15',
      icon: Clock,
      change: { value: '+3', type: 'increase' as const },
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Active Companies',
      value: '127',
      icon: Building2,
      change: { value: '+8', type: 'increase' as const },
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Applications Today',
      value: '342',
      icon: Briefcase,
      change: { value: '+45', type: 'increase' as const },
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Placement Rate',
      value: '87.5%',
      icon: TrendingUp,
      change: { value: '+4.2%', type: 'increase' as const },
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const pendingApprovals = [
    {
      company: 'Google Inc.',
      position: 'Software Engineer Intern',
      department: 'Computer Science',
      applications: 847,
      deadline: '2024-01-20',
      priority: 'high',
      submittedAt: '2 hours ago',
      logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
    },
    {
      company: 'Microsoft Corp.',
      position: 'Product Manager Trainee',
      department: 'MBA',
      applications: 234,
      deadline: '2024-01-25',
      priority: 'medium',
      submittedAt: '4 hours ago',
      logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
    },
    {
      company: 'Amazon Web Services',
      position: 'Data Science Intern',
      department: 'Data Science',
      applications: 456,
      deadline: '2024-01-22',
      priority: 'high',
      submittedAt: '6 hours ago',
      logo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
    },
    {
      company: 'Meta Platforms',
      position: 'Frontend Developer',
      department: 'Computer Science',
      applications: 623,
      deadline: '2024-01-18',
      priority: 'urgent',
      submittedAt: '8 hours ago',
      logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
    }
  ];

  const departmentStats = [
    { name: 'Computer Science', students: 1247, applications: 3456, placements: 1089, rate: '87.3%', trend: '+5.2%' },
    { name: 'Data Science', students: 856, applications: 2134, placements: 734, rate: '85.7%', trend: '+3.8%' },
    { name: 'MBA', students: 634, applications: 1567, placements: 558, rate: '88.0%', trend: '+7.1%' },
    { name: 'Mechanical Eng.', students: 723, applications: 1234, placements: 601, rate: '83.1%', trend: '+2.4%' },
    { name: 'Electronics', students: 567, applications: 987, placements: 478, rate: '84.3%', trend: '+4.6%' }
  ];

  const recentActivity = [
    {
      type: 'approval',
      message: 'Apple Inc. - iOS Developer position approved and forwarded to CS HOD',
      time: '15 minutes ago',
      status: 'completed'
    },
    {
      type: 'application',
      message: '45 new applications submitted across 8 different positions',
      time: '32 minutes ago',
      status: 'info'
    },
    {
      type: 'company',
      message: 'Tesla Motors registered as new hiring partner',
      time: '1 hour ago',
      status: 'new'
    },
    {
      type: 'report',
      message: 'Weekly placement report generated and sent to all HODs',
      time: '2 hours ago',
      status: 'completed'
    },
    {
      type: 'urgent',
      message: 'Netflix position deadline extended by 3 days due to high interest',
      time: '3 hours ago',
      status: 'urgent'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex">
      <DashboardSidebar
        items={sidebarItems}
        userRole="admin"
        userName="Dr. Premansu Sekhar Rath"
        userAvatar="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
      />

      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-slate-400">Manage placements and coordinate between companies and departments</p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCards.map((card, index) => (
              <DashboardCard key={card.title} {...card} delay={index * 0.1} />
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Job Approvals */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 mb-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Pending Job Approvals</h3>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                    View All Requests
                  </button>
                </div>

                <div className="space-y-4">
                  {pendingApprovals.map((job, index) => (
                    <div key={index} className="p-5 bg-slate-800/30 rounded-xl border border-slate-700/30">
                      <div className="flex items-start space-x-4">
                        <img
                          src={job.logo}
                          alt={job.company}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <div className="flex items-center space-x-3 mb-1">
                                <h4 className="text-white font-semibold">{job.position}</h4>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ₹{
                                  job.priority === 'urgent' ? 'bg-red-500/20 text-red-400' :
                                  job.priority === 'high' ? 'bg-orange-500/20 text-orange-400' :
                                  'bg-blue-500/20 text-blue-400'
                                }`}>
                                  {job.priority}
                                </span>
                              </div>
                              <p className="text-slate-400 text-sm">{job.company} • {job.department}</p>
                              <p className="text-slate-500 text-xs mt-1">Submitted {job.submittedAt}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-slate-400 text-sm">Deadline: {job.deadline}</p>
                              <p className="text-slate-300 text-sm">{job.applications} expected applications</p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4 text-slate-400" />
                              <span className="text-slate-400 text-sm">
                                {new Date(job.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                              </span>
                            </div>

                            <div className="flex space-x-2">
                              <button className="px-4 py-2 bg-green-500/20 border border-green-500/30 text-green-400 rounded-lg hover:bg-green-500/30 transition-all duration-300 text-sm font-medium">
                                Approve & Forward
                              </button>
                              <button className="px-3 py-2 bg-slate-700/50 border border-slate-600/50 text-slate-400 rounded-lg hover:bg-slate-600/50 transition-all duration-300 text-sm font-medium">
                                Review
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Department Statistics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Department Performance</h3>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                    Detailed Analytics
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-700/50">
                        <th className="text-left text-slate-400 font-medium py-3">Department</th>
                        <th className="text-left text-slate-400 font-medium py-3">Students</th>
                        <th className="text-left text-slate-400 font-medium py-3">Applications</th>
                        <th className="text-left text-slate-400 font-medium py-3">Placements</th>
                        <th className="text-left text-slate-400 font-medium py-3">Rate</th>
                        <th className="text-left text-slate-400 font-medium py-3">Trend</th>
                      </tr>
                    </thead>
                    <tbody>
                      {departmentStats.map((dept, index) => (
                        <tr key={dept.name} className="border-b border-slate-800/50">
                          <td className="py-4">
                            <span className="text-white font-medium">{dept.name}</span>
                          </td>
                          <td className="py-4">
                            <span className="text-slate-300">{dept.students.toLocaleString()}</span>
                          </td>
                          <td className="py-4">
                            <span className="text-slate-300">{dept.applications.toLocaleString()}</span>
                          </td>
                          <td className="py-4">
                            <span className="text-slate-300">{dept.placements.toLocaleString()}</span>
                          </td>
                          <td className="py-4">
                            <span className="text-white font-medium">{dept.rate}</span>
                          </td>
                          <td className="py-4">
                            <span className="text-green-400 font-medium">{dept.trend}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 mb-6"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-all duration-300">
                    <CheckSquare className="h-5 w-5" />
                    <span className="text-sm font-medium">Bulk Approve Jobs</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 hover:bg-green-500/30 transition-all duration-300">
                    <FileText className="h-5 w-5" />
                    <span className="text-sm font-medium">Generate Report</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-400 hover:bg-purple-500/30 transition-all duration-300">
                    <Bell className="h-5 w-5" />
                    <span className="text-sm font-medium">Send Notifications</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-orange-500/20 border border-orange-500/30 rounded-lg text-orange-400 hover:bg-orange-500/30 transition-all duration-300">
                    <Building2 className="h-5 w-5" />
                    <span className="text-sm font-medium">Add New Company</span>
                  </button>
                </div>
              </motion.div>

              {/* Recent Activity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>

                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ₹{
                        activity.status === 'completed' ? 'bg-green-500/20' :
                        activity.status === 'urgent' ? 'bg-red-500/20' :
                        activity.status === 'new' ? 'bg-blue-500/20' :
                        'bg-slate-700/30'
                      }`}>
                        {activity.status === 'completed' && <CheckCircle className="h-4 w-4 text-green-400" />}
                        {activity.status === 'urgent' && <AlertCircle className="h-4 w-4 text-red-400" />}
                        {activity.status === 'new' && <Building2 className="h-4 w-4 text-blue-400" />}
                        {activity.status === 'info' && <Briefcase className="h-4 w-4 text-slate-400" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-300 text-sm leading-relaxed">{activity.message}</p>
                        <p className="text-slate-400 text-xs mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-4 px-4 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-400 rounded-lg hover:bg-slate-700/50 transition-all duration-300 text-sm font-medium">
                  View Activity Log
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;