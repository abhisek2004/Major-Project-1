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
  CheckCircle,
  FileText,
  Lightbulb,
  Calendar,
  Filter,
  Search
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
      title: 'Resources Shared',
      value: '23',
      icon: Share2,
      change: { value: '+5', type: 'increase' as const },
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
      name: 'David',
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

  const sharedResources = [
    {
      title: 'FAANG Interview Preparation Guide',
      type: 'PDF',
      category: 'Interview Prep',
      downloads: 156,
      rating: 4.8,
      date: '2 days ago',
      icon: FileText
    },
    {
      title: 'Resume Templates for Tech Roles',
      type: 'DOCX',
      category: 'Resume',
      downloads: 89,
      rating: 4.6,
      date: '1 week ago',
      icon: FileText
    },
    {
      title: 'Networking Strategy for Tech Professionals',
      type: 'PDF',
      category: 'Networking',
      downloads: 67,
      rating: 4.9,
      date: '2 weeks ago',
      icon: FileText
    }
  ];

  const careerTips = [
    {
      title: 'How to Ace Technical Interviews',
      category: 'Interview',
      readTime: '5 min read',
      likes: 234,
      date: '1 day ago',
      excerpt: 'Master the art of technical interviews with these proven strategies...'
    },
    {
      title: 'Building Your Personal Brand Online',
      category: 'Personal Brand',
      readTime: '8 min read',
      likes: 189,
      date: '3 days ago',
      excerpt: 'Learn how to create a compelling online presence that attracts recruiters...'
    },
    {
      title: 'Negotiating Your First Job Offer',
      category: 'Negotiation',
      readTime: '6 min read',
      likes: 156,
      date: '1 week ago',
      excerpt: 'Essential tips for negotiating your first job offer and getting what you deserve...'
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
    <div className="flex min-h-screen bg-slate-950">
      <DashboardSidebar
        items={sidebarItems}
        userRole="alumni"
        userName="Debabrata"
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
            <h1 className="mb-2 text-3xl font-bold text-white">Welcome back, Debabrata! 🌟</h1>
            <p className="text-slate-400">Continue making a difference in students' careers</p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
            {statsCards.map((card, index) => (
              <DashboardCard key={card.title} {...card} delay={index * 0.1} />
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left Column - Mentorship Requests & Resources */}
            <div className="lg:col-span-2">
              {/* Mentorship Requests */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-6 mb-8 border rounded-2xl backdrop-blur-xl bg-slate-900/50 border-slate-700/50"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Mentorship Requests</h3>
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Search className="absolute w-4 h-4 transform -translate-y-1/2 left-3 top-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search students..."
                        className="py-2 pl-10 pr-4 text-sm text-white border rounded-lg bg-slate-800/50 border-slate-700/50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      />
                    </div>
                    <button className="text-sm font-medium text-blue-400 transition-colors hover:text-blue-300">
                      View All Requests
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  {mentorshipRequests.map((request, index) => (
                    <div key={index} className="p-5 border rounded-xl bg-slate-800/30 border-slate-700/30">
                      <div className="flex items-start space-x-4">
                        <img
                          src={request.avatar}
                          alt={request.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold text-white">{request.name}</h4>
                              <p className="text-sm text-slate-400">{request.department} • Class of {request.year}</p>
                            </div>
                            <span className="text-sm text-slate-400">{request.time}</span>
                          </div>

                          <p className="mb-4 text-sm leading-relaxed text-slate-300">{request.request}</p>

                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {request.skills.map((skill) => (
                                <span key={skill} className="px-2 py-1 text-xs font-medium text-blue-400 rounded-lg bg-blue-500/20">
                                  {skill}
                                </span>
                              ))}
                            </div>

                            <div className="flex space-x-2">
                              <button className="px-4 py-2 text-sm font-medium text-green-400 transition-all duration-300 border rounded-lg bg-green-500/20 border-green-500/30 hover:bg-green-500/30">
                                Accept
                              </button>
                              <button className="px-4 py-2 text-sm font-medium transition-all duration-300 border rounded-lg bg-slate-700/50 border-slate-600/50 text-slate-400 hover:bg-slate-600/50">
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

              {/* Share Resources */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="p-6 mb-8 border rounded-2xl backdrop-blur-xl bg-slate-900/50 border-slate-700/50"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Share Resources</h3>
                  <button className="px-4 py-2 text-sm font-medium text-blue-400 transition-all duration-300 border rounded-lg bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30">
                    + Add New Resource
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2">
                  <div className="p-4 border rounded-xl bg-slate-800/30 border-slate-700/30">
                    <div className="flex items-center mb-3 space-x-3">
                      <FileText className="w-8 h-8 text-blue-400" />
                      <div>
                        <h4 className="font-medium text-white">Upload Document</h4>
                        <p className="text-sm text-slate-400">Share PDFs, docs, presentations</p>
                      </div>
                    </div>
                    <button className="w-full px-4 py-2 text-sm font-medium text-blue-400 transition-all duration-300 border rounded-lg bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30">
                      Choose File
                    </button>
                  </div>

                  <div className="p-4 border rounded-xl bg-slate-800/30 border-slate-700/30">
                    <div className="flex items-center mb-3 space-x-3">
                      <Share2 className="w-8 h-8 text-green-400" />
                      <div>
                        <h4 className="font-medium text-white">Share Link</h4>
                        <p className="text-sm text-slate-400">Share useful websites, videos</p>
                      </div>
                    </div>
                    <input
                      type="url"
                      placeholder="https://..."
                      className="w-full px-3 py-2 text-sm text-white border rounded-lg bg-slate-800/50 border-slate-700/50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="mb-3 font-medium text-white">Recently Shared Resources</h4>
                  {sharedResources.map((resource, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-slate-800/30">
                      <div className="flex items-center space-x-3">
                        <resource.icon className="w-6 h-6 text-blue-400" />
                        <div>
                          <h5 className="font-medium text-white">{resource.title}</h5>
                          <p className="text-sm text-slate-400">{resource.category} • {resource.downloads} downloads</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center mb-1 space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-white">{resource.rating}</span>
                        </div>
                        <p className="text-xs text-slate-400">{resource.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Career Tips */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="p-6 border rounded-2xl backdrop-blur-xl bg-slate-900/50 border-slate-700/50"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Career Tips & Insights</h3>
                  <button className="px-4 py-2 text-sm font-medium text-purple-400 transition-all duration-300 border rounded-lg bg-purple-500/20 border-purple-500/30 hover:bg-purple-500/30">
                    + Write New Tip
                  </button>
                </div>

                <div className="space-y-4">
                  {careerTips.map((tip, index) => (
                    <div key={index} className="p-4 border rounded-xl bg-slate-800/30 border-slate-700/30">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="mb-2 font-medium text-white">{tip.title}</h4>
                          <p className="mb-3 text-sm text-slate-300">{tip.excerpt}</p>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="text-slate-400">{tip.category}</span>
                            <span className="text-slate-400">{tip.readTime}</span>
                            <span className="text-slate-400">{tip.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 transition-colors text-slate-400 hover:text-red-400">
                            <Heart className="w-4 h-4" />
                          </button>
                          <span className="text-sm text-slate-400">{tip.likes}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <div>
              {/* Active Chats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="p-6 mb-6 border rounded-2xl backdrop-blur-xl bg-slate-900/50 border-slate-700/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Chat with Students</h3>
                  <button className="text-sm font-medium text-blue-400 transition-colors hover:text-blue-300">
                    View All
                  </button>
                </div>

                <div className="space-y-4">
                  {activeChats.map((chat, index) => (
                    <div key={index} className="flex p-3 space-x-3 transition-all duration-300 rounded-lg cursor-pointer bg-slate-800/30 hover:bg-slate-800/50">
                      <div className="relative">
                        <img
                          src={chat.avatar}
                          alt={chat.name}
                          className="w-10 h-10 rounded-full"
                        />
                        {chat.unread > 0 && (
                          <div className="absolute flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full -top-1 -right-1">
                            <span className="text-xs font-bold text-white">{chat.unread}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-sm font-medium text-white truncate">{chat.name}</h4>
                          <span className="text-xs text-slate-400">{chat.time}</span>
                        </div>
                        <p className="mb-1 text-xs truncate text-slate-300">{chat.lastMessage}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${chat.status === 'preparing for interview' ? 'bg-yellow-500/20 text-yellow-400' :
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

              {/* Recent Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="p-6 mb-6 border rounded-2xl backdrop-blur-xl bg-slate-900/50 border-slate-700/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Student Achievements</h3>
                  <button className="text-sm font-medium text-blue-400 transition-colors hover:text-blue-300">
                    View All
                  </button>
                </div>

                <div className="space-y-4">
                  {recentAchievements.map((achievement, index) => (
                    <div key={index} className="flex items-start p-4 space-x-4 rounded-xl bg-slate-800/30">
                      <div className={`p-2 rounded-lg ${achievement.type === 'job_offer' ? 'bg-green-500/20' :
                        achievement.type === 'completion' ? 'bg-blue-500/20' :
                          achievement.type === 'skill_improvement' ? 'bg-purple-500/20' :
                            'bg-orange-500/20'
                        }`}>
                        {achievement.type === 'job_offer' && <CheckCircle className="w-4 h-4 text-green-400" />}
                        {achievement.type === 'completion' && <Award className="w-4 h-4 text-blue-400" />}
                        {achievement.type === 'skill_improvement' && <TrendingUp className="w-4 h-4 text-purple-400" />}
                        {achievement.type === 'academic' && <BookOpen className="w-4 h-4 text-orange-400" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-white">{achievement.student}</h4>
                        <p className="text-sm text-slate-300">{achievement.achievement}</p>
                        <p className="mt-1 text-xs text-slate-400">{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Impact Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="p-6 border rounded-2xl backdrop-blur-xl bg-slate-900/50 border-slate-700/50"
              >
                <h3 className="mb-4 text-lg font-semibold text-white">Your Impact</h3>

                <div className="space-y-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <p className="mb-1 text-2xl font-bold text-white">47</p>
                    <p className="text-sm text-slate-400">Students helped</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-lg font-semibold text-white">23</p>
                      <p className="text-xs text-slate-400">Got jobs</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-white">38</p>
                      <p className="text-xs text-slate-400">Active mentees</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-400">Response Rate</span>
                      <span className="font-medium text-white">96%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-700">
                      <div className="h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" style={{ width: '96%' }}></div>
                    </div>
                  </div>

                  <button className="w-full px-4 py-2 text-sm font-medium text-blue-400 transition-all duration-300 border rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30 hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30">
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