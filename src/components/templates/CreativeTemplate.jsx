import React, { useContext } from 'react';
import { ResumeContext } from '../../context/ResumeContext';

const CreativeTemplate = () => {
  const { resumeData } = useContext(ResumeContext);
  const { personal_info, experience, education, project, skills, accent_color } = resumeData;

  const color = accent_color || '#ec4899';

  return (
    <div className="bg-white max-w-[800px] mx-auto min-h-[1056px] shadow-2xl overflow-hidden text-black font-sans">
      
      {/* Massive Colored Header */}
      <div 
        className="px-10 pt-16 pb-12 text-white relative"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-6xl font-black uppercase tracking-tighter mb-2 relative z-10 leading-none">
          {personal_info?.firstName || 'First'} <br />
          {personal_info?.lastName || 'Last'}
        </h1>
        <p className="text-2xl font-bold opacity-80 relative z-10 tracking-wide mt-4">
          {personal_info?.jobTitle || 'Professional Title'}
        </p>
        
        {/* Decorative circle */}
        <div className="absolute top-[-100px] right-[-50px] w-80 h-80 bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-black opacity-10 rounded-full blur-2xl pointer-events-none"></div>
      </div>

      {/* Content Area */}
      <div className="p-10 flex gap-10">
        
        {/* Left Main Column */}
        <div className="w-[65%]">
          
          {/* Experience */}
          {experience && experience.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-black text-gray-900 mb-5 tracking-tight uppercase" style={{ color: color }}>Experience</h3>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.id} className="relative pl-4 border-l-4" style={{ borderColor: color }}>
                    <h4 className="text-lg font-bold text-gray-900 leading-tight">{exp.role}</h4>
                    <div className="text-sm font-semibold text-gray-500 mb-2">{exp.company} • {exp.date}</div>
                    {exp.description && (
                      <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1">
                        {exp.description.split('\n').map((line, i) => (
                          <li key={i}>{line.replace('– ', '')}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {project && project.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-black text-gray-900 mb-5 tracking-tight uppercase" style={{ color: color }}>Projects</h3>
              <div className="space-y-6">
                {project.map((proj) => (
                  <div key={proj.id} className="bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
                    <h4 className="text-lg font-bold text-gray-900">{proj.name}</h4>
                    {proj.tools && <div className="text-xs font-bold text-gray-400 uppercase mb-2">{proj.tools}</div>}
                    {proj.moreInfo && (
                      <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1">
                        {proj.moreInfo.split('\n').map((line, i) => (
                          <li key={i}>{line.replace('– ', '')}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
        </div>

        {/* Right Sidebar Column */}
        <div className="w-[35%]">
          
          {/* Contact */}
          <div className="mb-8 bg-gray-50 p-5 rounded-xl border border-gray-100">
            <h3 className="text-lg font-black text-gray-900 mb-4 tracking-tight uppercase" style={{ color: color }}>Contact</h3>
            <div className="space-y-3 text-sm font-medium text-gray-600">
              {personal_info?.email && (
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Email</p>
                  <p className="break-all">{personal_info.email}</p>
                </div>
              )}
              {personal_info?.phone && (
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Phone</p>
                  <p>{personal_info.phone}</p>
                </div>
              )}
              {personal_info?.linkedin && (
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">LinkedIn</p>
                  <p className="break-all">{personal_info.linkedin}</p>
                </div>
              )}
              {personal_info?.github && (
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">GitHub</p>
                  <p className="break-all">{personal_info.github}</p>
                </div>
              )}
            </div>
          </div>

          {/* Education */}
          {education && education.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-black text-gray-900 mb-4 tracking-tight uppercase" style={{ color: color }}>Education</h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h4 className="text-sm font-bold text-gray-900 leading-tight">{edu.degree}</h4>
                    <div className="text-xs text-gray-500 font-semibold mb-1">{edu.institute}</div>
                    <div className="text-xs text-gray-400">{edu.year} • CGPA: {edu.cgpa}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {skills && Object.values(skills).some(val => val) && (
            <div className="mb-8">
              <h3 className="text-lg font-black text-gray-900 mb-4 tracking-tight uppercase" style={{ color: color }}>Skills</h3>
              <div className="space-y-3 text-sm text-gray-700">
                {skills.languages && <div><div className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-1">Languages</div><div>{skills.languages}</div></div>}
                {skills.developer_tools && <div><div className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-1">Tools</div><div>{skills.developer_tools}</div></div>}
                {skills.frameworks && <div><div className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-1">Frameworks</div><div>{skills.frameworks}</div></div>}
                {skills.cloud_databases && <div><div className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-1">Databases</div><div>{skills.cloud_databases}</div></div>}
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  );
};

export default CreativeTemplate;
