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
  Calendar,
  Plus,
  Eye,
  FileText,
  Search,
  MessageSquare,
  Video,
  MapPin
} from 'lucide-react';

const HODDashboard = () => {
  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', path: '/hod' },
    { icon: Plus, label: 'Post New Job', path: '/hod/post-job' },
    { icon: Briefcase, label: 'My Job Posts', path: '/hod/jobs', badge: '8' },
    { icon: Users, label: 'Candidate Pool', path: '/hod/candidates' },
    { icon: UserCheck, label: 'Application Review', path: '/hod/review', badge: '23' },
    { icon: MessageSquare, label: 'Interviews', path: '/hod/interviews', badge: '12' },
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
      title: 'Pending Reviews',
      value: '23',
      icon: Clock,
      change: { value: '+12', type: 'increase' as const },
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Scheduled Interviews',
      value: '12',
      icon: Calendar,
      change: { value: '+8', type: 'increase' as const },
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Placement Rate',
      value: '92.3%',
      icon: Star,
      change: { value: '+2.1%', type: 'increase' as const },
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const myJobPosts = [
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
      status: 'active',
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
      status: 'active',
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
      status: 'active',
      logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop'
    }
  ];

  const candidatePool = [
    {
      name: 'Arjun Patel',
      rollNo: 'CS21B1023',
      cgpa: 9.2,
      skills: ['React', 'Node.js', 'Python'],
      projects: 8,
      applications: 12,
      offers: 3,
      status: 'shortlisted',
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
      status: 'under_review',
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
      status: 'shortlisted',
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
      status: 'under_review',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face'
    }
  ];

  const applicationReviews = [
    {
      student: 'Vikram Singh',
      position: 'Microsoft SDE',
      cgpa: 8.7,
      skills: ['Java', 'Spring Boot', 'MySQL'],
      resume: 'Vikram_Singh_Resume.pdf',
      status: 'pending',
      priority: 'high',
      submittedAt: '2 hours ago'
    },
    {
      student: 'Neha Gupta',
      position: 'Amazon Data Scientist',
      cgpa: 8.9,
      skills: ['Python', 'ML', 'AWS'],
      resume: 'Neha_Gupta_Resume.pdf',
      status: 'pending',
      priority: 'medium',
      submittedAt: '4 hours ago'
    },
    {
      student: 'Aditya Verma',
      position: 'Google PM Intern',
      cgpa: 8.5,
      skills: ['Product Strategy', 'Analytics'],
      resume: 'Aditya_Verma_Resume.pdf',
      status: 'pending',
      priority: 'high',
      submittedAt: '6 hours ago'
    }
  ];

  const scheduledInterviews = [
    {
      student: 'Arjun Patel',
      company: 'Microsoft',
      position: 'Software Engineer',
      date: '2024-01-20',
      time: '10:00 AM',
      type: 'Technical',
      mode: 'Online',
      interviewer: 'Ritu Verma (HOD)',
      status: 'confirmed'
    },
    {
      student: 'Priya Sharma',
      company: 'Amazon',
      position: 'Data Scientist',
      date: '2024-01-21',
      time: '2:00 PM',
      type: 'Technical + HR',
      mode: 'On-campus',
      interviewer: 'Dr. Rajesh Kumar',
      status: 'confirmed'
    },
    {
      student: 'Rahul Kumar',
      company: 'Google',
      position: 'Product Manager',
      date: '2024-01-22',
      time: '11:00 AM',
      type: 'Case Study',
      mode: 'Online',
      interviewer: 'Priya Sharma (Alumni)',
      status: 'pending'
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
      action: 'Posted new job: Microsoft SDE position',
      time: '30 minutes ago',
      type: 'job_post'
    },
    {
      action: 'Shortlisted 15 students for Microsoft SDE role',
      time: '1 hour ago',
      type: 'shortlist'
    },
    {
      action: 'Scheduled interview for Arjun Patel (Microsoft)',
      time: '2 hours ago',
      type: 'interview'
    },
    {
      action: 'Reviewed 23 applications for Amazon position',
      time: '3 hours ago',
      type: 'review'
    },
    {
      action: 'Updated eligibility criteria for Google PM role',
      time: '5 hours ago',
      type: 'update'
    }
  ];

  return (
    <div className="flex min-h-screen bg-slate-950">
      <DashboardSidebar
        items={sidebarItems}
        userRole="hod"
        userName="Dr. Ritu Verma"
        userAvatar="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
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
            <h1 className="mb-2 text-3xl font-bold text-white">Computer Science Department</h1>
            <p className="text-slate-400">Manage placements and student shortlisting for your department</p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
            {statsCards.map((card, index) => (
              <DashboardCard key={card.title} {...card} delay={index * 0.1} />
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left Column - Job Posts & Applications */}
            <div className="lg:col-span-2">
              {/* Post New Job Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 mb-8 bg-gradient-to-r rounded-2xl border from-blue-500/20 to-purple-500/20 border-blue-500/30"
              >
                <div className="text-center">
                  <Plus className="mx-auto mb-4 w-16 h-16 text-blue-400" />
                  <h3 className="mb-2 text-2xl font-bold text-white">Post New Job Opportunity</h3>
                  <p className="mb-6 text-slate-300">Create and publish new job positions for your department students</p>
                  <button className="px-8 py-3 font-medium text-white bg-blue-500 rounded-lg transition-all duration-300 transform hover:bg-blue-600 hover:scale-105">
                    + Post New Job
                  </button>
                </div>
              </motion.div>

              {/* My Job Posts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-6 mb-8 rounded-2xl border backdrop-blur-xl bg-slate-900/50 border-slate-700/50"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-white">My Job Posts</h3>
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
                  </div>
                </div>

                <div className="space-y-6">
                  {myJobPosts.map((job) => (
                    <div key={job.id} className="p-5 rounded-xl border bg-slate-800/30 border-slate-700/30">
                      <div className="flex items-start space-x-4">
                        <img
                          src={job.logo}
                          alt={job.company}
                          className="object-cover w-14 h-14 rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <div className="flex items-center mb-2 space-x-3">
                                <h4 className="text-lg font-semibold text-white">{job.position}</h4>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${job.priority === 'urgent' ? 'bg-red-500/20 text-red-400' :
                                  job.priority === 'high' ? 'bg-orange-500/20 text-orange-400' :
                                    'bg-blue-500/20 text-blue-400'
                                  }`}>
                                  {job.priority}
                                </span>
                                <span className="px-3 py-1 text-xs font-medium text-green-400 rounded-full bg-green-500/20">
                                  {job.status}
                                </span>
                              </div>
                              <p className="mb-1 text-slate-400">{job.company} • {job.type}</p>
                              <p className="font-semibold text-green-400">{job.ctc}</p>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center mb-1 space-x-1">
                                <Calendar className="w-4 h-4 text-slate-400" />
                                <span className="text-sm text-slate-400">Due: {new Date(job.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                              </div>
                              <p className="text-sm font-medium text-orange-400">{job.toReview} students to review</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                            <div className="p-3 rounded-lg bg-slate-700/30">
                              <p className="text-slate-400">Min CGPA</p>
                              <p className="font-medium text-white">{job.eligibility.cgpa}</p>
                            </div>
                            <div className="p-3 rounded-lg bg-slate-700/30">
                              <p className="text-slate-400">Branches</p>
                              <p className="font-medium text-white">{job.eligibility.branches.join(', ')}</p>
                            </div>
                            <div className="p-3 rounded-lg bg-slate-700/30">
                              <p className="text-slate-400">Applications</p>
                              <p className="font-medium text-white">{job.applications}</p>
                            </div>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${job.type === 'Internship' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'
                              }`}>
                              {job.type}
                            </span>

                            <div className="flex space-x-2">
                              <button className="px-4 py-2 text-sm font-medium text-blue-400 rounded-lg border transition-all duration-300 bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30">
                                <Eye className="inline mr-2 w-4 h-4" />
                                View Details
                              </button>
                              <button className="px-4 py-2 text-sm font-medium text-green-400 rounded-lg border transition-all duration-300 bg-green-500/20 border-green-500/30 hover:bg-green-500/30">
                                Review Students
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Candidate Pool */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="p-6 mb-8 rounded-2xl border backdrop-blur-xl bg-slate-900/50 border-slate-700/50"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-white">Candidate Pool</h3>
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 w-4 h-4 transform -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search candidates..."
                        className="py-2 pr-4 pl-10 text-sm text-white rounded-lg border bg-slate-800/50 border-slate-700/50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      />
                    </div>
                    <button className="text-sm font-medium text-blue-400 transition-colors hover:text-blue-300">
                      View All Candidates
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {candidatePool.map((student, index) => (
                    <div key={student.rollNo} className="p-4 rounded-xl bg-slate-800/30">
                      <div className="flex items-center space-x-4">
                        <img
                          src={student.avatar}
                          alt={student.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <div>
                              <h4 className="font-semibold text-white">{student.name}</h4>
                              <p className="text-sm text-slate-400">{student.rollNo} • CGPA: {student.cgpa}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${student.status === 'shortlisted' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                              }`}>
                              {student.status.replace('_', ' ')}
                            </span>
                          </div>
                          <div className="flex items-center mb-3 space-x-4 text-sm">
                            <div className="text-center">
                              <p className="text-slate-400">Projects</p>
                              <p className="font-medium text-white">{student.projects}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-slate-400">Applied</p>
                              <p className="font-medium text-white">{student.applications}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-slate-400">Offers</p>
                              <p className="font-medium text-green-400">{student.offers}</p>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {student.skills.map((skill) => (
                              <span key={skill} className="px-2 py-1 text-xs font-medium text-blue-400 rounded-lg bg-blue-500/20">
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

              {/* Application Review */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="p-6 rounded-2xl border backdrop-blur-xl bg-slate-900/50 border-slate-700/50"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-white">Application Review</h3>
                  <button className="text-sm font-medium text-blue-400 transition-colors hover:text-blue-300">
                    View All Applications
                  </button>
                </div>

                <div className="space-y-4">
                  {applicationReviews.map((application, index) => (
                    <div key={index} className="p-4 rounded-xl border bg-slate-800/30 border-slate-700/30">
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <h4 className="font-medium text-white">{application.student}</h4>
                          <p className="text-sm text-slate-400">{application.position}</p>
                          <p className="text-sm text-slate-400">CGPA: {application.cgpa}</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${application.priority === 'high' ? 'bg-red-500/20 text-red-400' : 'bg-orange-500/20 text-orange-400'
                            }`}>
                            {application.priority} priority
                          </span>
                          <p className="mt-1 text-xs text-slate-400">{application.submittedAt}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {application.skills.map((skill) => (
                          <span key={skill} className="px-2 py-1 text-xs font-medium text-blue-400 rounded-lg bg-blue-500/20">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4 text-slate-400" />
                          <span className="text-sm text-slate-300">{application.resume}</span>
                        </div>
                        <div className="flex space-x-2">
                          <button className="px-4 py-2 text-sm font-medium text-green-400 rounded-lg border transition-all duration-300 bg-green-500/20 border-green-500/30 hover:bg-green-500/30">
                            Approve
                          </button>
                          <button className="px-4 py-2 text-sm font-medium text-red-400 rounded-lg border transition-all duration-300 bg-red-500/20 border-red-500/30 hover:bg-red-500/30">
                            Reject
                          </button>
                          <button className="px-4 py-2 text-sm font-medium text-blue-400 rounded-lg border transition-all duration-300 bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30">
                            Review
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <div>
              {/* Scheduled Interviews */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="p-6 mb-6 rounded-2xl border backdrop-blur-xl bg-slate-900/50 border-slate-700/50"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-white">Scheduled Interviews</h3>
                  <button className="text-sm font-medium text-blue-400 transition-colors hover:text-blue-300">
                    View All
                  </button>
                </div>

                <div className="space-y-4">
                  {scheduledInterviews.map((interview, index) => (
                    <div key={index} className="p-4 rounded-xl border bg-slate-800/30 border-slate-700/30">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-medium text-white">{interview.student}</h4>
                          <p className="text-sm text-slate-400">{interview.position}</p>
                          <p className="text-sm text-slate-400">{interview.company}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${interview.status === 'confirmed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                          {interview.status}
                        </span>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-slate-400" />
                          <span className="text-slate-300">{new Date(interview.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-slate-400" />
                          <span className="text-slate-300">{interview.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Video className="w-4 h-4 text-slate-400" />
                          <span className="text-slate-300">{interview.type} • {interview.mode}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <UserCheck className="w-4 h-4 text-slate-400" />
                          <span className="text-slate-300">{interview.interviewer}</span>
                        </div>
                      </div>

                      <div className="flex mt-3 space-x-2">
                        <button className="flex-1 px-3 py-2 text-sm font-medium text-blue-400 rounded-lg border transition-all duration-300 bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30">
                          Reschedule
                        </button>
                        <button className="flex-1 px-3 py-2 text-sm font-medium text-green-400 rounded-lg border transition-all duration-300 bg-green-500/20 border-green-500/30 hover:bg-green-500/30">
                          Join
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Department Analytics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="p-6 mb-6 rounded-2xl border backdrop-blur-xl bg-slate-900/50 border-slate-700/50"
              >
                <h3 className="mb-4 text-lg font-semibold text-white">Department Overview</h3>

                <div className="space-y-4">
                  {departmentAnalytics.map((item, index) => (
                    <div key={item.metric} className="flex justify-between items-center">
                      <span className="text-sm text-slate-400">{item.metric}</span>
                      <div className="text-right">
                        <span className="font-medium text-white">{item.value}</span>
                        <p className="text-xs text-green-400">{item.trend}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="px-4 py-2 mt-4 w-full text-sm font-medium text-blue-400 rounded-lg border transition-all duration-300 bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30">
                  View Detailed Analytics
                </button>
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
                      <div className={`p-2 rounded-lg ${activity.type === 'job_post' ? 'bg-blue-500/20' :
                        activity.type === 'shortlist' ? 'bg-green-500/20' :
                          activity.type === 'interview' ? 'bg-purple-500/20' :
                            activity.type === 'review' ? 'bg-orange-500/20' :
                              'bg-slate-700/30'
                        }`}>
                        {activity.type === 'job_post' && <Plus className="w-4 h-4 text-blue-400" />}
                        {activity.type === 'shortlist' && <UserCheck className="w-4 h-4 text-green-400" />}
                        {activity.type === 'interview' && <Calendar className="w-4 h-4 text-purple-400" />}
                        {activity.type === 'review' && <CheckCircle className="w-4 h-4 text-orange-400" />}
                        {activity.type === 'update' && <AlertTriangle className="w-4 h-4 text-slate-400" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm leading-relaxed text-slate-300">{activity.action}</p>
                        <p className="mt-1 text-xs text-slate-400">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="px-4 py-2 mt-4 w-full text-sm font-medium rounded-lg border transition-all duration-300 bg-slate-800/50 border-slate-700/50 text-slate-400 hover:bg-slate-700/50">
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