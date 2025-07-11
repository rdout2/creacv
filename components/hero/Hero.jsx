"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import Link from "next/link";
import { Typewriter } from 'react-simple-typewriter';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export default function Hero() {
    return (
        <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            {/* GitHub Star Button */}
            <a
                href="https://github.com/HOTHEAD01TH/free-resume-maker"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 z-50 inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-black px-4 py-2 text-sm text-slate-300 transition-colors hover:bg-slate-800"
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
                Star on GitHub
            </a>

            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>
            
            <div className="relative z-20 text-center">
                <h1 className={`${spaceGrotesk.className} md:text-8xl text-4xl lg:text-7xl font-bold text-white tracking-tighter mb-6`}>
                    Free Resume Maker
                </h1>
                <p className={`${spaceGrotesk.className} text-xl text-gray-300 mb-8`}>
                    Créez votre CV moderne en 3 minutes, gratuitement.
                </p>
                <div className={`${spaceGrotesk.className} text-center text-slate-500 text-xl mb-8`}>
                    <Typewriter
                        words={['ATS Friendly', 'Smart Suggestions', 'Professional & Perfect']}
                        loop={0}
                        cursor
                        cursorStyle='|'
                        typeSpeed={10}
                        deleteSpeed={10}
                        delaySpeed={800}
                    />
                </div>
                <Link
                    href="/builder"
                    className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                    Créer mon CV
                </Link>
            </div>

            {/* Beam and additional sparkles container */}
            <div className="w-[40rem] h-40 relative">
                {/* Beam gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Additional sparkles under text */}
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />

                {/* Radial gradient mask */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
        </div>
    );
}
