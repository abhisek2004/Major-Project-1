// server/src/middleware/auth.ts
// Middleware to check if user is admin (add if not exists)
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'; // Assume JWT auth

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    res.status(401).json({ message: 'No token provided' });
    return;
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret') as { role: string };
    if (decoded.role !== 'admin') { // Assume 'admin' role added to User model
      res.status(403).json({ message: 'Admin access required' });
      return;
    }
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};