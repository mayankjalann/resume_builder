import React from 'react';
import Title from './Title.jsx';

const Features = () => {
  const featureList = [
    {
      id: 1,
      title: "AI-Powered Optimization",
      description: "Leverage Google Gemini AI to instantly generate professional summaries and bullet points tailored to your industry.",
      icon: (
        <svg className="w-6 h-6 text-[#6366f1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "ATS-Friendly Architecture",
      description: "Our templates are structurally designed to pass through Applicant Tracking Systems, ensuring humans actually read your resume.",
      icon: (
        <svg className="w-6 h-6 text-[#06b6d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Real-Time Preview",
      description: "Watch your resume build instantly as you type. Our high-fidelity preview mode guarantees what you see is what you export.",
      icon: (
        <svg className="w-6 h-6 text-[#6366f1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "One-Click PDF Export",
      description: "Download a pixel-perfect, high-resolution PDF version of your resume instantly, ready to be attached to your next application.",
      icon: (
        <svg className="w-6 h-6 text-[#06b6d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-[#060e20] py-24 px-6 md:px-12 font-['Geist',_sans-serif] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#6366f1]/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#dae2fd] mb-4 tracking-[-0.02em]">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#06b6d4]">Success</span>
          </h2>
          <p className="text-[#c7c4d7] max-w-2xl mx-auto text-base">
            Every feature is designed to give you a competitive edge. From AI generation to pristine formatting, building your resume has never been this advanced.
          </p>
        </div>


        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featureList.map((feature) => (
            <div 
              key={feature.id} 
              className="group relative bg-[#131b2e]/60 border border-white/5 hover:border-white/20 rounded-2xl p-8 backdrop-blur-[24px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
            >
              {/* Subtle inner hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
              
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-full bg-[#171f33] border border-white/10 flex items-center justify-center mb-6 shadow-inner relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none"></div>
                 {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-[#dae2fd] mb-3">
                {feature.title}
              </h3>
              
              <p className="text-[#908fa0] leading-[1.6]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Features;