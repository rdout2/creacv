"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CardTitle, CardDescription } from "@/components/ui/card";
import { FiPlus, FiTrash2 } from "react-icons/fi";

export default function Projects({ data, onChange }) {
  const handleChange = (index, field, value) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    onChange(newData);
  };

  const addProject = () => {
    onChange([
      ...data,
      {
        name: "",
        technologies: "",
        startDate: "",
        endDate: "",
        description: "",
        achievements: [],
      },
    ]);
  };

  const removeProject = (index) => {
    const newData = data.filter((_, i) => i !== index);
    onChange(newData);
  };

  const handleAchievementChange = (projectIndex, achievementIndex, value) => {
    const newData = [...data];
    newData[projectIndex].achievements[achievementIndex] = value;
    onChange(newData);
  };

  const addAchievement = (projectIndex) => {
    const newData = [...data];
    if (!newData[projectIndex].achievements) {
      newData[projectIndex].achievements = [];
    }
    newData[projectIndex].achievements.push("");
    onChange(newData);
  };

  const removeAchievement = (projectIndex, achievementIndex) => {
    const newData = [...data];
    newData[projectIndex].achievements = newData[projectIndex].achievements.filter(
      (_, i) => i !== achievementIndex
    );
    onChange(newData);
  };

  return (
    <div className="space-y-6">
      <div>
        <CardTitle>Projets</CardTitle>
        <CardDescription>
          Ajoutez vos projets personnels ou professionnels
        </CardDescription>
      </div>

      <div className="space-y-6">
        {data.map((project, index) => (
          <div key={index} className="space-y-4 p-4 border border-zinc-200 rounded-lg">
            <div className="flex justify-between items-start">
              <h4 className="text-sm font-medium text-zinc-700">
                Projet {index + 1}
              </h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeProject(index)}
                className="text-red-500 hover:text-red-600 hover:bg-red-50"
              >
                <FiTrash2 className="w-4 h-4" />
              </Button>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">
                Nom du projet
              </label>
              <Input
                value={project.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
                placeholder="Nom du projet"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">
                Technologies utilisées
              </label>
              <Input
                value={project.technologies}
                onChange={(e) => handleChange(index, "technologies", e.target.value)}
                placeholder="React, Node.js, MongoDB..."
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">
                  Date de début
                </label>
                <Input
                  type="month"
                  value={project.startDate}
                  onChange={(e) => handleChange(index, "startDate", e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">
                  Date de fin
                </label>
                <Input
                  type="month"
                  value={project.endDate}
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
                value={project.description}
                onChange={(e) => handleChange(index, "description", e.target.value)}
                placeholder="Décrivez votre projet..."
                className="min-h-[100px]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Réalisations
              </label>
              <div className="space-y-2">
                {project.achievements?.map((achievement, aIndex) => (
                  <div key={aIndex} className="flex gap-2">
                    <Input
                      value={achievement}
                      onChange={(e) => handleAchievementChange(index, aIndex, e.target.value)}
                      placeholder="Réalisation..."
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeAchievement(index, aIndex)}
                      className="text-red-500 hover:text-red-600 hover:bg-red-50"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => addAchievement(index)}
                  className="w-full gap-2"
                >
                  <FiPlus className="w-4 h-4" />
                  Ajouter une réalisation
                </Button>
              </div>
            </div>
          </div>
        ))}

        <Button
          onClick={addProject}
          variant="outline"
          className="w-full gap-2"
        >
          <FiPlus className="w-4 h-4" />
          Ajouter un projet
        </Button>
      </div>
    </div>
  );
} 