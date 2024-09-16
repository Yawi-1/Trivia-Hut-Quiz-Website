import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'
import userRouter from './routes/userRoutes.js';
import quizRouter from './routes/quizRoutes.js';
import path from 'path';

dotenv.config();
const app = express();
const _dirname = path.resolve();

app.use(express.json()); 
app.use(cors({}));
app.use('/api/users', userRouter);
app.use('/api/quizzes', quizRouter); 
app.use(express.static(path.join(_dirname,'/client/dist')))

app.get('*', (_, res) => {
    res.sendFile(path.resolve(_dirname,"client","dist","index.html"));
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
