import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, DownloadIcon } from 'lucide-react';
import { useReactToPrint } from 'react-to-print';
import { ResumeContext } from '../context/ResumeContext';
import FormSection from '../components/FormSection';
import PreviewSection from '../components/PreviewSection';
import { dummyResumes } from '../assets/assets';
// NOTE: We don't need dummyResumes here anymore because we are editing a single resume structure.
// But for now, if you want to load the dummy data array to find a title, you could import it.

const API_URL = '/api/resumes';

const ResumeBuilder = () => {
  const { resumeId } = useParams();
  const printRef = useRef();

  // This is the EXACT state structure from your screenshot!
  const [resumeData, setResumeData] = useState({
    _id: '',
    title: '',
    personal_info: {
      firstName: '',
      lastName: '',
      rollNo: '',
      program: '',
      course: '',
      email: '',
      phone: '',
      github: '',
      linkedin: '',
      image: null
    },
    professional_summary: "",
    education: [],
    experience: [],
    project: [],
    skills: {
      languages: '',
      developer_tools: '',
      frameworks: '',
      cloud_databases: '',
      soft_skills: '',
      coursework: '',
      areas_of_interest: ''
    },
    positions: [],
    achievements: [],
    template: "nitw",
    accent_color: "#3B82F6",
    public: false,
  });

  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (resumeId) {
      fetch(`${API_URL}/${resumeId}`, { credentials: 'include' })
        .then(res => res.json())
        .then(data => {
          if (data && !data.error) {
            setResumeData(data);
          }
        })
        .catch(err => console.error("Error fetching resume:", err));
    }
  }, [resumeId]);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await fetch(`${API_URL}/${resumeId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(resumeData)
      });
      // Optionally show a success toast here
    } catch (err) {
      console.error("Error saving resume:", err);
    } finally {
      setIsSaving(false);
    }
  };

  const handlePrint = useReactToPrint({
    content: () => printRef,
    documentTitle: `${resumeData?.personal_info?.firstName || 'Resume'}_${resumeData?.personal_info?.lastName || 'Draft'}`,
  });

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      <div className="min-h-screen bg-[#0b1326] font-['Geist',_sans-serif] p-4 md:p-6 overflow-hidden flex flex-col">
        
        {/* Top Navigation Bar for Builder */}
        <div className="flex justify-between items-center mb-6 bg-[#171f33]/40 border border-white/10 backdrop-blur-md px-6 py-4 rounded-2xl">
          <Link to={'/app'} className="flex items-center gap-2 text-[#908fa0] hover:text-white transition-colors text-sm font-semibold">
            <ArrowLeftIcon className="w-4 h-4" /> Back to Dashboard
          </Link>
          <div className="flex items-center gap-4">
            <select 
              value={resumeData.template}
              className="bg-[#060e20] text-white border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#6366f1]"
              onChange={(e)=>setResumeData({...resumeData, template: e.target.value})}
            >
              <option value='classic'>Classic</option>
              <option value='modern'>Modern</option>
              <option value='minimalist'>Minimalist</option>
              <option value='creative'>Creative</option>
              <option value="nitw">NITW Template</option>
            </select>
            <button 
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-2 px-5 py-2 bg-[#171f33] border border-white/10 hover:bg-white/5 text-white text-sm font-semibold rounded-lg transition-colors disabled:opacity-50"
            >
              {isSaving ? 'Saving...' : 'Save Draft'}
            </button>
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 px-5 py-2 bg-[#6366f1] hover:bg-[#4f52d6] text-white text-sm font-semibold rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all"
            >
              <DownloadIcon className="w-4 h-4" /> Download PDF
            </button>
          </div>
        </div>

        {/* Split Screen Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 h-[calc(100vh-140px)]">
          {/* LEFT SIDE: Form Inputs */}
          <div className="h-full">
             <FormSection />
          </div>
          
          {/* RIGHT SIDE: Live A4 Preview */}
          <div className="hidden md:block h-full overflow-y-auto custom-scrollbar rounded-lg pb-10">
             <div ref={printRef}>
               <PreviewSection />
             </div>
          </div>
        </div>

      </div>
    </ResumeContext.Provider>
  );
};

export default ResumeBuilder;