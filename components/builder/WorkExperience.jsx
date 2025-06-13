"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CardTitle, CardDescription } from "@/components/ui/card";
import { FiPlus, FiTrash2 } from "react-icons/fi";

export default function WorkExperience({ data, onChange }) {
  const handleChange = (index, field, value) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    onChange(newData);
  };

  const addExperience = () => {
    onChange([
      ...data,
      {
        title: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const removeExperience = (index) => {
    const newData = data.filter((_, i) => i !== index);
    onChange(newData);
  };

  return (
    <div className="space-y-6">
      <div>
        <CardTitle>Expérience professionnelle</CardTitle>
        <CardDescription>
          Ajoutez vos expériences professionnelles
        </CardDescription>
      </div>

      <div className="space-y-6">
        {data.map((exp, index) => (
          <div key={index} className="space-y-4 p-4 border border-zinc-200 rounded-lg">
            <div className="flex justify-between items-start">
              <h4 className="text-sm font-medium text-zinc-700">
                Expérience {index + 1}
              </h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeExperience(index)}
                className="text-red-500 hover:text-red-600 hover:bg-red-50"
              >
                <FiTrash2 className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">
                  Poste
                </label>
                <Input
                  value={exp.title}
                  onChange={(e) => handleChange(index, "title", e.target.value)}
                  placeholder="Développeur Full Stack"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">
                  Entreprise
                </label>
                <Input
                  value={exp.company}
                  onChange={(e) => handleChange(index, "company", e.target.value)}
                  placeholder="Nom de l'entreprise"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">
                  Date de début
                </label>
                <Input
                  type="month"
                  value={exp.startDate}
                  onChange={(e) => handleChange(index, "startDate", e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">
                  Date de fin
                </label>
                <Input
                  type="month"
                  value={exp.endDate}
                  onChange={(e) => handleChange(index, "endDate", e.target.value)}
                  placeholder="Présent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">
                Description
              </label>
              <Textarea
                value={exp.description}
                onChange={(e) => handleChange(index, "description", e.target.value)}
                placeholder="Décrivez vos responsabilités et réalisations..."
                className="min-h-[100px]"
              />
            </div>
          </div>
        ))}

        <Button
          onClick={addExperience}
          variant="outline"
          className="w-full gap-2"
        >
          <FiPlus className="w-4 h-4" />
          Ajouter une expérience
        </Button>
      </div>
    </div>
  );
} 