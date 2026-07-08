import React, { useContext } from 'react';
import { ResumeContext } from '../../context/ResumeContext';
import { Plus, Trash2 } from 'lucide-react';

const ProjectsForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  
  const handleAdd = () => {
    setResumeData({
      ...resumeData,
      project: [
        ...(resumeData.project || []), 
        { id: Date.now().toString(), name: '', date: '', description: '', tools: '', moreInfo: '' }
      ]
    });
  };

  const handleRemove = (id) => {
    setResumeData({
      ...resumeData,
      project: (resumeData.project || []).filter(item => item.id !== id)
    });
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setResumeData({
      ...resumeData,
      project: (resumeData.project || []).map(item => 
        item.id === id ? { ...item, [name]: value } : item
      )
    });
  };

  return (
    <div className="p-5 border border-white/10 rounded-xl shadow-lg bg-[#060e20]">
      <h2 className="text-lg font-bold text-[#dae2fd] mb-1">Personal Projects</h2>
      <p className="text-[#908fa0] text-xs mb-5">Add your technical projects</p>

      <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white text-xs font-bold rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.5)] hover:shadow-[0_0_20px_rgba(99,102,241,0.7)] transition-all flex items-center gap-2">
  ✨ Enhance with AI
</button>

      <div className="space-y-6">
        {(resumeData.project || []).map((item, index) => (
          <div key={item.id} className="p-4 border border-white/5 rounded-lg bg-[#171f33]/50 relative">
            <button 
              onClick={() => handleRemove(item.id)}
              className="absolute top-4 right-4 text-red-400 hover:text-red-300 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <h3 className="text-sm font-bold text-white mb-3">Project #{index + 1}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">Project Name</label>
                <input 
                  type="text" name="name" value={item.name} onChange={(e) => handleChange(e, item.id)}
                  className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
                />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">Event Dates</label>
                <input 
                  type="text" name="date" value={item.date} onChange={(e) => handleChange(e, item.id)} placeholder="e.g. Aug 2025 - Present"
                  className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
                />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">Project Description</label>
                <input 
                  type="text" name="description" value={item.description} onChange={(e) => handleChange(e, item.id)}
                  className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
                />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">Tools & Technologies Used</label>
                <input 
                  type="text" name="tools" value={item.tools} onChange={(e) => handleChange(e, item.id)} placeholder="e.g. React, Node.js"
                  className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
                />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">More Description (Bullet points)</label>
                <textarea 
                  name="moreInfo" value={item.moreInfo} onChange={(e) => handleChange(e, item.id)} rows="3"
                  placeholder="– Detailed description point 1"
                  className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none resize-none" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={handleAdd}
        className="mt-4 flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold rounded-lg border border-white/10 transition-colors"
      >
        <Plus className="w-4 h-4" /> Add Project
      </button>
    </div>
  );
};

export default ProjectsForm;
