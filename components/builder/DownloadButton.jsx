"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { FiPrinter } from "react-icons/fi";

export default function DownloadButton() {
  const handlePrint = () => {
    window.print();
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