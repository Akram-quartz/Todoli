import express from 'express';
import { addTodo, removeTodo, getTodo } from '../controllers/todoController.js';
import { authMidlleware } from '../middleware/authmiddleware.js';

const router = express.Router();

router.use(authMidlleware)

router.get('/', getTodo)

router.post('/', addTodo);

router.delete('/:id', removeTodo);



export default router;