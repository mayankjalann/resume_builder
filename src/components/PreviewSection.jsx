import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';
import ClassicTemplate from './templates/ClassicTemplate';
import ModernTemplate from './templates/ModernTemplate';
import MinimalistTemplate from './templates/MinimalistTemplate';
import CreativeTemplate from './templates/CreativeTemplate';
import NitwTemplate from './templates/NitwTemplate';

const PreviewSection = () => {
  const { resumeData } = useContext(ResumeContext);

  // We read the template string from our context (defaults to 'classic')
  const templateType = resumeData?.template || 'classic';

  return (
    <div className="bg-[#171f33]/40 border border-white/10 rounded-2xl p-6 backdrop-blur-[24px] h-[calc(100vh-140px)] overflow-y-auto custom-scrollbar">
      
      {/* 
        This is where the magic happens!
        We render a totally different component depending on the template selected.
      */}
      {templateType === 'classic' && <ClassicTemplate />}
      {templateType === 'modern' && <ModernTemplate />}
      {templateType === 'minimalist' && <MinimalistTemplate />}
      {templateType === 'creative' && <CreativeTemplate />}
      {templateType === 'nitw' && <NitwTemplate />}

    </div>
  );
};

export default PreviewSection;
