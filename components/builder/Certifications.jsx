"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardTitle, CardDescription } from "@/components/ui/card";
import { FiPlus, FiTrash2 } from "react-icons/fi";

export default function Certifications({ data, onChange }) {
  const handleChange = (index, field, value) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    onChange(newData);
  };

  const addCertification = () => {
    onChange([
      ...data,
      {
        name: "",
        issuer: "",
        date: "",
      },
    ]);
  };

  const removeCertification = (index) => {
    const newData = data.filter((_, i) => i !== index);
    onChange(newData);
  };

  return (
    <div className="space-y-6">
      <div>
        <CardTitle>Certifications</CardTitle>
        <CardDescription>
          Ajoutez vos certifications et formations
        </CardDescription>
      </div>

      <div className="space-y-6">
        {data.map((cert, index) => (
          <div key={index} className="space-y-4 p-4 border border-zinc-200 rounded-lg">
            <div className="flex justify-between items-start">
              <h4 className="text-sm font-medium text-zinc-700">
                Certification {index + 1}
              </h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeCertification(index)}
                className="text-red-500 hover:text-red-600 hover:bg-red-50"
              >
                <FiTrash2 className="w-4 h-4" />
              </Button>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">
                Nom de la certification
              </label>
              <Input
                value={cert.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
                placeholder="Nom de la certification"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">
                Organisme émetteur
              </label>
              <Input
                value={cert.issuer}
                onChange={(e) => handleChange(index, "issuer", e.target.value)}
                placeholder="Nom de l'organisme"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">
                Date d'obtention
              </label>
              <Input
                type="month"
                value={cert.date}
                onChange={(e) => handleChange(index, "date", e.target.value)}
              />
            </div>
          </div>
        ))}

        <Button
          onClick={addCertification}
          variant="outline"
          className="w-full gap-2"
        >
          <FiPlus className="w-4 h-4" />
          Ajouter une certification
        </Button>
      </div>
    </div>
  );
} 