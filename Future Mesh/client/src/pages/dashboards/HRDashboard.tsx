import React from 'react';
import { motion } from 'framer-motion';
import DashboardSidebar from '../../components/DashboardSidebar';
import DashboardCard from '../../components/DashboardCard';
import {
  BarChart3,
  Briefcase,
  Users,
  Eye,
  Bell,
  User,
  TrendingUp,
  Clock,
  CheckCircle,
  Star,
  Calendar,
  MapPin,
  Filter,
  Search
} from 'lucide-react';

const HRDashboard = () => {
  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', path: '/hr' },
    { icon: Briefcase, label: 'My Job Posts', path: '/hr/jobs' },
    { icon: Users, label: 'Candidate Pool', path: '/hr/candidates', badge: '156' },
    { icon: Eye, label: 'Application Review', path: '/hr/applications', badge: '43' },
    { icon: Calendar, label: 'Interviews', path: '/hr/interviews' },
    { icon: Bell, label: 'Notifications', path: '/hr/notifications', badge: '8' },
    { icon: User, label: 'Profile', path: '/hr/profile' }
  ];

  const statsCards = [
    {
      title: 'Active Job Posts',
      value: '12',
      icon: Briefcase,
      change: { value: '+3', type: 'increase' as const },
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Applications Received',
      value: '1,247',
      icon: Users,
      change: { value: '+284', type: 'increase' as const },
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Interviews Scheduled',
      value: '43',
      icon: Calendar,
      change: { value: '+12', type: 'increase' as const },
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Hiring Success Rate',
      value: '78.2%',
      icon: TrendingUp,
      change: { value: '+5.3%', type: 'increase' as const },
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const jobPosts = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      department: 'Computer Science',
      type: 'Full-time',
      location: 'Seattle, WA',
      salary: '₹120,000 - ₹150,000',
      applications: 89,
      shortlisted: 23,
      interviewed: 8,
      status: 'active',
      deadline: '2024-01-25',
      postedDate: '2024-01-10'
    },
    {
      id: 2,
      title: 'Product Manager Intern',
      department: 'MBA',
      type: 'Internship',
      location: 'Giet University',
      salary: '₹8,000/month',
      applications: 156,
      shortlisted: 45,
      interviewed: 15,
      status: 'active',
      deadline: '2024-01-22',
      postedDate: '2024-01-08'
    },
    {
      id: 3,
      title: 'Data Scientist',
      department: 'Data Science',
      type: 'Full-time',
      location: 'Remote',
      salary: '₹100,000 - ₹130,000',
      applications: 67,
      shortlisted: 18,
      interviewed: 5,
      status: 'review',
      deadline: '2024-01-20',
      postedDate: '2024-01-05'
    }
  ];

  const topCandidates = [
    {
      name: 'Sarah Chen',
      university: 'GIET University',
      degree: 'MS Computer Science',
      cgpa: 9.1,
      skills: ['React', 'Node.js', 'Python', 'AWS'],
      experience: '2 years',
      position: 'Senior Software Engineer',
      status: 'interview_scheduled',
      interviewDate: '2024-01-20',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face'
    },
    {
      name: 'Michael Rodriguez',
      university: 'MIT',
      degree: 'BS Electrical Engineering',
      cgpa: 8.9,
      skills: ['Java', 'Spring Boot', 'Docker', 'Kubernetes'],
      experience: '1.5 years',
      position: 'Senior Software Engineer',
      status: 'shortlisted',
      interviewDate: null,
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face'
    },
    {
      name: 'Emily Johnson',
      university: 'Harvard Business School',
      degree: 'MBA',
      cgpa: 9.3,
      skills: ['Product Strategy', 'Data Analytics', 'Agile', 'SQL'],
      experience: '3 years',
      position: 'Product Manager Intern',
      status: 'offer_extended',
      interviewDate: null,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face'
    },
    {
      name: 'David Chen',
      university: 'UC Berkeley',
      degree: 'PhD Data Science',
      cgpa: 9.0,
      skills: ['Machine Learning', 'Python', 'R', 'TensorFlow'],
      experience: '2.5 years',
      position: 'Data Scientist',
      status: 'under_review',
      interviewDate: null,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face'
    }
  ];

  const upcomingInterviews = [
    {
      candidate: 'Sarah Chen',
      position: 'Senior Software Engineer',
      date: '2024-01-20',
      time: '2:00 PM',
      type: 'Technical Round',
      interviewer: 'Alex Thompson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=face'
    },
    {
      candidate: 'James Wilson',
      position: 'Product Manager Intern',
      date: '2024-01-21',
      time: '10:00 AM',
      type: 'HR Round',
      interviewer: 'You',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=face'
    },
    {
      candidate: 'Lisa Zhang',
      position: 'Data Scientist',
      date: '2024-01-21',
      time: '3:30 PM',
      type: 'Final Round',
      interviewer: 'Maria Garcia',
      avatar: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=face'
    }
  ];

  const hiringMetrics = [
    { label: 'Time to Hire', value: '18 days', trend: '-3 days' },
    { label: 'Cost per Hire', value: '₹3,200', trend: '-₹400' },
    { label: 'Offer Acceptance Rate', value: '85%', trend: '+7%' },
    { label: 'Quality of Hire Score', value: '4.2/5', trend: '+0.3' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex">
      <DashboardSidebar
        items={sidebarItems}
        userRole="hr"
        userName="Jessica Miller"
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
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">HR Dashboard - Microsoft</h1>
                <p className="text-slate-400">Manage your hiring pipeline and track recruitment metrics</p>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                Post New Job
              </button>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCards.map((card, index) => (
              <DashboardCard key={card.title} {...card} delay={index * 0.1} />
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Job Posts Performance */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 mb-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Job Posts Performance</h3>
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
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="text-white font-semibold text-lg">{job.title}</h4>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ₹{job.status === 'active' ? 'bg-green-500/20 text-green-400' :
                              job.status === 'review' ? 'bg-orange-500/20 text-orange-400' :
                                'bg-slate-500/20 text-slate-400'
                              }`}>
                              {job.status}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 text-slate-400 text-sm mb-2">
                            <span>{job.type}</span>
                            <span>•</span>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3" />
                              <span>{job.location}</span>
                            </div>
                            <span>•</span>
                            <span className="text-green-400 font-medium">{job.salary}</span>
                          </div>
                          <p className="text-slate-500 text-sm">Posted: {new Date(job.postedDate).toLocaleDateString()} • Deadline: {new Date(job.deadline).toLocaleDateString()}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-4 mb-4">
                        <div className="bg-slate-700/30 p-3 rounded-lg text-center">
                          <p className="text-2xl font-bold text-white">{job.applications}</p>
                          <p className="text-slate-400 text-xs">Applications</p>
                        </div>
                        <div className="bg-slate-700/30 p-3 rounded-lg text-center">
                          <p className="text-2xl font-bold text-blue-400">{job.shortlisted}</p>
                          <p className="text-slate-400 text-xs">Shortlisted</p>
                        </div>
                        <div className="bg-slate-700/30 p-3 rounded-lg text-center">
                          <p className="text-2xl font-bold text-purple-400">{job.interviewed}</p>
                          <p className="text-slate-400 text-xs">Interviewed</p>
                        </div>
                        <div className="bg-slate-700/30 p-3 rounded-lg text-center">
                          <p className="text-2xl font-bold text-green-400">{Math.floor(job.interviewed * 0.6)}</p>
                          <p className="text-slate-400 text-xs">Offers</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">
                          Target: {job.department} Department
                        </span>
                        <div className="flex space-x-2">
                          <button className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300 text-sm font-medium">
                            View Applications
                          </button>
                          <button className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-all duration-300 text-sm font-medium">
                            Schedule Interviews
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Top Candidates */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Top Candidates</h3>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search candidates..."
                        className="pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-300 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>
                    <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                      View All
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {topCandidates.map((candidate, index) => (
                    <div key={index} className="p-4 bg-slate-800/30 rounded-xl">
                      <div className="flex items-start space-x-4">
                        <img
                          src={candidate.avatar}
                          alt={candidate.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="text-white font-semibold">{candidate.name}</h4>
                              <p className="text-slate-400 text-sm">{candidate.degree} • {candidate.university}</p>
                              <p className="text-slate-500 text-xs">Applying for: {candidate.position}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="text-right">
                                <p className="text-slate-400 text-xs">CGPA</p>
                                <p className="text-white font-medium">{candidate.cgpa}</p>
                              </div>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ₹{candidate.status === 'interview_scheduled' ? 'bg-blue-500/20 text-blue-400' :
                                candidate.status === 'shortlisted' ? 'bg-green-500/20 text-green-400' :
                                  candidate.status === 'offer_extended' ? 'bg-purple-500/20 text-purple-400' :
                                    'bg-orange-500/20 text-orange-400'
                                }`}>
                                {candidate.status.replace('_', ' ')}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-3">
                            {candidate.skills.slice(0, 4).map((skill) => (
                              <span key={skill} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-xs">
                                {skill}
                              </span>
                            ))}
                            {candidate.skills.length > 4 && (
                              <span className="px-2 py-1 bg-slate-700/50 text-slate-400 rounded-lg text-xs">
                                +{candidate.skills.length - 4} more
                              </span>
                            )}
                          </div>

                          {candidate.interviewDate && (
                            <div className="flex items-center space-x-2 mb-2">
                              <Calendar className="h-4 w-4 text-blue-400" />
                              <span className="text-blue-400 text-sm">
                                Interview: {new Date(candidate.interviewDate).toLocaleDateString()}
                              </span>
                            </div>
                          )}

                          <div className="flex items-center justify-between">
                            <span className="text-slate-400 text-sm">Experience: {candidate.experience}</span>
                            <div className="flex space-x-2">
                              <button className="px-3 py-1 bg-green-500/20 border border-green-500/30 text-green-400 rounded-lg hover:bg-green-500/30 transition-all duration-300 text-sm">
                                Schedule Interview
                              </button>
                              <button className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300 text-sm">
                                View Profile
                              </button>
                            </div>
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
              {/* Upcoming Interviews */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 mb-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Upcoming Interviews</h3>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                    View Calendar
                  </button>
                </div>

                <div className="space-y-4">
                  {upcomingInterviews.map((interview, index) => (
                    <div key={index} className="p-4 bg-slate-800/30 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <img
                          src={interview.avatar}
                          alt={interview.candidate}
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1">
                          <h4 className="text-white font-medium text-sm">{interview.candidate}</h4>
                          <p className="text-slate-400 text-xs">{interview.position}</p>
                          <div className="flex items-center space-x-4 mt-2 text-xs">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3 text-blue-400" />
                              <span className="text-blue-400">{new Date(interview.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3 text-slate-400" />
                              <span className="text-slate-400">{interview.time}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-400 rounded-lg">
                              {interview.type}
                            </span>
                            <span className="text-slate-400 text-xs">with {interview.interviewer}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Hiring Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Hiring Metrics</h3>

                <div className="space-y-4">
                  {hiringMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">{metric.label}</span>
                      <div className="text-right">
                        <span className="text-white font-medium">{metric.value}</span>
                        <p className="text-green-400 text-xs">{metric.trend}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="h-4 w-4 text-green-400" />
                    <span className="text-green-400 font-medium text-sm">Hiring Goal Progress</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">Q1 2024 Target</span>
                    <span className="text-white font-medium">78 / 100 hires</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                  <p className="text-green-400 text-xs mt-2">22 more hires to reach target</p>
                </div>

                <button className="w-full mt-4 px-4 py-2 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300 text-sm font-medium">
                  View Detailed Reports
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;