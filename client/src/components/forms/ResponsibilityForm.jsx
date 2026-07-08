import React, { useContext } from 'react';
import { ResumeContext } from '../../context/ResumeContext';
import { Plus, Trash2 } from 'lucide-react';

const ResponsibilityForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  
  const handleAdd = () => {
    setResumeData({
      ...resumeData,
      positions: [
        ...(resumeData.positions || []),
        { id: Date.now().toString(), position: '', club: '', tenure: '' }
      ]
    });
  };

  const handleRemove = (id) => {
    setResumeData({
      ...resumeData,
      positions: (resumeData.positions || []).filter(item => item.id !== id)
    });
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setResumeData({
      ...resumeData,
      positions: (resumeData.positions || []).map(item => 
        item.id === id ? { ...item, [name]: value } : item
      )
    });
  };

  return (
    <div className="p-5 border border-white/10 rounded-xl shadow-lg bg-[#060e20]">
      <h2 className="text-lg font-bold text-[#dae2fd] mb-1">Positions of Responsibility</h2>
      <p className="text-[#908fa0] text-xs mb-5">Add your leadership roles</p>

      <div className="space-y-6">
        {(resumeData.positions || []).map((item, index) => (
          <div key={item.id} className="p-4 border border-white/5 rounded-lg bg-[#171f33]/50 relative">
            <button 
              onClick={() => handleRemove(item.id)}
              className="absolute top-4 right-4 text-red-400 hover:text-red-300 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <h3 className="text-sm font-bold text-white mb-3">Position #{index + 1}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">Position</label>
                <input 
                  type="text" name="position" value={item.position} onChange={(e) => handleChange(e, item.id)} placeholder="e.g. Core Committee Member"
                  className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">Club or Event</label>
                <input 
                  type="text" name="club" value={item.club} onChange={(e) => handleChange(e, item.id)} placeholder="e.g. WebOps Club"
                  className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
                />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">Position Tenure</label>
                <input 
                  type="text" name="tenure" value={item.tenure} onChange={(e) => handleChange(e, item.id)} placeholder="e.g. 2024 - 2025"
                  className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
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
        <Plus className="w-4 h-4" /> Add Position
      </button>
    </div>
  );
};

export default ResponsibilityForm;
