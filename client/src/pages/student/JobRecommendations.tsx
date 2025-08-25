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
  Filter,
  Search,
  MapPin,
  Clock,
  Star,
  Building2,
  Calendar,
  TrendingUp,
  Heart,
  Share2
} from 'lucide-react';

const JobRecommendations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    type: 'all',
    location: 'all',
    company: 'all',
    experience: 'all'
  });

  const sidebarItems = [
    { icon: Target, label: 'Dashboard', path: '/student' },
    { icon: Target, label: 'Job Recommendations', path: '/student/jobs', badge: '24' },
    { icon: Briefcase, label: 'My Applications', path: '/student/applications' },
    { icon: MessageSquare, label: 'Mentorship Chat', path: '/student/mentorship', badge: '3' },
    { icon: BookOpen, label: 'Profile & Resume', path: '/student/profile' },
    { icon: Bell, label: 'Notifications', path: '/student/notifications', badge: '5' },
    { icon: User, label: 'Settings', path: '/student/settings' }
  ];

  const jobRecommendations = [
    {
      id: 1,
      company: 'Google',
      position: 'Software Engineer Intern',
      logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      location: 'Delhi, India',
      type: 'Internship',
      salary: '₹8,000/month',
      match: '95%',
      deadline: '5 days left',
      description: 'Join Google as a Software Engineer Intern and work on cutting-edge technologies that impact billions of users worldwide.',
      requirements: ['Python', 'Java', 'Data Structures', 'Algorithms'],
      posted: '2 days ago',
      applicants: 1247,
      saved: false
    },
    {
      id: 2,
      company: 'Microsoft',
      position: 'Product Manager Trainee',
      logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      location: 'Delhi, India',
      type: 'Full-time',
      salary: '₹95,000 - ₹120,000',
      match: '92%',
      deadline: '1 week left',
      description: 'Drive product strategy and execution for Microsoft\'s cloud services, working with cross-functional teams.',
      requirements: ['Product Strategy', 'Analytics', 'SQL', 'Communication'],
      posted: '1 day ago',
      applicants: 856,
      saved: true
    },
    {
      id: 3,
      company: 'Amazon',
      position: 'Data Science Intern',
      logo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      location: 'Delhi, India',
      type: 'Internship',
      salary: '₹7,500/month',
      match: '88%',
      deadline: '3 days left',
      description: 'Apply machine learning and statistical analysis to solve complex business problems at Amazon scale.',
      requirements: ['Python', 'Machine Learning', 'Statistics', 'SQL'],
      posted: '3 days ago',
      applicants: 2134,
      saved: false
    },
    {
      id: 4,
      company: 'Meta',
      position: 'Frontend Developer',
      logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      location: 'Delhi, India',
      type: 'Full-time',
      salary: '₹110,000 - ₹140,000',
      match: '90%',
      deadline: '2 weeks left',
      description: 'Build the next generation of social technology that connects billions of people around the world.',
      requirements: ['React', 'JavaScript', 'TypeScript', 'GraphQL'],
      posted: '1 week ago',
      applicants: 967,
      saved: true
    },
    {
      id: 5,
      company: 'Apple',
      position: 'iOS Developer Intern',
      logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      location: 'Delhi, India',
      type: 'Internship',
      salary: '₹8,500/month',
      match: '85%',
      deadline: '1 week left',
      description: 'Develop innovative iOS applications that delight millions of users on iPhone and iPad.',
      requirements: ['Swift', 'iOS SDK', 'Xcode', 'UI/UX Design'],
      posted: '4 days ago',
      applicants: 1456,
      saved: false
    },
    {
      id: 6,
      company: 'Netflix',
      position: 'Data Analyst',
      logo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      location: 'Delhi, India',
      type: 'Full-time',
      salary: '₹85,000 - ₹110,000',
      match: '87%',
      deadline: '10 days left',
      description: 'Analyze viewer behavior and content performance to drive data-driven decisions at Netflix.',
      requirements: ['SQL', 'Python', 'Tableau', 'Statistics'],
      posted: '5 days ago',
      applicants: 743,
      saved: false
    }
  ];

  const toggleSaveJob = (jobId: number) => {
    // Implementation for saving/unsaving jobs
    console.log('Toggle save for job:', jobId);
  };

  const applyToJob = (jobId: number) => {
    // Implementation for applying to jobs
    console.log('Apply to job:', jobId);
  };

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
            <h1 className="mb-2 text-3xl font-bold text-white text-gray-900 dark:text-white">Job Recommendations</h1>
            <p className="text-gray-600 text-slate-400 dark:text-slate-400">Discover opportunities tailored to your skills and interests</p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 mb-8 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl"
          >
            <div className="flex flex-col gap-4 lg:flex-row">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute w-5 h-5 text-gray-500 transform -translate-y-1/2 left-3 top-1/2 text-slate-400 dark:text-slate-400" />
                <input
                  type="text"
                  placeholder="Search jobs, companies, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-3 pr-4 text-white text-gray-900 placeholder-gray-500 transition-all duration-300 border border-gray-300 pl-11 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border-slate-600 dark:border-slate-600 rounded-xl dark:text-white placeholder-slate-400 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex gap-2">
                <select
                  value={selectedFilters.type}
                  onChange={(e) => setSelectedFilters({ ...selectedFilters, type: e.target.value })}
                  className="px-4 py-3 text-white text-gray-900 border border-gray-300 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border-slate-600 dark:border-slate-600 rounded-xl dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Types</option>
                  <option value="internship">Internship</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                </select>

                <select
                  value={selectedFilters.location}
                  onChange={(e) => setSelectedFilters({ ...selectedFilters, location: e.target.value })}
                  className="px-4 py-3 text-white text-gray-900 border border-gray-300 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border-slate-600 dark:border-slate-600 rounded-xl dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Locations</option>
                  <option value="remote">Remote</option>
                  <option value="california">California</option>
                  <option value="washington">Washington</option>
                  <option value="texas">Texas</option>
                </select>

                <button className="p-3 text-blue-400 transition-all duration-300 border bg-blue-500/20 border-blue-500/30 rounded-xl hover:bg-blue-500/30">
                  <Filter className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {jobRecommendations.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="p-6 transition-all duration-300 border bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 rounded-2xl hover:border-slate-600/50 dark:hover:border-slate-600/50 hover:border-gray-300/50"
              >
                {/* Job Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="object-cover w-12 h-12 rounded-lg"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white text-gray-900 dark:text-white">{job.position}</h3>
                      <p className="text-gray-600 text-slate-400 dark:text-slate-400">{job.company}</p>
                      <div className="flex items-center mt-1 space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3 text-gray-500 text-slate-400 dark:text-slate-400" />
                          <span className="text-gray-600 text-slate-400 dark:text-slate-400">{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3 text-gray-500 text-slate-400 dark:text-slate-400" />
                          <span className="text-gray-600 text-slate-400 dark:text-slate-400">{job.posted}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-green-400 rounded-full bg-green-500/20">
                      {job.match} match
                    </span>
                    <button
                      onClick={() => toggleSaveJob(job.id)}
                      className={`p-2 rounded-lg transition-all duration-300 ₹{job.saved
                          ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                          : 'bg-slate-700/50 dark:bg-slate-700/50 bg-gray-200/50 text-slate-400 dark:text-slate-400 text-gray-600 hover:bg-slate-600/50 dark:hover:bg-slate-600/50 hover:bg-gray-300/50'
                        }`}
                    >
                      <Heart className={`h-4 w-4 ₹{job.saved ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Job Details */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ₹{job.type === 'Internship'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-purple-500/20 text-purple-400'
                        }`}>
                        {job.type}
                      </span>
                      <span className="font-semibold text-green-400">{job.salary}</span>
                    </div>
                    <span className="text-sm font-medium text-orange-400">{job.deadline}</span>
                  </div>

                  <p className="mb-3 text-sm leading-relaxed text-gray-700 text-slate-300 dark:text-slate-300">
                    {job.description}
                  </p>

                  {/* Skills Required */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {job.requirements.map((skill) => (
                      <span key={skill} className="px-2 py-1 text-xs font-medium text-blue-400 rounded-lg bg-blue-500/20">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Job Stats */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-gray-500 text-slate-400 dark:text-slate-400" />
                      <span className="text-gray-600 text-slate-400 dark:text-slate-400">{job.applicants.toLocaleString()} applicants</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-600 transition-all duration-300 rounded-lg bg-slate-700/50 dark:bg-slate-700/50 bg-gray-200/50 text-slate-400 dark:text-slate-400 hover:bg-slate-600/50 dark:hover:bg-slate-600/50 hover:bg-gray-300/50">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => applyToJob(job.id)}
                        className="px-6 py-2 font-medium text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105 hover:shadow-blue-500/25"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-center"
          >
            <button className="px-8 py-3 font-medium text-gray-600 transition-all duration-300 border bg-slate-800/50 dark:bg-slate-800/50 bg-gray-200/50 border-slate-700/50 dark:border-slate-700/50 border-gray-300/50 text-slate-400 dark:text-slate-400 hover:text-white dark:hover:text-white hover:text-gray-900 rounded-xl hover:bg-slate-700/50 dark:hover:bg-slate-700/50 hover:bg-gray-300/50">
              Load More Jobs
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JobRecommendations;