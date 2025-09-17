import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Zap,
  Users,
  Target,
  TrendingUp,
  Shield,
  MessageCircle,
  Briefcase,
  GraduationCap,
  Brain,
  Rocket,
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Matching',
      description: 'Advanced algorithms match students with perfect job opportunities and mentors based on skills, interests, and career goals.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Mentorship Network',
      description: 'Connect with industry professionals and alumni who provide personalized guidance and career insights.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Smart Job Matching',
      description: 'Get matched with jobs that align perfectly with your skills, experience, and career aspirations.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Analytics Dashboard',
      description: 'Track your career progress with detailed analytics and insights into your job search performance.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Enterprise-grade security ensuring your data and interactions remain private and protected.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Rocket,
      title: 'Career Acceleration',
      description: 'Fast-track your career with personalized recommendations and direct connections to hiring managers.',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const stats = [
    { number: '5K+', label: 'Active Students', icon: GraduationCap },
    { number: '1K+', label: 'Alumni Mentors', icon: Users },
    { number: '1K+', label: 'Job Placements', icon: Briefcase },
    { number: '95%', label: 'Success Rate', icon: Star }
  ];

  const testimonials = [
    {
      name: 'Abhisek',
      role: 'Software Engineer at Google',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
      content: 'FutureMesh connected me with an amazing mentor who guided me through my career transition. The AI matching was spot-on!'
    },
    {
      name: 'Debabrata',
      role: 'Data Scientist at Meta',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
      content: 'The platform made job searching effortless. I found my dream job within weeks of joining the platform.'
    },
    {
      name: 'Diptesh',
      role: 'Product Manager at Amazon',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
      content: 'As an alumni mentor, I love how easy it is to connect with students and make a real impact on their careers.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-blue-500/10 blur-3xl animate-pulse"></div>
          <div className="absolute delay-1000 rounded-full bottom-20 right-10 w-96 h-96 bg-purple-500/10 blur-3xl animate-pulse"></div>
        </div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="space-y-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-6 py-3 space-x-2 border rounded-full bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
                <Zap className="w-5 h-5 text-blue-400" />
                <span className="font-medium text-blue-400">Next-Gen Career Platform</span>
              </div>

              <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
                <span className="text-transparent bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text">
                  Enhancing Employability
                </span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">
                  Through Smart Connections
                </span>
              </h1>

              <p className="max-w-3xl mx-auto text-xl leading-relaxed text-slate-300">
                Revolutionary AI-powered platform connecting students, alumni, and employers through intelligent mentorship matching and automated placement solutions.
              </p>

              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-8 py-4 space-x-2 text-lg font-semibold text-white transition-all duration-300 transform shadow-2xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-2xl hover:shadow-blue-500/25"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 text-lg font-semibold transition-all duration-300 border-2 border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white rounded-2xl backdrop-blur-sm"
                >
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900/50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 transition-transform duration-300 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl group hover:scale-110">
                  <stat.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300" />
                </div>
                <div className="mb-2 text-3xl font-bold text-white lg:text-4xl">{stat.number}</div>
                <div className="font-medium text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <div className="inline-flex items-center px-6 py-3 mb-6 space-x-2 border rounded-full bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
              <Star className="w-5 h-5 text-blue-400" />
              <span className="font-medium text-blue-400">Premium Features</span>
            </div>
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
              Everything You Need to <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">Succeed</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-slate-400">
              Comprehensive tools and AI-powered insights designed to accelerate your career growth and connect you with the right opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-8 transition-all duration-300 border group bg-slate-900/50 backdrop-blur-sm border-slate-700/50 rounded-3xl hover:border-slate-600/50"
              >
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl group-hover:opacity-100"></div>

                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} bg-opacity-20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="mb-4 text-xl font-bold text-white">{feature.title}</h3>
                  <p className="leading-relaxed text-slate-400">{feature.description}</p>

                  <div className="flex items-center mt-6 text-blue-400 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <span className="mr-2 font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
              Testimonial
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-slate-400">
              See what our community has to say about their experience with FutureMesh.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-8 border bg-slate-900/50 backdrop-blur-sm border-slate-700/50 rounded-3xl"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 mr-4 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mb-4 leading-relaxed text-slate-300">"{testimonial.content}"</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30"></div>
        <div className="absolute inset-0">
          <div className="absolute rounded-full top-10 left-1/4 w-96 h-96 bg-blue-500/10 blur-3xl animate-pulse"></div>
          <div className="absolute delay-1000 rounded-full bottom-10 right-1/4 w-96 h-96 bg-purple-500/10 blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-6xl">
              Ready to Transform Your
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text"> Career?</span>
            </h2>

            <p className="max-w-2xl mx-auto text-xl text-slate-300">
              Join thousands of students and professionals who have already accelerated their careers with FutureMesh.
            </p>

            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-8 py-4 space-x-2 text-lg font-semibold text-white transition-all duration-300 transform shadow-2xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-2xl hover:shadow-blue-500/25"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <div className="flex items-center space-x-2 text-slate-400">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>No credit card required</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;