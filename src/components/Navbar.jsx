import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  // Mock user - replace with your actual auth later!
  const user = {username:"Alex"};

  const handleLogout = () => {
    console.log("Logging out...");
    // TODO: Add your logout logic here
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0b1326]/80 backdrop-blur-md border-b border-white/10 font-['Geist',_sans-serif]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        
        {/* Left: Logo (Links to Home) */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#06b6d4] flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.4)]">
            <span className="text-white font-bold text-sm">RB</span>
          </div>
          <span className="text-lg font-bold text-[#dae2fd] tracking-tight">
            ResumeBuilder
          </span>
        </Link>

        {/* Right: Greeting & Logout */}
        <div className="flex items-center gap-6">
          <span className="text-sm font-semibold text-[#c7c4d7]">
            Hi, <span className="text-[#dae2fd]">{user?.userName}</span>
          </span>
          
          <button 
            onClick={handleLogout}
            className="px-4 py-2 bg-white/5 hover:bg-red-500/10 border border-white/10 hover:border-red-500/30 text-[#c7c4d7] hover:text-[#ffb4ab] text-sm font-semibold rounded-lg transition-all duration-300"
          >
            Log Out
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;