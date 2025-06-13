"use client";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { CardTitle, CardDescription } from "@/components/ui/card";

export default function Skills({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange({ [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <CardTitle>Compétences</CardTitle>
        <CardDescription>
          Ajoutez vos compétences techniques et langues
        </CardDescription>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Compétences techniques
          </label>
          <Textarea
            value={data.technical}
            onChange={(e) => handleChange("technical", e.target.value)}
            placeholder="JavaScript, React, Node.js, Python, SQL..."
            className="min-h-[100px]"
          />
          <p className="text-sm text-zinc-500 mt-1">
            Séparez vos compétences par des virgules
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Langues
          </label>
          <Textarea
            value={data.languages}
            onChange={(e) => handleChange("languages", e.target.value)}
            placeholder="Français (Natif), Anglais (C1), Espagnol (B2)..."
            className="min-h-[100px]"
          />
          <p className="text-sm text-zinc-500 mt-1">
            Précisez votre niveau pour chaque langue
          </p>
        </div>
      </div>
    </div>
  );
} 