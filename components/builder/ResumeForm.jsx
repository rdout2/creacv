"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import PersonalInfo from "./PersonalInfo";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Languages from "./Languages";
import PDFUpload from "./PDFUpload";
import DownloadButton from "./DownloadButton";
import InfoBanner from "./InfoBanner";

export default function ResumeForm({ data, onChange }) {
  const handleChange = (section, value) => {
    onChange({
      ...data,
      [section]: value,
    });
  };

  return (
    <div className="space-y-6">
      <InfoBanner />
      
      <Card className="p-6">
        <PersonalInfo
          data={data.personalInfo}
          onChange={(value) => handleChange("personalInfo", value)}
        />
      </Card>

      <Card className="p-6">
        <WorkExperience
          data={data.experience}
          onChange={(value) => handleChange("experience", value)}
        />
      </Card>

      <Card className="p-6">
        <Projects
          data={data.projects}
          onChange={(value) => handleChange("projects", value)}
        />
      </Card>

      <Card className="p-6">
        <Education
          data={data.education}
          onChange={(value) => handleChange("education", value)}
        />
      </Card>

      <Card className="p-6">
        <Certifications
          data={data.certifications}
          onChange={(value) => handleChange("certifications", value)}
        />
      </Card>

      <Card className="p-6">
        <Skills
          data={data.skills}
          onChange={(value) => handleChange("skills", value)}
        />
      </Card>

      <Card className="p-6">
        <Languages
          data={data.languages}
          onChange={(value) => handleChange("languages", value)}
        />
      </Card>

      <div className="flex gap-4">
        <PDFUpload />
        <DownloadButton />
      </div>
    </div>
  );
} 