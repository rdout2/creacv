"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { FiPrinter } from "react-icons/fi";
import jsPDF from "jspdf";

export default function DownloadButton() {
  const handlePrint = () => {
    const resume = document.getElementsByClassName("resume-preview")[0];
    // download this resume as a pdf
    const pdf = new jsPDF();
    pdf.text(resume.innerHTML, 10, 10);
    pdf.save("resume.pdf");
  };

  return (
    <Button
      onClick={handlePrint}
      className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white shadow-lg gap-2"
    >
      <FiPrinter className="w-5 h-5" />
      Imprimer / Exporter en PDF
    </Button>
  );
} 