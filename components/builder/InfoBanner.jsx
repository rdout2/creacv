"use client";
import React from "react";
import { FiInfo } from "react-icons/fi";

export default function InfoBanner() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
      <div className="flex items-start gap-3">
        <FiInfo className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
        <div>
          <h4 className="text-sm font-medium text-blue-800">
            Données stockées localement
          </h4>
          <p className="text-sm text-blue-600 mt-1">
            Vos informations sont sauvegardées dans votre navigateur. Elles ne sont pas envoyées à nos serveurs.
          </p>
        </div>
      </div>
    </div>
  );
} 