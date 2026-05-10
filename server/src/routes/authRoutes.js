import express from 'express';
import { login, logout, register } from '../controllers/authController.js';
import { authMidlleware } from '../middleware/authmiddleware.js';

const router = express.Router();


router.post('/check', authMidlleware, (req, res) => {
  console.log("check");
  
  res.status(200).json({ message: "User is authenticated" });
});
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

export default router;