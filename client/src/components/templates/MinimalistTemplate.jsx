import React, { useContext } from 'react';
import { ResumeContext } from '../../context/ResumeContext';

const MinimalistTemplate = () => {
  const { resumeData } = useContext(ResumeContext);
  const { personal_info, experience, education, project, skills } = resumeData;

  return (
    <div className="bg-white max-w-[800px] mx-auto min-h-[1056px] shadow-2xl p-12 text-gray-800 font-serif leading-relaxed">
      
      {/* Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-4xl font-light text-black mb-1 tracking-wide uppercase">
            {personal_info?.firstName || 'First'} {personal_info?.lastName || 'Last'}
          </h1>
          <p className="text-lg font-normal text-gray-500 italic">
            {personal_info?.jobTitle || 'Professional Title'}
          </p>
        </div>
        <div className="text-right text-sm text-gray-500 space-y-1">
          {personal_info?.email && <p>{personal_info.email}</p>}
          {personal_info?.phone && <p>{personal_info.phone}</p>}
          {personal_info?.linkedin && <p>{personal_info.linkedin}</p>}
          {personal_info?.github && <p>{personal_info.github}</p>}
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300 mb-8" />

      {/* Experience */}
      {experience && experience.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">Experience</h3>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id} className="grid grid-cols-4 gap-4">
                <div className="col-span-1 text-sm text-gray-500 pt-1">
                  {exp.date}
                </div>
                <div className="col-span-3">
                  <h4 className="text-base font-bold text-black">{exp.role}</h4>
                  <div className="text-sm text-gray-600 mb-2 italic">{exp.company} • {exp.city}</div>
                  {exp.description && (
                    <ul className="list-none text-sm text-gray-700 space-y-1">
                      {exp.description.split('\n').map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">Education</h3>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="grid grid-cols-4 gap-4">
                <div className="col-span-1 text-sm text-gray-500 pt-1">
                  {edu.year}
                </div>
                <div className="col-span-3">
                  <h4 className="text-base font-bold text-black">{edu.degree}</h4>
                  <div className="text-sm text-gray-600 italic">{edu.institute}</div>
                  <div className="text-sm text-gray-500">CGPA/Percentage: {edu.cgpa}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {project && project.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">Projects</h3>
          <div className="space-y-6">
            {project.map((proj) => (
              <div key={proj.id} className="grid grid-cols-4 gap-4">
                <div className="col-span-1 text-sm text-gray-500 pt-1">
                  {proj.date}
                </div>
                <div className="col-span-3">
                  <h4 className="text-base font-bold text-black">{proj.name}</h4>
                  {proj.description && <p className="text-sm text-gray-600 mb-1 italic">{proj.description}</p>}
                  {proj.tools && <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">{proj.tools}</p>}
                  {proj.moreInfo && (
                    <ul className="list-none text-sm text-gray-700 space-y-1">
                      {proj.moreInfo.split('\n').map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills && Object.values(skills).some(val => val) && (
        <div className="mb-8">
          <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">Skills</h3>
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div className="col-span-4 lg:col-span-3 lg:col-start-2 space-y-2 text-gray-700">
              {skills.languages && <div><span className="font-bold text-black mr-2">Languages:</span> {skills.languages}</div>}
              {skills.developer_tools && <div><span className="font-bold text-black mr-2">Tools:</span> {skills.developer_tools}</div>}
              {skills.frameworks && <div><span className="font-bold text-black mr-2">Frameworks:</span> {skills.frameworks}</div>}
              {skills.cloud_databases && <div><span className="font-bold text-black mr-2">Databases:</span> {skills.cloud_databases}</div>}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default MinimalistTemplate;
