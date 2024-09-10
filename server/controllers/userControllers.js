import User from '../models/userModels.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// User registration

const adminEmails = ['yawimalik786@gmail.com','admin@gmail.com'];

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Determine role based on email
        const role = adminEmails.includes(email) ? 'admin' : 'user';

        // Create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            role, // Add role here
        });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error in registerUser:', error); // Log the error
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};

// User login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        res.status(200).json({ token, id: user._id,role:user.role });
    } catch (error) {
        console.error('Error in loginUser:', error); // Log the error
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};


const getAllUsers = async (req,res) =>{
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (error) {
        console.error('Error:',error)
    }
}

const deleteUser = async (req,res)=>{
    try {
        const {id} = req.params;
       await User.findByIdAndDelete(id);
        res.status(200).json({message:'User deleted successfully'})
    } catch (error) {
        console.log('User Deleted Successfully ..........')
    }
}

export { registerUser, loginUser,getAllUsers,deleteUser };
