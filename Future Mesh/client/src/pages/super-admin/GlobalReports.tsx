import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardSidebar from '../../components/DashboardSidebar';
import {
  BarChart3,
  Shield,
  Briefcase,
  FileText,
  TrendingUp,
  Bell,
  Settings,
  Download,
  Calendar,
  Filter,
  Users,
  GraduationCap,
  Building2,
  Award,
  Target,
  PieChart,
  LineChart,
  BarChart,
  Activity
} from 'lucide-react';

const GlobalReports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [selectedReport, setSelectedReport] = useState('overview');

  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', path: '/super-admin' },
    { icon: Shield, label: 'Manage Admins', path: '/super-admin/admins', badge: '5' },
    { icon: Briefcase, label: 'Approve Jobs', path: '/super-admin/jobs', badge: '12' },
    { icon: FileText, label: 'Global Reports', path: '/super-admin/reports' },
    { icon: TrendingUp, label: 'Analytics', path: '/super-admin/analytics' },
    { icon: Bell, label: 'Notifications', path: '/super-admin/notifications', badge: '8' },
    { icon: Settings, label: 'Settings', path: '/super-admin/settings' }
  ];

  const reportTypes = [
    { id: 'overview', label: 'Platform Overview', icon: BarChart3 },
    { id: 'placements', label: 'Placement Analytics', icon: Award },
    { id: 'universities', label: 'University Performance', icon: GraduationCap },
    { id: 'companies', label: 'Company Engagement', icon: Building2 },
    { id: 'mentorship', label: 'Mentorship Metrics', icon: Users },
    { id: 'trends', label: 'Market Trends', icon: TrendingUp }
  ];

  const overviewMetrics = [
    {
      title: 'Total Platform Users',
      value: '47,892',
      change: '+12.5%',
      trend: 'up',
      breakdown: [
        { label: 'Students', value: '35,247', percentage: 73.6 },
        { label: 'Alumni', value: '8,934', percentage: 18.7 },
        { label: 'HR/Recruiters', value: '2,456', percentage: 5.1 },
        { label: 'Admins/HODs', value: '1,255', percentage: 2.6 }
      ]
    },
    {
      title: 'Job Applications',
      value: '156,789',
      change: '+18.3%',
      trend: 'up',
      breakdown: [
        { label: 'This Month', value: '23,456', percentage: 15.0 },
        { label: 'Last Month', value: '19,876', percentage: 12.7 },
        { label: 'Successful', value: '45,678', percentage: 29.1 },
        { label: 'Pending', value: '67,779', percentage: 43.2 }
      ]
    },
    {
      title: 'Placement Success Rate',
      value: '87.3%',
      change: '+4.2%',
      trend: 'up',
      breakdown: [
        { label: 'Computer Science', value: '92.1%', percentage: 92.1 },
        { label: 'Data Science', value: '89.4%', percentage: 89.4 },
        { label: 'MBA', value: '85.7%', percentage: 85.7 },
        { label: 'Engineering', value: '83.2%', percentage: 83.2 }
      ]
    },
    {
      title: 'Active Mentorship Sessions',
      value: '12,456',
      change: '+23.7%',
      trend: 'up',
      breakdown: [
        { label: 'Ongoing', value: '4,567', percentage: 36.7 },
        { label: 'Completed', value: '6,789', percentage: 54.5 },
        { label: 'Scheduled', value: '1,100', percentage: 8.8 }
      ]
    }
  ];

  const universityPerformance = [
    {
      name: 'IIT',
      students: 2340,
      placements: 2156,
      rate: 92.1,
      avgPackage: '₹28.5 LPA',
      topCompanies: ['Google', 'Microsoft', 'Apple'],
      growth: '+5.2%'
    },
    {
      name: 'GIET University',
      students: 2180,
      placements: 1948,
      rate: 89.4,
      avgPackage: '₹26.8 LPA',
      topCompanies: ['Meta', 'Amazon', 'Tesla'],
      growth: '+3.8%'
    },
    {
      name: 'NIT',
      students: 1950,
      placements: 1671,
      rate: 85.7,
      avgPackage: '₹24.2 LPA',
      topCompanies: ['McKinsey', 'Goldman Sachs', 'BCG'],
      growth: '+7.1%'
    },
    {
      name: 'KIT',
      students: 1875,
      placements: 1560,
      rate: 83.2,
      avgPackage: '₹22.9 LPA',
      topCompanies: ['Netflix', 'Uber', 'Airbnb'],
      growth: '+2.4%'
    },
    {
      name: 'ITR',
      students: 1456,
      placements: 1227,
      rate: 84.3,
      avgPackage: '₹25.1 LPA',
      topCompanies: ['SpaceX', 'NASA', 'Intel'],
      growth: '+4.6%'
    }
  ];

  const companyEngagement = [
    {
      company: 'Google',
      jobPosts: 45,
      applications: 12456,
      hires: 234,
      avgTimeToHire: '18 days',
      satisfaction: 4.8,
      universities: ['GIET', 'KIT', 'ITR']
    },
    {
      company: 'Microsoft',
      jobPosts: 38,
      applications: 9876,
      hires: 198,
      avgTimeToHire: '22 days',
      satisfaction: 4.7,
      universities: ['GIET', 'KIT', 'ITR']
    },
    {
      company: 'Amazon',
      jobPosts: 52,
      applications: 15678,
      hires: 287,
      avgTimeToHire: '16 days',
      satisfaction: 4.6,
      universities: ['GIET', 'KIT', 'ITR']
    },
    {
      company: 'Meta',
      jobPosts: 29,
      applications: 8934,
      hires: 156,
      avgTimeToHire: '20 days',
      satisfaction: 4.9,
      universities: ['GIET', 'KIT', 'ITR']
    }
  ];

  const mentorshipMetrics = [
    {
      metric: 'Total Active Mentors',
      value: '3,281',
      change: '+8.2%',
      details: 'Alumni providing mentorship across all universities'
    },
    {
      metric: 'Students Being Mentored',
      value: '12,456',
      change: '+15.7%',
      details: 'Students currently in active mentorship programs'
    },
    {
      metric: 'Average Session Duration',
      value: '45 min',
      change: '+3.2%',
      details: 'Average length of mentorship sessions'
    },
    {
      metric: 'Mentor Satisfaction Score',
      value: '4.7/5',
      change: '+0.3',
      details: 'Average rating from mentor feedback surveys'
    },
    {
      metric: 'Career Guidance Sessions',
      value: '8,934',
      change: '+22.1%',
      details: 'Total career guidance sessions this month'
    },
    {
      metric: 'Success Rate',
      value: '89.3%',
      change: '+5.8%',
      details: 'Students who found jobs after mentorship'
    }
  ];

  const generateReport = (type: string) => {
    console.log(`Generating ₹{type} report for ₹{selectedPeriod} period`);
  };

  return (
    <div className="flex min-h-screen bg-slate-950 dark:bg-slate-950 bg-gray-50">
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
            <div className="flex items-center justify-between">
              <div>
                <h1 className="mb-2 text-3xl font-bold text-white text-gray-900 dark:text-white">Global Reports & Analytics</h1>
                <p className="text-gray-600 text-slate-400 dark:text-slate-400">Comprehensive insights across all universities and platform metrics</p>
              </div>
              <div className="flex space-x-3">
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="px-4 py-2 text-white text-gray-900 border border-gray-300 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border-slate-600 dark:border-slate-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="yearly">Yearly</option>
                </select>
                <button
                  onClick={() => generateReport(selectedReport)}
                  className="flex items-center px-6 py-2 space-x-2 font-medium text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105 hover:shadow-blue-500/25"
                >
                  <Download className="w-4 h-4" />
                  <span>Export Report</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Report Type Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex p-1 space-x-1 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-xl">
              {reportTypes.map((report) => (
                <button
                  key={report.id}
                  onClick={() => setSelectedReport(report.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ₹{selectedReport === report.id
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'text-slate-400 dark:text-slate-400 text-gray-600 hover:text-white dark:hover:text-white hover:text-gray-900 hover:bg-slate-800/50 dark:hover:bg-slate-800/50 hover:bg-gray-100/50'
                    }`}
                >
                  <report.icon className="w-4 h-4" />
                  <span className="text-sm">{report.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Report Content */}
          {selectedReport === 'overview' && (
            <div className="space-y-8">
              {/* Overview Metrics */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {overviewMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="p-6 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-white text-gray-900 dark:text-white">{metric.title}</h3>
                      <span className={`text-sm font-medium ₹{metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                        {metric.change}
                      </span>
                    </div>
                    <p className="mb-4 text-3xl font-bold text-white text-gray-900 dark:text-white">{metric.value}</p>
                    <div className="space-y-2">
                      {metric.breakdown.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <span className="text-gray-600 text-slate-400 dark:text-slate-400">{item.label}</span>
                          <span className="font-medium text-gray-700 text-slate-300 dark:text-slate-300">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="p-6 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-white text-gray-900 dark:text-white">User Growth Trend</h3>
                    <LineChart className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex items-center justify-center h-64 rounded-lg bg-slate-800/30 dark:bg-slate-800/30 bg-gray-100/50">
                    <p className="text-gray-600 text-slate-400 dark:text-slate-400">Interactive Chart Placeholder</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="p-6 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-white text-gray-900 dark:text-white">Department Distribution</h3>
                    <PieChart className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex items-center justify-center h-64 rounded-lg bg-slate-800/30 dark:bg-slate-800/30 bg-gray-100/50">
                    <p className="text-gray-600 text-slate-400 dark:text-slate-400">Interactive Chart Placeholder</p>
                  </div>
                </motion.div>
              </div>
            </div>
          )}

          {selectedReport === 'universities' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl"
            >
              <h3 className="mb-6 text-xl font-semibold text-white text-gray-900 dark:text-white">University Performance Rankings</h3>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700/50 dark:border-slate-700/50 border-gray-200/50">
                      <th className="py-3 font-medium text-left text-gray-600 text-slate-400 dark:text-slate-400">Rank</th>
                      <th className="py-3 font-medium text-left text-gray-600 text-slate-400 dark:text-slate-400">University</th>
                      <th className="py-3 font-medium text-left text-gray-600 text-slate-400 dark:text-slate-400">Students</th>
                      <th className="py-3 font-medium text-left text-gray-600 text-slate-400 dark:text-slate-400">Placements</th>
                      <th className="py-3 font-medium text-left text-gray-600 text-slate-400 dark:text-slate-400">Success Rate</th>
                      <th className="py-3 font-medium text-left text-gray-600 text-slate-400 dark:text-slate-400">Avg Package</th>
                      <th className="py-3 font-medium text-left text-gray-600 text-slate-400 dark:text-slate-400">Growth</th>
                    </tr>
                  </thead>
                  <tbody>
                    {universityPerformance.map((university, index) => (
                      <tr key={university.name} className="border-b border-slate-800/50 dark:border-slate-800/50 border-gray-200/50">
                        <td className="py-4">
                          <div className="flex items-center">
                            <span className="font-medium text-white text-gray-900 dark:text-white">#{index + 1}</span>
                            {index === 0 && <Award className="w-4 h-4 ml-2 text-yellow-400" />}
                          </div>
                        </td>
                        <td className="py-4">
                          <span className="font-medium text-white text-gray-900 dark:text-white">{university.name}</span>
                        </td>
                        <td className="py-4">
                          <span className="text-gray-700 text-slate-300 dark:text-slate-300">{university.students.toLocaleString()}</span>
                        </td>
                        <td className="py-4">
                          <span className="text-gray-700 text-slate-300 dark:text-slate-300">{university.placements.toLocaleString()}</span>
                        </td>
                        <td className="py-4">
                          <span className="font-medium text-green-400">{university.rate}%</span>
                        </td>
                        <td className="py-4">
                          <span className="font-medium text-blue-400">{university.avgPackage}</span>
                        </td>
                        <td className="py-4">
                          <span className="font-medium text-green-400">{university.growth}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {selectedReport === 'companies' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {companyEngagement.map((company, index) => (
                <div key={company.company} className="p-6 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white text-gray-900 dark:text-white">{company.company}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-400">★</span>
                      <span className="font-medium text-white text-gray-900 dark:text-white">{company.satisfaction}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white text-gray-900 dark:text-white">{company.jobPosts}</p>
                      <p className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">Job Posts</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white text-gray-900 dark:text-white">{company.applications.toLocaleString()}</p>
                      <p className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">Applications</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-400">{company.hires}</p>
                      <p className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">Hires</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-400">{company.avgTimeToHire}</p>
                      <p className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">Avg Time to Hire</p>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-sm text-gray-600 text-slate-400 dark:text-slate-400">Active Universities:</p>
                    <div className="flex flex-wrap gap-2">
                      {company.universities.map((uni) => (
                        <span key={uni} className="px-3 py-1 text-sm text-blue-400 rounded-lg bg-blue-500/20">
                          {uni}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {selectedReport === 'mentorship' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {mentorshipMetrics.map((metric, index) => (
                <div key={metric.metric} className="p-6 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-white text-gray-900 dark:text-white">{metric.metric}</h3>
                    <span className="text-sm font-medium text-green-400">{metric.change}</span>
                  </div>
                  <p className="mb-2 text-3xl font-bold text-white text-gray-900 dark:text-white">{metric.value}</p>
                  <p className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">{metric.details}</p>
                </div>
              ))}
            </motion.div>
          )}

          {selectedReport === 'trends' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 gap-8 lg:grid-cols-2"
            >
              <div className="p-6 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white text-gray-900 dark:text-white">Job Market Trends</h3>
                  <BarChart className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex items-center justify-center h-64 rounded-lg bg-slate-800/30 dark:bg-slate-800/30 bg-gray-100/50">
                  <p className="text-gray-600 text-slate-400 dark:text-slate-400">Market Trends Chart</p>
                </div>
              </div>

              <div className="p-6 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white text-gray-900 dark:text-white">Skill Demand Analysis</h3>
                  <Activity className="w-5 h-5 text-purple-400" />
                </div>
                <div className="flex items-center justify-center h-64 rounded-lg bg-slate-800/30 dark:bg-slate-800/30 bg-gray-100/50">
                  <p className="text-gray-600 text-slate-400 dark:text-slate-400">Skill Demand Chart</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GlobalReports;