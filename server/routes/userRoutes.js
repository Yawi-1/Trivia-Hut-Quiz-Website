import express from 'express';
import { registerUser, loginUser,getAllUsers,deleteUser } from '../controllers/userControllers.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/allUsers', getAllUsers);
userRouter.delete('/:id', deleteUser);
export default userRouter;
