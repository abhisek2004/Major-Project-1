import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import StudentDashboard from '../pages/dashboard/StudentDashboard';
import CompanyHRDashboard from '../pages/dashboard/CompanyHRDashboard';

const DashboardRouter: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Please sign in</h2>
          <p className="text-gray-600">You need to be logged in to access the dashboard.</p>
        </div>
      </div>
    );
  }

  switch (user.role) {
    case 'student':
      return <StudentDashboard />;
    case 'alumni':
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Alumni Dashboard</h2>
            <p className="text-gray-600">Coming soon! Alumni dashboard is under development.</p>
          </div>
        </div>
      );
    case 'hod':
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">HOD Dashboard</h2>
            <p className="text-gray-600">Coming soon! HOD dashboard is under development.</p>
          </div>
        </div>
      );
    case 'company-hr':
      return <CompanyHRDashboard />;
    case 'university-admin':
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">University Admin Dashboard</h2>
            <p className="text-gray-600">Coming soon! University admin dashboard is under development.</p>
          </div>
        </div>
      );
    case 'super-admin':
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Super Admin Dashboard</h2>
            <p className="text-gray-600">Coming soon! Super admin dashboard is under development.</p>
          </div>
        </div>
      );
    default:
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Unknown Role</h2>
            <p className="text-gray-600">Your role is not recognized. Please contact support.</p>
          </div>
        </div>
      );
  }
};

export default DashboardRouter;