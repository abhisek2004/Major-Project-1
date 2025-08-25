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
  Settings as SettingsIcon,
  Save,
  Database,
  Globe,
  Lock,
  Mail,
  Smartphone,
  Users,
  AlertTriangle,
  CheckCircle,
  Server,
  Activity,
  HardDrive,
  Wifi,
  Eye,
  EyeOff
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const SuperAdminSettings = () => {
  const { isDark, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('general');
  const [showApiKey, setShowApiKey] = useState(false);

  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', path: '/super-admin' },
    { icon: Shield, label: 'Manage Admins', path: '/super-admin/admins', badge: '5' },
    { icon: Briefcase, label: 'Approve Jobs', path: '/super-admin/jobs', badge: '12' },
    { icon: FileText, label: 'Global Reports', path: '/super-admin/reports' },
    { icon: TrendingUp, label: 'Analytics', path: '/super-admin/analytics' },
    { icon: Bell, label: 'Notifications', path: '/super-admin/notifications', badge: '8' },
    { icon: SettingsIcon, label: 'Settings', path: '/super-admin/settings' }
  ];

  const [settings, setSettings] = useState({
    general: {
      platformName: 'FutureMesh',
      platformDescription: 'AI-powered career development platform connecting students, alumni, and employers',
      supportEmail: 'support@futuremesh.com',
      maintenanceMode: false,
      registrationEnabled: true,
      maxUsersPerUniversity: 10000
    },
    security: {
      twoFactorRequired: true,
      passwordMinLength: 8,
      sessionTimeout: 24,
      maxLoginAttempts: 5,
      apiRateLimit: 1000,
      encryptionEnabled: true
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true,
      systemAlerts: true,
      maintenanceNotifications: true,
      securityAlerts: true
    },
    integrations: {
      emailProvider: 'sendgrid',
      smsProvider: 'twilio',
      analyticsProvider: 'google',
      storageProvider: 'aws',
      apiKey: 'sk-1234567890abcdef...',
      webhookUrl: 'https://api.futuremesh.com/webhooks'
    },
    system: {
      backupFrequency: 'daily',
      logRetention: 90,
      cacheEnabled: true,
      compressionEnabled: true,
      cdnEnabled: true,
      autoScaling: true
    }
  });

  const tabs = [
    { id: 'general', label: 'General', icon: Globe },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'integrations', label: 'Integrations', icon: Database },
    { id: 'system', label: 'System', icon: Server }
  ];

  const systemMetrics = [
    { label: 'Server Uptime', value: '99.9%', status: 'healthy', icon: Server },
    { label: 'Database Performance', value: '45ms', status: 'healthy', icon: Database },
    { label: 'API Response Time', value: '120ms', status: 'warning', icon: Activity },
    { label: 'Storage Usage', value: '67%', status: 'healthy', icon: HardDrive },
    { label: 'Network Latency', value: '23ms', status: 'healthy', icon: Wifi },
    { label: 'Active Connections', value: '1,247', status: 'healthy', icon: Users }
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'text-green-400';
      case 'warning':
        return 'text-yellow-400';
      case 'error':
        return 'text-red-400';
      default:
        return 'text-slate-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-400" />;
      case 'error':
        return <AlertTriangle className="h-4 w-4 text-red-400" />;
      default:
        return <CheckCircle className="h-4 w-4 text-slate-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 dark:bg-slate-950 bg-gray-50 flex">
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
                <h1 className="text-3xl font-bold text-white dark:text-white text-gray-900 mb-2">Platform Settings</h1>
                <p className="text-slate-400 dark:text-slate-400 text-gray-600">Configure global platform settings and system preferences</p>
              </div>
              <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
                <Save className="h-5 w-5" />
                <span>Save All Changes</span>
              </button>
            </div>
          </motion.div>

          {/* System Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6 mb-8"
          >
            <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900 mb-6">System Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {systemMetrics.map((metric, index) => (
                <div key={metric.label} className="flex items-center justify-between p-4 bg-slate-800/30 dark:bg-slate-800/30 bg-gray-100/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <metric.icon className={`h-5 w-5 ₹{getStatusColor(metric.status)}`} />
                    <span className="text-slate-300 dark:text-slate-300 text-gray-700 text-sm">{metric.label}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`font-medium ₹{getStatusColor(metric.status)}`}>{metric.value}</span>
                    {getStatusIcon(metric.status)}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <div className="flex space-x-1 bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-xl p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ₹{
                    activeTab === tab.id
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
              {activeTab === 'general' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900 mb-4">Platform Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-slate-400 dark:text-slate-400 text-gray-600 text-sm mb-2">Platform Name</label>
                        <input
                          type="text"
                          value={settings.general.platformName}
                          onChange={(e) => handleSettingChange('general', 'platformName', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border border-slate-600 dark:border-slate-600 border-gray-300 rounded-xl text-white dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-400 dark:text-slate-400 text-gray-600 text-sm mb-2">Platform Description</label>
                        <textarea
                          value={settings.general.platformDescription}
                          onChange={(e) => handleSettingChange('general', 'platformDescription', e.target.value)}
                          rows={3}
                          className="w-full px-4 py-3 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border border-slate-600 dark:border-slate-600 border-gray-300 rounded-xl text-white dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-400 dark:text-slate-400 text-gray-600 text-sm mb-2">Support Email</label>
                        <input
                          type="email"
                          value={settings.general.supportEmail}
                          onChange={(e) => handleSettingChange('general', 'supportEmail', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border border-slate-600 dark:border-slate-600 border-gray-300 rounded-xl text-white dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-400 dark:text-slate-400 text-gray-600 text-sm mb-2">Max Users Per University</label>
                        <input
                          type="number"
                          value={settings.general.maxUsersPerUniversity}
                          onChange={(e) => handleSettingChange('general', 'maxUsersPerUniversity', parseInt(e.target.value))}
                          className="w-full px-4 py-3 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border border-slate-600 dark:border-slate-600 border-gray-300 rounded-xl text-white dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900 mb-4">Platform Controls</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white dark:text-white text-gray-900 font-medium">Maintenance Mode</h4>
                          <p className="text-slate-400 dark:text-slate-400 text-gray-600 text-sm">Temporarily disable platform access for maintenance</p>
                        </div>
                        <button
                          onClick={() => handleSettingChange('general', 'maintenanceMode', !settings.general.maintenanceMode)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ₹{
                            settings.general.maintenanceMode ? 'bg-red-500' : 'bg-slate-600 dark:bg-slate-600 bg-gray-400'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ₹{
                              settings.general.maintenanceMode ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white dark:text-white text-gray-900 font-medium">Registration Enabled</h4>
                          <p className="text-slate-400 dark:text-slate-400 text-gray-600 text-sm">Allow new users to register on the platform</p>
                        </div>
                        <button
                          onClick={() => handleSettingChange('general', 'registrationEnabled', !settings.general.registrationEnabled)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ₹{
                            settings.general.registrationEnabled ? 'bg-blue-500' : 'bg-slate-600 dark:bg-slate-600 bg-gray-400'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ₹{
                              settings.general.registrationEnabled ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'security' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900 mb-4">Authentication Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white dark:text-white text-gray-900 font-medium">Require Two-Factor Authentication</h4>
                          <p className="text-slate-400 dark:text-slate-400 text-gray-600 text-sm">Enforce 2FA for all admin accounts</p>
                        </div>
                        <button
                          onClick={() => handleSettingChange('security', 'twoFactorRequired', !settings.security.twoFactorRequired)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ₹{
                            settings.security.twoFactorRequired ? 'bg-blue-500' : 'bg-slate-600 dark:bg-slate-600 bg-gray-400'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ₹{
                              settings.security.twoFactorRequired ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>

                      <div>
                        <label className="block text-slate-400 dark:text-slate-400 text-gray-600 text-sm mb-2">Minimum Password Length</label>
                        <input
                          type="number"
                          value={settings.security.passwordMinLength}
                          onChange={(e) => handleSettingChange('security', 'passwordMinLength', parseInt(e.target.value))}
                          className="w-full px-4 py-3 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border border-slate-600 dark:border-slate-600 border-gray-300 rounded-xl text-white dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-400 dark:text-slate-400 text-gray-600 text-sm mb-2">Session Timeout (hours)</label>
                        <input
                          type="number"
                          value={settings.security.sessionTimeout}
                          onChange={(e) => handleSettingChange('security', 'sessionTimeout', parseInt(e.target.value))}
                          className="w-full px-4 py-3 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border border-slate-600 dark:border-slate-600 border-gray-300 rounded-xl text-white dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-400 dark:text-slate-400 text-gray-600 text-sm mb-2">Max Login Attempts</label>
                        <input
                          type="number"
                          value={settings.security.maxLoginAttempts}
                          onChange={(e) => handleSettingChange('security', 'maxLoginAttempts', parseInt(e.target.value))}
                          className="w-full px-4 py-3 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border border-slate-600 dark:border-slate-600 border-gray-300 rounded-xl text-white dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900 mb-4">API Security</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-slate-400 dark:text-slate-400 text-gray-600 text-sm mb-2">API Rate Limit (requests/hour)</label>
                        <input
                          type="number"
                          value={settings.security.apiRateLimit}
                          onChange={(e) => handleSettingChange('security', 'apiRateLimit', parseInt(e.target.value))}
                          className="w-full px-4 py-3 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border border-slate-600 dark:border-slate-600 border-gray-300 rounded-xl text-white dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white dark:text-white text-gray-900 font-medium">Data Encryption</h4>
                          <p className="text-slate-400 dark:text-slate-400 text-gray-600 text-sm">Enable end-to-end encryption for sensitive data</p>
                        </div>
                        <button
                          onClick={() => handleSettingChange('security', 'encryptionEnabled', !settings.security.encryptionEnabled)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ₹{
                            settings.security.encryptionEnabled ? 'bg-blue-500' : 'bg-slate-600 dark:bg-slate-600 bg-gray-400'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ₹{
                              settings.security.encryptionEnabled ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'integrations' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900 mb-4">Service Providers</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-400 dark:text-slate-400 text-gray-600 text-sm mb-2">Email Provider</label>
                        <select
                          value={settings.integrations.emailProvider}
                          onChange={(e) => handleSettingChange('integrations', 'emailProvider', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border border-slate-600 dark:border-slate-600 border-gray-300 rounded-xl text-white dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="sendgrid">SendGrid</option>
                          <option value="mailgun">Mailgun</option>
                          <option value="ses">Amazon SES</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-400 dark:text-slate-400 text-gray-600 text-sm mb-2">SMS Provider</label>
                        <select
                          value={settings.integrations.smsProvider}
                          onChange={(e) => handleSettingChange('integrations', 'smsProvider', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border border-slate-600 dark:border-slate-600 border-gray-300 rounded-xl text-white dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="twilio">Twilio</option>
                          <option value="nexmo">Nexmo</option>
                          <option value="sns">Amazon SNS</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-400 dark:text-slate-400 text-gray-600 text-sm mb-2">Analytics Provider</label>
                        <select
                          value={settings.integrations.analyticsProvider}
                          onChange={(e) => handleSettingChange('integrations', 'analyticsProvider', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border border-slate-600 dark:border-slate-600 border-gray-300 rounded-xl text-white dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="google">Google Analytics</option>
                          <option value="mixpanel">Mixpanel</option>
                          <option value="amplitude">Amplitude</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-400 dark:text-slate-400 text-gray-600 text-sm mb-2">Storage Provider</label>
                        <select
                          value={settings.integrations.storageProvider}
                          onChange={(e) => handleSettingChange('integrations', 'storageProvider', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border border-slate-600 dark:border-slate-600 border-gray-300 rounded-xl text-white dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="aws">Amazon S3</option>
                          <option value="gcp">Google Cloud Storage</option>
                          <option value="azure">Azure Blob Storage</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900 mb-4">API Configuration</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-slate-400 dark:text-slate-400 text-gray-600 text-sm mb-2">API Key</label>
                        <div className="relative">
                          <input
                            type={showApiKey ? 'text' : 'password'}
                            value={settings.integrations.apiKey}
                            onChange={(e) => handleSettingChange('integrations', 'apiKey', e.target.value)}
                            className="w-full px-4 py-3 pr-11 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border border-slate-600 dark:border-slate-600 border-gray-300 rounded-xl text-white dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <button
                            type="button"
                            onClick={() => setShowApiKey(!showApiKey)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-400 text-gray-600 hover:text-slate-300 dark:hover:text-slate-300 hover:text-gray-700 transition-colors"
                          >
                            {showApiKey ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-400 dark:text-slate-400 text-gray-600 text-sm mb-2">Webhook URL</label>
                        <input
                          type="url"
                          value={settings.integrations.webhookUrl}
                          onChange={(e) => handleSettingChange('integrations', 'webhookUrl', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border border-slate-600 dark:border-slate-600 border-gray-300 rounded-xl text-white dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'system' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900 mb-4">System Configuration</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-slate-400 dark:text-slate-400 text-gray-600 text-sm mb-2">Backup Frequency</label>
                        <select
                          value={settings.system.backupFrequency}
                          onChange={(e) => handleSettingChange('system', 'backupFrequency', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border border-slate-600 dark:border-slate-600 border-gray-300 rounded-xl text-white dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="hourly">Hourly</option>
                          <option value="daily">Daily</option>
                          <option value="weekly">Weekly</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-400 dark:text-slate-400 text-gray-600 text-sm mb-2">Log Retention (days)</label>
                        <input
                          type="number"
                          value={settings.system.logRetention}
                          onChange={(e) => handleSettingChange('system', 'logRetention', parseInt(e.target.value))}
                          className="w-full px-4 py-3 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border border-slate-600 dark:border-slate-600 border-gray-300 rounded-xl text-white dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900 mb-4">Performance Optimization</h3>
                    <div className="space-y-4">
                      {[
                        { key: 'cacheEnabled', label: 'Enable Caching', description: 'Improve response times with intelligent caching' },
                        { key: 'compressionEnabled', label: 'Enable Compression', description: 'Reduce bandwidth usage with gzip compression' },
                        { key: 'cdnEnabled', label: 'Enable CDN', description: 'Serve static assets from global CDN' },
                        { key: 'autoScaling', label: 'Auto Scaling', description: 'Automatically scale resources based on demand' }
                      ].map((setting) => (
                        <div key={setting.key} className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white dark:text-white text-gray-900 font-medium">{setting.label}</h4>
                            <p className="text-slate-400 dark:text-slate-400 text-gray-600 text-sm">{setting.description}</p>
                          </div>
                          <button
                            onClick={() => handleSettingChange('system', setting.key, !settings.system[setting.key as keyof typeof settings.system])}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ₹{
                              settings.system[setting.key as keyof typeof settings.system] ? 'bg-blue-500' : 'bg-slate-600 dark:bg-slate-600 bg-gray-400'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ₹{
                                settings.system[setting.key as keyof typeof settings.system] ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-white dark:text-white text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 hover:bg-green-500/30 transition-all duration-300 text-sm">
                    <Save className="h-4 w-4" />
                    <span>Save All Settings</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-all duration-300 text-sm">
                    <Database className="h-4 w-4" />
                    <span>Backup Database</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-orange-500/20 border border-orange-500/30 rounded-lg text-orange-400 hover:bg-orange-500/30 transition-all duration-300 text-sm">
                    <Server className="h-4 w-4" />
                    <span>Restart Services</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-500/30 transition-all duration-300 text-sm">
                    <AlertTriangle className="h-4 w-4" />
                    <span>Emergency Mode</span>
                  </button>
                </div>
              </motion.div>

              {/* Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-white dark:text-white text-gray-900 mb-4">Appearance</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white dark:text-white text-gray-900 font-medium">Theme</h4>
                    <p className="text-slate-400 dark:text-slate-400 text-gray-600 text-sm">Switch between light and dark mode</p>
                  </div>
                  <button
                    onClick={toggleTheme}
                    className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-200/50 border border-slate-700/50 dark:border-slate-700/50 border-gray-300/50 text-slate-400 dark:text-slate-400 text-gray-600 rounded-lg hover:bg-slate-700/50 dark:hover:bg-slate-700/50 hover:bg-gray-300/50 transition-all duration-300 text-sm"
                  >
                    {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    <span>{isDark ? 'Light' : 'Dark'}</span>
                  </button>
                </div>
              </motion.div>

              {/* Recent Changes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-white dark:text-white text-gray-900 mb-4">Recent Changes</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-slate-300 dark:text-slate-300 text-gray-700">Security settings updated</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-slate-300 dark:text-slate-300 text-gray-700">Email provider configured</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-slate-300 dark:text-slate-300 text-gray-700">Backup frequency changed</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminSettings;