import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'
import userRouter from './routes/userRoutes.js';
import quizRouter from './routes/quizRoutes.js';

dotenv.config();
const app = express();

app.use(express.json()); 
app.use(cors({}));
app.use('/api/users', userRouter);
app.use('/api/quizzes', quizRouter); // Protect quiz routes with auth middleware

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

mongoose.connect(process.env.MONGO_DB_URI)
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
