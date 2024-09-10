import express from 'express';
import { createQuiz, getAllQuizzes, getQuizById,deleteQuizById } from '../controllers/quizControllers.js';
import authMiddleware from '../middlewares/auth.js';

const quizRouter = express.Router();

quizRouter.post('/create',authMiddleware, createQuiz);
quizRouter.get('/', getAllQuizzes);
quizRouter.get('/:id',authMiddleware, getQuizById);
quizRouter.delete('/:id',authMiddleware, deleteQuizById);

export default quizRouter;
