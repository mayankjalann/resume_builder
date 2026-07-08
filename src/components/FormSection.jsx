import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react';
import PersonalDetailForm from './forms/PersonalDetailForm';
import EducationForm from './forms/EducationForm';
import ExperienceForm from './forms/ExperienceForm';
import ProjectsForm from './forms/ProjectsForm';
import SkillsForm from './forms/SkillsForm';
import ResponsibilityForm from './forms/ResponsibilityForm';
import AchievementsForm from './forms/AchievementsForm';

const FormSection = () => {
  const [activeFormIndex, setActiveFormIndex] = useState(1);

  return (
    <div className="bg-[#171f33]/40 border border-white/10 rounded-2xl p-6 backdrop-blur-[24px] h-[calc(100vh-140px)] overflow-y-auto custom-scrollbar flex flex-col">
      
      {/* Navigation Header */}
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#dae2fd] hover:bg-white/10 transition-colors border border-white/10">
          <LayoutGrid className="w-4 h-4" /> Theme
        </button>
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
             <button 
                onClick={() => setActiveFormIndex(activeFormIndex - 1)}
                className="flex items-center gap-1 px-4 py-2 bg-[#060e20] hover:bg-[#1a233a] border border-white/10 text-white text-xs font-semibold rounded-lg transition-colors"
             >
               <ArrowLeft className="w-4 h-4" /> Previous
             </button>
          )}
          
          <button 
             onClick={() => setActiveFormIndex(activeFormIndex + 1)}
             className="flex items-center gap-1 px-4 py-2 bg-[#6366f1] hover:bg-[#4f52d6] text-white text-xs font-semibold rounded-lg shadow-lg transition-colors"
          >
            Next <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Form Content Area */}
      <div className="flex-1">
        {activeFormIndex === 1 && <PersonalDetailForm />}
        {activeFormIndex === 2 && <EducationForm />}
        {activeFormIndex === 3 && <ExperienceForm />}
        {activeFormIndex === 4 && <ProjectsForm />}
        {activeFormIndex === 5 && <SkillsForm />}
        {activeFormIndex === 6 && <ResponsibilityForm />}
        {activeFormIndex === 7 && <AchievementsForm />}
        {activeFormIndex > 7 && <div className="text-green-400 font-bold">Resume Completed!</div>}
      </div>
      
    </div>
  );
};

export default FormSection;
