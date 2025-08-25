import React from 'react';
import { motion } from 'framer-motion';
import DashboardSidebar from '../../components/DashboardSidebar';
import DashboardCard from '../../components/DashboardCard';
import {
  BarChart3,
  Users,
  Briefcase,
  UserCheck,
  Bell,
  TrendingUp,
  GraduationCap,
  Star,
  Clock,
  CheckCircle,
  AlertTriangle,
  Award,
  Filter,
  Calendar
} from 'lucide-react';

const HODDashboard = () => {
  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', path: '/hod' },
    { icon: Briefcase, label: 'Job Posts Review', path: '/hod/jobs', badge: '8' },
    { icon: UserCheck, label: 'Shortlist Students', path: '/hod/shortlist' },
    { icon: TrendingUp, label: 'Department Stats', path: '/hod/statistics' },
    { icon: Users, label: 'Alumni Network', path: '/hod/alumni' },
    { icon: Bell, label: 'Notifications', path: '/hod/notifications', badge: '12' }
  ];

  const statsCards = [
    {
      title: 'Active Job Posts',
      value: '23',
      icon: Briefcase,
      change: { value: '+5', type: 'increase' as const },
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Students to Shortlist',
      value: '89',
      icon: Clock,
      change: { value: '+12', type: 'increase' as const },
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Shortlisted Today',
      value: '34',
      icon: UserCheck,
      change: { value: '+8', type: 'increase' as const },
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Department Rate',
      value: '92.3%',
      icon: Star,
      change: { value: '+2.1%', type: 'increase' as const },
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const jobPosts = [
    {
      id: 1,
      company: 'Microsoft',
      position: 'Software Development Engineer',
      type: 'Full-time',
      ctc: '₹45-50 LPA',
      eligibility: { cgpa: 7.5, branches: ['CSE', 'IT'], year: 2024 },
      applications: 67,
      toReview: 89,
      deadline: '2024-01-25',
      priority: 'high',
      logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
    },
    {
      id: 2,
      company: 'Amazon',
      position: 'Data Science Intern',
      type: 'Internship',
      ctc: '₹80,000/month',
      eligibility: { cgpa: 8.0, branches: ['CSE', 'DS'], year: 2025 },
      applications: 45,
      toReview: 67,
      deadline: '2024-01-22',
      priority: 'medium',
      logo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
    },
    {
      id: 3,
      company: 'Google',
      position: 'Product Manager Intern',
      type: 'Internship',
      ctc: '₹1,00,000/month',
      eligibility: { cgpa: 8.5, branches: ['CSE', 'IT', 'MBA'], year: 2024 },
      applications: 123,
      toReview: 156,
      deadline: '2024-01-20',
      priority: 'urgent',
      logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
    }
  ];

  const topStudents = [
    {
      name: 'Arjun Patel',
      rollNo: 'CS21B1023',
      cgpa: 9.2,
      skills: ['React', 'Node.js', 'Python'],
      projects: 8,
      applications: 12,
      offers: 3,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face'
    },
    {
      name: 'Priya Sharma',
      rollNo: 'CS21B1045',
      cgpa: 9.1,
      skills: ['Machine Learning', 'Python', 'R'],
      projects: 6,
      applications: 8,
      offers: 2,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face'
    },
    {
      name: 'Rahul Kumar',
      rollNo: 'CS21B1067',
      cgpa: 8.9,
      skills: ['Full Stack', 'DevOps', 'AWS'],
      projects: 10,
      applications: 15,
      offers: 4,
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face'
    },
    {
      name: 'Ananya Singh',
      rollNo: 'CS21B1089',
      cgpa: 8.8,
      skills: ['Data Science', 'SQL', 'Tableau'],
      projects: 7,
      applications: 10,
      offers: 2,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face'
    }
  ];

  const departmentAnalytics = [
    { metric: 'Total Students', value: 450, trend: '+12' },
    { metric: 'Final Year', value: 120, trend: '+5' },
    { metric: 'Placed Students', value: 98, trend: '+23' },
    { metric: 'Average Package', value: '₹12.5 LPA', trend: '+₹1.2 LPA' },
    { metric: 'Highest Package', value: '₹65 LPA', trend: '+₹15 LPA' },
    { metric: 'Alumni Mentors', value: 67, trend: '+8' }
  ];

  const recentActivity = [
    {
      action: 'Shortlisted 15 students for Microsoft SDE role',
      time: '30 minutes ago',
      type: 'shortlist'
    },
    {
      action: 'Approved Google internship applications (23 students)',
      time: '1 hour ago',
      type: 'approval'
    },
    {
      action: 'Updated eligibility criteria for Amazon Data Scientist role',
      time: '2 hours ago',
      type: 'update'
    },
    {
      action: 'Sent placement notifications to batch 2024',
      time: '3 hours ago',
      type: 'notification'
    },
    {
      action: 'Alumni mentor session scheduled for Jan 20',
      time: '5 hours ago',
      type: 'event'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex">
      <DashboardSidebar
        items={sidebarItems}
        userRole="hod"
        userName="Dr. Sarah Chen"
        userAvatar="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
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
            <h1 className="text-3xl font-bold text-white mb-2">Computer Science Department</h1>
            <p className="text-slate-400">Manage placements and student shortlisting for your department</p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCards.map((card, index) => (
              <DashboardCard key={card.title} {...card} delay={index * 0.1} />
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Job Posts for Review */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 mb-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Job Posts for Review</h3>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-slate-800/50 border border-slate-700/50 text-slate-400 rounded-lg hover:bg-slate-700/50 transition-all duration-300">
                      <Filter className="h-4 w-4" />
                    </button>
                    <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                      View All Jobs
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  {jobPosts.map((job) => (
                    <div key={job.id} className="p-5 bg-slate-800/30 rounded-xl border border-slate-700/30">
                      <div className="flex items-start space-x-4">
                        <img
                          src={job.logo}
                          alt={job.company}
                          className="w-14 h-14 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <div className="flex items-center space-x-3 mb-2">
                                <h4 className="text-white font-semibold text-lg">{job.position}</h4>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ₹{
                                  job.priority === 'urgent' ? 'bg-red-500/20 text-red-400' :
                                  job.priority === 'high' ? 'bg-orange-500/20 text-orange-400' :
                                  'bg-blue-500/20 text-blue-400'
                                }`}>
                                  {job.priority}
                                </span>
                              </div>
                              <p className="text-slate-400 mb-1">{job.company} • {job.type}</p>
                              <p className="text-green-400 font-semibold">{job.ctc}</p>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center space-x-1 mb-1">
                                <Calendar className="h-4 w-4 text-slate-400" />
                                <span className="text-slate-400 text-sm">Due: {new Date(job.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                              </div>
                              <p className="text-orange-400 text-sm font-medium">{job.toReview} students to review</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                            <div className="bg-slate-700/30 p-3 rounded-lg">
                              <p className="text-slate-400">Min CGPA</p>
                              <p className="text-white font-medium">{job.eligibility.cgpa}</p>
                            </div>
                            <div className="bg-slate-700/30 p-3 rounded-lg">
                              <p className="text-slate-400">Branches</p>
                              <p className="text-white font-medium">{job.eligibility.branches.join(', ')}</p>
                            </div>
                            <div className="bg-slate-700/30 p-3 rounded-lg">
                              <p className="text-slate-400">Applications</p>
                              <p className="text-white font-medium">{job.applications}</p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ₹{
                              job.type === 'Internship' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'
                            }`}>
                              {job.type}
                            </span>

                            <div className="flex space-x-2">
                              <button className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300 text-sm font-medium">
                                Review Students
                              </button>
                              <button className="px-4 py-2 bg-green-500/20 border border-green-500/30 text-green-400 rounded-lg hover:bg-green-500/30 transition-all duration-300 text-sm font-medium">
                                Auto Shortlist
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Top Students */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Top Performing Students</h3>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                    View All Students
                  </button>
                </div>

                <div className="space-y-4">
                  {topStudents.map((student, index) => (
                    <div key={student.rollNo} className="p-4 bg-slate-800/30 rounded-xl">
                      <div className="flex items-center space-x-4">
                        <img
                          src={student.avatar}
                          alt={student.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="text-white font-semibold">{student.name}</h4>
                              <p className="text-slate-400 text-sm">{student.rollNo} • CGPA: {student.cgpa}</p>
                            </div>
                            <div className="flex items-center space-x-4 text-sm">
                              <div className="text-center">
                                <p className="text-slate-400">Projects</p>
                                <p className="text-white font-medium">{student.projects}</p>
                              </div>
                              <div className="text-center">
                                <p className="text-slate-400">Applied</p>
                                <p className="text-white font-medium">{student.applications}</p>
                              </div>
                              <div className="text-center">
                                <p className="text-slate-400">Offers</p>
                                <p className="text-green-400 font-medium">{student.offers}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {student.skills.map((skill) => (
                              <span key={skill} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-xs font-medium">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Department Analytics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 mb-6"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Department Overview</h3>

                <div className="space-y-4">
                  {departmentAnalytics.map((item, index) => (
                    <div key={item.metric} className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">{item.metric}</span>
                      <div className="text-right">
                        <span className="text-white font-medium">{item.value}</span>
                        <p className="text-green-400 text-xs">{item.trend}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-4 px-4 py-2 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300 text-sm font-medium">
                  View Detailed Analytics
                </button>
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
                        activity.type === 'shortlist' ? 'bg-green-500/20' :
                        activity.type === 'approval' ? 'bg-blue-500/20' :
                        activity.type === 'update' ? 'bg-orange-500/20' :
                        activity.type === 'notification' ? 'bg-purple-500/20' :
                        'bg-slate-700/30'
                      }`}>
                        {activity.type === 'shortlist' && <UserCheck className="h-4 w-4 text-green-400" />}
                        {activity.type === 'approval' && <CheckCircle className="h-4 w-4 text-blue-400" />}
                        {activity.type === 'update' && <AlertTriangle className="h-4 w-4 text-orange-400" />}
                        {activity.type === 'notification' && <Bell className="h-4 w-4 text-purple-400" />}
                        {activity.type === 'event' && <Calendar className="h-4 w-4 text-slate-400" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-300 text-sm leading-relaxed">{activity.action}</p>
                        <p className="text-slate-400 text-xs mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-4 px-4 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-400 rounded-lg hover:bg-slate-700/50 transition-all duration-300 text-sm font-medium">
                  View All Activities
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HODDashboard;