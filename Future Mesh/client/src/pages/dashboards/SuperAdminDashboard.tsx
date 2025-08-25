import React from 'react';
import { motion } from 'framer-motion';
import DashboardSidebar from '../../components/DashboardSidebar';
import DashboardCard from '../../components/DashboardCard';
import {
  BarChart3,
  Users,
  Shield,
  Settings,
  Bell,
  FileText,
  Briefcase,
  GraduationCap,
  MessageSquare,
  TrendingUp,
  Award,
  Building2
} from 'lucide-react';

const SuperAdminDashboard = () => {
  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', path: '/super-admin' },
    { icon: Shield, label: 'Manage Admins', path: '/super-admin/admins', badge: '5' },
    { icon: Briefcase, label: 'Approve Jobs', path: '/super-admin/jobs', badge: '12' },
    { icon: FileText, label: 'Global Reports', path: '/super-admin/reports' },
    { icon: TrendingUp, label: 'Analytics', path: '/super-admin/analytics' },
    { icon: Bell, label: 'Notifications', path: '/super-admin/notifications', badge: '8' },
    { icon: Settings, label: 'Settings', path: '/super-admin/settings' }
  ];

  const statsCards = [
    {
      title: 'Total Students',
      value: '15,647',
      icon: GraduationCap,
      change: { value: '+12%', type: 'increase' as const },
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Alumni Mentors',
      value: '3,281',
      icon: Users,
      change: { value: '+8%', type: 'increase' as const },
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Active Job Posts',
      value: '892',
      icon: Briefcase,
      change: { value: '+15%', type: 'increase' as const },
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Success Rate',
      value: '94.5%',
      icon: Award,
      change: { value: '+2%', type: 'increase' as const },
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const recentActivity = [
    { action: 'New admin registered', user: 'John Smith (MIT)', time: '2 minutes ago', type: 'user' },
    { action: 'Job post approved', user: 'Google Inc.', time: '5 minutes ago', type: 'job' },
    { action: 'Bulk student upload', user: 'GIET University', time: '10 minutes ago', type: 'data' },
    { action: 'System backup completed', user: 'System', time: '1 hour ago', type: 'system' },
    { action: 'New partnership added', user: 'Microsoft Corp.', time: '2 hours ago', type: 'partnership' }
  ];

  const topPerformingUniversities = [
    { name: 'GIET', placements: 1247, growth: '+18%', students: 2340 },
    { name: 'KIET', placements: 1156, growth: '+12%', students: 2180 },
    { name: 'ITR', placements: 1089, growth: '+15%', students: 1950 },
    { name: 'NIT', placements: 987, growth: '+9%', students: 1875 },
    { name: 'IIT', placements: 876, growth: '+22%', students: 1456 }
  ];

  return (
    <div className="flex min-h-screen bg-slate-950">
      <DashboardSidebar
        items={sidebarItems}
        userRole="super-admin"
        userName="Super Admin"
        userAvatar="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
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
            <h1 className="mb-2 text-3xl font-bold text-white">Super Admin Dashboard</h1>
            <p className="text-slate-400">Monitor and manage the entire FutureMesh platform</p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
            {statsCards.map((card, index) => (
              <DashboardCard key={card.title} {...card} delay={index * 0.1} />
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-6 border bg-slate-900/50 backdrop-blur-xl border-slate-700/50 rounded-2xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Recent Activity</h3>
                  <button className="text-sm font-medium text-blue-400 transition-colors hover:text-blue-300">
                    View All
                  </button>
                </div>

                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center p-4 space-x-4 rounded-lg bg-slate-800/30">
                      <div className={`w-2 h-2 rounded-full ₹{activity.type === 'user' ? 'bg-blue-400' :
                          activity.type === 'job' ? 'bg-green-400' :
                            activity.type === 'data' ? 'bg-purple-400' :
                              activity.type === 'system' ? 'bg-yellow-400' :
                                'bg-pink-400'
                        }`}></div>
                      <div className="flex-1">
                        <p className="font-medium text-white">{activity.action}</p>
                        <p className="text-sm text-slate-400">{activity.user}</p>
                      </div>
                      <span className="text-sm text-slate-400">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Actions */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="p-6 mb-6 border bg-slate-900/50 backdrop-blur-xl border-slate-700/50 rounded-2xl"
              >
                <h3 className="mb-6 text-xl font-semibold text-white">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="flex items-center w-full p-3 space-x-3 text-blue-400 transition-all duration-300 border rounded-lg bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30">
                    <Shield className="w-5 h-5" />
                    <span>Add New Admin</span>
                  </button>
                  <button className="flex items-center w-full p-3 space-x-3 text-green-400 transition-all duration-300 border rounded-lg bg-green-500/20 border-green-500/30 hover:bg-green-500/30">
                    <Briefcase className="w-5 h-5" />
                    <span>Review Job Posts</span>
                  </button>
                  <button className="flex items-center w-full p-3 space-x-3 text-purple-400 transition-all duration-300 border rounded-lg bg-purple-500/20 border-purple-500/30 hover:bg-purple-500/30">
                    <FileText className="w-5 h-5" />
                    <span>Generate Reports</span>
                  </button>
                  <button className="flex items-center w-full p-3 space-x-3 text-orange-400 transition-all duration-300 border rounded-lg bg-orange-500/20 border-orange-500/30 hover:bg-orange-500/30">
                    <Building2 className="w-5 h-5" />
                    <span>Add University</span>
                  </button>
                </div>
              </motion.div>

              {/* System Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="p-6 border bg-slate-900/50 backdrop-blur-xl border-slate-700/50 rounded-2xl"
              >
                <h3 className="mb-4 text-xl font-semibold text-white">System Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Server Health</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-green-400">Excellent</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Database</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-green-400">Online</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">API Status</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-sm text-yellow-400">Maintenance</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">CDN</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-green-400">Active</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Top Performing Universities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="p-6 mt-8 border bg-slate-900/50 backdrop-blur-xl border-slate-700/50 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Top Performing Universities</h3>
              <button className="text-sm font-medium text-blue-400 transition-colors hover:text-blue-300">
                View Full Rankings
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700/50">
                    <th className="py-3 font-medium text-left text-slate-400">Rank</th>
                    <th className="py-3 font-medium text-left text-slate-400">University</th>
                    <th className="py-3 font-medium text-left text-slate-400">Placements</th>
                    <th className="py-3 font-medium text-left text-slate-400">Growth</th>
                    <th className="py-3 font-medium text-left text-slate-400">Total Students</th>
                  </tr>
                </thead>
                <tbody>
                  {topPerformingUniversities.map((university, index) => (
                    <tr key={university.name} className="border-b border-slate-800/50">
                      <td className="py-4">
                        <div className="flex items-center">
                          <span className="font-medium text-white">#{index + 1}</span>
                          {index === 0 && <Award className="w-4 h-4 ml-2 text-yellow-400" />}
                        </div>
                      </td>
                      <td className="py-4">
                        <span className="font-medium text-white">{university.name}</span>
                      </td>
                      <td className="py-4">
                        <span className="text-white">{university.placements.toLocaleString()}</span>
                      </td>
                      <td className="py-4">
                        <span className="font-medium text-green-400">{university.growth}</span>
                      </td>
                      <td className="py-4">
                        <span className="text-slate-400">{university.students.toLocaleString()}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;