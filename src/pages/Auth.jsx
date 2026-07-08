import React, { useState } from 'react';
// ✅ 1. Import useParams instead of useSearchParams
import { Link, useNavigate, useParams } from 'react-router-dom';
const Auth = () => {
  // ✅ 2. Get the state from the URL path (/auth/signup)
  const { state: urlStateParam } = useParams();
  

  const urlState = urlStateParam === 'signup' ? 'Sign Up' : 'Login';
  
  // 3. Set the form state based on the URL
  const [state, setState] = useState(urlState);
  
  // Form Field States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const navigate = useNavigate();

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (state === 'Login') {
        // --- LOGIN LOGIC ---
        const res = await fetch(`/api/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
          credentials: 'include'
        });
        
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Login failed');
        navigate('/app');
      } else {
        // --- SIGN UP LOGIC ---
        if (password !== confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
        
        const res = await fetch(`/api/auth/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
          credentials: 'include'
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Registration failed');
        
        alert("Registration successful! Please login.");
        setState('Login');
        navigate('/auth/login');
      }
    } catch (err) {
      alert(err.message);
      console.error(err);
    }
  };

  // Handle toggling between Login and Sign Up
  const handleToggle = () => {
    const newState = state === 'Login' ? 'Sign Up' : 'Login';
    setState(newState);
    navigate(`/auth/${newState === 'Login' ? 'login' : 'signup'}`);
  };

  return (
    <div className="relative min-h-screen bg-[#0b1326] font-['Geist',_sans-serif] flex items-center justify-center overflow-hidden px-4 py-12">
      
      {/* Ambient background glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#6366f1]/15 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#06b6d4]/15 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-[480px]">
        
        {/* Brand/Logo Header */}
        <div className="flex flex-col items-center mb-8">
          <Link to="/" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#06b6d4] flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.5)]">
              <span className="text-white font-bold text-lg">RB</span>
            </div>
            <span className="text-2xl font-bold text-[#dae2fd] tracking-tight">
              ResumeBuilder
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">
            {state === 'Login' ? 'System Authentication' : 'Initialize Account'}
          </h1>
          <p className="text-[#908fa0] text-sm text-center">
            {state === 'Login' 
              ? 'Enter your credentials to access the builder architecture.' 
              : 'Deploy your profile to start building elite resumes.'}
          </p>
        </div>

        {/* Auth Card */}
        <div className="bg-[#171f33]/40 border border-white/10 rounded-2xl p-8 backdrop-blur-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* NAME FIELD: Only show if Sign Up */}
            {state === 'Sign Up' && (
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#c7c4d7] uppercase tracking-wider">
                  Full Name
                </label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Rivera"
                  required={state === 'Sign Up'}
                  className="w-full bg-[#060e20] border border-white/10 rounded-lg px-4 py-3 text-[#dae2fd] placeholder-white/20 focus:outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] transition-all duration-300"
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#c7c4d7] uppercase tracking-wider">
                Email Address
              </label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="developer@example.com"
                required
                className="w-full bg-[#060e20] border border-white/10 rounded-lg px-4 py-3 text-[#dae2fd] placeholder-white/20 focus:outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] transition-all duration-300"
              />
            </div>

            <div className={state === 'Sign Up' ? "grid grid-cols-1 md:grid-cols-2 gap-5" : "space-y-2"}>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-[#c7c4d7] uppercase tracking-wider">
                    Password
                  </label>
                  {state === 'Login' && (
                    <a href="#" className="text-xs font-semibold text-[#06b6d4] hover:text-[#dae2fd] transition-colors">
                      Forgot Password?
                    </a>
                  )}
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-[#060e20] border border-white/10 rounded-lg px-4 py-3 text-[#dae2fd] placeholder-white/20 focus:outline-none focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4] transition-all duration-300"
                />
              </div>

              {/* CONFIRM PASSWORD: Only show if Sign Up */}
              {state === 'Sign Up' && (
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#c7c4d7] uppercase tracking-wider">
                    Confirm Password
                  </label>
                  <input 
                    type="password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    required={state === 'Sign Up'}
                    className="w-full bg-[#060e20] border border-white/10 rounded-lg px-4 py-3 text-[#dae2fd] placeholder-white/20 focus:outline-none focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4] transition-all duration-300"
                  />
                </div>
              )}
            </div>

            <button 
              type="submit"
              className="w-full py-3.5 mt-2 bg-gradient-to-r from-[#6366f1] to-[#06b6d4] text-white font-bold rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:-translate-y-0.5 transition-all duration-300"
            >
              {state === 'Login' ? 'Initialize Session' : 'Construct Account'}
            </button>
          </form>

          {/* Toggle Mode Link */}
          <p className="mt-8 text-center text-sm text-[#908fa0]">
            {state === 'Login' ? "Don't have an architecture yet? " : "Already have an architecture? "}
            <button 
              onClick={handleToggle} 
              className="text-[#06b6d4] hover:text-[#dae2fd] font-semibold transition-colors bg-transparent border-none cursor-pointer"
            >
              {state === 'Login' ? "Deploy an Account" : "Access System"}
            </button>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Auth;