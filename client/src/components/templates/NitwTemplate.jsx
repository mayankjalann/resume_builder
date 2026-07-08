import React, { useContext } from 'react';
import { ResumeContext } from '../../context/ResumeContext';
import { Phone, Mail, Link } from 'lucide-react';

const NitwTemplate = () => {
  const { resumeData } = useContext(ResumeContext);
  const { personal_info, education, experience, project, skills, positions, achievements } = resumeData;

  const renderDescription = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, i) => (
      <li key={i} className="pl-1 mb-[1px] text-[10pt]">{line.replace('– ', '')}</li>
    ));
  };

  return (
    <div 
      className="bg-white max-w-[800px] mx-auto shadow-2xl text-black nitw-font leading-tight"
      style={{
        padding: '0.8cm 1.2cm 1cm 1.4cm', // LaTeX geometry: left=1.4cm, top=0.8cm, right=1.2cm, bottom=1cm
        minHeight: '29.7cm', // A4 height
      }}
    >
      
      {/* HEADER SECTION */}
      <div className="flex justify-between items-start mb-2">
        {/* Left Side: Text Only (Logo removed as requested) */}
        <div>
          <h1 className="text-[18pt] font-bold mb-1">{personal_info?.firstName || 'Your'} {personal_info?.lastName || 'Name'}</h1>
          <div className="text-[10.5pt] leading-[1.3]">
            {personal_info?.rollNo && <div>Roll No.: {personal_info.rollNo}</div>}
            {personal_info?.program && <div>{personal_info.program}</div>}
            {personal_info?.course && <div>{personal_info.course}</div>}
            <div>National Institute of Technology, Warangal</div>
          </div>
        </div>

        {/* Right Side: Contact */}
        <div className="text-[10pt] text-right space-y-[2px] pt-1">
          {personal_info?.phone && <div className="flex items-center justify-end gap-1"><Phone size={11}/> +91-{personal_info.phone}</div>}
          {personal_info?.email && <div className="flex items-center justify-end gap-1"><Mail size={11}/> {personal_info.email}</div>}
          <div className="flex items-center justify-end gap-1"><Mail size={11}/> officialemail@nitw.ac.in</div>
          {personal_info?.github && <div className="flex items-center justify-end gap-1"><Link size={11}/> {personal_info.github}</div>}
          {personal_info?.linkedin && <div className="flex items-center justify-end gap-1"><Link size={11}/> {personal_info.linkedin}</div>}
        </div>
      </div>

      {/* SECTION STYLING HELPER */}
      <style dangerouslySetInnerHTML={{__html: `
        @font-face {
          font-family: 'Computer Modern';
          src: url('https://cdn.jsdelivr.net/gh/dreampulse/computer-modern-web-font@master/fonts/cmunrm.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: 'Computer Modern';
          src: url('https://cdn.jsdelivr.net/gh/dreampulse/computer-modern-web-font@master/fonts/cmunbx.woff') format('woff');
          font-weight: bold;
          font-style: normal;
        }
        @font-face {
          font-family: 'Computer Modern';
          src: url('https://cdn.jsdelivr.net/gh/dreampulse/computer-modern-web-font@master/fonts/cmunti.woff') format('woff');
          font-weight: normal;
          font-style: italic;
        }
        
        .nitw-font {
          font-family: 'Computer Modern', 'Times New Roman', Times, serif;
        }

        .nitw-section-title {
          font-variant: small-caps;
          font-size: 13pt;
          font-weight: bold;
          border-bottom: 1px solid black;
          margin-bottom: 4px;
          margin-top: 10px;
          padding-bottom: 2px;
        }
        .nitw-list {
          list-style-type: none;
        }
        .nitw-list li::before {
          content: "•";
          font-size: 8pt;
          margin-right: 6px;
          display: inline-block;
          vertical-align: middle;
        }
      `}} />

      {/* EDUCATION SECTION */}
      <div className="mb-2">
        <h2 className="nitw-section-title">Education</h2>
        <div className="space-y-[4px]">
          {(education || []).map((edu) => (
            <div key={edu.id}>
              <div className="flex justify-between items-end">
                <span className="font-bold text-[10.5pt]">{(edu.institute)}</span>
                <span className="italic text-[9pt]">{edu.year}</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="italic text-[9pt]">{edu.degree}</span>
                <span className="text-[9pt]">CGPA/Percentage: {edu.cgpa}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EXPERIENCE SECTION */}
      <div className="mb-2">
        <h2 className="nitw-section-title">Experience</h2>
        <div className="space-y-[6px]">
          {(experience || []).map((exp) => (
            <div key={exp.id}>
              <div className="flex justify-between items-end">
                <span className="font-bold text-[10.5pt]">{(exp.company)}</span>
                <span className="italic text-[9pt]">{exp.date}</span>
              </div>
              <div className="flex justify-between items-start mb-[2px]">
                <span className="italic text-[9pt]">{exp.role}</span>
                <span className="text-[9pt]">{exp.city}</span>
              </div>
              <ul className="list-disc pl-[3.5ex] m-0">
                {renderDescription(exp.description)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* PERSONAL PROJECTS SECTION */}
      <div className="mb-2">
        <h2 className="nitw-section-title">Personal Projects</h2>
        <div className="space-y-[6px]">
          {(project || []).map((proj) => (
            <div key={proj.id}>
              <div className="flex justify-between items-end">
                <span className="font-bold text-[10.5pt]">{(proj.name)}</span>
                <span className="italic text-[9pt]">{proj.date}</span>
              </div>
              <div className="italic text-[9pt] mb-[2px]">
                {proj.description}
              </div>
              <ul className="list-disc pl-[3.5ex] m-0">
                {proj.tools && <li className="pl-1 mb-[1px] text-[10pt]">Tools & technologies used: {proj.tools}</li>}
                {renderDescription(proj.moreInfo)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* TECHNICAL SKILLS SECTION */}
      <div className="mb-2">
        <h2 className="nitw-section-title">Technical Skills and Interests</h2>
        <div className="text-[10pt] pl-[0.05in]">
          {skills?.languages && <div><span className="font-bold">Languages</span>: {skills.languages}</div>}
          {skills?.developer_tools && <div><span className="font-bold">Developer Tools</span>: {skills.developer_tools}</div>}
          {skills?.frameworks && <div><span className="font-bold">Frameworks</span>: {skills.frameworks}</div>}
          {skills?.cloud_databases && <div><span className="font-bold">Cloud/Databases</span>: {skills.cloud_databases}</div>}
          {skills?.soft_skills && <div><span className="font-bold">Soft Skills</span>: {skills.soft_skills}</div>}
          {skills?.coursework && <div><span className="font-bold">Coursework</span>: {skills.coursework}</div>}
          {skills?.areas_of_interest && <div><span className="font-bold">Areas of Interest</span>: {skills.areas_of_interest}</div>}
        </div>
      </div>

      {/* POSITIONS OF RESPONSIBILITY SECTION */}
      <div className="mb-2">
        <h2 className="nitw-section-title">Positions of Responsibility</h2>
        <div className="space-y-[2px]">
          {(positions || []).map((pos) => (
            <div key={pos.id} className="flex justify-between items-end">
              <span className="text-[10.5pt]"><span className="font-bold">{(pos.position)}</span>, {pos.club}</span>
              <span className="italic text-[10pt]">{pos.tenure}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ACHIEVEMENTS SECTION */}
      <div className="mb-2">
        <h2 className="nitw-section-title">Achievements</h2>
        <div className="space-y-[2px]">
          {(achievements || []).map((ach) => (
            <div key={ach.id} className="flex justify-between items-start">
              <span className="text-[10.5pt]">
                <span className="font-bold">{(ach.description.split(' ')[0])} </span> 
                {ach.description.substring(ach.description.indexOf(' ') + 1)}
              </span>
              <span className="italic text-[10pt] whitespace-nowrap ml-4">{ach.date}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default NitwTemplate;
