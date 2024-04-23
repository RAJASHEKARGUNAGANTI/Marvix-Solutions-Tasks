import { body } from 'express-validator';

// Register route validation rules
export const registerValidationRules = () => {
    return [
        body('firstName').notEmpty().withMessage('First name is required'),
        body('lastName').notEmpty().withMessage('Last name is required'),
        body('email').isEmail().withMessage('Invalid email address'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
        // Add validation rules for userType if needed
    ];
}

// Login route validation rules
export const loginValidationRules = () => {
    return [
        body('email').isEmail().withMessage('Invalid email address'),
        body('password').notEmpty().withMessage('Password is required'),
    ];
}
