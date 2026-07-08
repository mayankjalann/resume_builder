import React from 'react';
import { useNavigate } from "react-router-dom";


const Banner = () => {
    const navigate=useNavigate();
  return (
    <nav className="py-4 px-6 md:px-12 bg-[#0b1326] border-b border-white/10 relative overflow-hidden font-['Geist',_sans-serif] flex items-center justify-between">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-10 bg-indigo-500/10 blur-2xl pointer-events-none"></div>
      
      {/* Left: Brand / Logo Area */}
      <div className="relative z-10 flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-gradient-to-br from-[#6366f1] to-[#06b6d4] flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.4)]">
          <span className="text-white font-bold text-sm">RB</span>
        </div>
        <span className="text-lg font-bold text-[#dae2fd] tracking-tight hidden sm:block">
          ResumeBuilder
        </span>
      </div>
      
      {/* Center: Optional text (Hidden on small screens to save space) */}
      <div className="relative z-10 hidden lg:flex flex-col items-center justify-center gap-0.5">
        <h1 className="text-sm font-semibold text-[#dae2fd]">
          Luminous System Now Live
        </h1>
      </div>

      {/* Right: Authentication / Call to Action */}
      <div className="relative z-10 flex items-center gap-4">
        {/* Login Button (Glassmorphic) */}
        <button onClick={()=>{
            navigate('/auth/login');
        }}className="px-4 py-2 text-sm font-semibold text-[#c7c4d7] hover:text-[#dae2fd] transition-colors duration-300">
          Log In
        </button>
        
        {/* Get Started Button (Primary Gradient with Glow) */}
        <button onClick={()=>navigate('/app')} className="px-5 py-2 bg-gradient-to-r from-[#6366f1] to-[#06b6d4] text-white text-sm font-semibold rounded-full shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:-translate-y-0.5 transition-all duration-300">
          Get Started
        </button>
      </div>

    </nav>
  );
};

export default Banner;