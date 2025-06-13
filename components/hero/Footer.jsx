"use client";
import React from "react";
import { FiGithub, FiHeart } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="py-8 bg-black/50 relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-gray-400 text-sm">
                        Made with <FiHeart className="inline text-red-500" /> by{" "}
                        <a
                            href="https://github.com/HOTHEAD01TH"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                            HOTHEAD01TH
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/HOTHEAD01TH/free-resume-maker"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <FiGithub className="w-6 h-6" />
                        </a>
                        <span className="text-gray-400 text-sm">
                            Open Source
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
} 