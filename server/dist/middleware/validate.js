"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateApproval = exports.validateLogin = exports.validateRegister = void 0;
const express_validator_1 = require("express-validator");
// Validation middleware for register route
exports.validateRegister = [
    (0, express_validator_1.body)('fullName').notEmpty().withMessage('Full name is required'),
    (0, express_validator_1.body)('email').isEmail().withMessage('Valid email is required'),
    (0, express_validator_1.body)('password')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/).withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one number'),
    (0, express_validator_1.body)('confirmPassword').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Passwords do not match');
        }
        return true;
    }),
    (0, express_validator_1.body)('role').isIn(['student', 'alumni', 'hr']).withMessage('Valid role is required'),
    (0, express_validator_1.body)('department').if((0, express_validator_1.body)('role').equals('student')).notEmpty().withMessage('Department is required for students'),
    (0, express_validator_1.body)('graduationYear').if((0, express_validator_1.body)('role').equals('student')).notEmpty().withMessage('Graduation year is required for students'),
    (0, express_validator_1.body)('company').if((0, express_validator_1.body)('role').isIn(['alumni', 'hr'])).notEmpty().withMessage('Company is required for alumni and HR'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ message: 'Validation failed', errors: errors.array() });
            return;
        }
        next();
    },
];
exports.validateLogin = [
    (0, express_validator_1.body)('email').isEmail().withMessage('Valid email is required'),
    (0, express_validator_1.body)('password').notEmpty().withMessage('Password is required'),
    (0, express_validator_1.body)('role').isIn(['student', 'alumni', 'hr', 'hod', 'admin', 'super-admin']).withMessage('Valid role is required'),
    (req, res, next) => {
        console.log("📩 Incoming login request body:", req.body);
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ message: 'Validation failed', errors: errors.array() });
            return;
        }
        next();
    },
];
exports.validateApproval = [
    (0, express_validator_1.body)('notes').optional().isString().withMessage('Notes must be a string'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ message: 'Validation failed', errors: errors.array() });
            return;
        }
        next();
    },
];
