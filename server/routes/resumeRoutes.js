import express from 'express';
import Resume from '../models/Resume.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = express.Router();

// Apply JWT verification to all resume routes
router.use(verifyJWT);

// GET all resumes for logged-in user
router.get('/', async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.user._id })
      .select('title updatedAt')
      .sort({ updatedAt: -1 });
    res.json(resumes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET single resume
router.get('/:id', async (req, res) => {
  try {
    const resume = await Resume.findOne({ _id: req.params.id, userId: req.user._id });
    if (!resume) return res.status(404).json({ error: 'Resume not found' });
    res.json(resume);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CREATE new resume
router.post('/', async (req, res) => {
  try {
    const newResume = new Resume({ ...req.body, userId: req.user._id });
    const savedResume = await newResume.save();
    res.status(201).json(savedResume);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// UPDATE resume
router.put('/:id', async (req, res) => {
  try {
    const updatedResume = await Resume.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id }, 
      req.body, 
      { new: true, runValidators: true }
    );
    if (!updatedResume) return res.status(404).json({ error: 'Resume not found' });
    res.json(updatedResume);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE resume
router.delete('/:id', async (req, res) => {
  try {
    const deletedResume = await Resume.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    if (!deletedResume) return res.status(404).json({ error: 'Resume not found' });
    res.json({ message: 'Resume deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
