// server/src/middleware/validate.ts
import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

// Validation middleware for register route
export const validateRegister = [
  body('fullName').notEmpty().withMessage('Full name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/).withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one number'),
  body('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Passwords do not match');
    }
    return true;
  }),
  body('role').isIn(['student', 'alumni', 'hr']).withMessage('Valid role is required'),
  body('department').if(body('role').equals('student')).notEmpty().withMessage('Department is required for students'),
  body('graduationYear').if(body('role').equals('student')).notEmpty().withMessage('Graduation year is required for students'),
  body('company').if(body('role').isIn(['alumni', 'hr'])).notEmpty().withMessage('Company is required for alumni and HR'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ message: 'Validation failed', errors: errors.array() });
      return;
    }
    next();
  },
];

export const validateLogin = [
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required'),
  body('role').isIn(['student', 'alumni', 'hr', 'hod', 'admin', 'super-admin']).withMessage('Valid role is required'),
  (req: Request, res: Response, next: NextFunction) => {
    console.log("📩 Incoming login request body:", req.body); 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ message: 'Validation failed', errors: errors.array() });
      return;
    }
    next();
  },
];

export const validateApproval = [
  body('notes').optional().isString().withMessage('Notes must be a string'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ message: 'Validation failed', errors: errors.array() });
      return;
    }
    next();
  },
];