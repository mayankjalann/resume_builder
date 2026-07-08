import React, { useContext } from 'react';
import { ResumeContext } from '../../context/ResumeContext';
import { useState } from 'react';

const PersonalDetailForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [bgRemove,setbgRemove]=useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // We update the specific nested field inside personal_info
    setResumeData({
      ...resumeData,
      personal_info: {
        ...(resumeData.personal_info || {}),
        [name]: value
      }
    });
  };

  return (
    <div className="p-5 border border-white/10 rounded-xl shadow-lg bg-[#060e20]">
      <h2 className="text-lg font-bold text-[#dae2fd] mb-1">Personal Details</h2>
      <p className="text-[#908fa0] text-xs mb-5">Get started with the basic information</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">First Name</label>
          <input 
            type="text" 
            name="firstName" 
            required
            value={resumeData.personal_info?.firstName || ''}
            onChange={handleInputChange}
            className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">Last Name</label>
          <input 
            type="text" 
            name="lastName" 
            required
            value={resumeData.personal_info?.lastName || ''}
            onChange={handleInputChange}
            className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
          />
        </div>
        <div className="col-span-2">
          <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">Job Title</label>
          <input 
            type="text" 
            name="jobTitle" 
            required
            value={resumeData.personal_info?.jobTitle || ''}
            onChange={handleInputChange}
            className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
          />
        </div>
        <div className="col-span-2">
          <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">Address</label>
          <input 
            type="text" 
            name="address" 
            required
            value={resumeData.personal_info?.address || ''}
            onChange={handleInputChange}
            className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
          />
        </div>
        
        {/* New NITW specific fields */}
        <div>
          <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">Roll No.</label>
          <input 
            type="text" 
            name="rollNo" 
            value={resumeData.personal_info?.rollNo || ''}
            onChange={handleInputChange}
            className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">Program</label>
          <input 
            type="text" 
            name="program" 
            placeholder="e.g. B.Tech"
            value={resumeData.personal_info?.program || ''}
            onChange={handleInputChange}
            className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
          />
        </div>
        <div className="col-span-2">
          <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">Course</label>
          <input 
            type="text" 
            name="course" 
            placeholder="e.g. Computer Science and Engineering"
            value={resumeData.personal_info?.course || ''}
            onChange={handleInputChange}
            className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">Phone</label>
          <input 
            type="text" 
            name="phone" 
            required
            value={resumeData.personal_info?.phone || ''}
            onChange={handleInputChange}
            className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">Email</label>
          <input 
            type="email" 
            name="email" 
            required
            value={resumeData.personal_info?.email || ''}
            onChange={handleInputChange}
            className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">GitHub Profile</label>
          <input 
            type="text" 
            name="github" 
            placeholder="github.com/username"
            value={resumeData.personal_info?.github || ''}
            onChange={handleInputChange}
            className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">LinkedIn Profile</label>
          <input 
            type="text" 
            name="linkedin" 
            placeholder="linkedin.com/in/username"
            value={resumeData.personal_info?.linkedin || ''}
            onChange={handleInputChange}
            className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none" 
          />
        </div>
        <div className="col-span-2 mt-2">
          <label className="block text-xs font-semibold text-[#c7c4d7] mb-1">Profile Image</label>
          <div className="flex items-center gap-3">
            <input 
              type="file" 
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setResumeData({
                      ...resumeData,
                      personal_info: {
                        ...(resumeData.personal_info || {}),
                        image: reader.result
                      }
                    });
                  };
                  reader.readAsDataURL(file);
                }
              }}
              className="w-full bg-[#171f33] border border-white/10 rounded-md px-3 py-2 text-sm text-[#dae2fd] focus:border-[#6366f1] focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-[#6366f1] file:text-white hover:file:bg-[#4f52d6] cursor-pointer" 
            />
            {resumeData.personal_info?.image && (
                <label className="flex items-center gap-2 text-xs font-semibold text-[#c7c4d7] cursor-pointer hover:text-white transition-colors">
                <input
                  type="checkbox"
                  onChange={() => setbgRemove(prev => !prev)}
                  checked={bgRemove}
                  className="rounded bg-[#171f33] border-white/10 text-[#6366f1] focus:ring-[#6366f1] cursor-pointer"
                />
                Remove Background
              </label>
                //Remove Background
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailForm;
