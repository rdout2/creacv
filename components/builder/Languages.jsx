"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardTitle, CardDescription } from "@/components/ui/card";
import { FiPlus, FiTrash2 } from "react-icons/fi";

export default function Languages({ data, onChange }) {
  const handleChange = (index, field, value) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    onChange(newData);
  };

  const addLanguage = () => {
    onChange([
      ...data,
      {
        name: "",
        level: "",
      },
    ]);
  };

  const removeLanguage = (index) => {
    const newData = data.filter((_, i) => i !== index);
    onChange(newData);
  };

  return (
    <div className="space-y-6">
      <div>
        <CardTitle>Langues</CardTitle>
        <CardDescription>
          Ajoutez vos compétences linguistiques
        </CardDescription>
      </div>

      <div className="space-y-6">
        {data.map((lang, index) => (
          <div key={index} className="space-y-4 p-4 border border-zinc-200 rounded-lg">
            <div className="flex justify-between items-start">
              <h4 className="text-sm font-medium text-zinc-700">
                Langue {index + 1}
              </h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeLanguage(index)}
                className="text-red-500 hover:text-red-600 hover:bg-red-50"
              >
                <FiTrash2 className="w-4 h-4" />
              </Button>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">
                Langue
              </label>
              <Input
                value={lang.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
                placeholder="Ex: Anglais, Français, etc."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">
                Niveau
              </label>
              <Input
                value={lang.level}
                onChange={(e) => handleChange(index, "level", e.target.value)}
                placeholder="Ex: C1, B2, Courant, etc."
              />
            </div>
          </div>
        ))}

        <Button
          onClick={addLanguage}
          variant="outline"
          className="w-full gap-2"
        >
          <FiPlus className="w-4 h-4" />
          Ajouter une langue
        </Button>
      </div>
    </div>
  );
} 