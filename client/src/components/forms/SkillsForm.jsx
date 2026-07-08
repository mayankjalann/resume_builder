import React, { useContext } from 'react';
import { ResumeContext } from '../../context/ResumeContext';

const SkillsForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData({
      ...resumeData,
      skills: {
        ...(resumeData.skills || {}),
        [name]: value
      }
    });
  };

  return (
    <div className="p-5 border border-white/10 rounded-xl shadow-lg bg-[#060e20]">
      <h2 className="text-lg font-bold text-[#dae2fd] mb-1">Technical Skills and Interests</h2>
      <p className="text-[#908fa0] text-xs mb-5">Add your core competencies</p>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">Languages</label>
          <input 
            type="text" name="languages" value={(resumeData.skills || {}).languages || ''} onChange={handleChange}
            className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">Developer Tools</label>
          <input 
            type="text" name="developer_tools" value={(resumeData.skills || {}).developer_tools || ''} onChange={handleChange}
            className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">Frameworks</label>
          <input 
            type="text" name="frameworks" value={(resumeData.skills || {}).frameworks || ''} onChange={handleChange}
            className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">Cloud/Databases</label>
          <input 
            type="text" name="cloud_databases" value={(resumeData.skills || {}).cloud_databases || ''} onChange={handleChange}
            className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">Soft Skills</label>
          <input 
            type="text" name="soft_skills" value={(resumeData.skills || {}).soft_skills || ''} onChange={handleChange}
            className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">Coursework</label>
          <input 
            type="text" name="coursework" value={(resumeData.skills || {}).coursework || ''} onChange={handleChange}
            className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">Areas of Interest</label>
          <input 
            type="text" name="areas_of_interest" value={(resumeData.skills || {}).areas_of_interest || ''} onChange={handleChange}
            className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;
