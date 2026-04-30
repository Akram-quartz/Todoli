import express from 'express';
import { addTodo } from '../controllers/todoController.js';

const router = express.Router();

router.post('/', addTodo);

export default router;