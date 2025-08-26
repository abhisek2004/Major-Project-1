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
  Calendar,
  Download,
  Eye,
  Search,
  Filter,
  PieChart,
  Activity,
  Target,
  TrendingDown
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
      title: 'Total Students',
      value: '4,234',
      icon: Users,
      change: { value: '+156', type: 'increase' as const },
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

  const studentTracking = [
    {
      name: 'Arjun Patel',
      rollNo: 'CS21B1023',
      department: 'Computer Science',
      cgpa: 9.2,
      applications: 12,
      interviews: 8,
      offers: 3,
      status: 'placed',
      lastActivity: '2 hours ago',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face'
    },
    {
      name: 'Priya Sharma',
      rollNo: 'DS21B1045',
      department: 'Data Science',
      cgpa: 9.1,
      applications: 8,
      interviews: 5,
      offers: 2,
      status: 'placed',
      lastActivity: '4 hours ago',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face'
    },
    {
      name: 'Rahul Kumar',
      rollNo: 'CS21B1067',
      department: 'Computer Science',
      cgpa: 8.9,
      applications: 15,
      interviews: 10,
      offers: 4,
      status: 'placed',
      lastActivity: '1 day ago',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face'
    },
    {
      name: 'Ananya Singh',
      rollNo: 'CS21B1089',
      department: 'Computer Science',
      cgpa: 8.8,
      applications: 10,
      interviews: 6,
      offers: 2,
      status: 'interviewing',
      lastActivity: '2 days ago',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face'
    }
  ];

  const departmentAnalytics = [
    { name: 'Computer Science', students: 1247, applications: 3456, placements: 1089, rate: '87.3%', trend: '+5.2%', avgPackage: '₹14.2 LPA' },
    { name: 'Data Science', students: 856, applications: 2134, placements: 734, rate: '85.7%', trend: '+3.8%', avgPackage: '₹16.8 LPA' },
    { name: 'MBA', students: 634, applications: 1567, placements: 558, rate: '88.0%', trend: '+7.1%', avgPackage: '₹18.5 LPA' },
    { name: 'Mechanical Eng.', students: 723, applications: 1234, placements: 601, rate: '83.1%', trend: '+2.4%', avgPackage: '₹11.2 LPA' },
    { name: 'Electronics', students: 567, applications: 987, placements: 478, rate: '84.3%', trend: '+4.6%', avgPackage: '₹12.7 LPA' }
  ];

  const reportsExport = [
    {
      name: 'Placement Report Q4 2024',
      type: 'PDF',
      size: '2.4 MB',
      generatedAt: '2 hours ago',
      status: 'ready',
      downloads: 45
    },
    {
      name: 'Department Performance Analysis',
      type: 'Excel',
      size: '1.8 MB',
      generatedAt: '1 day ago',
      status: 'ready',
      downloads: 23
    },
    {
      name: 'Company-wise Statistics',
      type: 'CSV',
      size: '856 KB',
      generatedAt: '3 days ago',
      status: 'ready',
      downloads: 67
    },
    {
      name: 'Student Progress Tracking',
      type: 'PDF',
      size: '3.2 MB',
      generatedAt: '1 week ago',
      status: 'ready',
      downloads: 34
    }
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
    <div className="flex min-h-screen bg-slate-950">
      <DashboardSidebar
        items={sidebarItems}
        userRole="admin"
        userName="Dr. Premansu Sekhar Rath"
        userAvatar="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
      />

      <div className="overflow-auto flex-1">
        <div className="p-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="mb-2 text-3xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-slate-400">Manage placements and coordinate between companies and departments</p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
            {statsCards.map((card, index) => (
              <DashboardCard key={card.title} {...card} delay={index * 0.1} />
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left Column - Job Approvals & Student Tracking */}
            <div className="lg:col-span-2">
              {/* Job Approvals */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-6 mb-8 rounded-2xl border backdrop-blur-xl bg-slate-900/50 border-slate-700/50"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-white">Job Approvals</h3>
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 w-4 h-4 transform -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search jobs..."
                        className="py-2 pr-4 pl-10 text-sm text-white rounded-lg border bg-slate-800/50 border-slate-700/50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      />
                    </div>
                    <button className="p-2 rounded-lg border transition-all duration-300 bg-slate-800/50 border-slate-700/50 text-slate-400 hover:bg-slate-700/50">
                      <Filter className="w-4 h-4" />
                    </button>
                    <button className="text-sm font-medium text-blue-400 transition-colors hover:text-blue-300">
                      View All Requests
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {pendingApprovals.map((job, index) => (
                    <div key={index} className="p-5 rounded-xl border bg-slate-800/30 border-slate-700/30">
                      <div className="flex items-start space-x-4">
                        <img
                          src={job.logo}
                          alt={job.company}
                          className="object-cover w-12 h-12 rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <div className="flex items-center mb-1 space-x-3">
                                <h4 className="font-semibold text-white">{job.position}</h4>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  job.priority === 'urgent' ? 'bg-red-500/20 text-red-400' :
                                  job.priority === 'high' ? 'bg-orange-500/20 text-orange-400' :
                                  'bg-blue-500/20 text-blue-400'
                                }`}>
                                  {job.priority}
                                </span>
                              </div>
                              <p className="text-sm text-slate-400">{job.company} • {job.department}</p>
                              <p className="mt-1 text-xs text-slate-500">Submitted {job.submittedAt}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-slate-400">Deadline: {job.deadline}</p>
                              <p className="text-sm text-slate-300">{job.applications} expected applications</p>
                            </div>
                          </div>

                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4 text-slate-400" />
                              <span className="text-sm text-slate-400">
                                {new Date(job.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                              </span>
                            </div>

                            <div className="flex space-x-2">
                              <button className="px-4 py-2 text-sm font-medium text-green-400 rounded-lg border transition-all duration-300 bg-green-500/20 border-green-500/30 hover:bg-green-500/30">
                                Approve & Forward
                              </button>
                              <button className="px-3 py-2 text-sm font-medium rounded-lg border transition-all duration-300 bg-slate-700/50 border-slate-600/50 text-slate-400 hover:bg-slate-600/50">
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

              {/* Student Tracking */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="p-6 mb-8 rounded-2xl border backdrop-blur-xl bg-slate-900/50 border-slate-700/50"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-white">Student Tracking</h3>
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 w-4 h-4 transform -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search students..."
                        className="py-2 pr-4 pl-10 text-sm text-white rounded-lg border bg-slate-800/50 border-slate-700/50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      />
                    </div>
                    <button className="text-sm font-medium text-blue-400 transition-colors hover:text-blue-300">
                      View All Students
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {studentTracking.map((student, index) => (
                    <div key={student.rollNo} className="p-4 rounded-xl border bg-slate-800/30 border-slate-700/30">
                      <div className="flex items-center space-x-4">
                        <img
                          src={student.avatar}
                          alt={student.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <div>
                              <h4 className="font-medium text-white">{student.name}</h4>
                              <p className="text-sm text-slate-400">{student.rollNo} • {student.department}</p>
                              <p className="text-sm text-slate-400">CGPA: {student.cgpa}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              student.status === 'placed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {student.status}
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-4 gap-4 mb-3 text-sm">
                            <div className="text-center">
                              <p className="text-slate-400">Applications</p>
                              <p className="font-medium text-white">{student.applications}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-slate-400">Interviews</p>
                              <p className="font-medium text-white">{student.interviews}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-slate-400">Offers</p>
                              <p className="font-medium text-green-400">{student.offers}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-slate-400">Last Activity</p>
                              <p className="text-xs text-slate-300">{student.lastActivity}</p>
                            </div>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-xs text-slate-400">{student.department}</span>
                            <div className="flex space-x-2">
                              <button className="px-3 py-1 text-xs font-medium text-blue-400 rounded-lg border transition-all duration-300 bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30">
                                <Eye className="inline mr-1 w-3 h-3" />
                                View Details
                              </button>
                              <button className="px-3 py-1 text-xs font-medium text-green-400 rounded-lg border transition-all duration-300 bg-green-500/20 border-green-500/30 hover:bg-green-500/30">
                                Track Progress
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Department Analytics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="p-6 rounded-2xl border backdrop-blur-xl bg-slate-900/50 border-slate-700/50"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-white">Department Analytics</h3>
                  <button className="text-sm font-medium text-blue-400 transition-colors hover:text-blue-300">
                    Detailed Analytics
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-700/50">
                        <th className="py-3 font-medium text-left text-slate-400">Department</th>
                        <th className="py-3 font-medium text-left text-slate-400">Students</th>
                        <th className="py-3 font-medium text-left text-slate-400">Applications</th>
                        <th className="py-3 font-medium text-left text-slate-400">Placements</th>
                        <th className="py-3 font-medium text-left text-slate-400">Rate</th>
                        <th className="py-3 font-medium text-left text-slate-400">Avg Package</th>
                        <th className="py-3 font-medium text-left text-slate-400">Trend</th>
                      </tr>
                    </thead>
                    <tbody>
                      {departmentAnalytics.map((dept, index) => (
                        <tr key={dept.name} className="border-b border-slate-800/50">
                          <td className="py-4">
                            <span className="font-medium text-white">{dept.name}</span>
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
                            <span className="font-medium text-white">{dept.rate}</span>
                          </td>
                          <td className="py-4">
                            <span className="font-medium text-green-400">{dept.avgPackage}</span>
                          </td>
                          <td className="py-4">
                            <span className="font-medium text-green-400">{dept.trend}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <div>
              {/* Reports Export */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="p-6 mb-6 rounded-2xl border backdrop-blur-xl bg-slate-900/50 border-slate-700/50"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-white">Reports Export</h3>
                  <button className="px-3 py-1 text-sm font-medium text-blue-400 rounded-lg border transition-all duration-300 bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30">
                    + Generate New
                  </button>
                </div>

                <div className="space-y-4">
                  {reportsExport.map((report, index) => (
                    <div key={index} className="p-4 rounded-xl border bg-slate-800/30 border-slate-700/30">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-medium text-white">{report.name}</h4>
                          <p className="text-sm text-slate-400">{report.type} • {report.size}</p>
                          <p className="mt-1 text-xs text-slate-400">Generated {report.generatedAt}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          report.status === 'ready' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {report.status}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-400">{report.downloads} downloads</span>
                        <div className="flex space-x-2">
                          <button className="px-3 py-1 text-xs font-medium text-green-400 rounded-lg border transition-all duration-300 bg-green-500/20 border-green-500/30 hover:bg-green-500/30">
                            <Download className="inline mr-1 w-3 h-3" />
                            Download
                          </button>
                          <button className="px-3 py-1 text-xs font-medium text-blue-400 rounded-lg border transition-all duration-300 bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30">
                            <Eye className="inline mr-1 w-3 h-3" />
                            Preview
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="p-6 mb-6 rounded-2xl border backdrop-blur-xl bg-slate-900/50 border-slate-700/50"
              >
                <h3 className="mb-4 text-lg font-semibold text-white">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="flex items-center p-3 space-x-3 w-full text-blue-400 rounded-lg border transition-all duration-300 bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30">
                    <CheckSquare className="w-5 h-5" />
                    <span className="text-sm font-medium">Bulk Approve Jobs</span>
                  </button>
                  <button className="flex items-center p-3 space-x-3 w-full text-green-400 rounded-lg border transition-all duration-300 bg-green-500/20 border-green-500/30 hover:bg-green-500/30">
                    <FileText className="w-5 h-5" />
                    <span className="text-sm font-medium">Generate Report</span>
                  </button>
                  <button className="flex items-center p-3 space-x-3 w-full text-purple-400 rounded-lg border transition-all duration-300 bg-purple-500/20 border-purple-500/30 hover:bg-purple-500/30">
                    <Bell className="w-5 h-5" />
                    <span className="text-sm font-medium">Send Notifications</span>
                  </button>
                  <button className="flex items-center p-3 space-x-3 w-full text-orange-400 rounded-lg border transition-all duration-300 bg-orange-500/20 border-orange-500/30 hover:bg-orange-500/30">
                    <Building2 className="w-5 h-5" />
                    <span className="text-sm font-medium">Add New Company</span>
                  </button>
                </div>
              </motion.div>

              {/* Recent Activity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="p-6 rounded-2xl border backdrop-blur-xl bg-slate-900/50 border-slate-700/50"
              >
                <h3 className="mb-4 text-lg font-semibold text-white">Recent Activity</h3>

                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${
                        activity.status === 'completed' ? 'bg-green-500/20' :
                        activity.status === 'urgent' ? 'bg-red-500/20' :
                        activity.status === 'new' ? 'bg-blue-500/20' :
                        'bg-slate-700/30'
                      }`}>
                        {activity.status === 'completed' && <CheckCircle className="w-4 h-4 text-green-400" />}
                        {activity.status === 'urgent' && <AlertCircle className="w-4 h-4 text-red-400" />}
                        {activity.status === 'new' && <Building2 className="w-4 h-4 text-blue-400" />}
                        {activity.status === 'info' && <Briefcase className="w-4 h-4 text-slate-400" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm leading-relaxed text-slate-300">{activity.message}</p>
                        <p className="mt-1 text-xs text-slate-400">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="px-4 py-2 mt-4 w-full text-sm font-medium rounded-lg border transition-all duration-300 bg-slate-800/50 border-slate-700/50 text-slate-400 hover:bg-slate-700/50">
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