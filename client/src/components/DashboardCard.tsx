import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change?: {
    value: string;
    type: 'increase' | 'decrease' | 'neutral';
  };
  gradient: string;
  delay?: number;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  icon: Icon,
  change,
  gradient,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 group hover:border-slate-600/50 transition-all duration-300"
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-slate-400 text-sm font-medium">{title}</p>
          <p className="text-2xl lg:text-3xl font-bold text-white">{value}</p>
          {change && (
            <div className={`flex items-center space-x-1 text-sm ${
              change.type === 'increase' ? 'text-green-400' : 
              change.type === 'decrease' ? 'text-red-400' : 
              'text-slate-400'
            }`}>
              <span>{change.value}</span>
              <span className="text-slate-400">vs last month</span>
            </div>
          )}
        </div>

        <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardCard;