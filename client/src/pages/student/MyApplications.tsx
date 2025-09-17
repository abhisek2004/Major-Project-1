import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardSidebar from '../../components/DashboardSidebar';
import {
  Target,
  Briefcase,
  Users,
  MessageSquare,
  Bell,
  User,
  BookOpen,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  Calendar,
  MapPin,
  Building2,
  Filter,
  Search,
  Eye,
  Download
} from 'lucide-react';

const MyApplications = () => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const sidebarItems = [
    { icon: Target, label: 'Dashboard', path: '/student' },
    { icon: Target, label: 'Job Recommendations', path: '/student/jobs', badge: '24' },
    { icon: Briefcase, label: 'My Applications', path: '/student/applications' },
    { icon: MessageSquare, label: 'Mentorship Chat', path: '/student/mentorship', badge: '3' },
    { icon: BookOpen, label: 'Profile & Resume', path: '/student/profile' },
    { icon: Bell, label: 'Notifications', path: '/student/notifications', badge: '5' },
    { icon: User, label: 'Settings', path: '/student/settings' }
  ];

  const applications = [
    {
      id: 1,
      company: 'Google',
      position: 'Software Engineer Intern',
      logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      location: 'Mountain View, CA',
      type: 'Internship',
      salary: '₹8,000/month',
      status: 'interview_scheduled',
      appliedDate: '2025-01-10',
      lastUpdate: '2025-01-15',
      nextStep: 'Technical Interview on Jan 20, 2024 at 2:00 PM',
      progress: 75,
      interviewDate: '2025-01-20',
      interviewTime: '2:00 PM',
      interviewer: 'Sarah Chen - Senior SWE'
    },
    {
      id: 2,
      company: 'Microsoft',
      position: 'Product Manager Trainee',
      logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '₹95,000 - ₹120,000',
      status: 'under_review',
      appliedDate: '2025-01-08',
      lastUpdate: '2025-01-12',
      nextStep: 'Application under review by hiring team',
      progress: 50,
      interviewDate: null,
      interviewTime: null,
      interviewer: null
    },
    {
      id: 3,
      company: 'Amazon',
      position: 'Data Science Intern',
      logo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      location: 'Austin, TX',
      type: 'Internship',
      salary: '₹7,500/month',
      status: 'applied',
      appliedDate: '2025-01-12',
      lastUpdate: '2025-01-12',
      nextStep: 'Waiting for initial screening',
      progress: 25,
      interviewDate: null,
      interviewTime: null,
      interviewer: null
    },
    {
      id: 4,
      company: 'Meta',
      position: 'Frontend Developer',
      logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      location: 'Menlo Park, CA',
      type: 'Full-time',
      salary: '₹110,000 - ₹140,000',
      status: 'offer_received',
      appliedDate: '2025-01-05',
      lastUpdate: '2025-01-14',
      nextStep: 'Offer decision deadline: Jan 25, 2024',
      progress: 100,
      interviewDate: null,
      interviewTime: null,
      interviewer: null,
      offerDetails: {
        salary: '₹125,000',
        bonus: '₹15,000',
        equity: '₹50,000',
        deadline: '2025-01-25'
      }
    },
    {
      id: 5,
      company: 'Apple',
      position: 'iOS Developer Intern',
      logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      location: 'Cupertino, CA',
      type: 'Internship',
      salary: '₹8,500/month',
      status: 'rejected',
      appliedDate: '2025-01-03',
      lastUpdate: '2025-01-11',
      nextStep: 'Application was not selected for this position',
      progress: 0,
      interviewDate: null,
      interviewTime: null,
      interviewer: null,
      rejectionReason: 'Position filled with another candidate'
    },
    {
      id: 6,
      company: 'Netflix',
      position: 'Data Analyst',
      logo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      location: 'Los Gatos, CA',
      type: 'Full-time',
      salary: '₹85,000 - ₹110,000',
      status: 'shortlisted',
      appliedDate: '2025-01-09',
      lastUpdate: '2025-01-13',
      nextStep: 'HR screening scheduled for Jan 18, 2024',
      progress: 60,
      interviewDate: '2024-01-18',
      interviewTime: '10:00 AM',
      interviewer: 'Mike Johnson - HR Manager'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'applied':
        return <Clock className="w-4 h-4 text-blue-400" />;
      case 'under_review':
        return <AlertCircle className="w-4 h-4 text-yellow-400" />;
      case 'shortlisted':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'interview_scheduled':
        return <Calendar className="w-4 h-4 text-purple-400" />;
      case 'offer_received':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'rejected':
        return <XCircle className="w-4 h-4 text-red-400" />;
      default:
        return <Clock className="w-4 h-4 text-slate-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'applied':
        return 'bg-blue-500/20 text-blue-400';
      case 'under_review':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'shortlisted':
        return 'bg-green-500/20 text-green-400';
      case 'interview_scheduled':
        return 'bg-purple-500/20 text-purple-400';
      case 'offer_received':
        return 'bg-green-500/20 text-green-400';
      case 'rejected':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-slate-500/20 text-slate-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'applied':
        return 'Applied';
      case 'under_review':
        return 'Under Review';
      case 'shortlisted':
        return 'Shortlisted';
      case 'interview_scheduled':
        return 'Interview Scheduled';
      case 'offer_received':
        return 'Offer Received';
      case 'rejected':
        return 'Rejected';
      default:
        return 'Unknown';
    }
  };

  const filteredApplications = applications.filter(app => {
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
    const matchesSearch = app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.position.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="flex min-h-screen bg-slate-950 dark:bg-slate-950 bg-gray-50">
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
            <h1 className="mb-2 text-3xl font-bold text-white text-gray-900 dark:text-white">My Applications</h1>
            <p className="text-gray-600 text-slate-400 dark:text-slate-400">Track the status of your job applications</p>
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
                  <p className="text-sm font-medium text-gray-600 text-slate-400 dark:text-slate-400">Total Applications</p>
                  <p className="text-2xl font-bold text-white text-gray-900 dark:text-white">{applications.length}</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                  <Briefcase className="w-6 h-6 text-blue-400" />
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
                  <p className="text-sm font-medium text-gray-600 text-slate-400 dark:text-slate-400">Interviews</p>
                  <p className="text-2xl font-bold text-white text-gray-900 dark:text-white">
                    {applications.filter(app => app.status === 'interview_scheduled').length}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <Calendar className="w-6 h-6 text-purple-400" />
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
                  <p className="text-sm font-medium text-gray-600 text-slate-400 dark:text-slate-400">Offers</p>
                  <p className="text-2xl font-bold text-white text-gray-900 dark:text-white">
                    {applications.filter(app => app.status === 'offer_received').length}
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
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 text-slate-400 dark:text-slate-400">Response Rate</p>
                  <p className="text-2xl font-bold text-white text-gray-900 dark:text-white">
                    {Math.round((applications.filter(app => app.status !== 'applied').length / applications.length) * 100)}%
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20">
                  <Target className="w-6 h-6 text-orange-400" />
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
                  placeholder="Search applications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-3 pr-4 text-white text-gray-900 placeholder-gray-500 transition-all duration-300 border border-gray-300 pl-11 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border-slate-600 dark:border-slate-600 rounded-xl dark:text-white placeholder-slate-400 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-3 text-white text-gray-900 border border-gray-300 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border-slate-600 dark:border-slate-600 rounded-xl dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="applied">Applied</option>
                <option value="under_review">Under Review</option>
                <option value="shortlisted">Shortlisted</option>
                <option value="interview_scheduled">Interview Scheduled</option>
                <option value="offer_received">Offer Received</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </motion.div>

          {/* Applications List */}
          <div className="space-y-6">
            {filteredApplications.map((application, index) => (
              <motion.div
                key={application.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="p-6 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <img
                      src={application.logo}
                      alt={application.company}
                      className="object-cover w-12 h-12 rounded-lg"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white text-gray-900 dark:text-white">{application.position}</h3>
                      <p className="text-gray-600 text-slate-400 dark:text-slate-400">{application.company}</p>
                      <div className="flex items-center mt-1 space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3 text-gray-500 text-slate-400 dark:text-slate-400" />
                          <span className="text-gray-600 text-slate-400 dark:text-slate-400">{application.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Building2 className="w-3 h-3 text-gray-500 text-slate-400 dark:text-slate-400" />
                          <span className="text-gray-600 text-slate-400 dark:text-slate-400">{application.type}</span>
                        </div>
                        <span className="font-medium text-green-400">{application.salary}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(application.status)}`}>
                      {getStatusIcon(application.status)}
                      <span>{getStatusText(application.status)}</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">Application Progress</span>
                    <span className="text-sm font-medium text-gray-700 text-slate-300 dark:text-slate-300">{application.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-300 rounded-full bg-slate-700 dark:bg-slate-700">
                    <div
                      className="h-2 transition-all duration-300 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      style={{ width: `${application.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Application Details */}
                <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">Applied Date</p>
                    <p className="font-medium text-white text-gray-900 dark:text-white">{new Date(application.appliedDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">Last Update</p>
                    <p className="font-medium text-white text-gray-900 dark:text-white">{new Date(application.lastUpdate).toLocaleDateString()}</p>
                  </div>
                </div>

                {/* Next Step */}
                <div className="mb-4">
                  <p className="mb-1 text-sm text-gray-600 text-slate-400 dark:text-slate-400">Next Step</p>
                  <p className="text-gray-700 text-slate-300 dark:text-slate-300">{application.nextStep}</p>
                </div>

                {/* Interview Details */}
                {application.interviewDate && (
                  <div className="p-4 mb-4 border rounded-lg bg-purple-500/10 border-purple-500/20">
                    <div className="flex items-center mb-2 space-x-2">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span className="font-medium text-purple-400">Interview Scheduled</span>
                    </div>
                    <div className="grid grid-cols-1 gap-2 text-sm md:grid-cols-3">
                      <div>
                        <p className="text-gray-600 text-slate-400 dark:text-slate-400">Date</p>
                        <p className="text-white text-gray-900 dark:text-white">{new Date(application.interviewDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-slate-400 dark:text-slate-400">Time</p>
                        <p className="text-white text-gray-900 dark:text-white">{application.interviewTime}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-slate-400 dark:text-slate-400">Interviewer</p>
                        <p className="text-white text-gray-900 dark:text-white">{application.interviewer}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Offer Details */}
                {application.status === 'offer_received' && application.offerDetails && (
                  <div className="p-4 mb-4 border rounded-lg bg-green-500/10 border-green-500/20">
                    <div className="flex items-center mb-2 space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="font-medium text-green-400">Offer Received</span>
                    </div>
                    <div className="grid grid-cols-1 gap-2 text-sm md:grid-cols-4">
                      <div>
                        <p className="text-gray-600 text-slate-400 dark:text-slate-400">Base Salary</p>
                        <p className="font-medium text-white text-gray-900 dark:text-white">{application.offerDetails.salary}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-slate-400 dark:text-slate-400">Signing Bonus</p>
                        <p className="font-medium text-white text-gray-900 dark:text-white">{application.offerDetails.bonus}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-slate-400 dark:text-slate-400">Equity</p>
                        <p className="font-medium text-white text-gray-900 dark:text-white">{application.offerDetails.equity}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-slate-400 dark:text-slate-400">Decision Deadline</p>
                        <p className="font-medium text-orange-400">{new Date(application.offerDetails.deadline).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Rejection Details */}
                {application.status === 'rejected' && application.rejectionReason && (
                  <div className="p-4 mb-4 border rounded-lg bg-red-500/10 border-red-500/20">
                    <div className="flex items-center mb-2 space-x-2">
                      <XCircle className="w-4 h-4 text-red-400" />
                      <span className="font-medium text-red-400">Application Not Selected</span>
                    </div>
                    <p className="text-sm text-gray-700 text-slate-300 dark:text-slate-300">{application.rejectionReason}</p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center px-4 py-2 space-x-2 text-sm text-gray-600 transition-all duration-300 border rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-gray-200/50 border-slate-700/50 dark:border-slate-700/50 border-gray-300/50 text-slate-400 dark:text-slate-400 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 hover:bg-gray-300/50">
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                    <button className="flex items-center px-4 py-2 space-x-2 text-sm text-gray-600 transition-all duration-300 border rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-gray-200/50 border-slate-700/50 dark:border-slate-700/50 border-gray-300/50 text-slate-400 dark:text-slate-400 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 hover:bg-gray-300/50">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  </div>

                  {application.status === 'offer_received' && (
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 text-sm font-medium text-red-400 transition-all duration-300 border rounded-lg bg-red-500/20 border-red-500/30 hover:bg-red-500/30">
                        Decline Offer
                      </button>
                      <button className="px-4 py-2 text-sm font-medium text-green-400 transition-all duration-300 border rounded-lg bg-green-500/20 border-green-500/30 hover:bg-green-500/30">
                        Accept Offer
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {filteredApplications.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="py-12 text-center"
            >
              <Briefcase className="w-16 h-16 mx-auto mb-4 text-gray-500 text-slate-400 dark:text-slate-400" />
              <h3 className="mb-2 text-xl font-semibold text-white text-gray-900 dark:text-white">No Applications Found</h3>
              <p className="text-gray-600 text-slate-400 dark:text-slate-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyApplications;