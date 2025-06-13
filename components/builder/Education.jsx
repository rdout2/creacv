"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardTitle, CardDescription } from "@/components/ui/card";
import { FiPlus, FiTrash2 } from "react-icons/fi";

export default function Education({ data, onChange }) {
  const handleChange = (index, field, value) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    onChange(newData);
  };

  const addEducation = () => {
    onChange([
      ...data,
      {
        degree: "",
        school: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const removeEducation = (index) => {
    const newData = data.filter((_, i) => i !== index);
    onChange(newData);
  };

  return (
    <div className="space-y-6">
      <div>
        <CardTitle>Formation</CardTitle>
        <CardDescription>
          Ajoutez vos diplômes et formations
        </CardDescription>
      </div>

      <div className="space-y-6">
        {data.map((edu, index) => (
          <div key={index} className="space-y-4 p-4 border border-zinc-200 rounded-lg">
            <div className="flex justify-between items-start">
              <h4 className="text-sm font-medium text-zinc-700">
                Formation {index + 1}
              </h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeEducation(index)}
                className="text-red-500 hover:text-red-600 hover:bg-red-50"
              >
                <FiTrash2 className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">
                  Diplôme
                </label>
                <Input
                  value={edu.degree}
                  onChange={(e) => handleChange(index, "degree", e.target.value)}
                  placeholder="Master en Informatique"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">
                  École
                </label>
                <Input
                  value={edu.school}
                  onChange={(e) => handleChange(index, "school", e.target.value)}
                  placeholder="Nom de l'école"
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
                  value={edu.startDate}
                  onChange={(e) => handleChange(index, "startDate", e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">
                  Date de fin
                </label>
                <Input
                  type="month"
                  value={edu.endDate}
                  onChange={(e) => handleChange(index, "endDate", e.target.value)}
                  placeholder="Présent"
                />
              </div>
            </div>
          </div>
        ))}

        <Button
          onClick={addEducation}
          variant="outline"
          className="w-full gap-2"
        >
          <FiPlus className="w-4 h-4" />
          Ajouter une formation
        </Button>
      </div>
    </div>
  );
} 