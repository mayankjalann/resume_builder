import React, { useContext } from 'react';
import { ResumeContext } from '../../context/ResumeContext';

const ModernTemplate = () => {
  const { resumeData } = useContext(ResumeContext);
  const { personal_info, experience, education, project, skills, accent_color } = resumeData;

  const color = accent_color || '#1f2937';

  return (
    <div className="bg-white max-w-[800px] mx-auto min-h-[1056px] shadow-2xl flex text-black">
      
      {/* Left Sidebar */}
      <div 
        className="w-[30%] p-6 text-white" 
        style={{ backgroundColor: color }}
      >
        {personal_info?.image && (
           <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white mx-auto mb-6 shadow-xl">
              <img src={personal_info.image} alt="Profile" className="w-full h-full object-cover" />
           </div>
        )}
        
        <h2 className="text-lg font-bold uppercase border-b-2 border-white/30 pb-2 mb-4">Contact</h2>
        <div className="space-y-3 text-sm text-white/90">
          {personal_info?.email && <p>{personal_info.email}</p>}
          {personal_info?.phone && <p>{personal_info.phone}</p>}
          {personal_info?.address && <p>{personal_info.address}</p>}
          {personal_info?.linkedin && <p>{personal_info.linkedin}</p>}
          {personal_info?.github && <p>{personal_info.github}</p>}
        </div>

        {skills && Object.values(skills).some(val => val) && (
          <>
            <h2 className="text-lg font-bold uppercase border-b-2 border-white/30 pb-2 mt-8 mb-4">Skills</h2>
            <div className="text-sm text-white/90 space-y-3">
              {skills.languages && <div><div className="font-bold mb-1">Languages</div><div>{skills.languages}</div></div>}
              {skills.developer_tools && <div><div className="font-bold mb-1">Tools</div><div>{skills.developer_tools}</div></div>}
              {skills.frameworks && <div><div className="font-bold mb-1">Frameworks</div><div>{skills.frameworks}</div></div>}
              {skills.cloud_databases && <div><div className="font-bold mb-1">Databases</div><div>{skills.cloud_databases}</div></div>}
              {skills.soft_skills && <div><div className="font-bold mb-1">Soft Skills</div><div>{skills.soft_skills}</div></div>}
            </div>
          </>
        )}
      </div>

      {/* Right Main Content */}
      <div className="w-[70%] p-8">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
          {personal_info?.firstName || 'First'} <span style={{ color: color }}>{personal_info?.lastName || 'Last'}</span>
        </h1>
        <p className="text-xl font-medium text-gray-500 mb-8">
          {personal_info?.jobTitle || 'Professional Title'}
        </p>

        {experience && experience.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-bold uppercase tracking-wider text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">
              Experience
            </h3>
            <div className="space-y-5">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-md font-bold text-gray-900">{exp.role}</h4>
                    <span className="text-sm font-bold" style={{ color: color }}>{exp.date}</span>
                  </div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-sm font-semibold italic text-gray-700">{exp.company}</span>
                    <span className="text-sm text-gray-500">{exp.city}</span>
                  </div>
                  {exp.description && (
                    <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
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

        {education && education.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-bold uppercase tracking-wider text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-md font-bold text-gray-900">{edu.degree}</h4>
                    <span className="text-sm font-bold" style={{ color: color }}>{edu.year}</span>
                  </div>
                  <div className="flex justify-between items-baseline mt-1">
                    <span className="text-sm font-semibold italic text-gray-700">{edu.institute}</span>
                    <span className="text-sm text-gray-500">CGPA/Percentage: {edu.cgpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {project && project.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-bold uppercase tracking-wider text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">
              Projects
            </h3>
            <div className="space-y-5">
              {project.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-md font-bold text-gray-900">{proj.name}</h4>
                    <span className="text-sm font-bold" style={{ color: color }}>{proj.date}</span>
                  </div>
                  {proj.description && <p className="text-sm italic text-gray-700 mb-1">{proj.description}</p>}
                  {proj.tools && <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">Tools:</span> {proj.tools}</p>}
                  {proj.moreInfo && (
                    <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
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
    </div>
  );
};

export default ModernTemplate;
