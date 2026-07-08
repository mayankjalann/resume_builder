import React, { useContext } from 'react';
import { ResumeContext } from '../../context/ResumeContext';
import { Plus, Trash2 } from 'lucide-react';

const ExperienceForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  
  const [enhancingId, setEnhancingId] = React.useState(null);

  const handleEnhance = async (id, currentText, role, company) => {
    if (!currentText.trim()) return;
    setEnhancingId(id);
    try {
      const res = await fetch(`/api/ai/enhance`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ 
          text: currentText, 
          context: `Role: ${role} at ${company}. Convert the input into professional, action-oriented resume bullet points.` 
        })
      });
      const data = await res.json();
      if (data.enhancedText) {
        setResumeData({
          ...resumeData,
          experience: (resumeData.experience || []).map(item => 
            item.id === id ? { ...item, description: data.enhancedText } : item
          )
        });
      }
    } catch (err) {
      console.error("AI enhancement failed:", err);
      alert("Failed to enhance text. Check your API key and connection.");
    } finally {
      setEnhancingId(null);
    }
  };

  const handleAdd = () => {
    setResumeData({
      ...resumeData,
      experience: [
        ...(resumeData.experience || []), 
        { id: Date.now().toString(), company: '', role: '', city: '', date: '', description: '' }
      ]
    });
  };

  const handleRemove = (id) => {
    setResumeData({
      ...resumeData,
      experience: (resumeData.experience || []).filter(item => item.id !== id)
    });
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setResumeData({
      ...resumeData,
      experience: (resumeData.experience || []).map(item => 
        item.id === id ? { ...item, [name]: value } : item
      )
    });
  };

  return (
    <div className="p-5 border border-white/10 rounded-xl shadow-lg bg-[#060e20]">
      <h2 className="text-lg font-bold text-[#dae2fd] mb-1">Experience</h2>
      <p className="text-[#908fa0] text-xs mb-5">Add your work experience</p>

      <div className="space-y-6">
        {(resumeData.experience || []).map((item, index) => (
          <div key={item.id} className="p-4 border border-white/5 rounded-lg bg-[#171f33]/50 relative">
            <button 
              onClick={() => handleRemove(item.id)}
              className="absolute top-4 right-4 text-red-400 hover:text-red-300 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <h3 className="text-sm font-bold text-white mb-3">Experience #{index + 1}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">Company Name</label>
                <input 
                  type="text" name="company" value={item.company} onChange={(e) => handleChange(e, item.id)}
                  className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
                />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">Your Role</label>
                <input 
                  type="text" name="role" value={item.role} onChange={(e) => handleChange(e, item.id)}
                  className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">City/Location</label>
                <input 
                  type="text" name="city" value={item.city} onChange={(e) => handleChange(e, item.id)}
                  className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">Event Dates</label>
                <input 
                  type="text" name="date" value={item.date} onChange={(e) => handleChange(e, item.id)} placeholder="e.g. May 2025 - July 2025"
                  className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
                />
              </div>
              <div className="col-span-2">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-semibold text-[#c7c4d7]">Work Description</label>
                  <button 
                    onClick={() => handleEnhance(item.id, item.description, item.role, item.company)}
                    disabled={enhancingId === item.id || !item.description?.trim()}
                    className="px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white text-[10px] font-bold rounded-lg shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all flex items-center gap-1 disabled:opacity-50"
                  >
                    {enhancingId === item.id ? '✨ Enhancing...' : '✨ AI Enhance'}
                  </button>
                </div>
                <textarea 
                  name="description" value={item.description} onChange={(e) => handleChange(e, item.id)} rows="6"
                  placeholder="– Work description line 1&#10;– Work description line 2"
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
        <Plus className="w-4 h-4" /> Add Experience
      </button>
    </div>
  );
};

export default ExperienceForm;
