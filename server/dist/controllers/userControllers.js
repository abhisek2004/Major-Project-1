"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
// Handle user registration
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullName, email, password, role, department, graduationYear, company } = req.body;
        // Check if user exists
        const existingUser = yield User_1.default.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: 'Email already registered' });
            return;
        }
        // Hash password
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        // Create user
        const user = new User_1.default({
            fullName,
            email,
            password: hashedPassword,
            role,
            department: role === 'student' ? department : undefined,
            graduationYear: role === 'student' ? graduationYear : undefined,
            company: role === 'alumni' || role === 'hr' ? company : undefined,
        });
        yield user.save();
        res.status(201).json({ message: 'User registered successfully', redirect: '/login' });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error during registration', error });
    }
});
exports.createUser = createUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(" i am inside loginuser");
    try {
        const { email, password, role } = req.body;
        console.log("email", email);
        // Find user by email
        const user = yield User_1.default.findOne({ email });
        if (!user) {
            res.status(401).json({ message: 'Invalid email or password' });
            return;
        }
        // Check role
        if (user.role !== role) {
            res.status(401).json({ message: 'Selected role does not match user role' });
            return;
        }
        // Verify password
        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ message: 'Invalid email or password' });
            return;
        }
        // Generate JWT
        const token = jsonwebtoken_1.default.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
        // Define role-based redirect
        const roleRoutes = {
            student: '/student',
            alumni: '/alumni',
            hr: '/hr',
            hod: '/hod',
            admin: '/admin',
            'super-admin': '/super-admin',
        };
        res.status(200).json({
            message: 'Login successful',
            token,
            role: user.role,
            redirect: roleRoutes[user.role],
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error during login', error });
    }
});
exports.loginUser = loginUser;
