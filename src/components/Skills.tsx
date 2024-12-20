import React from 'react';

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Bootstrap CSS', 'HTML/CSS'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'Typescript', 'Firebase'] },
  { category: 'DevOps', items: ['Docker', 'Git', 'GitHub', 'SQL'] },
  { category: 'Tools', items: ['Xcode', 'VS Code', 'Figma', 'Warp'] },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <div 
              key={skillGroup.category} 
              className="p-6 bg-gray-100 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-gray-100"
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-gray-700">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}