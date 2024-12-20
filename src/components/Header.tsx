import React from 'react';
import { Github, Linkedin, Mail, Twitter,} from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-gray-800">E-Portfolio</a>
          <div className="flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/djonahkc" className="text-gray-600 hover:text-gray-900" aria-label="GitHub Profile">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/djonah-cruden-061165146/" className="text-gray-600 hover:text-gray-900" aria-label="LinkedIn Profile">
              <Linkedin size={20} />
            </a>
            <a href="mailto:djonahkcruden@gmail.com" className="text-gray-600 hover:text-gray-900" aria-label="Email Contact">
              <Mail size={20} />
            </a>
            <a href="https://x.com/djonahkc" className="text-gray-600 hover:text-gray-900" aria-label="X Profile">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}