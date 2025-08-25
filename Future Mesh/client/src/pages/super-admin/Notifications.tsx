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
  Send,
  Users,
  AlertTriangle,
  CheckCircle,
  Info,
  Calendar,
  Clock,
  Eye,
  Edit,
  Trash2,
  Plus
} from 'lucide-react';

const SuperAdminNotifications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', path: '/super-admin' },
    { icon: Shield, label: 'Manage Admins', path: '/super-admin/admins', badge: '5' },
    { icon: Briefcase, label: 'Approve Jobs', path: '/super-admin/jobs', badge: '12' },
    { icon: FileText, label: 'Global Reports', path: '/super-admin/reports' },
    { icon: TrendingUp, label: 'Analytics', path: '/super-admin/analytics' },
    { icon: Bell, label: 'Notifications', path: '/super-admin/notifications', badge: '8' },
    { icon: Settings, label: 'Settings', path: '/super-admin/settings' }
  ];

  const notifications = [
    {
      id: 1,
      type: 'system_alert',
      title: 'System Maintenance Scheduled',
      message: 'Platform maintenance scheduled for Jan 20, 2024 from 2:00 AM to 4:00 AM EST. All users will be notified.',
      recipients: 'All Users',
      recipientCount: 47892,
      status: 'scheduled',
      priority: 'high',
      createdAt: '2025-01-15T10:30:00Z',
      scheduledFor: '2025-01-20T02:00:00Z',
      sentAt: null,
      openRate: null,
      clickRate: null
    },
    {
      id: 2,
      type: 'feature_announcement',
      title: 'New AI Job Matching Feature Released',
      message: 'We\'ve launched an enhanced AI-powered job matching algorithm that provides 40% better matches for students.',
      recipients: 'Students & Alumni',
      recipientCount: 44181,
      status: 'sent',
      priority: 'medium',
      createdAt: '2025-01-14T16:45:00Z',
      scheduledFor: null,
      sentAt: '2025-01-14T17:00:00Z',
      openRate: 78.5,
      clickRate: 23.2
    },
    {
      id: 3,
      type: 'security_alert',
      title: 'Security Update Required',
      message: 'Important security update available. All admins must update their passwords and enable 2FA by Jan 25, 2024.',
      recipients: 'Admins & HODs',
      recipientCount: 1255,
      status: 'sent',
      priority: 'urgent',
      createdAt: '2025-01-13T09:20:00Z',
      scheduledFor: null,
      sentAt: '2025-01-13T09:30:00Z',
      openRate: 95.2,
      clickRate: 67.8
    },
    {
      id: 4,
      type: 'policy_update',
      title: 'Updated Privacy Policy',
      message: 'Our privacy policy has been updated to comply with new regulations. Please review the changes.',
      recipients: 'All Users',
      recipientCount: 47892,
      status: 'draft',
      priority: 'low',
      createdAt: '2025-01-12T14:15:00Z',
      scheduledFor: null,
      sentAt: null,
      openRate: null,
      clickRate: null
    },
    {
      id: 5,
      type: 'performance_report',
      title: 'Monthly Platform Performance Report',
      message: 'December 2023 performance metrics: 87.3% placement rate, 156K applications processed, 12K new users.',
      recipients: 'University Admins',
      recipientCount: 245,
      status: 'sent',
      priority: 'medium',
      createdAt: '2025-01-01T10:00:00Z',
      scheduledFor: null,
      sentAt: '2025-01-01T10:15:00Z',
      openRate: 89.4,
      clickRate: 45.6
    },
    {
      id: 6,
      type: 'training_announcement',
      title: 'Admin Training Session - New Features',
      message: 'Join us for a comprehensive training session on new platform features. Session scheduled for Jan 22, 2024.',
      recipients: 'Admins & HODs',
      recipientCount: 1255,
      status: 'scheduled',
      priority: 'medium',
      createdAt: '2025-01-10T11:30:00Z',
      scheduledFor: '2025-01-18T09:00:00Z',
      sentAt: null,
      openRate: null,
      clickRate: null
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'system_alert':
        return <AlertTriangle className="w-4 h-4" />;
      case 'feature_announcement':
        return <Info className="w-4 h-4" />;
      case 'security_alert':
        return <Shield className="w-4 h-4" />;
      case 'policy_update':
        return <FileText className="w-4 h-4" />;
      case 'performance_report':
        return <TrendingUp className="w-4 h-4" />;
      case 'training_announcement':
        return <Users className="w-4 h-4" />;
      default:
        return <Bell className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'system_alert':
        return 'bg-orange-500/20 text-orange-400';
      case 'feature_announcement':
        return 'bg-blue-500/20 text-blue-400';
      case 'security_alert':
        return 'bg-red-500/20 text-red-400';
      case 'policy_update':
        return 'bg-purple-500/20 text-purple-400';
      case 'performance_report':
        return 'bg-green-500/20 text-green-400';
      case 'training_announcement':
        return 'bg-cyan-500/20 text-cyan-400';
      default:
        return 'bg-slate-500/20 text-slate-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'sent':
        return 'bg-green-500/20 text-green-400';
      case 'scheduled':
        return 'bg-blue-500/20 text-blue-400';
      case 'draft':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'failed':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-slate-500/20 text-slate-400';
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

  const filteredNotifications = notifications.filter(notification => {
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || notification.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || notification.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

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
                <h1 className="mb-2 text-3xl font-bold text-white text-gray-900 dark:text-white">Platform Notifications</h1>
                <p className="text-gray-600 text-slate-400 dark:text-slate-400">Manage and send notifications to users across all universities</p>
              </div>
              <button
                onClick={() => setShowCreateModal(true)}
                className="flex items-center px-6 py-3 space-x-2 font-medium text-white transition-all duration-300 transform shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl hover:scale-105 hover:shadow-blue-500/25"
              >
                <Plus className="w-5 h-5" />
                <span>Create Notification</span>
              </button>
            </div>
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
                  <p className="text-sm font-medium text-gray-600 text-slate-400 dark:text-slate-400">Total Sent</p>
                  <p className="text-2xl font-bold text-white text-gray-900 dark:text-white">
                    {notifications.filter(n => n.status === 'sent').length}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                  <Send className="w-6 h-6 text-green-400" />
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
                  <p className="text-sm font-medium text-gray-600 text-slate-400 dark:text-slate-400">Scheduled</p>
                  <p className="text-2xl font-bold text-white text-gray-900 dark:text-white">
                    {notifications.filter(n => n.status === 'scheduled').length}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                  <Calendar className="w-6 h-6 text-blue-400" />
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
                  <p className="text-sm font-medium text-gray-600 text-slate-400 dark:text-slate-400">Avg Open Rate</p>
                  <p className="text-2xl font-bold text-white text-gray-900 dark:text-white">
                    {Math.round(notifications.filter(n => n.openRate).reduce((acc, n) => acc + (n.openRate || 0), 0) / notifications.filter(n => n.openRate).length)}%
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <Eye className="w-6 h-6 text-purple-400" />
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
                  <p className="text-sm font-medium text-gray-600 text-slate-400 dark:text-slate-400">Total Recipients</p>
                  <p className="text-2xl font-bold text-white text-gray-900 dark:text-white">
                    {(notifications.filter(n => n.status === 'sent').reduce((acc, n) => acc + n.recipientCount, 0) / 1000).toFixed(0)}K
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20">
                  <Users className="w-6 h-6 text-orange-400" />
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
                  placeholder="Search notifications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-3 pr-4 text-white text-gray-900 placeholder-gray-500 transition-all duration-300 border border-gray-300 pl-11 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border-slate-600 dark:border-slate-600 rounded-xl dark:text-white placeholder-slate-400 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex gap-2">
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="px-4 py-3 text-white text-gray-900 border border-gray-300 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border-slate-600 dark:border-slate-600 rounded-xl dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Types</option>
                  <option value="system_alert">System Alerts</option>
                  <option value="feature_announcement">Feature Announcements</option>
                  <option value="security_alert">Security Alerts</option>
                  <option value="policy_update">Policy Updates</option>
                  <option value="performance_report">Performance Reports</option>
                  <option value="training_announcement">Training Announcements</option>
                </select>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-3 text-white text-gray-900 border border-gray-300 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border-slate-600 dark:border-slate-600 rounded-xl dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="sent">Sent</option>
                  <option value="scheduled">Scheduled</option>
                  <option value="draft">Draft</option>
                  <option value="failed">Failed</option>
                </select>

                <button className="p-3 text-gray-600 transition-all duration-300 border bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border-slate-700/50 dark:border-slate-700/50 border-gray-300/50 text-slate-400 dark:text-slate-400 rounded-xl hover:bg-slate-700/50 dark:hover:bg-slate-700/50 hover:bg-gray-200/50">
                  <Filter className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Notifications List */}
          <div className="space-y-6">
            {filteredNotifications.map((notification, index) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="p-6 transition-all duration-300 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl hover:border-slate-600/50 dark:hover:border-slate-600/50 hover:border-gray-300/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ₹{getTypeColor(notification.type)}`}>
                      {getTypeIcon(notification.type)}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center mb-2 space-x-3">
                        <h3 className="text-lg font-semibold text-white text-gray-900 dark:text-white">{notification.title}</h3>
                        <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ₹{getStatusColor(notification.status)}`}>
                          <span className="capitalize">{notification.status}</span>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ₹{getPriorityColor(notification.priority)}`}>
                          {notification.priority.toUpperCase()}
                        </div>
                      </div>

                      <p className="mb-4 leading-relaxed text-gray-700 text-slate-300 dark:text-slate-300">{notification.message}</p>

                      <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-4">
                        <div>
                          <p className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">Recipients</p>
                          <p className="font-medium text-white text-gray-900 dark:text-white">{notification.recipients}</p>
                          <p className="text-xs text-gray-600 text-slate-400 dark:text-slate-400">{notification.recipientCount.toLocaleString()} users</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">Created</p>
                          <p className="font-medium text-white text-gray-900 dark:text-white">{formatTimeAgo(notification.createdAt)}</p>
                        </div>
                        {notification.scheduledFor && (
                          <div>
                            <p className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">Scheduled For</p>
                            <p className="font-medium text-blue-400">{new Date(notification.scheduledFor).toLocaleString()}</p>
                          </div>
                        )}
                        {notification.sentAt && (
                          <div>
                            <p className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">Sent At</p>
                            <p className="font-medium text-green-400">{new Date(notification.sentAt).toLocaleString()}</p>
                          </div>
                        )}
                      </div>

                      {notification.openRate !== null && notification.clickRate !== null && (
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="p-3 rounded-lg bg-slate-800/30 dark:bg-slate-800/30 bg-gray-100/50">
                            <p className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">Open Rate</p>
                            <p className="text-2xl font-bold text-blue-400">{notification.openRate}%</p>
                          </div>
                          <div className="p-3 rounded-lg bg-slate-800/30 dark:bg-slate-800/30 bg-gray-100/50">
                            <p className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">Click Rate</p>
                            <p className="text-2xl font-bold text-purple-400">{notification.clickRate}%</p>
                          </div>
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
                    {notification.status === 'draft' && (
                      <button className="flex items-center px-4 py-2 space-x-2 text-sm font-medium text-blue-400 transition-all duration-300 border rounded-lg bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30">
                        <Edit className="w-4 h-4" />
                        <span>Edit</span>
                      </button>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    {notification.status === 'draft' && (
                      <button className="flex items-center px-4 py-2 space-x-2 text-sm font-medium text-green-400 transition-all duration-300 border rounded-lg bg-green-500/20 border-green-500/30 hover:bg-green-500/30">
                        <Send className="w-4 h-4" />
                        <span>Send Now</span>
                      </button>
                    )}
                    {notification.status === 'scheduled' && (
                      <button className="flex items-center px-4 py-2 space-x-2 text-sm font-medium text-yellow-400 transition-all duration-300 border rounded-lg bg-yellow-500/20 border-yellow-500/30 hover:bg-yellow-500/30">
                        <Clock className="w-4 h-4" />
                        <span>Reschedule</span>
                      </button>
                    )}
                    <button className="flex items-center px-4 py-2 space-x-2 text-sm font-medium text-red-400 transition-all duration-300 border rounded-lg bg-red-500/20 border-red-500/30 hover:bg-red-500/30">
                      <Trash2 className="w-4 h-4" />
                      <span>Delete</span>
                    </button>
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

export default SuperAdminNotifications;