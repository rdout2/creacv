"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiClock, FiDownload, FiEdit } from "react-icons/fi";

const features = [
    {
        icon: <FiClock className="w-6 h-6" />,
        title: "Rapide & Simple",
        description: "Créez votre CV en moins de 3 minutes avec notre interface intuitive."
    },
    {
        icon: <FiEdit className="w-6 h-6" />,
        title: "Personnalisable",
        description: "Choisissez parmi plusieurs templates et personnalisez chaque section."
    },
    {
        icon: <FiCheckCircle className="w-6 h-6" />,
        title: "ATS Friendly",
        description: "Optimisé pour les systèmes de suivi des candidatures (ATS)."
    },
    {
        icon: <FiDownload className="w-6 h-6" />,
        title: "Export PDF",
        description: "Téléchargez votre CV en format PDF prêt à être partagé."
    }
];

export default function Features() {
    return (
        <section className="py-20 bg-black/30 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
                            >
                                <div className="text-indigo-400 mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-300">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 