import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardSidebar from '../../../components/DashboardSidebar';
import {
    Target,
    Briefcase,
    Users,
    MessageSquare,
    Bell,
    User,
    BookOpen,
    Send,
    Search,
    Phone,
    Video,
    MoreVertical,
    Paperclip,
    Smile,
    Star,
    Calendar,
    Clock
} from 'lucide-react';

const AlumniMentorshipChat = () => {
    const [selectedChat, setSelectedChat] = useState(1);
    const [message, setMessage] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const sidebarItems = [
        { icon: Target, label: 'Dashboard', path: '/alumni' },
        { icon: Users, label: 'Mentee Management', path: '/alumni/mentees' },
        { icon: MessageSquare, label: 'Mentorship Chat', path: '/alumni/mentorship', badge: '3' },
        { icon: BookOpen, label: 'Resources & Guides', path: '/alumni/resources' },
        { icon: Bell, label: 'Notifications', path: '/alumni/notifications', badge: '5' },
        { icon: User, label: 'Settings', path: '/alumni/settings' }
    ];

    const students = [
        {
            id: 1,
            name: 'Abhisek Panda',
            university: 'Stanford',
            major: 'Computer Science',
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face',
            lastMessage: 'Thank you for the DP hints! Working through the guide now.',
            lastMessageTime: '2 min ago',
            unreadCount: 2,
            isOnline: true,
            interests: ['Software Engineering', 'Algorithms', 'Career Advice'],
            progress: 75,
            sessions: 12
        },
        {
            id: 2,
            name: 'Jane Doe',
            university: 'MIT',
            major: 'Product Design',
            avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face',
            lastMessage: 'Can we schedule a call to discuss my portfolio?',
            lastMessageTime: '1 hour ago',
            unreadCount: 0,
            isOnline: false,
            interests: ['Product Management', 'UX/UI', 'Startup Ideas'],
            progress: 60,
            sessions: 8
        },
        {
            id: 3,
            name: 'John Smith',
            university: 'Harvard',
            major: 'Data Science',
            avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face',
            lastMessage: 'Thanks for the resources! Preparing for interviews.',
            lastMessageTime: '2 days ago',
            unreadCount: 1,
            isOnline: true,
            interests: ['Machine Learning', 'Analytics', 'Big Data'],
            progress: 85,
            sessions: 15
        },
        {
            id: 4,
            name: 'Emily Johnson',
            university: 'Berkeley',
            major: 'Mobile Development',
            avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face',
            lastMessage: 'The SwiftUI tutorial was helpful. Building my app now.',
            lastMessageTime: '3 days ago',
            unreadCount: 0,
            isOnline: false,
            interests: ['iOS Development', 'App Design', 'Swift'],
            progress: 50,
            sessions: 6
        }
    ];

    const messages = [
        {
            id: 1,
            senderId: 'me',
            senderName: 'Diptesh',
            content: 'Hi Abhisek! How are you doing with your algorithm practice?',
            timestamp: '2024-01-15T10:00:00Z',
            isFromStudent: false
        },
        {
            id: 2,
            senderId: 1,
            senderName: 'Abhisek Panda',
            content: 'Hi Diptesh! I\'ve been working on dynamic programming problems. Still finding some of them challenging.',
            timestamp: '2024-01-15T10:05:00Z',
            isFromStudent: true
        },
        {
            id: 3,
            senderId: 'me',
            senderName: 'Diptesh',
            content: 'That\'s completely normal! DP can be tricky at first. Have you tried the classic problems like Fibonacci and Coin Change?',
            timestamp: '2024-01-15T10:07:00Z',
            isFromStudent: false
        },
        {
            id: 4,
            senderId: 1,
            senderName: 'Abhisek Panda',
            content: 'Yes, I\'ve solved Fibonacci but I\'m stuck on the Coin Change problem. Could you give me a hint?',
            timestamp: '2024-01-15T10:10:00Z',
            isFromStudent: true
        },
        {
            id: 5,
            senderId: 'me',
            senderName: 'Diptesh',
            content: 'Sure! Think about it this way: for each coin, you have two choices - include it or exclude it. Try to build a table where dp[i] represents the minimum coins needed to make amount i.',
            timestamp: '2024-01-15T10:15:00Z',
            isFromStudent: false
        },
        {
            id: 6,
            senderId: 'me',
            senderName: 'Diptesh',
            content: 'Also, I\'m attaching a great resource that explains DP patterns step by step. It really helped me when I was learning.',
            timestamp: '2024-01-15T10:16:00Z',
            isFromStudent: false,
            attachment: {
                name: 'DP_Patterns_Guide.pdf',
                size: '2.4 MB',
                type: 'pdf'
            }
        },
        {
            id: 7,
            senderId: 1,
            senderName: 'Abhisek Panda',
            content: 'Thank you so much! This is really helpful. I\'ll work through this and let you know how it goes.',
            timestamp: '2024-01-15T10:20:00Z',
            isFromStudent: true
        },
        {
            id: 8,
            senderId: 'me',
            senderName: 'Diptesh',
            content: 'Great progress on your coding skills! Keep practicing those algorithms.',
            timestamp: '2024-01-15T14:30:00Z',
            isFromStudent: false
        }
    ];

    const selectedStudent = students.find(student => student.id === selectedChat);

    const sendMessage = () => {
        if (message.trim()) {
            // Implementation for sending message
            console.log('Sending message:', message);
            setMessage('');
        }
    };

    const formatTime = (timestamp: string) => {
        return new Date(timestamp).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="flex min-h-screen bg-slate-950 dark:bg-slate-950 bg-gray-50">
            <DashboardSidebar
                items={sidebarItems}
                userRole="alumni"
                userName="Diptesh"
                userAvatar="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face"
            />

            <div className="flex flex-1">
                {/* Chat Sidebar */}
                <div className="flex flex-col border-r w-80 bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50">
                    {/* Header */}
                    <div className="p-6 border-b border-slate-700/50 dark:border-slate-700/50 border-gray-200/50">
                        <h2 className="mb-4 text-xl font-bold text-white text-gray-900 dark:text-white">Mentorship Chat</h2>

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

                    {/* Students List */}
                    <div className="flex-1 overflow-y-auto">
                        {students.map((student) => (
                            <motion.div
                                key={student.id}
                                whileHover={{ backgroundColor: 'rgba(51, 65, 85, 0.3)' }}
                                onClick={() => setSelectedChat(student.id)}
                                className={`p-4 cursor-pointer border-b border-slate-800/50 dark:border-slate-800/50 border-gray-200/50 transition-all duration-200 ${selectedChat === student.id ? 'bg-blue-500/10 border-l-4 border-l-blue-500' : ''}`}
                            >
                                <div className="flex items-start space-x-3">
                                    <div className="relative">
                                        <img
                                            src={student.avatar}
                                            alt={student.name}
                                            className="w-12 h-12 rounded-full"
                                        />
                                        {student.isOnline && (
                                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full border-slate-900 dark:border-slate-900"></div>
                                        )}
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-1">
                                            <h4 className="text-sm font-medium text-white text-gray-900 truncate dark:text-white">{student.name}</h4>
                                            {student.unreadCount > 0 && (
                                                <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                                                    {student.unreadCount}
                                                </span>
                                            )}
                                        </div>

                                        <p className="mb-1 text-xs text-gray-600 text-slate-400 dark:text-slate-400">{student.major} at {student.university}</p>

                                        <p className="mb-1 text-xs text-gray-700 truncate text-slate-300 dark:text-slate-300">{student.lastMessage}</p>

                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-500 text-slate-400 dark:text-slate-400">{student.lastMessageTime}</span>
                                            <div className="flex items-center space-x-1">
                                                <Clock className="w-3 h-3 text-blue-400" />
                                                <span className="text-xs text-gray-500 text-slate-400 dark:text-slate-400">{student.sessions} sessions</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex flex-col flex-1">
                    {selectedStudent ? (
                        <>
                            {/* Chat Header */}
                            <div className="p-6 border-b bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="relative">
                                            <img
                                                src={selectedStudent.avatar}
                                                alt={selectedStudent.name}
                                                className="w-12 h-12 rounded-full"
                                            />
                                            {selectedStudent.isOnline && (
                                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full border-slate-900 dark:border-slate-900"></div>
                                            )}
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-white text-gray-900 dark:text-white">{selectedStudent.name}</h3>
                                            <p className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">{selectedStudent.major} at {selectedStudent.university}</p>
                                            <div className="flex items-center mt-1 space-x-4">
                                                <div className="flex items-center space-x-1">
                                                    <Clock className="w-3 h-3 text-blue-400" />
                                                    <span className="text-xs text-gray-500 text-slate-400 dark:text-slate-400">{selectedStudent.sessions} sessions</span>
                                                </div>
                                                <span className="text-xs text-gray-500 text-slate-400 dark:text-slate-400">{selectedStudent.progress}% progress</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <button className="p-2 text-gray-600 transition-all duration-300 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-gray-200/50 text-slate-400 dark:text-slate-400 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 hover:bg-gray-300/50">
                                            <Phone className="w-5 h-5" />
                                        </button>
                                        <button className="p-2 text-gray-600 transition-all duration-300 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-gray-200/50 text-slate-400 dark:text-slate-400 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 hover:bg-gray-300/50">
                                            <Video className="w-5 h-5" />
                                        </button>
                                        <button className="p-2 text-gray-600 transition-all duration-300 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-gray-200/50 text-slate-400 dark:text-slate-400 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 hover:bg-gray-300/50">
                                            <MoreVertical className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                                {messages.map((msg) => (
                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex ${msg.isFromStudent ? 'justify-start' : 'justify-end'}`}
                                    >
                                        <div className={`max-w-xs lg:max-w-md ${msg.isFromStudent ? 'order-2' : 'order-1'}`}>
                                            {msg.isFromStudent && (
                                                <div className="flex items-center mb-1 space-x-2">
                                                    <img
                                                        src={selectedStudent.avatar}
                                                        alt={selectedStudent.name}
                                                        className="w-6 h-6 rounded-full"
                                                    />
                                                    <span className="text-xs text-gray-600 text-slate-400 dark:text-slate-400">{selectedStudent.name}</span>
                                                    <span className="text-xs text-gray-500 text-slate-500 dark:text-slate-500">{formatTime(msg.timestamp)}</span>
                                                </div>
                                            )}

                                            <div className={`p-3 rounded-2xl ${msg.isFromStudent
                                                ? 'bg-slate-800/50 dark:bg-slate-800/50 bg-gray-200/80 text-white dark:text-white text-gray-900'
                                                : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                                                }`}>
                                                <p className="text-sm">{msg.content}</p>

                                                {msg.attachment && (
                                                    <div className="p-2 mt-2 rounded-lg bg-slate-700/50 dark:bg-slate-700/50 bg-gray-300/50">
                                                        <div className="flex items-center space-x-2">
                                                            <Paperclip className="w-4 h-4 text-gray-600 text-slate-400 dark:text-slate-400" />
                                                            <div>
                                                                <p className="text-xs font-medium">{msg.attachment.name}</p>
                                                                <p className="text-xs text-gray-600 text-slate-400 dark:text-slate-400">{msg.attachment.size}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {!msg.isFromStudent && (
                                                <div className="flex items-center justify-end mt-1 space-x-2">
                                                    <span className="text-xs text-gray-500 text-slate-500 dark:text-slate-500">{formatTime(msg.timestamp)}</span>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Message Input */}
                            <div className="p-6 border-t bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50">
                                <div className="flex items-center space-x-4">
                                    <button className="p-2 text-gray-600 transition-all duration-300 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-gray-200/50 text-slate-400 dark:text-slate-400 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 hover:bg-gray-300/50">
                                        <Paperclip className="w-5 h-5" />
                                    </button>

                                    <div className="relative flex-1">
                                        <input
                                            type="text"
                                            placeholder="Type your message..."
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                                            className="w-full px-4 py-3 text-white text-gray-900 placeholder-gray-500 border border-gray-300 bg-slate-800/50 dark:bg-slate-800/50 bg-gray-100/50 border-slate-600 dark:border-slate-600 rounded-xl dark:text-white placeholder-slate-400 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                        <button className="absolute p-1 text-gray-600 transition-colors transform -translate-y-1/2 right-3 top-1/2 text-slate-400 dark:text-slate-400 hover:text-slate-300 dark:hover:text-slate-300 hover:text-gray-700">
                                            <Smile className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <button
                                        onClick={sendMessage}
                                        className="p-3 text-white transition-all duration-300 transform bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl hover:scale-105"
                                    >
                                        <Send className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex items-center justify-center flex-1">
                            <div className="text-center">
                                <MessageSquare className="w-16 h-16 mx-auto mb-4 text-gray-500 text-slate-400 dark:text-slate-400" />
                                <h3 className="mb-2 text-xl font-semibold text-white text-gray-900 dark:text-white">Select a Student</h3>
                                <p className="text-gray-600 text-slate-400 dark:text-slate-400">Choose a student from the sidebar to start chatting</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Student Info Sidebar */}
                {selectedStudent && (
                    <div className="p-6 border-l w-80 bg-slate-900/50 dark:bg-slate-900/50 bg-white/80 backdrop-blur-xl border-slate-700/50 dark:border-slate-700/50 border-gray-200/50">
                        <div className="mb-6 text-center">
                            <img
                                src={selectedStudent.avatar}
                                alt={selectedStudent.name}
                                className="w-20 h-20 mx-auto mb-4 rounded-full"
                            />
                            <h3 className="text-lg font-semibold text-white text-gray-900 dark:text-white">{selectedStudent.name}</h3>
                            <p className="text-gray-600 text-slate-400 dark:text-slate-400">{selectedStudent.major}</p>
                            <p className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">{selectedStudent.university}</p>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h4 className="mb-2 font-medium text-white text-gray-900 dark:text-white">Interests</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedStudent.interests.map((interest) => (
                                        <span key={interest} className="px-2 py-1 text-xs text-blue-400 rounded-lg bg-blue-500/20">
                                            {interest}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-white text-gray-900 dark:text-white">{selectedStudent.progress}%</p>
                                    <p className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">Progress</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-white text-gray-900 dark:text-white">{selectedStudent.sessions}</p>
                                    <p className="text-sm text-gray-600 text-slate-400 dark:text-slate-400">Sessions</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <button className="flex items-center justify-center w-full px-4 py-2 space-x-2 text-blue-400 transition-all duration-300 border rounded-lg bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30">
                                    <Calendar className="w-4 h-4" />
                                    <span>Schedule Session</span>
                                </button>
                                <button className="flex items-center justify-center w-full px-4 py-2 space-x-2 text-gray-600 transition-all duration-300 border rounded-lg bg-slate-800/50 dark:bg-slate-800/50 bg-gray-200/50 border-slate-700/50 dark:border-slate-700/50 border-gray-300/50 text-slate-400 dark:text-slate-400 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 hover:bg-gray-300/50">
                                    <User className="w-4 h-4" />
                                    <span>View Profile</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AlumniMentorshipChat;