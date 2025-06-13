"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FiUpload, FiFile, FiX } from "react-icons/fi";

export default function PDFUpload() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setError("");

    if (!selectedFile) {
      return;
    }

    // Check if file is a PDF
    if (selectedFile.type !== "application/pdf") {
      setError("Veuillez sélectionner un fichier PDF");
      setFile(null);
      return;
    }

    // Check file size (max 5MB)
    if (selectedFile.size > 5 * 1024 * 1024) {
      setError("Le fichier est trop volumineux (max 5MB)");
      setFile(null);
      return;
    }

    setFile(selectedFile);
  };

  const handleRemoveFile = () => {
    setFile(null);
    setError("");
    // Reset the file input
    const fileInput = document.getElementById("pdf-upload");
    if (fileInput) {
      fileInput.value = "";
    }
  };

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-zinc-800">
              Téléverser un CV existant
            </h3>
            <p className="text-sm text-zinc-500 mt-1">
              Format PDF uniquement (max 5MB)
            </p>
          </div>

          <div className="w-full max-w-md">
            {!file ? (
              <div className="relative">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                  id="pdf-upload"
                />
                <label htmlFor="pdf-upload" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full gap-2 cursor-pointer"
                    type="button"
                  >
                    <FiUpload className="w-4 h-4" />
                    Choisir un fichier PDF
                  </Button>
                </label>
              </div>
            ) : (
              <div className="flex items-center justify-between p-3 border border-zinc-200 rounded-md bg-zinc-50">
                <div className="flex items-center gap-2">
                  <FiFile className="w-5 h-5 text-zinc-500" />
                  <span className="text-sm text-zinc-700 truncate">
                    {file.name}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleRemoveFile}
                  className="text-zinc-500 hover:text-zinc-700"
                >
                  <FiX className="w-4 h-4" />
                </Button>
              </div>
            )}

            {error && (
              <p className="mt-2 text-sm text-red-500 text-center">{error}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 