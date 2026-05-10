import express from 'express';
import { addCategory, getCategory, removeCategory } from '../controllers/categoryController.js';
import { authMidlleware } from '../middleware/authmiddleware.js';

const router = express.Router();

router.use(authMidlleware)

router.get('/', getCategory)

router.post('/', addCategory);

router.delete('/:id', removeCategory);

export default router;