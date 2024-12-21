import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'SaaS Product "KitchAI"',
    description: 'A mobile app that allows users to create and make their own recipes.',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['React Native', 'Typescript', 'Supabase'],
    liveUrl: 'https://example.com',
    
  },
  {
    title: 'To do App',
    description: 'A simple to do app that allows users to create and manage their own tasks.',
    image: 'https://images.unsplash.com/photo-1598791318878-10e76d178023?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['React', 'Typescript', 'Vite', 'Tailwind'],
    liveUrl: 'https://todo-app-one-tawny-64.vercel.app',
    
  },
  {
    title: 'Netflix Clone',
    description: 'A clone of the popular streaming service Netflix.',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['React', 'Typescript', 'Python'],
    liveUrl: 'https://example.com',
    
  },
  {
    title: 'Weather app',
    description: 'A weather app that allows users to search for weather information for a specific location.',
    image: 'https://images.unsplash.com/photo-1630260667842-830a17d12ec9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['Python'],
    liveUrl: 'https://example.com',
    
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            mobile app creation, and web applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-600 text-white rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-indigo-600 hover:text-blue-700"
                  >
                    <ExternalLink size={16} className="mr-1" /> Live Demo
                  </a>
                  
                
                
                
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600">7+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600">2+</div>
            <div className="text-gray-600">Years Coding</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600">5+</div>
            <div className="text-gray-600">Languages Used</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600">4+</div>
            <div className="text-gray-600">Frameworks Used</div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/djonahkc"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
          >
            More Projects on GitHub
            <Github className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}