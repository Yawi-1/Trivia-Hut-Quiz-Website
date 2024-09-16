import express from 'express';
import { registerUser, loginUser,getAllUsers,deleteUser,updateUser } from '../controllers/userControllers.js';
import authMiddleware from '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/allUsers', getAllUsers);
userRouter.get('/singleUser/:id', authMiddleware,getAllUsers);
userRouter.put('/update/:id',authMiddleware, updateUser);
userRouter.delete('/:id', deleteUser);
export default userRouter;
