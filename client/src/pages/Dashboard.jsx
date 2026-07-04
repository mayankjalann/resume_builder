import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, UploadCloud, MoreVertical, FileText, X } from 'lucide-react';
// Import the dummy data! (Make sure the path matches where you saved it)
import { dummyResumes } from '../assets/assets.js';

const Dashboard = () => {
  const navigate = useNavigate();
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [resumeTitle, setResumeTitle] = useState('');
  
  const handleStartBuilding = (e) => {
    e.preventDefault();
    if (!resumeTitle.trim()) return;
    
    setShowCreateResume(false);
    const newResumeId = Math.random().toString(36).substring(7);
    navigate(`/app/builder/${newResumeId}`);
  };

  const handleUpload = () => {
    console.log("Upload resume clicked");
  };

  const handleEditResume = (id) => {
    navigate(`/app/builder/${id}`);
  };

  return (
    <div className="relative min-h-[calc(100vh-64px)] bg-[#0b1326] font-['Geist',_sans-serif] p-6 pb-20 overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#6366f1]/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#06b6d4]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto mt-10">
        
        {/* Dashboard Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#dae2fd] mb-3 tracking-tight">
            Welcome to your Workspace
          </h1>
          <p className="text-[#908fa0] text-lg">
            What would you like to do today?
          </p>
        </div>

        {/* Options Grid (Create & Upload) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-20">
          
          <button 
            onClick={() => setShowCreateResume(true)}
            className="group relative bg-[#171f33]/40 border border-white/10 hover:border-[#6366f1]/50 rounded-2xl p-8 backdrop-blur-[24px] text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)] flex flex-col items-center justify-center text-center aspect-[16/9]"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6366f1]/20 to-[#6366f1]/5 border border-[#6366f1]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
              <Plus className="w-8 h-8 text-[#6366f1]" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold text-[#dae2fd] mb-2">Create Resume</h3>
            <p className="text-[#908fa0] text-sm leading-relaxed">
              Start from scratch with AI assistance.
            </p>
          </button>

          <button 
            onClick={handleUpload}
            className="group relative bg-[#171f33]/40 border border-white/10 hover:border-[#06b6d4]/50 rounded-2xl p-8 backdrop-blur-[24px] text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] flex flex-col items-center justify-center text-center aspect-[16/9]"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#06b6d4]/20 to-[#06b6d4]/5 border border-[#06b6d4]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <UploadCloud className="w-8 h-8 text-[#06b6d4]" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold text-[#dae2fd] mb-2">Upload Resume</h3>
            <p className="text-[#908fa0] text-sm leading-relaxed">
              Upload existing PDF to parse with AI.
            </p>
          </button>
        </div>

        {/* Previous Resumes Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#dae2fd] mb-6 flex items-center gap-3">
            <FileText className="text-[#06b6d4] w-6 h-6" />
            Recent Architectures
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {dummyResumes.map((resume) => (
              <div 
                key={resume.id} 
                className="group relative bg-[#171f33]/40 border border-white/10 hover:border-white/30 rounded-xl overflow-hidden backdrop-blur-[24px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                onClick={() => handleEditResume(resume.id)}
              >
                
                {/* Resume Thumbnail */}
                <div className="w-full aspect-[3/4] bg-[#060e20] relative overflow-hidden border-b border-white/10">
                  <img 
                    src={resume.thumbnail} 
                    alt={resume.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="px-4 py-2 bg-[#6366f1] text-white text-xs font-bold rounded-full shadow-lg">
                      Edit Resume
                    </span>
                  </div>
                </div>

                {/* Resume Meta Info */}
                <div className="p-4 flex justify-between items-start">
                  <div>
                    <h4 className="text-[#dae2fd] font-semibold text-sm mb-1 truncate max-w-[150px]">
                      {resume.title}
                    </h4>
                    <p className="text-[#908fa0] text-xs">
                      Edited: {resume.lastModified}
                    </p>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents clicking the card when opening the menu
                      console.log("Open menu for", resume.id);
                    }} 
                    className="p-1 hover:bg-white/10 rounded transition-colors text-[#c7c4d7]"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>

        {showCreateResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          {/* Modal Container */}
          <div 
            className="w-full max-w-md bg-[#171f33] border border-white/10 rounded-2xl shadow-2xl relative animate-in fade-in zoom-in duration-200"
          >
            {/* Close Button */}
            <button 
              onClick={() => setShowCreateResume(false)}
              className="absolute top-4 right-4 text-[#908fa0] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            {/* Modal Header */}
            <div className="p-6 border-b border-white/5">
              <h2 className="text-xl font-bold text-[#dae2fd]">Initialize New Resume</h2>
              <p className="text-[#908fa0] text-sm mt-1">Give your new architecture a title.</p>
            </div>
            {/* Form */}
            <form onSubmit={handleStartBuilding} className="p-6">
              <div className="mb-6">
                <label className="block text-xs font-semibold text-[#c7c4d7] uppercase tracking-wider mb-2">
                  Resume Title
                </label>
                <input 
                  type="text"
                  autoFocus
                  required
                  value={resumeTitle}
                  onChange={(e) => setResumeTitle(e.target.value)}
                  placeholder="e.g. Senior Software Engineer"
                  className="w-full bg-[#060e20] border border-white/10 rounded-lg px-4 py-3 text-[#dae2fd] placeholder-white/20 focus:outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] transition-all duration-300"
                />
              </div>
              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3">
                <button 
                  type="button"
                  onClick={() => setShowCreateResume(false)}
                  className="px-5 py-2.5 rounded-lg text-sm font-semibold text-[#c7c4d7] hover:bg-white/5 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-5 py-2.5 bg-[#6366f1] hover:bg-[#4f52d6] text-white text-sm font-semibold rounded-lg shadow-lg transition-colors"
                >
                  Create Document
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      </div>
    </div>
  );
};

export default Dashboard;