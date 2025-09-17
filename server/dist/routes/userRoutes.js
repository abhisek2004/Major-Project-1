"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// server/src/routes/userRoutes.ts
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
const validate_1 = require("../middleware/validate");
const router = (0, express_1.Router)();
// Register route to handle user creation
router.post('/register', validate_1.validateRegister, userControllers_1.createUser);
router.post('/login', userControllers_1.loginUser);
exports.default = router;
