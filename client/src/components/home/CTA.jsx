import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="relative bg-[#060e20] py-24 px-6 md:px-12 font-['Geist',_sans-serif] flex items-center justify-center overflow-hidden">
      
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6366f1]/15 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-[1000px] bg-[#131b2e]/80 border border-white/10 rounded-[2rem] p-10 md:p-20 backdrop-blur-[32px] text-center shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        <h2 className="text-[40px] md:text-[56px] font-bold text-[#dae2fd] leading-[1.1] tracking-[-0.03em] mb-6 drop-shadow-[0_4px_24px_rgba(99,102,241,0.2)]">
          Ready to Deploy Your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#06b6d4]">Future Career?</span>
        </h2>
        <p className="text-[18px] text-[#c7c4d7] mb-10 max-w-2xl mx-auto">
          Join thousands of successful candidates. Initialize your high-performance resume right now and start getting the interviews you deserve.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/app" className="px-10 py-4 bg-gradient-to-r from-[#6366f1] to-[#06b6d4] text-white font-bold rounded-full shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:-translate-y-1 transition-all duration-300">
            Initialize Now
          </Link>
          <Link to="/templates" className="px-10 py-4 bg-white/5 border border-white/10 text-[#dae2fd] font-bold rounded-full backdrop-blur-md hover:bg-white/10 transition-all duration-300">
            Browse Specs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
