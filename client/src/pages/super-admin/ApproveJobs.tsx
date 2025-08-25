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
  Search,
  Filter,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  Building2,
  MapPin,
  Calendar,
  DollarSign,
  Users,
  Eye,
  Edit
} from 'lucide-react';

const ApproveJobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', path: '/super-admin' },
    { icon: Shield, label: 'Manage Admins', path: '/super-admin/admins', badge: '5' },
    { icon: Briefcase, label: 'Approve Jobs', path: '/super-admin/jobs', badge: '12' },
    { icon: FileText, label: 'Global Reports', path: '/super-admin/reports' },
    { icon: TrendingUp, label: 'Analytics', path: '/super-admin/analytics' },
    { icon: Bell, label: 'Notifications', path: '/super-admin/notifications', badge: '8' },
    { icon: Settings, label: 'Settings', path: '/super-admin/settings' }
  ];

  const jobPosts = [
    {
      id: 1,
      company: 'Google Inc.',
      position: 'Software Engineer Intern',
      logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      location: 'Delhi, India',
      type: 'Internship',
      salary: '₹8,000/month',
      department: 'Computer Science',
      university: 'GIET',
      submittedBy: 'Dr. Premansu Sekhar Rath',
      submittedAt: '2025-01-15T10:30:00Z',
      deadline: '2025-11-25T23:59:59Z',
      status: 'pending',
      priority: 'high',
      expectedApplications: 100,
      description: 'Join Google as a Software Engineer Intern and work on cutting-edge technologies that impact billions of users worldwide. You will collaborate with experienced engineers on real projects.',
      requirements: ['Python', 'Java', 'Data Structures', 'Algorithms', 'System Design'],
      eligibility: {
        minGPA: 8.5,
        graduationYear: [2026, 2027],
        branches: ['Computer Science', 'Software Engineering']
      },
      benefits: ['Competitive salary', 'Health insurance', 'Learning opportunities', 'Mentorship program']
    }
    // {
    //   id: 2,
    //   company: 'Microsoft Corp.',
    //   position: 'Product Manager Trainee',
    //   logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    //   location: 'Seattle, WA',
    //   type: 'Full-time',
    //   salary: '₹95,000 - ₹120,000',
    //   department: 'MBA',
    //   university: 'GIET University',
    //   submittedBy: 'Michael Chen',
    //   submittedAt: '2024-01-14T16:45:00Z',
    //   deadline: '2024-01-28T23:59:59Z',
    //   status: 'approved',
    //   priority: 'medium',
    //   expectedApplications: 800,
    //   description: 'Drive product strategy and execution for Microsoft\'s cloud services, working with cross-functional teams to deliver innovative solutions.',
    //   requirements: ['Product Strategy', 'Analytics', 'SQL', 'Communication', 'Leadership'],
    //   eligibility: {
    //     minGPA: 3.7,
    //     graduationYear: [2024],
    //     branches: ['MBA', 'Business Administration']
    //   },
    //   benefits: ['Stock options', 'Health benefits', 'Professional development', 'Flexible work']
    // },
    // {
    //   id: 3,
    //   company: 'Amazon Web Services',
    //   position: 'Data Science Intern',
    //   logo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    //   location: 'Austin, TX',
    //   type: 'Internship',
    //   salary: '₹7,500/month',
    //   department: 'Data Science',
    //   university: 'UC Berkeley',
    //   submittedBy: 'David Rodriguez',
    //   submittedAt: '2024-01-13T09:20:00Z',
    //   deadline: '2024-01-22T23:59:59Z',
    //   status: 'pending',
    //   priority: 'urgent',
    //   expectedApplications: 1500,
    //   description: 'Apply machine learning and statistical analysis to solve complex business problems at Amazon scale. Work with petabytes of data.',
    //   requirements: ['Python', 'Machine Learning', 'Statistics', 'SQL', 'AWS'],
    //   eligibility: {
    //     minGPA: 3.6,
    //     graduationYear: [2024, 2025],
    //     branches: ['Data Science', 'Statistics', 'Computer Science']
    //   },
    //   benefits: ['Competitive compensation', 'AWS credits', 'Mentorship', 'Career growth']
    // },
    // {
    //   id: 4,
    //   company: 'Meta Platforms',
    //   position: 'Frontend Developer',
    //   logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    //   location: 'Menlo Park, CA',
    //   type: 'Full-time',
    //   salary: '₹110,000 - ₹140,000',
    //   department: 'Computer Science',
    //   university: 'Harvard University',
    //   submittedBy: 'Sarah Wilson',
    //   submittedAt: '2024-01-12T14:15:00Z',
    //   deadline: '2024-01-30T23:59:59Z',
    //   status: 'rejected',
    //   priority: 'low',
    //   expectedApplications: 900,
    //   description: 'Build the next generation of social technology that connects billions of people around the world using React and modern web technologies.',
    //   requirements: ['React', 'JavaScript', 'TypeScript', 'GraphQL', 'CSS'],
    //   eligibility: {
    //     minGPA: 3.4,
    //     graduationYear: [2024],
    //     branches: ['Computer Science', 'Web Development']
    //   },
    //   benefits: ['Stock options', 'Health insurance', 'Free meals', 'Transportation'],
    //   rejectionReason: 'Similar position already approved for this university'
    // },
    // {
    //   id: 5,
    //   company: 'Apple Inc.',
    //   position: 'iOS Developer Intern',
    //   logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    //   location: 'Cupertino, CA',
    //   type: 'Internship',
    //   salary: '₹8,500/month',
    //   department: 'Computer Science',
    //   university: 'Caltech',
    //   submittedBy: 'Emily Johnson',
    //   submittedAt: '2024-01-11T11:30:00Z',
    //   deadline: '2024-01-26T23:59:59Z',
    //   status: 'under_review',
    //   priority: 'high',
    //   expectedApplications: 1100,
    //   description: 'Develop innovative iOS applications that delight millions of users on iPhone and iPad. Work with cutting-edge technologies.',
    //   requirements: ['Swift', 'iOS SDK', 'Xcode', 'UI/UX Design', 'Core Data'],
    //   eligibility: {
    //     minGPA: 3.8,
    //     graduationYear: [2024, 2025],
    //     branches: ['Computer Science', 'Mobile Development']
    //   },
    //   benefits: ['Premium salary', 'Apple products', 'Health benefits', 'Learning stipend']
    // }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'approved':
        return 'bg-green-500/20 text-green-400';
      case 'rejected':
        return 'bg-red-500/20 text-red-400';
      case 'under_review':
        return 'bg-blue-500/20 text-blue-400';
      default:
        return 'bg-slate-500/20 text-slate-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'approved':
        return <CheckCircle className="w-4 h-4" />;
      case 'rejected':
        return <XCircle className="w-4 h-4" />;
      case 'under_review':
        return <Eye className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-500/20 text-red-400';
      case 'high':
        return 'bg-orange-500/20 text-orange-400';
      case 'medium':
        return 'bg-blue-500/20 text-blue-400';
      case 'low':
        return 'bg-slate-500/20 text-slate-400';
      default:
        return 'bg-slate-500/20 text-slate-400';
    }
  };

  const formatTimeAgo = (timestamp: string) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInHours = Math.floor((now.getTime() - time.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `₹{diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `₹{diffInDays}d ago`;
    return time.toLocaleDateString();
  };

  const getDaysUntilDeadline = (deadline: string) => {
    const now = new Date();
    const deadlineDate = new Date(deadline);
    const diffInDays = Math.ceil((deadlineDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return diffInDays;
  };

  const filteredJobs = jobPosts.filter(job => {
    const matchesSearch = job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.university.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || job.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || job.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const handleApprove = (jobId: number) => {
    console.log('Approving job:', jobId);
  };

  const handleReject = (jobId: number) => {
    console.log('Rejecting job:', jobId);
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
            <h1 className="mb-2 text-3xl font-bold text-white text-gray-900 dark:text-white">Job Post Approvals</h1>
            <p className="text-gray-600 text-slate-400 dark:text-slate-400">Review and approve job postings from companies across all universities</p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 text-slate-400 dark:text-slate-400">Pending Review</p>
                  <p className="text-2xl font-bold text-white text-gray-900 dark:text-white">
                    {jobPosts.filter(job => job.status === 'pending').length}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
                  <Clock className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 text-slate-400 dark:text-slate-400">Approved Today</p>
                  <p className="text-2xl font-bold text-white text-gray-900 dark:text-white">
                    {jobPosts.filter(job => job.status === 'approved').length}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 text-slate-400 dark:text-slate-400">Urgent Priority</p>
                  <p className="text-2xl font-bold text-white text-gray-900 dark:text-white">
                    {jobPosts.filter(job => job.priority === 'urgent').length}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-red-500/20 to-pink-500/20">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 text-slate-400 dark:text-slate-400">Total Companies</p>
                  <p className="text-2xl font-bold text-white text-gray-900 dark:text-white">
                    {new Set(jobPosts.map(job => job.company)).size}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                  <Building2 className="w-6 h-6 text-blue-400" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-6 mb-8 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl"
          >
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="relative flex-1">
                <Search className="absolute w-5 h-5 text-gray-500 transform -translate-y-1/2 left-3 top-1/2 text-slate-400 dark:text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by company, position, or university..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-3 pr-4 text-white text-gray-900 placeholder-gray-500 transition-all duration-300 border border-gray-300 pl-11 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border-slate-600 dark:border-slate-600 rounded-xl dark:text-white placeholder-slate-400 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex gap-2">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-3 text-white text-gray-900 border border-gray-300 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border-slate-600 dark:border-slate-600 rounded-xl dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                  <option value="under_review">Under Review</option>
                </select>

                <select
                  value={priorityFilter}
                  onChange={(e) => setPriorityFilter(e.target.value)}
                  className="px-4 py-3 text-white text-gray-900 border border-gray-300 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border-slate-600 dark:border-slate-600 rounded-xl dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Priority</option>
                  <option value="urgent">Urgent</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>

                <button className="p-3 text-gray-600 transition-all duration-300 border bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border-slate-700/50 dark:border-slate-700/50 border-gray-300/50 text-slate-400 dark:text-slate-400 rounded-xl hover:bg-slate-700/50 dark:hover:bg-slate-700/50 hover:bg-gray-200/50">
                  <Filter className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Job Posts List */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="p-6 transition-all duration-300 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl hover:border-slate-600/50 dark:hover:border-slate-600/50 hover:border-gray-300/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="object-cover w-16 h-16 rounded-lg"
                    />

                    <div className="flex-1">
                      <div className="flex items-center mb-2 space-x-3">
                        <h3 className="text-xl font-semibold text-white text-gray-900 dark:text-white">{job.position}</h3>
                        <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ₹{getStatusColor(job.status)}`}>
                          {getStatusIcon(job.status)}
                          <span className="capitalize">{job.status.replace('_', ' ')}</span>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ₹{getPriorityColor(job.priority)}`}>
                          {job.priority.toUpperCase()}
                        </div>
                      </div>

                      <p className="mb-2 text-gray-600 text-slate-400 dark:text-slate-400">{job.company}</p>

                      <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-4">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-gray-500 text-slate-400 dark:text-slate-400" />
                          <span className="text-sm text-gray-700 text-slate-300 dark:text-slate-300">{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-4 h-4 text-gray-500 text-slate-400 dark:text-slate-400" />
                          <span className="text-sm font-medium text-green-400">{job.salary}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Building2 className="w-4 h-4 text-gray-500 text-slate-400 dark:text-slate-400" />
                          <span className="text-sm text-gray-700 text-slate-300 dark:text-slate-300">{job.university}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-gray-500 text-slate-400 dark:text-slate-400" />
                          <span className="text-sm text-gray-700 text-slate-300 dark:text-slate-300">{job.expectedApplications} expected</span>
                        </div>
                      </div>

                      <p className="mb-4 leading-relaxed text-gray-700 text-slate-300 dark:text-slate-300">{job.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ₹{job.type === 'Internship' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'
                          }`}>
                          {job.type}
                        </span>
                        <span className="px-3 py-1 text-xs font-medium text-green-400 rounded-full bg-green-500/20">
                          {job.department}
                        </span>
                        {job.requirements.slice(0, 3).map((req) => (
                          <span key={req} className="px-2 py-1 text-xs text-gray-700 rounded-lg bg-slate-700/50 dark:bg-slate-700/50 bg-gray-200/50 text-slate-300 dark:text-slate-300">
                            {req}
                          </span>
                        ))}
                        {job.requirements.length > 3 && (
                          <span className="px-2 py-1 text-xs text-gray-600 rounded-lg bg-slate-700/50 dark:bg-slate-700/50 bg-gray-200/50 text-slate-400 dark:text-slate-400">
                            +{job.requirements.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-1 gap-4 mb-4 text-sm md:grid-cols-3">
                        <div>
                          <p className="text-gray-600 text-slate-400 dark:text-slate-400">Submitted by</p>
                          <p className="font-medium text-white text-gray-900 dark:text-white">{job.submittedBy}</p>
                          <p className="text-gray-600 text-slate-400 dark:text-slate-400">{formatTimeAgo(job.submittedAt)}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-slate-400 dark:text-slate-400">Application Deadline</p>
                          <p className="font-medium text-white text-gray-900 dark:text-white">{new Date(job.deadline).toLocaleDateString()}</p>
                          <p className={`₹{getDaysUntilDeadline(job.deadline) <= 3 ? 'text-red-400' : 'text-slate-400 dark:text-slate-400 text-gray-600'}`}>
                            {getDaysUntilDeadline(job.deadline)} days left
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-slate-400 dark:text-slate-400">Eligibility</p>
                          <p className="font-medium text-white text-gray-900 dark:text-white">Min GPA: {job.eligibility.minGPA}</p>
                          <p className="text-gray-600 text-slate-400 dark:text-slate-400">{job.eligibility.branches.join(', ')}</p>
                        </div>
                      </div>

                      {job.status === 'rejected' && job.rejectionReason && (
                        <div className="p-3 mb-4 border rounded-lg bg-red-500/10 border-red-500/20">
                          <div className="flex items-center space-x-2">
                            <XCircle className="w-4 h-4 text-red-400" />
                            <span className="text-sm font-medium text-red-400">Rejection Reason</span>
                          </div>
                          <p className="mt-1 text-sm text-gray-700 text-slate-300 dark:text-slate-300">{job.rejectionReason}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50 dark:border-slate-700/50 border-gray-200/50">
                  <div className="flex space-x-2">
                    <button className="flex items-center px-4 py-2 space-x-2 text-sm text-gray-600 transition-all duration-300 border rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-gray-200/50 border-slate-700/50 dark:border-slate-700/50 border-gray-300/50 text-slate-400 dark:text-slate-400 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 hover:bg-gray-300/50">
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                    <button className="flex items-center px-4 py-2 space-x-2 text-sm text-gray-600 transition-all duration-300 border rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-gray-200/50 border-slate-700/50 dark:border-slate-700/50 border-gray-300/50 text-slate-400 dark:text-slate-400 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 hover:bg-gray-300/50">
                      <Edit className="w-4 h-4" />
                      <span>Edit</span>
                    </button>
                  </div>

                  {job.status === 'pending' && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleReject(job.id)}
                        className="flex items-center px-4 py-2 space-x-2 text-sm font-medium text-red-400 transition-all duration-300 border rounded-lg bg-red-500/20 border-red-500/30 hover:bg-red-500/30"
                      >
                        <XCircle className="w-4 h-4" />
                        <span>Reject</span>
                      </button>
                      <button
                        onClick={() => handleApprove(job.id)}
                        className="flex items-center px-4 py-2 space-x-2 text-sm font-medium text-green-400 transition-all duration-300 border rounded-lg bg-green-500/20 border-green-500/30 hover:bg-green-500/30"
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span>Approve & Forward</span>
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="py-12 text-center"
            >
              <Briefcase className="w-16 h-16 mx-auto mb-4 text-gray-500 text-slate-400 dark:text-slate-400" />
              <h3 className="mb-2 text-xl font-semibold text-white text-gray-900 dark:text-white">No Job Posts Found</h3>
              <p className="text-gray-600 text-slate-400 dark:text-slate-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApproveJobs;