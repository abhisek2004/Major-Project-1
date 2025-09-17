// server/src/controllers/userController.ts
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

// Handle user registration
export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { fullName, email, password, role, department, graduationYear, company } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: 'Email already registered' });
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({
      fullName,
      email,
      password: hashedPassword,
      role,
      department: role === 'student' ? department : undefined,
      graduationYear: role === 'student' ? graduationYear : undefined,
      company: role === 'alumni' || role === 'hr' ? company : undefined,
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully', redirect: '/login' });
  } catch (error) {
    res.status(500).json({ message: 'Server error during registration', error });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  console.log(" i am inside loginuser")
  try {
    const { email, password, role } = req.body;
    console.log("email",email);
    // Find user by email
    const user = await User.findOne({ email });
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
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '1d' }
    );

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
      redirect: roleRoutes[user.role as keyof typeof roleRoutes],
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error during login', error });
  }
};