import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative">
      <div className="absolute right-1/4 top-20">
        <div className="absolute w-64 h-64 bg-purple-500 rounded-full opacity-80 animate-blob mix-blend-multiply"></div>
        <div className="absolute w-64 h-64 bg-yellow-500 rounded-full ml-10 opacity-80 animate-blob animation-delay-2000 mix-blend-multiply"></div>
        <div className="absolute w-64 h-64 bg-pink-500 rounded-full mt-10 opacity-80 animate-blob animation-delay-4000 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-indigo-600 font-medium mb-4 animate-slide-up">
            Welcome to my portfolio 👋
          </p>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-slide-up [animation-delay:200ms]">
            Hi, I'm Djonah Cruden
            <span className="block text-indigo-600">Full Stack Developer</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 animate-slide-up [animation-delay:400ms]">
            Specialized in building scalable websites, applications and SaaS products.
          </p>

          <div className="flex gap-8 mb-12 animate-slide-up [animation-delay:600ms]">
            <div>
              <h4 className="text-2xl font-bold text-gray-900">Full Stack</h4>
              <p className="text-gray-600">Developer</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-gray-900">Based in</h4>
              <p className="text-gray-600">Amsterdam</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-gray-900">Open to</h4>
              <p className="text-gray-600">New Projects</p>
            </div>
          </div>

          <div className="flex space-x-4 animate-slide-up [animation-delay:800ms]">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
            >
              View My Work
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}