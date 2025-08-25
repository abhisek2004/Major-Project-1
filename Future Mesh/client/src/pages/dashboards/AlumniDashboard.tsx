import React from 'react';
import { motion } from 'framer-motion';
import DashboardSidebar from '../../components/DashboardSidebar';
import DashboardCard from '../../components/DashboardCard';
import {
  BarChart3,
  Users,
  MessageSquare,
  Share2,
  Bell,
  User,
  Heart,
  Star,
  BookOpen,
  TrendingUp,
  Clock,
  Award,
  CheckCircle
} from 'lucide-react';

const AlumniDashboard = () => {
  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', path: '/alumni' },
    { icon: Users, label: 'Mentorship Requests', path: '/alumni/requests', badge: '8' },
    { icon: MessageSquare, label: 'Chat with Students', path: '/alumni/chat', badge: '12' },
    { icon: Share2, label: 'Share Resources', path: '/alumni/resources' },
    { icon: BookOpen, label: 'Career Tips', path: '/alumni/tips' },
    { icon: Bell, label: 'Notifications', path: '/alumni/notifications', badge: '4' },
    { icon: User, label: 'Profile', path: '/alumni/profile' }
  ];

  const statsCards = [
    {
      title: 'Students Mentored',
      value: '47',
      icon: Users,
      change: { value: '+12', type: 'increase' as const },
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Pending Requests',
      value: '8',
      icon: Clock,
      change: { value: '+3', type: 'increase' as const },
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Active Chats',
      value: '12',
      icon: MessageSquare,
      change: { value: '+2', type: 'increase' as const },
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Impact Score',
      value: '94.2',
      icon: Star,
      change: { value: '+5.2', type: 'increase' as const },
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const mentorshipRequests = [
    {
      name: 'Sarah Martinez',
      department: 'Computer Science',
      year: '2024',
      request: 'Looking for guidance on transitioning from academia to industry, specifically in software engineering roles.',
      skills: ['JavaScript', 'React', 'Node.js'],
      time: '2 hours ago',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face'
    },
    {
      name: 'David Chen',
      department: 'Data Science',
      year: '2025',
      request: 'Need advice on building a data science portfolio and preparing for technical interviews at FAANG companies.',
      skills: ['Python', 'Machine Learning', 'SQL'],
      time: '5 hours ago',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      department: 'Product Management',
      year: '2024',
      request: 'Seeking mentorship for breaking into product management. Would love to learn about day-to-day responsibilities.',
      skills: ['Product Strategy', 'Analytics', 'Design'],
      time: '1 day ago',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face'
    }
  ];

  const activeChats = [
    {
      name: 'Abhisek Panda',
      lastMessage: 'Thank you for the interview tips! I have my Google interview next week.',
      time: '10 min ago',
      unread: 0,
      status: 'preparing for interview',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=face'
    },
    {
      name: 'Maria Garcia',
      lastMessage: 'Could you review my resume once more before I submit applications?',
      time: '1 hour ago',
      unread: 2,
      status: 'job searching',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=face'
    },
    {
      name: 'James Wilson',
      lastMessage: 'The networking event was great! I made some valuable connections.',
      time: '2 hours ago',
      unread: 0,
      status: 'networking',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=face'
    },
    {
      name: 'Lisa Zhang',
      lastMessage: 'I got the internship at Microsoft! Thank you for your guidance.',
      time: '3 hours ago',
      unread: 1,
      status: 'offer received',
      avatar: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=face'
    }
  ];

  const recentAchievements = [
    {
      student: 'Abhisek Panda',
      achievement: 'Landed Software Engineer role at Google',
      date: '2 days ago',
      type: 'job_offer'
    },
    {
      student: 'Maria Garcia',
      achievement: 'Completed 3-month mentorship program',
      date: '1 week ago',
      type: 'completion'
    },
    {
      student: 'James Wilson',
      achievement: 'Improved interview skills (5/5 rating)',
      date: '2 weeks ago',
      type: 'skill_improvement'
    },
    {
      student: 'Lisa Zhang',
      achievement: 'Published first research paper',
      date: '3 weeks ago',
      type: 'academic'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex">
      <DashboardSidebar
        items={sidebarItems}
        userRole="alumni"
        userName="Michael Rodriguez"
        userAvatar="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
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
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Michael! 🌟</h1>
            <p className="text-slate-400">Continue making a difference in students' careers</p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCards.map((card, index) => (
              <DashboardCard key={card.title} {...card} delay={index * 0.1} />
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mentorship Requests */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 mb-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Mentorship Requests</h3>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                    View All Requests
                  </button>
                </div>

                <div className="space-y-6">
                  {mentorshipRequests.map((request, index) => (
                    <div key={index} className="p-5 bg-slate-800/30 rounded-xl border border-slate-700/30">
                      <div className="flex items-start space-x-4">
                        <img
                          src={request.avatar}
                          alt={request.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="text-white font-semibold">{request.name}</h4>
                              <p className="text-slate-400 text-sm">{request.department} • Class of {request.year}</p>
                            </div>
                            <span className="text-slate-400 text-sm">{request.time}</span>
                          </div>

                          <p className="text-slate-300 text-sm mb-4 leading-relaxed">{request.request}</p>

                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {request.skills.map((skill) => (
                                <span key={skill} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-xs font-medium">
                                  {skill}
                                </span>
                              ))}
                            </div>

                            <div className="flex space-x-2">
                              <button className="px-4 py-2 bg-green-500/20 border border-green-500/30 text-green-400 rounded-lg hover:bg-green-500/30 transition-all duration-300 text-sm font-medium">
                                Accept
                              </button>
                              <button className="px-4 py-2 bg-slate-700/50 border border-slate-600/50 text-slate-400 rounded-lg hover:bg-slate-600/50 transition-all duration-300 text-sm font-medium">
                                Decline
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Recent Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Student Achievements</h3>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                    View All
                  </button>
                </div>

                <div className="space-y-4">
                  {recentAchievements.map((achievement, index) => (
                    <div key={index} className="p-4 bg-slate-800/30 rounded-xl flex items-start space-x-4">
                      <div className={`p-2 rounded-lg ₹{achievement.type === 'job_offer' ? 'bg-green-500/20' :
                          achievement.type === 'completion' ? 'bg-blue-500/20' :
                            achievement.type === 'skill_improvement' ? 'bg-purple-500/20' :
                              'bg-orange-500/20'
                        }`}>
                        {achievement.type === 'job_offer' && <CheckCircle className="h-4 w-4 text-green-400" />}
                        {achievement.type === 'completion' && <Award className="h-4 w-4 text-blue-400" />}
                        {achievement.type === 'skill_improvement' && <TrendingUp className="h-4 w-4 text-purple-400" />}
                        {achievement.type === 'academic' && <BookOpen className="h-4 w-4 text-orange-400" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{achievement.student}</h4>
                        <p className="text-slate-300 text-sm">{achievement.achievement}</p>
                        <p className="text-slate-400 text-xs mt-1">{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Active Chats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 mb-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Active Chats</h3>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                    View All
                  </button>
                </div>

                <div className="space-y-4">
                  {activeChats.map((chat, index) => (
                    <div key={index} className="flex space-x-3 p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all duration-300 cursor-pointer">
                      <div className="relative">
                        <img
                          src={chat.avatar}
                          alt={chat.name}
                          className="w-10 h-10 rounded-full"
                        />
                        {chat.unread > 0 && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">{chat.unread}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-white font-medium text-sm truncate">{chat.name}</h4>
                          <span className="text-slate-400 text-xs">{chat.time}</span>
                        </div>
                        <p className="text-slate-300 text-xs truncate mb-1">{chat.lastMessage}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ₹{chat.status === 'preparing for interview' ? 'bg-yellow-500/20 text-yellow-400' :
                            chat.status === 'job searching' ? 'bg-blue-500/20 text-blue-400' :
                              chat.status === 'networking' ? 'bg-purple-500/20 text-purple-400' :
                                'bg-green-500/20 text-green-400'
                          }`}>
                          {chat.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Impact Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Your Impact</h3>

                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-white mb-1">47</p>
                    <p className="text-slate-400 text-sm">Students helped</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-lg font-semibold text-white">23</p>
                      <p className="text-slate-400 text-xs">Got jobs</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-white">38</p>
                      <p className="text-slate-400 text-xs">Active mentees</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-400 text-sm">Response Rate</span>
                      <span className="text-white font-medium">96%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '96%' }}></div>
                    </div>
                  </div>

                  <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-400 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 text-sm font-medium">
                    Share Your Story
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

export default AlumniDashboard;