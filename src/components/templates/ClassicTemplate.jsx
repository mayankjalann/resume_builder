import React, { useContext } from 'react';
import { ResumeContext } from '../../context/ResumeContext';

const ClassicTemplate = () => {
  const { resumeData } = useContext(ResumeContext);
  const { personal_info, professional_summary, experience, education, project, skills, accent_color } = resumeData;

  const color = accent_color || '#3b82f6';

  return (
    <div className="bg-white max-w-[800px] mx-auto min-h-[1056px] shadow-2xl p-10 text-gray-800 font-sans leading-relaxed">
      
      {/* Header */}
      <div className="border-b-2 pb-6 text-center" style={{ borderColor: color }}>
        {personal_info?.image && (
          <img 
            src={personal_info.image} 
            alt="Profile" 
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2"
            style={{ borderColor: color }}
          />
        )}
        <h1 className="text-4xl font-bold text-gray-900 tracking-wide uppercase">
          {personal_info?.firstName || 'Your'} {personal_info?.lastName || 'Name'}
        </h1>
        <p className="text-xl font-medium mt-1" style={{ color: color }}>
          {personal_info?.jobTitle || 'Professional Title'}
        </p>
        
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-3 text-sm text-gray-600">
          {personal_info?.email && <span>{personal_info.email}</span>}
          {personal_info?.phone && <span>• {personal_info.phone}</span>}
          {personal_info?.address && <span>• {personal_info.address}</span>}
          {personal_info?.linkedin && <span>• {personal_info.linkedin}</span>}
          {personal_info?.github && <span>• {personal_info.github}</span>}
        </div>
      </div>

      {/* Summary section removed per request */}

      {/* Experience */}
      {experience && experience.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-bold uppercase tracking-widest border-b-2 pb-1 mb-4" style={{ color: color, borderColor: color }}>
            Professional Experience
          </h2>
          <div className="space-y-5">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-md font-bold text-gray-900">{exp.role}</h3>
                  <span className="text-sm font-semibold text-gray-600">{exp.date}</span>
                </div>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-sm font-semibold italic text-gray-700">{exp.company}</span>
                  <span className="text-sm text-gray-500">{exp.city}</span>
                </div>
                {exp.description && (
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
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

      {/* Education */}
      {education && education.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-bold uppercase tracking-widest border-b-2 pb-1 mb-4" style={{ color: color, borderColor: color }}>
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-md font-bold text-gray-900">{edu.degree}</h3>
                  <span className="text-sm font-semibold text-gray-600">{edu.year}</span>
                </div>
                <div className="flex justify-between items-baseline mt-1">
                  <span className="text-sm font-semibold italic text-gray-700">{edu.institute}</span>
                  <span className="text-sm text-gray-600">CGPA/Percentage: {edu.cgpa}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {project && project.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-bold uppercase tracking-widest border-b-2 pb-1 mb-4" style={{ color: color, borderColor: color }}>
            Projects
          </h2>
          <div className="space-y-5">
            {project.map((proj) => (
              <div key={proj.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-md font-bold text-gray-900">{proj.name}</h3>
                  <span className="text-sm font-semibold text-gray-600">{proj.date}</span>
                </div>
                {proj.description && <p className="text-sm italic text-gray-700 mb-1">{proj.description}</p>}
                {proj.tools && <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">Tools:</span> {proj.tools}</p>}
                {proj.moreInfo && (
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
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

      {/* Skills */}
      {skills && Object.values(skills).some(val => val) && (
        <div className="mt-6">
          <h2 className="text-lg font-bold uppercase tracking-widest border-b-2 pb-1 mb-3" style={{ color: color, borderColor: color }}>
            Skills
          </h2>
          <div className="text-sm text-gray-700 space-y-1">
            {skills.languages && <div><span className="font-bold w-32 inline-block">Languages:</span> {skills.languages}</div>}
            {skills.developer_tools && <div><span className="font-bold w-32 inline-block">Tools:</span> {skills.developer_tools}</div>}
            {skills.frameworks && <div><span className="font-bold w-32 inline-block">Frameworks:</span> {skills.frameworks}</div>}
            {skills.cloud_databases && <div><span className="font-bold w-32 inline-block">Databases:</span> {skills.cloud_databases}</div>}
            {skills.soft_skills && <div><span className="font-bold w-32 inline-block">Soft Skills:</span> {skills.soft_skills}</div>}
          </div>
        </div>
      )}

    </div>
  );
};

export default ClassicTemplate;
