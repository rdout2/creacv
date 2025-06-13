"use client";
import React, { useState } from "react";
import ResumeForm from "@/components/builder/ResumeForm";
import ResumePreview from "@/components/builder/ResumePreview";

const initialFormData = {
  personalInfo: {
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    github: "",
    linkedin: "",
    website: "",
    summary: "",
  },
  experience: [
    {
      title: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      achievements: [],
    },
  ],
  projects: [
    {
      name: "",
      technologies: "",
      startDate: "",
      endDate: "",
      description: "",
      achievements: [],
    },
  ],
  education: [
    {
      degree: "",
      school: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ],
  certifications: [
    {
      name: "",
      issuer: "",
      date: "",
    },
  ],
  skills: {
    technical: "",
    soft: "",
    additional: "",
  },
  languages: [
    {
      name: "",
      level: "",
    },
  ],
};

export default function Builder() {
  const [formData, setFormData] = useState(initialFormData);
  const [template, setTemplate] = useState("classic");

  const handleFormChange = (newData) => {
    setFormData(newData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center gap-4">
        <label className="font-medium text-zinc-700">Template :</label>
        <select
          value={template}
          onChange={e => setTemplate(e.target.value)}
          className="border rounded px-3 py-2 text-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="classic">Classique</option>
          <option value="modern">Moderne</option>
        </select>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <ResumeForm data={formData} onChange={handleFormChange} />
        </div>
        <div className="lg:sticky lg:top-8">
          <ResumePreview data={formData} template={template} />
        </div>
      </div>
    </div>
  );
}
