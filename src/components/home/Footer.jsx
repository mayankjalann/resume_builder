import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0b1326] border-t border-white/5 pt-16 pb-8 px-6 md:px-12 font-['Geist',_sans-serif]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/5 pb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-[#6366f1] to-[#06b6d4] flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                <span className="text-white font-bold text-sm">RB</span>
              </div>
              <span className="text-xl font-bold text-[#dae2fd] tracking-tight">
                ResumeBuilder
              </span>
            </div>
            <p className="text-[#908fa0] max-w-sm leading-[1.6]">
              A premium, high-performance resume architecture platform engineered to help you pass the ATS and impress elite recruiters.
            </p>
          </div>
          
          <div>
            <h4 className="text-[#dae2fd] font-semibold mb-6">Platform</h4>
            <ul className="space-y-4 text-[#908fa0]">
              <li><Link to="/templates" className="hover:text-[#06b6d4] transition-colors">Architecture</Link></li>
              <li><Link to="/features" className="hover:text-[#06b6d4] transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-[#06b6d4] transition-colors">Pricing</Link></li>
              <li><Link to="/ai" className="hover:text-[#06b6d4] transition-colors">AI Optimization</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[#dae2fd] font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-[#908fa0]">
              <li><Link to="/about" className="hover:text-[#06b6d4] transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-[#06b6d4] transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-[#06b6d4] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#06b6d4] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-[#464554]">
          <p>© {new Date().getFullYear()} ResumeBuilder. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
