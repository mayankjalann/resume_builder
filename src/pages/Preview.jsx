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
    // Wrap the PreviewSection in the Context Provider!
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      <div className="min-h-screen bg-[#0b1326] p-4 flex justify-center items-start">
        {
          resumeData 
            ? <PreviewSection /> 
            : <div className="text-white text-xl mt-10">Loading Resume...</div>
        }
      </div>
    </ResumeContext.Provider>
  )
}

export default Preview;