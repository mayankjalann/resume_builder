import React from 'react';
import { useNavigate } from "react-router-dom";


const Hero = () => {
  return (
    <section className="relative bg-[#0b1326] min-h-screen flex items-center overflow-hidden font-['Geist',_sans-serif]">
      
      {/* Ambient Radial Glows */}
      <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-[#6366f1]/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-[#06b6d4]/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-[1280px] mx-auto px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          
          {/* Pill Badge */}
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[#4cd7f6] text-xs font-semibold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse"></span>
            System Online
          </span>
          
          {/* Headline */}
          <h1 className="text-[32px] sm:text-[48px] font-bold text-[#dae2fd] leading-[1.1] tracking-[-0.04em] mb-6 drop-shadow-[0_4px_24px_rgba(99,102,241,0.2)]">
            Engineer your <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#06b6d4]">
              Professional Future
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-[16px] text-[#c7c4d7] leading-[1.6] mb-10 max-w-xl mx-auto lg:mx-0">
            A high-performance digital experience. Construct a modern, elite resume designed for the tech industry's rigorous standards.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="px-8 py-3.5 bg-gradient-to-r from-[#6366f1] to-[#06b6d4] text-white font-semibold rounded-full shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:-translate-y-0.5 transition-all duration-300">
              Initialize Resume
            </button>
            <button className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-[#dae2fd] font-semibold rounded-full backdrop-blur-md transition-all duration-300">
              View Architecture
            </button>
          </div>
        </div>

        {/* Right Column: Glassmorphic Visual/Mockup */}
        <div className="w-full lg:w-1/2 mt-16 lg:mt-0 flex justify-center lg:justify-end perspective-1000">
          <div className="relative w-full max-w-md aspect-[3/4] bg-[#171f33]/40 border border-white/10 rounded-2xl backdrop-blur-[24px] shadow-[0_40px_80px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden flex flex-col p-8 transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
            
            {/* Subtle Inner Glow for Light Source effect */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none"></div>

            {/* Mockup Content (Wireframe style) */}
            <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-6">
              <div className="w-12 h-12 rounded-full bg-white/10"></div>
              <div className="flex-1 space-y-3">
                <div className="w-1/2 h-3 bg-white/20 rounded-full"></div>
                <div className="w-1/3 h-2 bg-white/10 rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-6 flex-1">
              <div className="space-y-3">
                <div className="w-1/4 h-2 bg-[#6366f1] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                <div className="w-full h-2 bg-white/10 rounded-full"></div>
                <div className="w-5/6 h-2 bg-white/10 rounded-full"></div>
              </div>
              
              <div className="space-y-3 pt-4 border-t border-white/5">
                <div className="w-1/4 h-2 bg-[#06b6d4] rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                <div className="w-full h-2 bg-white/10 rounded-full"></div>
                <div className="w-full h-2 bg-white/10 rounded-full"></div>
                <div className="w-4/5 h-2 bg-white/10 rounded-full"></div>
              </div>
            </div>

            <span className="absolute bottom-6 right-8 text-[#908fa0] font-semibold text-[10px] tracking-widest uppercase">
              Preview Mode
            </span>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;