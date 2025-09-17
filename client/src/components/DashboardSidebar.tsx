import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, LogOut } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface SidebarItem {
  icon: React.ComponentType<any>;
  label: string;
  path: string;
  badge?: string;
}

interface DashboardSidebarProps {
  items: SidebarItem[];
  userRole: string;
  userName: string;
  userAvatar: string;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ items, userRole, userName, userAvatar }) => {
  const location = useLocation();

  return (
    <div className="w-64 bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-r border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 h-full flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-700/50 dark:border-slate-700/50 border-gray-200/50">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="relative">
            <Zap className="h-8 w-8 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
            <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full group-hover:bg-blue-400/30 transition-all duration-300"></div>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            FutureMesh
          </span>
        </Link>
      </div>

      {/* Theme Toggle */}
      <div className="px-6 py-3 border-b border-slate-700/50 dark:border-slate-700/50 border-gray-200/50">
        <ThemeToggle />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {items.map((item, index) => {
          const isActive = location.pathname === item.path || location.pathname.includes(item.path);

          return (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group ${
                  isActive
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : 'text-slate-400 dark:text-slate-400 text-gray-600 hover:text-white dark:hover:text-white hover:text-gray-900 hover:bg-slate-800/50 dark:hover:bg-slate-800/50 hover:bg-gray-100/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className={`h-5 w-5 ${isActive ? 'text-blue-400' : 'text-slate-400 dark:text-slate-400 text-gray-600 group-hover:text-white dark:group-hover:text-white group-hover:text-gray-900'} transition-colors duration-300`} />
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-lg text-xs font-medium">
                    {item.badge}
                  </span>
                )}
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-6 border-t border-slate-700/50 dark:border-slate-700/50 border-gray-200/50">
        <div className="flex items-center space-x-3 mb-4">
          <img
            src={userAvatar}
            alt={userName}
            className="w-10 h-10 rounded-full border-2 border-slate-600 dark:border-slate-600 border-gray-300"
          />
          <div className="flex-1">
            <h4 className="text-white dark:text-white text-gray-900 font-medium text-sm">{userName}</h4>
            <p className="text-slate-400 dark:text-slate-400 text-gray-600 text-xs capitalize">{userRole.replace('-', ' ')}</p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-200/50 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 hover:bg-gray-300/50 text-slate-400 dark:text-slate-400 text-gray-600 hover:text-white dark:hover:text-white hover:text-gray-900 rounded-lg transition-all duration-300"
        >
          <LogOut className="h-4 w-4" />
          <span className="text-sm font-medium">Sign Out</span>
        </motion.button>
      </div>
    </div>
  );
};

export default DashboardSidebar;