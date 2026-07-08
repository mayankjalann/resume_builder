import express from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Initialize Gemini API client
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

router.post('/enhance', async (req, res) => {
  try {
    const { text, context } = req.body;

    if (!text) {
      return res.status(400).json({ error: 'Text is required for enhancement' });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: 'Server configuration error: Gemini API key is missing' });
    }

    const prompt = `
You are an expert resume writer and career coach. 
Your task is to take the following raw input text provided by a user and rewrite it into a highly professional, ATS-optimized bullet point or summary. 
It should be action-oriented, impactful, and concisely written. 
Do not add conversational text, just return the enhanced text.

Context of the text: ${context || 'General resume text'}
Original text: "${text}"

Enhanced professional text:`;

    // Call the Gemini 2.5 Flash model
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    const enhancedText = response.text.trim();
    
    res.json({ enhancedText });
  } catch (error) {
    console.error('Error in AI Enhancement:', error);
    res.status(500).json({ error: 'Failed to enhance text with AI', details: error.message });
  }
});

export default router;
