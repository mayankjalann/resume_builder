import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import PreviewSection from '../components/PreviewSection';
import { ResumeContext } from '../context/ResumeContext'; // <-- Import the context!

const API_URL = '/api/resumes'; // <-- Make sure to define your API URL

const Preview = () => {
  const { resumeId } = useParams();
  const [resumeData, setResumeData] = useState(null); // Changed to null so we know when it's loading

  const loadResume = async () => {
      fetch(`${API_URL}/${resumeId}`, { credentials: 'include' })
        .then(res => res.json())
        .then(data => {
          if (data && !data.error) {
            setResumeData(data);
          }
        })
        .catch(err => console.error("Error fetching resume:", err));
  }
  
  useEffect(() => {
    loadResume();
  }, [])

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {/* 1. We removed the padding and added py-10 (padding top/bottom) */}
      <div className="min-h-screen bg-[#0b1326] flex justify-center py-10 overflow-auto">
        
        {/* 2. We wrap the preview in a fixed-width container (max-w-4xl) so it spans the screen but doesn't get too stretched out */}
        <div className="w-full max-w-4xl bg-white shadow-2xl rounded-sm overflow-hidden">
          {
            resumeData 
              ? <PreviewSection /> 
              : <div className="text-white text-xl mt-10 text-center">Loading Resume...</div>
          }
        </div>
        
      </div>
    </ResumeContext.Provider>
  )
}

export default Preview;