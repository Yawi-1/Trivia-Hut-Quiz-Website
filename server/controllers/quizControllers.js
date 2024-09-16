import Quiz from '../models/quizModels.js';
// Create a new quiz 
const createQuiz = async (req, res) => {
    try {
        const { title, description, category, questions, creator,featured } = req.body;

        const newQuiz = new Quiz({
            title,
            description,
            category,
            questions,
            creator,
            featured,
        });

        await newQuiz.save();
        res.status(201).json({ message: 'Quiz created successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all quizzes
 const getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find().populate('creator', 'username');
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single quiz by ID
 const getQuizById = async (req, res) => {
    try {
        const { id } = req.params;
        const quiz = await Quiz.findById(id).populate('creator', 'username');
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }
        res.status(200).json(quiz);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteQuizById = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedQuiz = await Quiz.findByIdAndDelete(id);
      if (!deletedQuiz) {
        return res.status(404).json({ message: 'Quiz not found' });
      }
      res.status(200).json({ message: 'Quiz deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting quiz. Please try again.' });
    }
  };



export {getQuizById,getAllQuizzes,createQuiz,deleteQuizById}