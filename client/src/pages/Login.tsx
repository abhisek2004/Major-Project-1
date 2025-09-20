import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Mail, Lock, Eye, EyeOff, ArrowRight, Shield, Users, Target } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('student');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const roles = [
    { id: 'student', label: 'Student', icon: Target, description: 'Apply for jobs and connect with mentors' },
    { id: 'alumni', label: 'Alumni', icon: Users, description: 'Mentor students and share experiences' },
    { id: 'hr', label: 'HR/Recruiter', icon: Shield, description: 'Post jobs and find candidates' },
    { id: 'hod', label: 'HOD', icon: Users, description: 'Manage department placements' },
    { id: 'admin', label: 'Admin', icon: Shield, description: 'Manage platform operations' },
    { id: 'super-admin', label: 'Super Admin', icon: Shield, description: 'Full platform control' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    switch (selectedRole) {
      case 'hr':
        navigate('/hr');
        break;
      case 'hod':
        navigate('/hod');
        break;
      case 'admin':
        navigate('/admin');
        break;
      case 'super-admin':
        navigate('/super-admin');
        break;
      default:
        setError('Please select a valid role');
    }

    try {
      console.log("selectedRoles", selectedRole)
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role: selectedRole }),
      });
      const data = await response.json();
      console.log("data", data);
      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate(data.redirect);
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      setError('Server error during login');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-slate-950">
      <div className="absolute inset-0">
        <div className="absolute rounded-full top-20 left-10 w-96 h-96 bg-blue-500/5 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-20 right-10 w-96 h-96 bg-purple-500/5 blur-3xl animate-pulse"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-md"
      >
        <div className="p-8 border shadow-2xl bg-slate-900/50 backdrop-blur-xl border-slate-700/50 rounded-3xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <Link to="/" className="inline-flex items-center mb-6 space-x-2 group">
              <div className="relative">
                <Zap className="w-8 h-8 text-blue-500 transition-colors duration-300 group-hover:text-blue-400" />
                <div className="absolute inset-0 transition-all duration-300 rounded-full bg-blue-500/20 blur-lg group-hover:bg-blue-400/30"></div>
              </div>
              <span className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
                FutureMesh
              </span>
            </Link>
            <h2 className="mb-2 text-3xl font-bold text-white">Welcome Back</h2>
            <p className="text-slate-400">Sign in to your account to continue</p>
          </div>

          {/* Role Selection */}
          <div className="mb-6">
            <label className="block mb-3 text-sm font-medium text-slate-300">
              Select Your Role
            </label>
            <div className="grid grid-cols-2 gap-2">
              {roles.map((role) => (
                <motion.button
                  key={role.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedRole(role.id)}
                  className={`p-3 rounded-xl border transition-all duration-300 text-left ${selectedRole === role.id
                    ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                    : 'border-slate-700 bg-slate-800/30 text-slate-400 hover:border-slate-600'
                    }`}
                >
                  <div className="flex items-center space-x-2">
                    <role.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{role.label}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-300">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute w-5 h-5 transform -translate-y-1/2 left-3 top-1/2 text-slate-400" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-3 pr-4 text-white transition-all duration-300 border pl-11 bg-slate-800/50 border-slate-600 rounded-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-300">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute w-5 h-5 transform -translate-y-1/2 left-3 top-1/2 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full py-3 text-white transition-all duration-300 border pl-11 pr-11 bg-slate-800/50 border-slate-600 rounded-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute transition-colors duration-300 transform -translate-y-1/2 right-3 top-1/2 text-slate-400 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-500 rounded form-checkbox bg-slate-800 border-slate-600 focus:ring-blue-500 focus:ring-offset-0"
                />
                <span className="ml-2 text-sm text-slate-400">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-blue-400 transition-colors duration-300 hover:text-blue-300"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center w-full py-3 space-x-2 font-semibold text-white transition-all duration-300 transform shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl hover:shadow-blue-500/25"
            >
              <span>Sign In</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            {/* Demo Credentials */}
            <div className="p-4 border bg-slate-800/30 border-slate-700/50 rounded-xl">
              <p className="mb-2 text-xs text-center text-slate-400">Demo Credentials:</p>
              <p className="text-xs text-center text-slate-300">Email: demo@futuremesh.com</p>
              <p className="text-xs text-center text-slate-300">Password: demo123</p>
            </div>
          </form>

          {/* Register Link */}
          <div className="mt-8 text-center">
            <span className="text-slate-400">Don't have an account? </span>
            <Link
              to="/register"
              className="font-medium text-blue-400 transition-colors duration-300 hover:text-blue-300"
            >
              Sign up
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;