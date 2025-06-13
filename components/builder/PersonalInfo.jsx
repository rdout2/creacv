"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CardTitle, CardDescription } from "@/components/ui/card";

export default function PersonalInfo({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <CardTitle>Informations personnelles</CardTitle>
        <CardDescription>
          Remplissez vos informations de base
        </CardDescription>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Prénom
          </label>
          <Input
            value={data.firstName || ""}
            onChange={(e) => handleChange("firstName", e.target.value)}
            placeholder="John"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nom
          </label>
          <Input
            value={data.lastName || ""}
            onChange={(e) => handleChange("lastName", e.target.value)}
            placeholder="Doe"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Titre professionnel
        </label>
        <Input
          value={data.title || ""}
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="Développeur Full Stack"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <Input
          type="email"
          value={data.email || ""}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Téléphone
        </label>
        <Input
          type="tel"
          value={data.phone || ""}
          onChange={(e) => handleChange("phone", e.target.value)}
          placeholder="+33 6 12 34 56 78"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Localisation
        </label>
        <Input
          value={data.location || ""}
          onChange={(e) => handleChange("location", e.target.value)}
          placeholder="Paris, France"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          GitHub
        </label>
        <Input
          value={data.github || ""}
          onChange={(e) => handleChange("github", e.target.value)}
          placeholder="https://github.com/username"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          LinkedIn
        </label>
        <Input
          value={data.linkedin || ""}
          onChange={(e) => handleChange("linkedin", e.target.value)}
          placeholder="https://linkedin.com/in/username"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Site web
        </label>
        <Input
          value={data.website || ""}
          onChange={(e) => handleChange("website", e.target.value)}
          placeholder="https://mon-site.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Résumé professionnel
        </label>
        <Textarea
          value={data.summary || ""}
          onChange={(e) => handleChange("summary", e.target.value)}
          placeholder="Décrivez brièvement votre parcours et vos objectifs professionnels..."
          rows={4}
        />
      </div>
    </div>
  );
} 