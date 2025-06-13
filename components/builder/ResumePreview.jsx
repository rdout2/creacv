"use client";
import React from "react";

function ModernResume({ data }) {
  const {
    personalInfo = {},
    experience = [],
    education = [],
    skills = {},
    languages = [],
    certifications = [],
    projects = [],
  } = data;

  return (
    <div
      className="resume-preview w-[210mm] h-[297mm] bg-white border border-zinc-300 overflow-hidden mx-auto text-[12px] font-sans"
      style={{
        fontFamily: 'Inter, Arial, Roboto, sans-serif',
        boxShadow: 'none',
        padding: '18mm 14mm',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        pageBreakInside: 'avoid',
      }}
    >
      {/* Header color bar */}
      <div className="bg-[#b7d0e2] px-0 pt-0 pb-2 text-center relative border-b border-blue-200" style={{marginBottom: '8px', paddingTop: '0', paddingBottom: '8px'}}>
        <h1 className="text-[28px] font-bold tracking-wide leading-tight" style={{marginBottom: '2px'}}>
          <span className="text-zinc-700">{personalInfo.firstName || "Prénom"} </span>
          <span className="text-blue-800">{personalInfo.lastName || "Nom"}</span>
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-2 mt-1 text-zinc-700 text-[12px]">
          {personalInfo.linkedin && <a href={personalInfo.linkedin} className="hover:underline flex items-center gap-1" target="_blank" rel="noopener noreferrer">linkedin</a>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.github && <a href={personalInfo.github} className="hover:underline flex items-center gap-1" target="_blank" rel="noopener noreferrer">github</a>}
        </div>
        {personalInfo.title && (
          <div className="mt-1 text-[11px] italic text-zinc-800">
            {personalInfo.title}
          </div>
        )}
        {personalInfo.summary && (
          <div className="mt-1 text-[11px] text-zinc-700">
            {personalInfo.summary}
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col gap-2" style={{overflow: 'hidden'}}>
        {/* Compétences */}
        {skills.technical && (
          <div className="mb-1" style={{breakInside: 'avoid'}}>
            <div className="uppercase font-bold text-blue-800 tracking-wider border-b border-blue-200 pb-0.5 mb-1 text-[11px]">Compétences</div>
            <div className="text-[11.5px] text-zinc-800">
              <span className="font-semibold">Langages & Programmation :</span> {skills.technical}
            </div>
          </div>
        )}
        {/* Langues */}
        {languages.length > 0 && (
          <div className="mb-1" style={{breakInside: 'avoid'}}>
            <div className="uppercase font-bold text-blue-800 tracking-wider border-b border-blue-200 pb-0.5 mb-1 text-[11px]">Langues</div>
            <div className="flex flex-wrap gap-2 text-[11.5px] text-zinc-800">
              {languages.map((lang, i) => (
                <span key={i}><span className="font-semibold">{lang.name}:</span> {lang.level}</span>
              ))}
            </div>
          </div>
        )}
        {/* Formations */}
        {education.length > 0 && (
          <div className="mb-1" style={{breakInside: 'avoid'}}>
            <div className="uppercase font-bold text-blue-800 tracking-wider border-b border-blue-200 pb-0.5 mb-1 text-[11px]">Formations</div>
            <div className="space-y-1">
              {education.map((edu, i) => (
                <div key={i} className="flex justify-between text-[11.5px]">
                  <div>
                    <span className="font-semibold">{edu.degree}</span> — {edu.school}
                  </div>
                  <div className="text-zinc-500 whitespace-nowrap">{edu.startDate} - {edu.endDate}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Expériences */}
        {experience.length > 0 && (
          <div className="mb-1" style={{breakInside: 'avoid'}}>
            <div className="uppercase font-bold text-blue-800 tracking-wider border-b border-blue-200 pb-0.5 mb-1 text-[11px]">Expériences Professionnelles</div>
            <div className="space-y-1">
              {experience.map((exp, i) => (
                <div key={i}>
                  <div className="flex justify-between text-[11.5px]">
                    <div>
                      <span className="font-semibold">{exp.title}</span> — {exp.company}
                    </div>
                    <div className="text-zinc-500 whitespace-nowrap">{exp.startDate} - {exp.endDate || "Présent"}</div>
                  </div>
                  {exp.description && <div className="text-zinc-700 text-[10.5px] mt-0.5">{exp.description}</div>}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="list-disc list-inside text-[10.5px] text-zinc-700 mt-0.5 ml-4">
                      {exp.achievements.map((ach, j) => <li key={j}>{ach}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Projets */}
        {projects.length > 0 && (
          <div className="mb-1" style={{breakInside: 'avoid'}}>
            <div className="uppercase font-bold text-blue-800 tracking-wider border-b border-blue-200 pb-0.5 mb-1 text-[11px]">Projets</div>
            <div className="space-y-1">
              {projects.map((proj, i) => (
                <div key={i}>
                  <div className="flex justify-between text-[11.5px]">
                    <div>
                      <span className="font-semibold">{proj.name}</span> — {proj.technologies}
                    </div>
                    <div className="text-zinc-500 whitespace-nowrap">{proj.startDate} - {proj.endDate}</div>
                  </div>
                  {proj.description && <div className="text-zinc-700 text-[10.5px] mt-0.5">{proj.description}</div>}
                  {proj.achievements && proj.achievements.length > 0 && (
                    <ul className="list-disc list-inside text-[10.5px] text-zinc-700 mt-0.5 ml-4">
                      {proj.achievements.map((ach, j) => <li key={j}>{ach}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Certifications */}
        {certifications.length > 0 && (
          <div className="mb-1" style={{breakInside: 'avoid'}}>
            <div className="uppercase font-bold text-blue-800 tracking-wider border-b border-blue-200 pb-0.5 mb-1 text-[11px]">Certifications</div>
            <div className="space-y-1 text-[11.5px]">
              {certifications.map((cert, i) => (
                <div key={i} className="flex justify-between">
                  <div><span className="font-semibold">{cert.name}</span> — {cert.issuer}</div>
                  <div className="text-zinc-500 whitespace-nowrap">{cert.date}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <style jsx global>{`
        .resume-preview {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        @media print {
          .resume-preview {
            box-shadow: none !important;
            border: 1px solid #d1d5db !important;
            width: 210mm !important;
            height: 297mm !important;
            margin: 0 !important;
            padding: 18mm 14mm !important;
            overflow: hidden !important;
            page-break-inside: avoid !important;
          }
        }
      `}</style>
    </div>
  );
}

export default function ResumePreview({ data, template = "classic" }) {
  if (template === "modern") {
    return <ModernResume data={data} />;
  }

  // ... existing classic template code ...
  const {
    personalInfo = {},
    experience = [],
    education = [],
    skills = {},
    languages = [],
    certifications = [],
    projects = [],
  } = data;

  // Vérification des informations personnelles
  console.log("Personal Info:", personalInfo);

  return (
    <div className="resume-preview w-[210mm] h-[297mm] bg-white shadow-lg p-6 overflow-y-auto mx-auto scale-[0.67] origin-top">
      {/* En-tête */}
      <div className="text-center mb-6 border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {personalInfo.firstName && personalInfo.lastName 
            ? `${personalInfo.firstName} ${personalInfo.lastName}`
            : personalInfo.fullName || "Votre nom"}
        </h1>
        <p className="text-xl text-gray-700 mb-3">
          {personalInfo.title || "Titre professionnel"}
        </p>
        <div className="flex justify-center gap-4 text-sm text-gray-600 mt-2">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.location && <span>• {personalInfo.location}</span>}
        </div>
        <div className="flex justify-center gap-4 text-sm text-gray-600 mt-2">
          {personalInfo.github && (
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              GitHub
            </a>
          )}
          {personalInfo.linkedin && (
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              LinkedIn
            </a>
          )}
          {personalInfo.website && (
            <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              Website
            </a>
          )}
        </div>
      </div>

      {/* Résumé */}
      {personalInfo.summary && (
        <div className="mb-6 border-b border-gray-200 pb-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Résumé</h2>
          <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
        </div>
      )}

      {/* Expérience professionnelle */}
      {experience.length > 0 && (
        <div className="mb-6 border-b border-gray-200 pb-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Expérience professionnelle</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{exp.title}</h3>
                    <p className="text-gray-700">{exp.company}</p>
                  </div>
                  <div className="text-sm text-gray-600">
                    {exp.startDate} - {exp.endDate || "Présent"}
                  </div>
                </div>
                <p className="text-gray-700 mt-2 leading-relaxed">{exp.description}</p>
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projets */}
      {projects.length > 0 && (
        <div className="mb-6 border-b border-gray-200 pb-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Projets</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                    <p className="text-gray-700">{project.technologies}</p>
                  </div>
                  <div className="text-sm text-gray-600">
                    {project.startDate} - {project.endDate || "Présent"}
                  </div>
                </div>
                <p className="text-gray-700 mt-2 leading-relaxed">{project.description}</p>
                {project.achievements && project.achievements.length > 0 && (
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Formation */}
      {education.length > 0 && (
        <div className="mb-6 border-b border-gray-200 pb-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Formation</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-700">{edu.school}</p>
                  </div>
                  <div className="text-sm text-gray-600">
                    {edu.startDate} - {edu.endDate || "Présent"}
                  </div>
                </div>
                {edu.description && (
                  <p className="text-gray-700 mt-2 leading-relaxed">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <div className="mb-6 border-b border-gray-200 pb-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h2>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{cert.name}</h3>
                    <p className="text-gray-700">{cert.issuer}</p>
                  </div>
                  <div className="text-sm text-gray-600">{cert.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Compétences */}
      {(skills.technical || skills.soft || skills.additional) && (
        <div className="mb-6 border-b border-gray-200 pb-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Compétences</h2>
          <div className="space-y-4">
            {skills.technical && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Techniques</h3>
                <p className="text-gray-700 leading-relaxed">{skills.technical}</p>
              </div>
            )}
            {skills.soft && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Soft Skills</h3>
                <p className="text-gray-700 leading-relaxed">{skills.soft}</p>
              </div>
            )}
            {skills.additional && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Compétences additionnelles</h3>
                <p className="text-gray-700 leading-relaxed">{skills.additional}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Langues */}
      {languages.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Langues</h2>
          <div className="space-y-2">
            {languages.map((lang, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-gray-900 font-medium">{lang.name}</span>
                <span className="text-gray-700">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 