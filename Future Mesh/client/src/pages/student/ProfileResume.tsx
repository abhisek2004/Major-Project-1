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
  Upload,
  Download,
  Edit,
  Save,
  X,
  Plus,
  Trash2,
  Eye,
  Star,
  Award,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Globe,
  Github,
  Linkedin,
  ExternalLink
} from 'lucide-react';

const ProfileResume = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  const sidebarItems = [
    { icon: Target, label: 'Dashboard', path: '/student' },
    { icon: Target, label: 'Job Recommendations', path: '/student/jobs', badge: '24' },
    { icon: Briefcase, label: 'My Applications', path: '/student/applications' },
    { icon: MessageSquare, label: 'Mentorship Chat', path: '/student/mentorship', badge: '3' },
    { icon: BookOpen, label: 'Profile & Resume', path: '/student/profile' },
    { icon: Bell, label: 'Notifications', path: '/student/notifications', badge: '5' },
    { icon: User, label: 'Settings', path: '/student/settings' }
  ];

  const [profileData, setProfileData] = useState({
    personalInfo: {
      fullName: 'Abhisek Panda',
      email: '22cse072.abhisekpanda@giet.edu',
      phone: '+91 9876543210',
      location: 'Giet University',
      website: 'alexjohnson.dev',
      github: 'alexjohnson',
      linkedin: 'alex-johnson-dev',
      bio: 'Passionate Computer Science student with a focus on full-stack development and machine learning. Experienced in building scalable web applications and solving complex algorithmic problems.'
    },
    education: [
      {
        id: 1,
        institution: 'GIET University',
        degree: 'Bachelor of Science in Computer Science',
        startDate: '2022-09',
        endDate: '2026-06',
        gpa: '7.8',
        relevant_courses: ['Data Structures', 'Algorithms', 'Machine Learning', 'Database Systems']
      }
    ],
    experience: [
      {
        id: 1,
        company: 'TechCorp Inc.',
        position: 'Software Engineering Intern',
        startDate: '2024-06',
        endDate: '2024-12',
        location: 'Giet University',
        description: 'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.',
        achievements: [
          'Improved application performance by 30% through code optimization',
          'Implemented new features that increased user engagement by 25%',
          'Mentored 2 junior interns in best practices and code review'
        ]
      }
    ],
    projects: [
      {
        id: 1,
        name: 'E-Commerce Platform',
        description: 'Full-stack e-commerce application built with React, Node.js, and MongoDB',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
        githubUrl: 'https://github.com/abhisek2004/ecommerce-platform',
        liveUrl: 'https://ecommerce-demo.alexjohnson.dev',
        startDate: '2024-01',
        endDate: '2024-06'
      },
      {
        id: 2,
        name: 'Machine Learning Stock Predictor',
        description: 'ML model to predict stock prices using historical data and sentiment analysis',
        technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Flask'],
        githubUrl: 'https://github.com/abhisek2004/stock-predictor',
        liveUrl: null,
        startDate: '2024-07',
        endDate: '2024-12'
      }
    ],
    skills: {
      technical: ['JavaScript', 'Python', 'React', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'],
      soft: ['Leadership', 'Communication', 'Problem Solving', 'Team Collaboration', 'Project Management']
    },
    certifications: [
      {
        id: 1,
        name: 'AWS Certified Developer Associate',
        issuer: 'Amazon Web Services',
        date: '2024-08',
        credentialId: 'AWS-CDA-12345'
      },
      {
        id: 2,
        name: 'Google Cloud Professional Developer',
        issuer: 'Google Cloud',
        date: '2025-10',
        credentialId: 'GCP-PD-67890'
      }
    ]
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'resume', label: 'Resume', icon: BookOpen },
    { id: 'projects', label: 'Projects', icon: Award },
    { id: 'skills', label: 'Skills', icon: Star }
  ];

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
                <h1 className="mb-2 text-3xl font-bold text-white text-gray-900 dark:text-white">Profile & Resume</h1>
                <p className="text-gray-600 text-slate-400 dark:text-slate-400">Manage your professional profile and showcase your skills</p>
              </div>
              <div className="flex space-x-3">
                <button className="flex items-center px-4 py-2 space-x-2 text-gray-600 transition-all duration-300 border rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-gray-200/50 border-slate-700/50 dark:border-slate-700/50 border-gray-300/50 text-slate-400 dark:text-slate-400 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 hover:bg-gray-300/50">
                  <Eye className="w-4 h-4" />
                  <span>Preview</span>
                </button>
                <button className="flex items-center px-4 py-2 space-x-2 text-blue-400 transition-all duration-300 border rounded-lg bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30">
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ₹{isEditing
                    ? 'bg-green-500/20 border border-green-500/30 text-green-400 hover:bg-green-500/30'
                    : 'bg-purple-500/20 border border-purple-500/30 text-purple-400 hover:bg-purple-500/30'
                    }`}
                >
                  {isEditing ? <Save className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
                  <span>{isEditing ? 'Save Changes' : 'Edit Profile'}</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex p-1 space-x-1 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-xl">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ₹{activeTab === tab.id
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : 'text-slate-400 dark:text-slate-400 text-gray-600 hover:text-white dark:hover:text-white hover:text-gray-900 hover:bg-slate-800/50 dark:hover:bg-slate-800/50 hover:bg-gray-100/50'
                    }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {activeTab === 'profile' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {/* Personal Information */}
                  <div className="p-6 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl">
                    <h3 className="mb-4 text-xl font-semibold text-white text-gray-900 dark:text-white">Personal Information</h3>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <label className="block mb-2 text-sm text-gray-600 text-slate-400 dark:text-slate-400">Full Name</label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={profileData.personalInfo.fullName}
                            className="w-full px-4 py-2 text-white text-gray-900 border border-gray-300 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border-slate-600 dark:border-slate-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        ) : (
                          <p className="text-white text-gray-900 dark:text-white">{profileData.personalInfo.fullName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block mb-2 text-sm text-gray-600 text-slate-400 dark:text-slate-400">Email</label>
                        {isEditing ? (
                          <input
                            type="email"
                            value={profileData.personalInfo.email}
                            className="w-full px-4 py-2 text-white text-gray-900 border border-gray-300 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border-slate-600 dark:border-slate-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        ) : (
                          <p className="text-white text-gray-900 dark:text-white">{profileData.personalInfo.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block mb-2 text-sm text-gray-600 text-slate-400 dark:text-slate-400">Phone</label>
                        {isEditing ? (
                          <input
                            type="tel"
                            value={profileData.personalInfo.phone}
                            className="w-full px-4 py-2 text-white text-gray-900 border border-gray-300 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border-slate-600 dark:border-slate-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        ) : (
                          <p className="text-white text-gray-900 dark:text-white">{profileData.personalInfo.phone}</p>
                        )}
                      </div>

                      <div>
                        <label className="block mb-2 text-sm text-gray-600 text-slate-400 dark:text-slate-400">Location</label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={profileData.personalInfo.location}
                            className="w-full px-4 py-2 text-white text-gray-900 border border-gray-300 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border-slate-600 dark:border-slate-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        ) : (
                          <p className="text-white text-gray-900 dark:text-white">{profileData.personalInfo.location}</p>
                        )}
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block mb-2 text-sm text-gray-600 text-slate-400 dark:text-slate-400">Bio</label>
                      {isEditing ? (
                        <textarea
                          value={profileData.personalInfo.bio}
                          rows={4}
                          className="w-full px-4 py-2 text-white text-gray-900 border border-gray-300 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border-slate-600 dark:border-slate-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      ) : (
                        <p className="text-gray-700 text-slate-300 dark:text-slate-300">{profileData.personalInfo.bio}</p>
                      )}
                    </div>
                  </div>

                  {/* Education */}
                  <div className="p-6 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white text-gray-900 dark:text-white">Education</h3>
                      {isEditing && (
                        <button className="flex items-center px-3 py-1 space-x-2 text-sm text-blue-400 transition-all duration-300 border rounded-lg bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30">
                          <Plus className="w-4 h-4" />
                          <span>Add Education</span>
                        </button>
                      )}
                    </div>

                    {profileData.education.map((edu) => (
                      <div key={edu.id} className="pl-4 mb-4 border-l-4 border-blue-500">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-white text-gray-900 dark:text-white">{edu.degree}</h4>
                            <p className="text-gray-600 text-slate-400 dark:text-slate-400">{edu.institution}</p>
                            <p className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">
                              {new Date(edu.startDate).getFullYear()} - {new Date(edu.endDate).getFullYear()} • GPA: {edu.gpa}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {edu.relevant_courses.map((course) => (
                                <span key={course} className="px-2 py-1 text-xs text-blue-400 rounded-lg bg-blue-500/20">
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                          {isEditing && (
                            <div className="flex space-x-2">
                              <button className="p-1 text-gray-600 transition-colors text-slate-400 dark:text-slate-400 hover:text-blue-400">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="p-1 text-gray-600 transition-colors text-slate-400 dark:text-slate-400 hover:text-red-400">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Experience */}
                  <div className="p-6 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white text-gray-900 dark:text-white">Experience</h3>
                      {isEditing && (
                        <button className="flex items-center px-3 py-1 space-x-2 text-sm text-blue-400 transition-all duration-300 border rounded-lg bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30">
                          <Plus className="w-4 h-4" />
                          <span>Add Experience</span>
                        </button>
                      )}
                    </div>

                    {profileData.experience.map((exp) => (
                      <div key={exp.id} className="pl-4 mb-6 border-l-4 border-green-500">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-white text-gray-900 dark:text-white">{exp.position}</h4>
                            <p className="text-gray-600 text-slate-400 dark:text-slate-400">{exp.company} • {exp.location}</p>
                            <p className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">
                              {new Date(exp.startDate).toLocaleDateString()} - {new Date(exp.endDate).toLocaleDateString()}
                            </p>
                            <p className="mt-2 text-gray-700 text-slate-300 dark:text-slate-300">{exp.description}</p>
                            <ul className="mt-2 space-y-1">
                              {exp.achievements.map((achievement, index) => (
                                <li key={index} className="flex items-start text-sm text-gray-700 text-slate-300 dark:text-slate-300">
                                  <span className="mr-2 text-green-400">•</span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                          {isEditing && (
                            <div className="flex space-x-2">
                              <button className="p-1 text-gray-600 transition-colors text-slate-400 dark:text-slate-400 hover:text-blue-400">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="p-1 text-gray-600 transition-colors text-slate-400 dark:text-slate-400 hover:text-red-400">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'projects' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="p-6 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold text-white text-gray-900 dark:text-white">Projects</h3>
                      {isEditing && (
                        <button className="flex items-center px-3 py-1 space-x-2 text-sm text-blue-400 transition-all duration-300 border rounded-lg bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30">
                          <Plus className="w-4 h-4" />
                          <span>Add Project</span>
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                      {profileData.projects.map((project) => (
                        <div key={project.id} className="p-6 bg-slate-800/30 dark:bg-slate-800/30 bg-gray-100/50 rounded-xl">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="text-lg font-semibold text-white text-gray-900 dark:text-white">{project.name}</h4>
                              <p className="mt-1 text-gray-700 text-slate-300 dark:text-slate-300">{project.description}</p>
                              <p className="mt-2 text-sm text-gray-600 text-slate-400 dark:text-slate-400">
                                {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                              </p>
                            </div>
                            {isEditing && (
                              <div className="flex space-x-2">
                                <button className="p-1 text-gray-600 transition-colors text-slate-400 dark:text-slate-400 hover:text-blue-400">
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button className="p-1 text-gray-600 transition-colors text-slate-400 dark:text-slate-400 hover:text-red-400">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            )}
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech) => (
                              <span key={tech} className="px-2 py-1 text-xs text-purple-400 rounded-lg bg-purple-500/20">
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="flex space-x-4">
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center px-3 py-1 space-x-2 text-sm text-gray-600 transition-all duration-300 rounded-lg bg-slate-700/50 dark:bg-slate-700/50 bg-gray-200/50 text-slate-400 dark:text-slate-400 hover:bg-slate-600/50 dark:hover:bg-slate-600/50 hover:bg-gray-300/50"
                            >
                              <Github className="w-4 h-4" />
                              <span>GitHub</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-3 py-1 space-x-2 text-sm text-blue-400 transition-all duration-300 border rounded-lg bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30"
                              >
                                <Globe className="w-4 h-4" />
                                <span>Live Demo</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'skills' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="p-6 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl">
                    <h3 className="mb-6 text-xl font-semibold text-white text-gray-900 dark:text-white">Technical Skills</h3>
                    <div className="flex flex-wrap gap-3">
                      {profileData.skills.technical.map((skill) => (
                        <div key={skill} className="flex items-center px-3 py-2 space-x-2 text-blue-400 rounded-lg bg-blue-500/20">
                          <span>{skill}</span>
                          {isEditing && (
                            <button className="text-blue-400 transition-colors hover:text-red-400">
                              <X className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      ))}
                      {isEditing && (
                        <button className="flex items-center px-3 py-2 space-x-2 text-gray-600 transition-all duration-300 border rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-gray-200/50 border-slate-700/50 dark:border-slate-700/50 border-gray-300/50 text-slate-400 dark:text-slate-400 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 hover:bg-gray-300/50">
                          <Plus className="w-4 h-4" />
                          <span>Add Skill</span>
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="p-6 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl">
                    <h3 className="mb-6 text-xl font-semibold text-white text-gray-900 dark:text-white">Soft Skills</h3>
                    <div className="flex flex-wrap gap-3">
                      {profileData.skills.soft.map((skill) => (
                        <div key={skill} className="flex items-center px-3 py-2 space-x-2 text-green-400 rounded-lg bg-green-500/20">
                          <span>{skill}</span>
                          {isEditing && (
                            <button className="text-green-400 transition-colors hover:text-red-400">
                              <X className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      ))}
                      {isEditing && (
                        <button className="flex items-center px-3 py-2 space-x-2 text-gray-600 transition-all duration-300 border rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-gray-200/50 border-slate-700/50 dark:border-slate-700/50 border-gray-300/50 text-slate-400 dark:text-slate-400 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 hover:bg-gray-300/50">
                          <Plus className="w-4 h-4" />
                          <span>Add Skill</span>
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="p-6 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold text-white text-gray-900 dark:text-white">Certifications</h3>
                      {isEditing && (
                        <button className="flex items-center px-3 py-1 space-x-2 text-sm text-blue-400 transition-all duration-300 border rounded-lg bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30">
                          <Plus className="w-4 h-4" />
                          <span>Add Certification</span>
                        </button>
                      )}
                    </div>

                    <div className="space-y-4">
                      {profileData.certifications.map((cert) => (
                        <div key={cert.id} className="flex items-start justify-between p-4 rounded-lg bg-slate-800/30 dark:bg-slate-800/30 bg-gray-100/50">
                          <div>
                            <h4 className="font-semibold text-white text-gray-900 dark:text-white">{cert.name}</h4>
                            <p className="text-gray-600 text-slate-400 dark:text-slate-400">{cert.issuer}</p>
                            <p className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">
                              Issued: {new Date(cert.date).toLocaleDateString()} • ID: {cert.credentialId}
                            </p>
                          </div>
                          {isEditing && (
                            <div className="flex space-x-2">
                              <button className="p-1 text-gray-600 transition-colors text-slate-400 dark:text-slate-400 hover:text-blue-400">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="p-1 text-gray-600 transition-colors text-slate-400 dark:text-slate-400 hover:text-red-400">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'resume' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="p-6 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl"
                >
                  <h3 className="mb-6 text-xl font-semibold text-white text-gray-900 dark:text-white">Resume Management</h3>

                  <div className="space-y-6">
                    <div className="p-8 text-center border-2 border-gray-300 border-dashed rounded-lg border-slate-600 dark:border-slate-600">
                      <Upload className="w-12 h-12 mx-auto mb-4 text-gray-500 text-slate-400 dark:text-slate-400" />
                      <h4 className="mb-2 font-semibold text-white text-gray-900 dark:text-white">Upload Resume</h4>
                      <p className="mb-4 text-gray-600 text-slate-400 dark:text-slate-400">Drag and drop your resume file or click to browse</p>
                      <button className="px-6 py-2 text-blue-400 transition-all duration-300 border rounded-lg bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30">
                        Choose File
                      </button>
                      <p className="mt-2 text-xs text-gray-500 text-slate-500 dark:text-slate-500">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
                    </div>

                    <div className="p-4 rounded-lg bg-slate-800/30 dark:bg-slate-800/30 bg-gray-100/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-blue-500/20">
                            <BookOpen className="w-5 h-5 text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-white text-gray-900 dark:text-white">Alex_Johnson_Resume.pdf</h4>
                            <p className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">Uploaded on Jan 10, 2024 • 1.2 MB</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 text-gray-600 transition-all duration-300 rounded-lg bg-slate-700/50 dark:bg-slate-700/50 bg-gray-200/50 text-slate-400 dark:text-slate-400 hover:bg-slate-600/50 dark:hover:bg-slate-600/50 hover:bg-gray-300/50">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-600 transition-all duration-300 rounded-lg bg-slate-700/50 dark:bg-slate-700/50 bg-gray-200/50 text-slate-400 dark:text-slate-400 hover:bg-slate-600/50 dark:hover:bg-slate-600/50 hover:bg-gray-300/50">
                            <Download className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-red-400 transition-all duration-300 rounded-lg bg-red-500/20 hover:bg-red-500/30">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile Completion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-6 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl"
              >
                <h3 className="mb-4 text-lg font-semibold text-white text-gray-900 dark:text-white">Profile Completion</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">Overall Progress</span>
                      <span className="font-medium text-blue-400">85%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-300 rounded-full bg-slate-700 dark:bg-slate-700">
                      <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" style={{ width: '85%' }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">Personal Info</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">Education</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">Experience</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">Skills (Add 3 more)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-gray-500 text-slate-400 dark:text-slate-400" />
                      <span className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">Portfolio Projects</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="p-6 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl"
              >
                <h3 className="mb-4 text-lg font-semibold text-white text-gray-900 dark:text-white">Social Links</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Github className="w-5 h-5 text-gray-600 text-slate-400 dark:text-slate-400" />
                    <span className="text-gray-700 text-slate-300 dark:text-slate-300">github.com/{profileData.personalInfo.github}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-gray-600 text-slate-400 dark:text-slate-400" />
                    <span className="text-gray-700 text-slate-300 dark:text-slate-300">linkedin.com/in/{profileData.personalInfo.linkedin}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-gray-600 text-slate-400 dark:text-slate-400" />
                    <span className="text-gray-700 text-slate-300 dark:text-slate-300">{profileData.personalInfo.website}</span>
                  </div>
                </div>
              </motion.div> */}

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="p-6 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl"
              >
                <h3 className="mb-4 text-lg font-semibold text-white text-gray-900 dark:text-white">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="flex items-center w-full p-3 space-x-3 text-sm text-blue-400 transition-all duration-300 border rounded-lg bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30">
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                  </button>
                  <button className="flex items-center w-full p-3 space-x-3 text-sm text-green-400 transition-all duration-300 border rounded-lg bg-green-500/20 border-green-500/30 hover:bg-green-500/30">
                    <Eye className="w-4 h-4" />
                    <span>Preview Profile</span>
                  </button>
                  <button className="flex items-center w-full p-3 space-x-3 text-sm text-purple-400 transition-all duration-300 border rounded-lg bg-purple-500/20 border-purple-500/30 hover:bg-purple-500/30">
                    <Upload className="w-4 h-4" />
                    <span>Upload New Resume</span>
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

export default ProfileResume;