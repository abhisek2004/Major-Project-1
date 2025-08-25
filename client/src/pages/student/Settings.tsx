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
  Shield,
  Globe,
  Smartphone,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Save,
  Trash2,
  Download,
  Upload,
  AlertTriangle,
  CheckCircle,
  Moon,
  Sun
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Settings = () => {
  const { isDark, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('account');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const sidebarItems = [
    { icon: Target, label: 'Dashboard', path: '/student' },
    { icon: Target, label: 'Job Recommendations', path: '/student/jobs', badge: '24' },
    { icon: Briefcase, label: 'My Applications', path: '/student/applications' },
    { icon: MessageSquare, label: 'Mentorship Chat', path: '/student/mentorship', badge: '3' },
    { icon: BookOpen, label: 'Profile & Resume', path: '/student/profile' },
    { icon: Bell, label: 'Notifications', path: '/student/notifications', badge: '5' },
    { icon: User, label: 'Settings', path: '/student/settings' }
  ];

  const [settings, setSettings] = useState({
    account: {
      email: '22cse072.abhisekpanda@giet.edu',
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      twoFactorEnabled: false
    },
    notifications: {
      emailNotifications: true,
      pushNotifications: true,
      smsNotifications: false,
      jobRecommendations: true,
      applicationUpdates: true,
      interviewReminders: true,
      mentorMessages: true,
      weeklyDigest: true
    },
    privacy: {
      profileVisibility: 'public',
      showEmail: false,
      showPhone: false,
      allowMentorRequests: true,
      allowRecruiterContact: true,
      dataSharing: false
    },
    preferences: {
      language: 'en',
      timezone: 'America/Los_Angeles',
      dateFormat: 'MM/DD/YYYY',
      theme: isDark ? 'dark' : 'light',
      jobAlerts: true,
      autoApply: false
    }
  });

  const tabs = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'preferences', label: 'Preferences', icon: Globe },
    { id: 'data', label: 'Data & Export', icon: Download }
  ];

  const handleSettingChange = (category: string, setting: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [setting]: value
      }
    }));
  };

  return (
    <div className="min-h-screen bg-slate-950 dark:bg-slate-950 bg-gray-50 flex">
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
            <h1 className="text-3xl font-bold text-white dark:text-white text-gray-900 mb-2">Settings</h1>
            <p className="text-slate-400 dark:text-slate-400 text-gray-600">Manage your account preferences and privacy settings</p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex space-x-1 bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-xl p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ₹{activeTab === tab.id
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : 'text-slate-400 dark:text-slate-400 text-gray-600 hover:text-white dark:hover:text-white hover:text-gray-900 hover:bg-slate-800/50 dark:hover:bg-slate-800/50 hover:bg-gray-100/50'
                    }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {activeTab === 'account' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {/* Email Settings */}
                  <div className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900 mb-4">Email Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-slate-400 dark:text-slate-400 text-gray-600 text-sm mb-2">Email Address</label>
                        <input
                          type="email"
                          value={settings.account.email}
                          onChange={(e) => handleSettingChange('account', 'email', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border border-slate-600 dark:border-slate-600 border-gray-300 rounded-xl text-white dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <button className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300 text-sm font-medium">
                        Verify Email
                      </button>
                    </div>
                  </div>

                  {/* Password Settings */}
                  <div className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900 mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-slate-400 dark:text-slate-400 text-gray-600 text-sm mb-2">Current Password</label>
                        <div className="relative">
                          <input
                            type={showCurrentPassword ? 'text' : 'password'}
                            value={settings.account.currentPassword}
                            onChange={(e) => handleSettingChange('account', 'currentPassword', e.target.value)}
                            className="w-full px-4 py-3 pr-11 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border border-slate-600 dark:border-slate-600 border-gray-300 rounded-xl text-white dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <button
                            type="button"
                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-400 text-gray-600 hover:text-slate-300 dark:hover:text-slate-300 hover:text-gray-700 transition-colors"
                          >
                            {showCurrentPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-400 dark:text-slate-400 text-gray-600 text-sm mb-2">New Password</label>
                        <div className="relative">
                          <input
                            type={showNewPassword ? 'text' : 'password'}
                            value={settings.account.newPassword}
                            onChange={(e) => handleSettingChange('account', 'newPassword', e.target.value)}
                            className="w-full px-4 py-3 pr-11 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border border-slate-600 dark:border-slate-600 border-gray-300 rounded-xl text-white dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-400 text-gray-600 hover:text-slate-300 dark:hover:text-slate-300 hover:text-gray-700 transition-colors"
                          >
                            {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-400 dark:text-slate-400 text-gray-600 text-sm mb-2">Confirm New Password</label>
                        <input
                          type="password"
                          value={settings.account.confirmPassword}
                          onChange={(e) => handleSettingChange('account', 'confirmPassword', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border border-slate-600 dark:border-slate-600 border-gray-300 rounded-xl text-white dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <button className="px-4 py-2 bg-green-500/20 border border-green-500/30 text-green-400 rounded-lg hover:bg-green-500/30 transition-all duration-300 text-sm font-medium">
                        Update Password
                      </button>
                    </div>
                  </div>

                  {/* Two-Factor Authentication */}
                  <div className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900 mb-4">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-300 dark:text-slate-300 text-gray-700">Add an extra layer of security to your account</p>
                        <p className="text-slate-400 dark:text-slate-400 text-gray-600 text-sm mt-1">
                          {settings.account.twoFactorEnabled ? 'Two-factor authentication is enabled' : 'Two-factor authentication is disabled'}
                        </p>
                      </div>
                      <button
                        onClick={() => handleSettingChange('account', 'twoFactorEnabled', !settings.account.twoFactorEnabled)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ₹{settings.account.twoFactorEnabled ? 'bg-blue-500' : 'bg-slate-600 dark:bg-slate-600 bg-gray-400'
                          }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ₹{settings.account.twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'
                            }`}
                        />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'notifications' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {/* Notification Channels */}
                  <div className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900 mb-4">Notification Channels</h3>
                    <div className="space-y-4">
                      {[
                        { key: 'emailNotifications', label: 'Email Notifications', icon: Mail },
                        { key: 'pushNotifications', label: 'Push Notifications', icon: Bell },
                        { key: 'smsNotifications', label: 'SMS Notifications', icon: Smartphone }
                      ].map((channel) => (
                        <div key={channel.key} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <channel.icon className="h-5 w-5 text-slate-400 dark:text-slate-400 text-gray-600" />
                            <span className="text-white dark:text-white text-gray-900">{channel.label}</span>
                          </div>
                          <button
                            onClick={() => handleSettingChange('notifications', channel.key, !settings.notifications[channel.key as keyof typeof settings.notifications])}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ₹{settings.notifications[channel.key as keyof typeof settings.notifications] ? 'bg-blue-500' : 'bg-slate-600 dark:bg-slate-600 bg-gray-400'
                              }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ₹{settings.notifications[channel.key as keyof typeof settings.notifications] ? 'translate-x-6' : 'translate-x-1'
                                }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Notification Types */}
                  <div className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900 mb-4">Notification Types</h3>
                    <div className="space-y-4">
                      {[
                        { key: 'jobRecommendations', label: 'Job Recommendations', description: 'New job opportunities matching your profile' },
                        { key: 'applicationUpdates', label: 'Application Updates', description: 'Status changes on your job applications' },
                        { key: 'interviewReminders', label: 'Interview Reminders', description: 'Upcoming interview notifications' },
                        { key: 'mentorMessages', label: 'Mentor Messages', description: 'New messages from your mentors' },
                        { key: 'weeklyDigest', label: 'Weekly Digest', description: 'Summary of your weekly activity' }
                      ].map((type) => (
                        <div key={type.key} className="flex items-start justify-between">
                          <div>
                            <h4 className="text-white dark:text-white text-gray-900 font-medium">{type.label}</h4>
                            <p className="text-slate-400 dark:text-slate-400 text-gray-600 text-sm">{type.description}</p>
                          </div>
                          <button
                            onClick={() => handleSettingChange('notifications', type.key, !settings.notifications[type.key as keyof typeof settings.notifications])}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ₹{settings.notifications[type.key as keyof typeof settings.notifications] ? 'bg-blue-500' : 'bg-slate-600 dark:bg-slate-600 bg-gray-400'
                              }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ₹{settings.notifications[type.key as keyof typeof settings.notifications] ? 'translate-x-6' : 'translate-x-1'
                                }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'privacy' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {/* Profile Visibility */}
                  <div className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900 mb-4">Profile Visibility</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-slate-400 dark:text-slate-400 text-gray-600 text-sm mb-2">Who can see your profile?</label>
                        <select
                          value={settings.privacy.profileVisibility}
                          onChange={(e) => handleSettingChange('privacy', 'profileVisibility', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border border-slate-600 dark:border-slate-600 border-gray-300 rounded-xl text-white dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="public">Public - Anyone can see your profile</option>
                          <option value="recruiters">Recruiters Only - Only verified recruiters</option>
                          <option value="private">Private - Only you can see your profile</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900 mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      {[
                        { key: 'showEmail', label: 'Show Email Address', description: 'Allow others to see your email address' },
                        { key: 'showPhone', label: 'Show Phone Number', description: 'Allow others to see your phone number' }
                      ].map((setting) => (
                        <div key={setting.key} className="flex items-start justify-between">
                          <div>
                            <h4 className="text-white dark:text-white text-gray-900 font-medium">{setting.label}</h4>
                            <p className="text-slate-400 dark:text-slate-400 text-gray-600 text-sm">{setting.description}</p>
                          </div>
                          <button
                            onClick={() => handleSettingChange('privacy', setting.key, !settings.privacy[setting.key as keyof typeof settings.privacy])}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ₹{settings.privacy[setting.key as keyof typeof settings.privacy] ? 'bg-blue-500' : 'bg-slate-600 dark:bg-slate-600 bg-gray-400'
                              }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ₹{settings.privacy[setting.key as keyof typeof settings.privacy] ? 'translate-x-6' : 'translate-x-1'
                                }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Communication Preferences */}
                  <div className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900 mb-4">Communication Preferences</h3>
                    <div className="space-y-4">
                      {[
                        { key: 'allowMentorRequests', label: 'Allow Mentor Requests', description: 'Let alumni send you mentorship requests' },
                        { key: 'allowRecruiterContact', label: 'Allow Recruiter Contact', description: 'Let recruiters contact you directly' },
                        { key: 'dataSharing', label: 'Data Sharing', description: 'Share anonymized data for platform improvement' }
                      ].map((setting) => (
                        <div key={setting.key} className="flex items-start justify-between">
                          <div>
                            <h4 className="text-white dark:text-white text-gray-900 font-medium">{setting.label}</h4>
                            <p className="text-slate-400 dark:text-slate-400 text-gray-600 text-sm">{setting.description}</p>
                          </div>
                          <button
                            onClick={() => handleSettingChange('privacy', setting.key, !settings.privacy[setting.key as keyof typeof settings.privacy])}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ₹{settings.privacy[setting.key as keyof typeof settings.privacy] ? 'bg-blue-500' : 'bg-slate-600 dark:bg-slate-600 bg-gray-400'
                              }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ₹{settings.privacy[setting.key as keyof typeof settings.privacy] ? 'translate-x-6' : 'translate-x-1'
                                }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'preferences' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {/* General Preferences */}
                  <div className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900 mb-4">General Preferences</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-400 dark:text-slate-400 text-gray-600 text-sm mb-2">Language</label>
                        <select
                          value={settings.preferences.language}
                          onChange={(e) => handleSettingChange('preferences', 'language', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border border-slate-600 dark:border-slate-600 border-gray-300 rounded-xl text-white dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="en">English</option>
                          <option value="es">Spanish</option>
                          <option value="fr">French</option>
                          <option value="de">German</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-400 dark:text-slate-400 text-gray-600 text-sm mb-2">Timezone</label>
                        <select
                          value={settings.preferences.timezone}
                          onChange={(e) => handleSettingChange('preferences', 'timezone', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border border-slate-600 dark:border-slate-600 border-gray-300 rounded-xl text-white dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="America/Los_Angeles">Pacific Time</option>
                          <option value="America/Denver">Mountain Time</option>
                          <option value="America/Chicago">Central Time</option>
                          <option value="America/New_York">Eastern Time</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-400 dark:text-slate-400 text-gray-600 text-sm mb-2">Date Format</label>
                        <select
                          value={settings.preferences.dateFormat}
                          onChange={(e) => handleSettingChange('preferences', 'dateFormat', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border border-slate-600 dark:border-slate-600 border-gray-300 rounded-xl text-white dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                          <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                          <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-400 dark:text-slate-400 text-gray-600 text-sm mb-2">Theme</label>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={toggleTheme}
                            className="flex items-center space-x-2 px-4 py-3 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border border-slate-600 dark:border-slate-600 border-gray-300 rounded-xl text-white dark:text-white text-gray-900 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 hover:bg-gray-200/50 transition-all duration-300"
                          >
                            {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                            <span>{isDark ? 'Dark' : 'Light'}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Job Preferences */}
                  <div className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900 mb-4">Job Preferences</h3>
                    <div className="space-y-4">
                      {[
                        { key: 'jobAlerts', label: 'Job Alerts', description: 'Receive notifications for new job opportunities' },
                        { key: 'autoApply', label: 'Auto Apply', description: 'Automatically apply to jobs matching your criteria' }
                      ].map((setting) => (
                        <div key={setting.key} className="flex items-start justify-between">
                          <div>
                            <h4 className="text-white dark:text-white text-gray-900 font-medium">{setting.label}</h4>
                            <p className="text-slate-400 dark:text-slate-400 text-gray-600 text-sm">{setting.description}</p>
                          </div>
                          <button
                            onClick={() => handleSettingChange('preferences', setting.key, !settings.preferences[setting.key as keyof typeof settings.preferences])}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ₹{settings.preferences[setting.key as keyof typeof settings.preferences] ? 'bg-blue-500' : 'bg-slate-600 dark:bg-slate-600 bg-gray-400'
                              }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ₹{settings.preferences[setting.key as keyof typeof settings.preferences] ? 'translate-x-6' : 'translate-x-1'
                                }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'data' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {/* Data Export */}
                  <div className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900 mb-4">Data Export</h3>
                    <p className="text-slate-400 dark:text-slate-400 text-gray-600 mb-4">
                      Download a copy of your data including profile information, applications, and chat history.
                    </p>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all duration-300">
                      <Download className="h-4 w-4" />
                      <span>Export My Data</span>
                    </button>
                  </div>

                  {/* Data Import */}
                  <div className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900 mb-4">Data Import</h3>
                    <p className="text-slate-400 dark:text-slate-400 text-gray-600 mb-4">
                      Import your data from other platforms to enhance your profile.
                    </p>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-green-500/20 border border-green-500/30 text-green-400 rounded-lg hover:bg-green-500/30 transition-all duration-300">
                      <Upload className="h-4 w-4" />
                      <span>Import Data</span>
                    </button>
                  </div>

                  {/* Account Deletion */}
                  <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-6 w-6 text-red-400 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-red-400 mb-2">Delete Account</h3>
                        <p className="text-slate-400 dark:text-slate-400 text-gray-600 mb-4">
                          Permanently delete your account and all associated data. This action cannot be undone.
                        </p>
                        <button className="flex items-center space-x-2 px-4 py-2 bg-red-500/20 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/30 transition-all duration-300">
                          <Trash2 className="h-4 w-4" />
                          <span>Delete Account</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Save Changes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-white dark:text-white text-gray-900 mb-4">Save Changes</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-green-500/20 border border-green-500/30 text-green-400 rounded-lg hover:bg-green-500/30 transition-all duration-300">
                    <Save className="h-4 w-4" />
                    <span>Save All Changes</span>
                  </button>
                  <p className="text-slate-400 dark:text-slate-400 text-gray-600 text-xs text-center">
                    Changes are saved automatically
                  </p>
                </div>
              </motion.div>

              {/* Account Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-white dark:text-white text-gray-900 mb-4">Account Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-slate-300 dark:text-slate-300 text-gray-700 text-sm">Email Verified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-slate-300 dark:text-slate-300 text-gray-700 text-sm">Profile Complete</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-400" />
                    <span className="text-slate-300 dark:text-slate-300 text-gray-700 text-sm">2FA Disabled</span>
                  </div>
                </div>
              </motion.div>

              {/* Help & Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-white dark:text-white text-gray-900 mb-4">Help & Support</h3>
                <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 text-slate-400 dark:text-slate-400 text-gray-600 hover:text-white dark:hover:text-white hover:text-gray-900 hover:bg-slate-800/50 dark:hover:bg-slate-800/50 hover:bg-gray-100/50 rounded-lg transition-all duration-300 text-sm">
                    Privacy Policy
                  </button>
                  <button className="w-full text-left px-3 py-2 text-slate-400 dark:text-slate-400 text-gray-600 hover:text-white dark:hover:text-white hover:text-gray-900 hover:bg-slate-800/50 dark:hover:bg-slate-800/50 hover:bg-gray-100/50 rounded-lg transition-all duration-300 text-sm">
                    Terms of Service
                  </button>
                  <button className="w-full text-left px-3 py-2 text-slate-400 dark:text-slate-400 text-gray-600 hover:text-white dark:hover:text-white hover:text-gray-900 hover:bg-slate-800/50 dark:hover:bg-slate-800/50 hover:bg-gray-100/50 rounded-lg transition-all duration-300 text-sm">
                    Contact Support
                  </button>
                  <button className="w-full text-left px-3 py-2 text-slate-400 dark:text-slate-400 text-gray-600 hover:text-white dark:hover:text-white hover:text-gray-900 hover:bg-slate-800/50 dark:hover:bg-slate-800/50 hover:bg-gray-100/50 rounded-lg transition-all duration-300 text-sm">
                    FAQ
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;