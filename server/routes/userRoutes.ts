// server/src/routes/userRoutes.ts
import { Router, Request, Response } from 'express';
import { createUser, loginUser } from '../controllers/userControllers';

import { validateLogin, validateRegister } from '../middleware/validate';

const router: Router = Router();

// Register route to handle user creation
router.post('/register', validateRegister, createUser);
router.post('/login', loginUser)

export default router;