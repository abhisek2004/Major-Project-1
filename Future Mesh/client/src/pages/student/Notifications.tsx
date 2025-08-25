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
  CheckCircle,
  AlertCircle,
  Info,
  Calendar,
  Clock,
  Filter,
  Search,
  MoreVertical,
  Trash2,
  Archive,
  Star
} from 'lucide-react';

const Notifications = () => {
  const [filter, setFilter] = useState('all');
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

  const notifications = [
    {
      id: 1,
      type: 'application_update',
      title: 'Application Status Update',
      message: 'Your application for Software Engineer Intern at Google has been shortlisted for technical interview.',
      timestamp: '2025-01-15T10:30:00Z',
      isRead: false,
      priority: 'high',
      actionUrl: '/student/applications',
      company: 'Google',
      position: 'Software Engineer Intern'
    },
    {
      id: 2,
      type: 'interview_scheduled',
      title: 'Interview Scheduled',
      message: 'Technical interview scheduled for Sept 20, 2025 at 2:00 PM with Sarah Chen from Google.',
      timestamp: '2025-01-15T09:15:00Z',
      isRead: false,
      priority: 'urgent',
      actionUrl: '/student/applications',
      company: 'Google',
      interviewDate: '2025-01-20T14:00:00Z'
    },
    {
      id: 3,
      type: 'mentor_message',
      title: 'New Message from Mentor',
      message: 'Michael Rodriguez sent you a message about product management career paths.',
      timestamp: '2025-01-15T08:45:00Z',
      isRead: true,
      priority: 'medium',
      actionUrl: '/student/mentorship',
      mentorName: 'Michael Rodriguez',
      mentorCompany: 'Meta'
    },
    {
      id: 4,
      type: 'job_recommendation',
      title: 'New Job Recommendations',
      message: '5 new job opportunities matching your profile have been added.',
      timestamp: '2025-01-14T16:20:00Z',
      isRead: true,
      priority: 'low',
      actionUrl: '/student/jobs',
      jobCount: 5
    },
    {
      id: 5,
      type: 'offer_received',
      title: 'Job Offer Received',
      message: 'Congratulations! You have received an offer from Meta for Frontend Developer position.',
      timestamp: '2025-01-14T14:30:00Z',
      isRead: false,
      priority: 'urgent',
      actionUrl: '/student/applications',
      company: 'Meta',
      position: 'Frontend Developer',
      offerDeadline: '2025-01-25T23:59:59Z'
    },
    {
      id: 6,
      type: 'profile_incomplete',
      title: 'Complete Your Profile',
      message: 'Your profile is 85% complete. Add 3 more skills to improve job matching.',
      timestamp: '2025-01-14T12:00:00Z',
      isRead: true,
      priority: 'low',
      actionUrl: '/student/profile',
      completionPercentage: 85
    },
    {
      id: 7,
      type: 'application_deadline',
      title: 'Application Deadline Reminder',
      message: 'Application deadline for Amazon Data Science Intern is in 2 days.',
      timestamp: '2025-01-14T10:00:00Z',
      isRead: false,
      priority: 'medium',
      actionUrl: '/student/jobs',
      company: 'Amazon',
      position: 'Data Science Intern',
      deadline: '2025-01-17T23:59:59Z'
    },
    {
      id: 8,
      type: 'system_update',
      title: 'Platform Update',
      message: 'New features added: Enhanced job matching algorithm and improved chat interface.',
      timestamp: '2025-01-13T18:00:00Z',
      isRead: true,
      priority: 'low',
      actionUrl: null
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'application_update':
      case 'application_deadline':
        return <Briefcase className="w-5 h-5" />;
      case 'interview_scheduled':
        return <Calendar className="w-5 h-5" />;
      case 'mentor_message':
        return <MessageSquare className="w-5 h-5" />;
      case 'job_recommendation':
        return <Target className="w-5 h-5" />;
      case 'offer_received':
        return <CheckCircle className="w-5 h-5" />;
      case 'profile_incomplete':
        return <User className="w-5 h-5" />;
      case 'system_update':
        return <Info className="w-5 h-5" />;
      default:
        return <Bell className="w-5 h-5" />;
    }
  };

  const getNotificationColor = (type: string, priority: string) => {
    if (priority === 'urgent') return 'text-red-400 bg-red-500/20';
    if (priority === 'high') return 'text-orange-400 bg-orange-500/20';

    switch (type) {
      case 'application_update':
      case 'application_deadline':
        return 'text-blue-400 bg-blue-500/20';
      case 'interview_scheduled':
        return 'text-purple-400 bg-purple-500/20';
      case 'mentor_message':
        return 'text-green-400 bg-green-500/20';
      case 'job_recommendation':
        return 'text-cyan-400 bg-cyan-500/20';
      case 'offer_received':
        return 'text-green-400 bg-green-500/20';
      case 'profile_incomplete':
        return 'text-yellow-400 bg-yellow-500/20';
      case 'system_update':
        return 'text-slate-400 bg-slate-500/20';
      default:
        return 'text-slate-400 bg-slate-500/20';
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return <span className="px-2 py-1 text-xs font-medium text-red-400 rounded-full bg-red-500/20">Urgent</span>;
      case 'high':
        return <span className="px-2 py-1 text-xs font-medium text-orange-400 rounded-full bg-orange-500/20">High</span>;
      case 'medium':
        return <span className="px-2 py-1 text-xs font-medium text-blue-400 rounded-full bg-blue-500/20">Medium</span>;
      case 'low':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-slate-500/20 text-slate-400">Low</span>;
      default:
        return null;
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

  const filteredNotifications = notifications.filter(notification => {
    const matchesFilter = filter === 'all' ||
      (filter === 'unread' && !notification.isRead) ||
      (filter === 'urgent' && notification.priority === 'urgent') ||
      notification.type === filter;

    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const unreadCount = notifications.filter(n => !n.isRead).length;

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
            <div className="flex items-center justify-between">
              <div>
                <h1 className="mb-2 text-3xl font-bold text-white text-gray-900 dark:text-white">
                  Notifications
                  {unreadCount > 0 && (
                    <span className="px-3 py-1 ml-3 text-sm font-medium text-white bg-blue-500 rounded-full">
                      {unreadCount} new
                    </span>
                  )}
                </h1>
                <p className="text-gray-600 text-slate-400 dark:text-slate-400">Stay updated with your job search and mentorship activities</p>
              </div>
              <div className="flex space-x-3">
                <button className="flex items-center px-4 py-2 space-x-2 text-gray-600 transition-all duration-300 border rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-gray-200/50 border-slate-700/50 dark:border-slate-700/50 border-gray-300/50 text-slate-400 dark:text-slate-400 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 hover:bg-gray-300/50">
                  <Archive className="w-4 h-4" />
                  <span>Archive All</span>
                </button>
                <button className="flex items-center px-4 py-2 space-x-2 text-blue-400 transition-all duration-300 border rounded-lg bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30">
                  <CheckCircle className="w-4 h-4" />
                  <span>Mark All Read</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 mb-8 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl"
          >
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="relative flex-1">
                <Search className="absolute w-5 h-5 text-gray-500 transform -translate-y-1/2 left-3 top-1/2 text-slate-400 dark:text-slate-400" />
                <input
                  type="text"
                  placeholder="Search notifications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-3 pr-4 text-white text-gray-900 placeholder-gray-500 transition-all duration-300 border border-gray-300 pl-11 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border-slate-600 dark:border-slate-600 rounded-xl dark:text-white placeholder-slate-400 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex gap-2">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="px-4 py-3 text-white text-gray-900 border border-gray-300 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border-slate-600 dark:border-slate-600 rounded-xl dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Notifications</option>
                  <option value="unread">Unread</option>
                  <option value="urgent">Urgent</option>
                  <option value="application_update">Applications</option>
                  <option value="interview_scheduled">Interviews</option>
                  <option value="mentor_message">Mentorship</option>
                  <option value="job_recommendation">Job Recommendations</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Notifications List */}
          <div className="space-y-4">
            {filteredNotifications.map((notification, index) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6 hover:border-slate-600/50 dark:hover:border-slate-600/50 hover:border-gray-300/50 transition-all duration-300 ₹{!notification.isRead ? 'ring-2 ring-blue-500/20' : ''
                  }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ₹{getNotificationColor(notification.type, notification.priority)}`}>
                    {getNotificationIcon(notification.type)}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-semibold text-white text-gray-900 dark:text-white">{notification.title}</h3>
                        {!notification.isRead && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                        {getPriorityBadge(notification.priority)}
                      </div>

                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">
                          {formatTimeAgo(notification.timestamp)}
                        </span>
                        <button className="p-1 text-gray-600 transition-colors text-slate-400 dark:text-slate-400 hover:text-white dark:hover:text-white hover:text-gray-900">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <p className="mb-3 leading-relaxed text-gray-700 text-slate-300 dark:text-slate-300">
                      {notification.message}
                    </p>

                    {/* Additional Info */}
                    {notification.company && (
                      <div className="flex items-center mb-3 space-x-4 text-sm">
                        <span className="text-gray-600 text-slate-400 dark:text-slate-400">Company: {notification.company}</span>
                        {notification.position && (
                          <span className="text-gray-600 text-slate-400 dark:text-slate-400">Position: {notification.position}</span>
                        )}
                      </div>
                    )}

                    {notification.interviewDate && (
                      <div className="flex items-center p-3 mb-3 space-x-2 border rounded-lg bg-purple-500/10 border-purple-500/20">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-purple-400">
                          Interview: {new Date(notification.interviewDate).toLocaleString()}
                        </span>
                      </div>
                    )}

                    {notification.offerDeadline && (
                      <div className="flex items-center p-3 mb-3 space-x-2 border rounded-lg bg-orange-500/10 border-orange-500/20">
                        <Clock className="w-4 h-4 text-orange-400" />
                        <span className="text-sm text-orange-400">
                          Decision deadline: {new Date(notification.offerDeadline).toLocaleString()}
                        </span>
                      </div>
                    )}

                    {notification.deadline && (
                      <div className="flex items-center p-3 mb-3 space-x-2 border rounded-lg bg-red-500/10 border-red-500/20">
                        <AlertCircle className="w-4 h-4 text-red-400" />
                        <span className="text-sm text-red-400">
                          Application deadline: {new Date(notification.deadline).toLocaleString()}
                        </span>
                      </div>
                    )}

                    {notification.completionPercentage && (
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">Profile Completion</span>
                          <span className="text-sm font-medium text-blue-400">{notification.completionPercentage}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-300 rounded-full bg-slate-700 dark:bg-slate-700">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                            style={{ width: `₹{notification.completionPercentage}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        {notification.actionUrl && (
                          <button className="px-4 py-2 text-sm font-medium text-blue-400 transition-all duration-300 border rounded-lg bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30">
                            View Details
                          </button>
                        )}
                        {!notification.isRead && (
                          <button className="px-4 py-2 text-sm text-gray-600 transition-all duration-300 border rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-gray-200/50 border-slate-700/50 dark:border-slate-700/50 border-gray-300/50 text-slate-400 dark:text-slate-400 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 hover:bg-gray-300/50">
                            Mark as Read
                          </button>
                        )}
                      </div>

                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-600 transition-colors text-slate-400 dark:text-slate-400 hover:text-yellow-400">
                          <Star className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-600 transition-colors text-slate-400 dark:text-slate-400 hover:text-slate-300 dark:hover:text-slate-300 hover:text-gray-700">
                          <Archive className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-600 transition-colors text-slate-400 dark:text-slate-400 hover:text-red-400">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredNotifications.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="py-12 text-center"
            >
              <Bell className="w-16 h-16 mx-auto mb-4 text-gray-500 text-slate-400 dark:text-slate-400" />
              <h3 className="mb-2 text-xl font-semibold text-white text-gray-900 dark:text-white">No Notifications Found</h3>
              <p className="text-gray-600 text-slate-400 dark:text-slate-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;