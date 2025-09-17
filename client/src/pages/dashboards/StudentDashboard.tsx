import React from 'react';
import { motion } from 'framer-motion';
import DashboardSidebar from '../../components/DashboardSidebar';
import DashboardCard from '../../components/DashboardCard';
import {
  BarChart3,
  Briefcase,
  Users,
  MessageSquare,
  Bell,
  User,
  Target,
  TrendingUp,
  BookOpen,
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
  Calendar
} from 'lucide-react';

const StudentDashboard = () => {
  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', path: '/student' },
    { icon: Target, label: 'Job Recommendations', path: '/student/jobs', badge: '24' },
    { icon: Briefcase, label: 'My Applications', path: '/student/applications' },
    { icon: MessageSquare, label: 'Mentorship Chat', path: '/student/mentorship', badge: '3' },
    { icon: BookOpen, label: 'Profile & Resume', path: '/student/profile' },
    { icon: Bell, label: 'Notifications', path: '/student/notifications', badge: '5' },
    { icon: User, label: 'Settings', path: '/student/settings' }
  ];

  const statsCards = [
    {
      title: 'Eligible Jobs',
      value: '47',
      icon: Target,
      change: { value: '+12', type: 'increase' as const },
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Applications Sent',
      value: '23',
      icon: Briefcase,
      change: { value: '+5', type: 'increase' as const },
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Interview Calls',
      value: '8',
      icon: Star,
      change: { value: '+3', type: 'increase' as const },
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Response Rate',
      value: '34.8%',
      icon: TrendingUp,
      change: { value: '+8%', type: 'increase' as const },
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const recentJobs = [
    {
      company: 'Google',
      position: 'Software Engineer Intern',
      logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      location: 'Delhi, India',
      type: 'Internship',
      match: '95%',
      deadline: '5 days left'
    },
    {
      company: 'Microsoft',
      position: 'Product Manager Trainee',
      logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      location: 'Delhi, India',
      type: 'Full-time',
      match: '92%',
      deadline: '1 week left'
    },
    {
      company: 'Amazon',
      position: 'Data Science Intern',
      logo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      location: 'Delhi, India',
      type: 'Internship',
      match: '88%',
      deadline: '3 days left'
    }
  ];

  const applicationStatus = [
    {
      company: 'Meta',
      position: 'Frontend Developer',
      status: 'Interview Scheduled',
      date: '2025-10-15',
      type: 'interview',
      nextStep: 'Technical Interview on Dec 25'
    },
    {
      company: 'Apple',
      position: 'iOS Developer',
      status: 'Application Under Review',
      date: '2025-11-10',
      type: 'review',
      nextStep: 'Awaiting response'
    },
    {
      company: 'Netflix',
      position: 'Data Analyst',
      status: 'Application Submitted',
      date: '2025-12-12',
      type: 'submitted',
      nextStep: 'Waiting for screening'
    },
    {
      company: 'Tesla',
      position: 'Software Engineer',
      status: 'Offer Received',
      date: '2025-12-05',
      type: 'offer',
      nextStep: 'Decision deadline: Jan 25'
    }
  ];

  const mentorActivity = [
    {
      name: 'Diptesh',
      company: 'Google',
      role: 'Senior SWE',
      message: 'Great progress on your coding skills! Keep practicing those algorithms.',
      time: '2 hours ago',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=face'
    },
    {
      name: 'Soumya',
      company: 'Meta',
      role: 'Product Manager',
      message: 'I\'ve reviewed your portfolio. Let\'s schedule a call to discuss PM roles.',
      time: '1 day ago',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=face'
    },
    {
      name: 'Rajat',
      company: 'Amazon',
      role: 'Data Scientist',
      message: 'Shared some resources for your upcoming data science interviews.',
      time: '2 days ago',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=face'
    }
  ];

  return (
    <div className="flex min-h-screen bg-slate-950">
      <DashboardSidebar
        items={sidebarItems}
        userRole="student"
        userName="Abhisek Panda"
        userAvatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
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
            <h1 className="mb-2 text-3xl font-bold text-white">Welcome back, Abhisek 👋</h1>
            <p className="text-slate-400">Here's what's happening with your job search today</p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
            {statsCards.map((card, index) => (
              <DashboardCard key={card.title} {...card} delay={index * 0.1} />
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Recommended Jobs */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-6 mb-8 border bg-slate-900/50 backdrop-blur-xl border-slate-700/50 rounded-2xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Recommended Jobs</h3>
                  <button className="text-sm font-medium text-blue-400 transition-colors hover:text-blue-300">
                    View All Jobs
                  </button>
                </div>

                <div className="space-y-4">
                  {recentJobs.map((job, index) => (
                    <div key={index} className="p-4 transition-all duration-300 border bg-slate-800/30 rounded-xl border-slate-700/30 hover:border-slate-600/50">
                      <div className="flex items-start space-x-4">
                        <img
                          src={job.logo}
                          alt={job.company}
                          className="object-cover w-12 h-12 rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-white">{job.position}</h4>
                              <p className="text-slate-400">{job.company} • {job.location}</p>
                            </div>
                            <div className="text-right">
                              <span className="inline-block px-3 py-1 mb-2 text-sm font-medium text-green-400 rounded-full bg-green-500/20">
                                {job.match} match
                              </span>
                              <p className="text-sm text-slate-400">{job.deadline}</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${job.type === 'Internship'
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'bg-purple-500/20 text-purple-400'
                              }`}>
                              {job.type}
                            </span>
                            <button className="px-4 py-2 text-sm font-medium text-blue-400 transition-all duration-300 border rounded-lg bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30">
                              Apply Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Application Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="p-6 border bg-slate-900/50 backdrop-blur-xl border-slate-700/50 rounded-2xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Application Status</h3>
                  <button className="text-sm font-medium text-blue-400 transition-colors hover:text-blue-300">
                    View All Applications
                  </button>
                </div>

                <div className="space-y-4">
                  {applicationStatus.map((application, index) => (
                    <div key={index} className="p-4 bg-slate-800/30 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-medium text-white">{application.company}</h4>
                          <p className="text-sm text-slate-400">{application.position}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {application.type === 'interview' && <Calendar className="w-4 h-4 text-green-400" />}
                          {application.type === 'review' && <Clock className="w-4 h-4 text-yellow-400" />}
                          {application.type === 'submitted' && <AlertCircle className="w-4 h-4 text-blue-400" />}
                          {application.type === 'offer' && <CheckCircle className="w-4 h-4 text-green-400" />}
                          <span className={`text-sm font-medium ${application.type === 'interview' ? 'text-green-400' :
                            application.type === 'review' ? 'text-yellow-400' :
                              application.type === 'submitted' ? 'text-blue-400' :
                                'text-green-400'
                            }`}>
                            {application.status}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-slate-400">{application.nextStep}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Profile Completion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="p-6 mb-6 border bg-slate-900/50 backdrop-blur-xl border-slate-700/50 rounded-2xl"
              >
                <h3 className="mb-4 text-lg font-semibold text-white">Profile Completion</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-400">Overall Progress</span>
                      <span className="font-medium text-blue-400">78%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-700">
                      <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" style={{ width: '78%' }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-slate-400">Basic Information</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-slate-400">Resume Uploaded</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-slate-400">Skills Assessment</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-slate-400">Portfolio Projects</span>
                    </div>
                  </div>

                  <button className="w-full px-4 py-2 text-sm font-medium text-blue-400 transition-all duration-300 border rounded-lg bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30">
                    Complete Profile
                  </button>
                </div>
              </motion.div>

              {/* Mentor Activity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="p-6 border bg-slate-900/50 backdrop-blur-xl border-slate-700/50 rounded-2xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Recent Mentor Activity</h3>
                  <button className="text-sm font-medium text-blue-400 transition-colors hover:text-blue-300">
                    View Chats
                  </button>
                </div>

                <div className="space-y-4">
                  {mentorActivity.map((mentor, index) => (
                    <div key={index} className="flex space-x-3">
                      <img
                        src={mentor.avatar}
                        alt={mentor.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center mb-1 space-x-2">
                          <span className="text-sm font-medium text-white">{mentor.name}</span>
                          <span className="text-xs text-slate-400">•</span>
                          <span className="text-xs text-slate-400">{mentor.time}</span>
                        </div>
                        <p className="mb-1 text-xs text-slate-400">{mentor.role} at {mentor.company}</p>
                        <p className="text-sm text-slate-300">{mentor.message}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-purple-400 transition-all duration-300 border rounded-lg bg-purple-500/20 border-purple-500/30 hover:bg-purple-500/30">
                  Find New Mentor
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;