import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardSidebar from '../../../components/dashboard/DashboardSidebar';
import {
    Users,
    User,
    Calendar,
    Clock,
    CheckCircle,
    XCircle,
    MoreVertical,
    Search
} from 'lucide-react';

const AlumniMentorshipRequests = () => {
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const sidebarItems = [
        { icon: Users, label: 'Mentorship Requests', path: '/alumni/requests' },
        { icon: Users, label: 'Mentee Management', path: '/alumni/mentees' },
        { icon: Calendar, label: 'Schedule Sessions', path: '/alumni/schedule' },
        { icon: Clock, label: 'Past Sessions', path: '/alumni/past-sessions' },
        { icon: User, label: 'Profile', path: '/alumni/profile' }
    ];

    const mentorshipRequests = [
        {
            id: 1,
            studentName: 'Abhisek Panda',
            university: 'Stanford',
            major: 'Computer Science',
            requestDate: 'Sep 19, 2025',
            status: 'Pending',
            expertise: ['Software Engineering', 'Algorithms'],
            message: 'Looking for guidance on coding interviews.'
        },
    ];

    const handleAccept = (id) => {
        console.log(`Accepted request ${id}`);
        // Add logic to update status
    };

    const handleReject = (id) => {
        console.log(`Rejected request ${id}`);
        // Add logic to update status
    };

    const filteredRequests = mentorshipRequests.filter(request =>
        request.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.major.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex min-h-screen bg-slate-950 dark:bg-slate-950 bg-gray-50">
            <DashboardSidebar
                items={sidebarItems}
                userRole="alumni"
                userName="Diptesh"
                userAvatar="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
            />

            <div className="flex flex-1">
                {/* Request Sidebar */}
                <div className="flex flex-col border-r w-80 bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50">
                    {/* Header */}
                    <div className="p-6 border-b border-slate-700/50 dark:border-slate-700/50 border-gray-200/50">
                        <h2 className="mb-4 text-xl font-bold text-white text-gray-900 dark:text-white">Mentorship Requests</h2>

                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute w-4 h-4 text-gray-500 transform -translate-y-1/2 left-3 top-1/2 text-slate-400 dark:text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search students..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full py-2 pl-10 pr-4 text-sm text-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border-slate-600 dark:border-slate-600 dark:text-white placeholder-slate-400 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Requests List */}
                    <div className="flex-1 overflow-y-auto">
                        {filteredRequests.map((request) => (
                            <motion.div
                                key={request.id}
                                whileHover={{ backgroundColor: 'rgba(51, 65, 85, 0.3)' }}
                                onClick={() => setSelectedRequest(request.id)}
                                className={`p-4 cursor-pointer border-b border-slate-800/50 dark:border-slate-800/50 border-gray-200/50 transition-all duration-200 ${selectedRequest === request.id ? 'bg-blue-500/10 border-l-4 border-l-blue-500' : ''}`}
                            >
                                <div className="flex items-start space-x-3">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-1">
                                            <h4 className="text-sm font-medium text-white text-gray-900 truncate dark:text-white">{request.studentName}</h4>
                                            {request.status === 'Pending' && (
                                                <span className="bg-yellow-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">Pending</span>
                                            )}
                                            {request.status === 'Accepted' && (
                                                <span className="bg-green-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">Accepted</span>
                                            )}
                                            {request.status === 'Rejected' && (
                                                <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">Rejected</span>
                                            )}
                                        </div>

                                        <p className="mb-1 text-xs text-gray-600 text-slate-400 dark:text-slate-400">{request.major} at {request.university}</p>

                                        <p className="mb-1 text-xs text-gray-700 truncate text-slate-300 dark:text-slate-300">{request.message}</p>

                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-500 text-slate-400 dark:text-slate-400">{request.requestDate}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Request Details */}
                <div className="flex flex-col flex-1">
                    {selectedRequest ? (
                        <>
                            {/* Request Header */}
                            <div className="p-6 border-b bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="relative">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20">
                                                <User className="w-6 h-6 text-blue-400" />
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-white text-gray-900 dark:text-white">{mentorshipRequests.find(r => r.id === selectedRequest).studentName}</h3>
                                            <p className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">{mentorshipRequests.find(r => r.id === selectedRequest).major} at {mentorshipRequests.find(r => r.id === selectedRequest).university}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => handleAccept(selectedRequest)}
                                            className="p-2 text-green-600 transition-all duration-300 rounded-lg bg-green-500/20 hover:bg-green-500/30"
                                        >
                                            <CheckCircle className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={() => handleReject(selectedRequest)}
                                            className="p-2 text-red-600 transition-all duration-300 rounded-lg bg-red-500/20 hover:bg-red-500/30"
                                        >
                                            <XCircle className="w-5 h-5" />
                                        </button>
                                        <button className="p-2 text-gray-600 transition-all duration-300 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-gray-200/50 text-slate-400 dark:text-slate-400 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 hover:bg-gray-300/50">
                                            <MoreVertical className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Request Details */}
                            <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                                <div className="p-4 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-gray-200/80">
                                    <h4 className="mb-2 font-medium text-white text-gray-900 dark:text-white">Request Details</h4>
                                    <p className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">{mentorshipRequests.find(r => r.id === selectedRequest).message}</p>
                                </div>

                                <div className="p-4 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-gray-200/80">
                                    <h4 className="mb-2 font-medium text-white text-gray-900 dark:text-white">Expertise Requested</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {mentorshipRequests.find(r => r.id === selectedRequest).expertise.map((skill, index) => (
                                            <span key={index} className="px-2 py-1 text-xs text-blue-400 rounded-lg bg-blue-500/20">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-4 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-gray-200/80">
                                    <h4 className="mb-2 font-medium text-white text-gray-900 dark:text-white">Status</h4>
                                    <p className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">
                                        {mentorshipRequests.find(r => r.id === selectedRequest).status}
                                    </p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex items-center justify-center flex-1">
                            <div className="text-center">
                                <Users className="w-16 h-16 mx-auto mb-4 text-gray-500 text-slate-400 dark:text-slate-400" />
                                <h3 className="mb-2 text-xl font-semibold text-white text-gray-900 dark:text-white">Select a Request</h3>
                                <p className="text-gray-600 text-slate-400 dark:text-slate-400">Choose a mentorship request from the sidebar to review</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Empty Sidebar (Optional Expansion) */}
                <div className="hidden border-l w-80 bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50 md:block">
                    {/* Add additional info or leave empty for now */}
                </div>
            </div>
        </div>
    );
};

export default AlumniMentorshipRequests;