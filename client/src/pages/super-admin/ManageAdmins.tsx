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
  Users,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  UserCheck,
  UserX,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award
} from 'lucide-react';

const ManageAdmins = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', path: '/super-admin' },
    { icon: Shield, label: 'Manage Admins', path: '/super-admin/admins', badge: '5' },
    { icon: Briefcase, label: 'Approve Jobs', path: '/super-admin/jobs', badge: '12' },
    { icon: FileText, label: 'Global Reports', path: '/super-admin/reports' },
    { icon: TrendingUp, label: 'Analytics', path: '/super-admin/analytics' },
    { icon: Bell, label: 'Notifications', path: '/super-admin/notifications', badge: '8' },
    { icon: Settings, label: 'Settings', path: '/super-admin/settings' }
  ];

  const admins = [
    {
      id: 1,
      name: 'Dr. Premansu Sekhar Rath',
      email: 'premansu@giet.edu',
      phone: '+91 9876543210',
      university: 'GIET University',
      department: 'Computer Science',
      role: 'Admin',
      status: 'active',
      lastLogin: '2025-01-14T16:45:00Z',
      joinedDate: '2017-08-15',
      permissions: ['job_approval', 'student_management', 'reports'],
      studentsManaged: 1247,
      jobsApproved: 89,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face'
    }
    // {
    //   id: 2,
    //   name: 'Michael Chen',
    //   email: 'michael.chen@stanford.edu',
    //   phone: '+1 (555) 234-5678',
    //   university: 'GIET University',
    //   department: 'Engineering',
    //   role: 'Admin',
    //   status: 'active',
    //   lastLogin: '2024-01-14T16:45:00Z',
    //   joinedDate: '2023-09-20',
    //   permissions: ['job_approval', 'student_management', 'analytics'],
    //   studentsManaged: 1156,
    //   jobsApproved: 76,
    //   avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face'
    // },
    // {
    //   id: 3,
    //   name: 'Sarah Wilson',
    //   email: 'sarah.wilson@harvard.edu',
    //   phone: '+1 (555) 345-6789',
    //   university: 'Harvard University',
    //   department: 'Business',
    //   role: 'Admin',
    //   status: 'inactive',
    //   lastLogin: '2024-01-10T09:20:00Z',
    //   joinedDate: '2023-07-10',
    //   permissions: ['job_approval', 'reports'],
    //   studentsManaged: 987,
    //   jobsApproved: 54,
    //   avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face'
    // },
    // {
    //   id: 4,
    //   name: 'David Rodriguez',
    //   email: 'david.rodriguez@berkeley.edu',
    //   phone: '+1 (555) 456-7890',
    //   university: 'UC Berkeley',
    //   department: 'Data Science',
    //   role: 'Admin',
    //   status: 'pending',
    //   lastLogin: null,
    //   joinedDate: '2024-01-12',
    //   permissions: ['job_approval'],
    //   studentsManaged: 0,
    //   jobsApproved: 0,
    //   avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face'
    // },
    // {
    //   id: 5,
    //   name: 'Ananya Das',
    //   email: 'emily.johnson@caltech.edu',
    //   phone: '+1 (555) 567-8901',
    //   university: 'Caltech',
    //   department: 'Physics',
    //   role: 'Admin',
    //   status: 'suspended',
    //   lastLogin: '2024-01-05T14:15:00Z',
    //   joinedDate: '2023-11-03',
    //   permissions: [],
    //   studentsManaged: 456,
    //   jobsApproved: 23,
    //   avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face'
    // }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-400';
      case 'inactive':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'pending':
        return 'bg-blue-500/20 text-blue-400';
      case 'suspended':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-slate-500/20 text-slate-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <UserCheck className="w-4 h-4" />;
      case 'inactive':
        return <UserX className="w-4 h-4" />;
      case 'pending':
        return <Users className="w-4 h-4" />;
      case 'suspended':
        return <UserX className="w-4 h-4" />;
      default:
        return <Users className="w-4 h-4" />;
    }
  };

  const formatLastLogin = (timestamp: string | null) => {
    if (!timestamp) return 'Never';
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 24) return `₹{diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `₹{diffInDays}d ago`;
    return date.toLocaleDateString();
  };

  const filteredAdmins = admins.filter(admin => {
    const matchesSearch = admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.university.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || admin.status === statusFilter;
    return matchesSearch && matchesStatus;
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
                <h1 className="mb-2 text-3xl font-bold text-white text-gray-900 dark:text-white">Manage Admins</h1>
                <p className="text-gray-600 text-slate-400 dark:text-slate-400">Oversee admin accounts and permissions across all universities</p>
              </div>
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center px-6 py-3 space-x-2 font-medium text-white transition-all duration-300 transform shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl hover:scale-105 hover:shadow-blue-500/25"
              >
                <Plus className="w-5 h-5" />
                <span>Add New Admin</span>
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
                  <p className="text-sm font-medium text-gray-600 text-slate-400 dark:text-slate-400">Total Admins</p>
                  <p className="text-2xl font-bold text-white text-gray-900 dark:text-white">{admins.length}</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                  <Users className="w-6 h-6 text-blue-400" />
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
                  <p className="text-sm font-medium text-gray-600 text-slate-400 dark:text-slate-400">Active</p>
                  <p className="text-2xl font-bold text-white text-gray-900 dark:text-white">
                    {admins.filter(admin => admin.status === 'active').length}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                  <UserCheck className="w-6 h-6 text-green-400" />
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
                  <p className="text-sm font-medium text-gray-600 text-slate-400 dark:text-slate-400">Pending</p>
                  <p className="text-2xl font-bold text-white text-gray-900 dark:text-white">
                    {admins.filter(admin => admin.status === 'pending').length}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
                  <Users className="w-6 h-6 text-yellow-400" />
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
                  <p className="text-sm font-medium text-gray-600 text-slate-400 dark:text-slate-400">Universities</p>
                  <p className="text-2xl font-bold text-white text-gray-900 dark:text-white">
                    {new Set(admins.map(admin => admin.university)).size}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <Award className="w-6 h-6 text-purple-400" />
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
                  placeholder="Search admins by name, email, or university..."
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
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                  <option value="suspended">Suspended</option>
                </select>

                <button className="p-3 text-gray-600 transition-all duration-300 border bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border-slate-700/50 dark:border-slate-700/50 border-gray-300/50 text-slate-400 dark:text-slate-400 rounded-xl hover:bg-slate-700/50 dark:hover:bg-slate-700/50 hover:bg-gray-200/50">
                  <Filter className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Admins List */}
          <div className="space-y-6">
            {filteredAdmins.map((admin, index) => (
              <motion.div
                key={admin.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="p-6 transition-all duration-300 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl hover:border-slate-600/50 dark:hover:border-slate-600/50 hover:border-gray-300/50"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <img
                      src={admin.avatar}
                      alt={admin.name}
                      className="w-16 h-16 border-2 border-gray-300 rounded-full border-slate-600 dark:border-slate-600"
                    />

                    <div className="flex-1">
                      <div className="flex items-center mb-2 space-x-3">
                        <h3 className="text-lg font-semibold text-white text-gray-900 dark:text-white">{admin.name}</h3>
                        <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ₹{getStatusColor(admin.status)}`}>
                          {getStatusIcon(admin.status)}
                          <span className="capitalize">{admin.status}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-4">
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-gray-500 text-slate-400 dark:text-slate-400" />
                          <span className="text-sm text-gray-700 text-slate-300 dark:text-slate-300">{admin.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-gray-500 text-slate-400 dark:text-slate-400" />
                          <span className="text-sm text-gray-700 text-slate-300 dark:text-slate-300">{admin.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-gray-500 text-slate-400 dark:text-slate-400" />
                          <span className="text-sm text-gray-700 text-slate-300 dark:text-slate-300">{admin.university}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-gray-500 text-slate-400 dark:text-slate-400" />
                          <span className="text-sm text-gray-700 text-slate-300 dark:text-slate-300">Joined {new Date(admin.joinedDate).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <div className="flex items-center mb-4 space-x-6">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-white text-gray-900 dark:text-white">{admin.studentsManaged.toLocaleString()}</p>
                          <p className="text-xs text-gray-600 text-slate-400 dark:text-slate-400">Students Managed</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-white text-gray-900 dark:text-white">{admin.jobsApproved}</p>
                          <p className="text-xs text-gray-600 text-slate-400 dark:text-slate-400">Jobs Approved</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-white text-gray-900 dark:text-white">{formatLastLogin(admin.lastLogin)}</p>
                          <p className="text-xs text-gray-600 text-slate-400 dark:text-slate-400">Last Login</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 text-xs font-medium text-blue-400 rounded-lg bg-blue-500/20">
                          {admin.department}
                        </span>
                        {admin.permissions.map((permission) => (
                          <span key={permission} className="px-2 py-1 text-xs font-medium text-purple-400 rounded-lg bg-purple-500/20">
                            {permission.replace('_', ' ')}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-600 transition-all duration-300 border rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-gray-200/50 border-slate-700/50 dark:border-slate-700/50 border-gray-300/50 text-slate-400 dark:text-slate-400 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 hover:bg-gray-300/50">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-blue-400 transition-all duration-300 border rounded-lg bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30">
                      <Edit className="w-4 h-4" />
                    </button>
                    {admin.status === 'active' ? (
                      <button className="p-2 text-yellow-400 transition-all duration-300 border rounded-lg bg-yellow-500/20 border-yellow-500/30 hover:bg-yellow-500/30">
                        <UserX className="w-4 h-4" />
                      </button>
                    ) : admin.status === 'pending' ? (
                      <button className="p-2 text-green-400 transition-all duration-300 border rounded-lg bg-green-500/20 border-green-500/30 hover:bg-green-500/30">
                        <UserCheck className="w-4 h-4" />
                      </button>
                    ) : (
                      <button className="p-2 text-green-400 transition-all duration-300 border rounded-lg bg-green-500/20 border-green-500/30 hover:bg-green-500/30">
                        <UserCheck className="w-4 h-4" />
                      </button>
                    )}
                    <button className="p-2 text-red-400 transition-all duration-300 border rounded-lg bg-red-500/20 border-red-500/30 hover:bg-red-500/30">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredAdmins.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="py-12 text-center"
            >
              <Users className="w-16 h-16 mx-auto mb-4 text-gray-500 text-slate-400 dark:text-slate-400" />
              <h3 className="mb-2 text-xl font-semibold text-white text-gray-900 dark:text-white">No Admins Found</h3>
              <p className="text-gray-600 text-slate-400 dark:text-slate-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageAdmins;