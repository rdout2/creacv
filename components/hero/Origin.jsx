"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Origin() {
    return (
        <section className="py-20 bg-black/50 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Pourquoi ce projet ?
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        En tant que développeur, j'ai constaté que la création d'un CV professionnel était souvent un défi. 
                        Les outils existants étaient soit trop chers, soit trop complexes. C'est pourquoi j'ai décidé de créer 
                        un outil gratuit et open source qui permet à chacun de créer un CV moderne en quelques minutes.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <a
                            href="https://github.com/HOTHEAD01TH/free-resume-maker"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Contribuer sur GitHub
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 