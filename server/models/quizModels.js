import mongoose from 'mongoose';

const optionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, default: false }
});

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [optionSchema],
  correctAnswer: { type: String, required: true } // Ensure this is required
});

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category :{type:String,required :true},
  featured :{type:Boolean,required:true},
  questions: [questionSchema],
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Quiz = mongoose.model('Quiz', quizSchema);

export default Quiz;
