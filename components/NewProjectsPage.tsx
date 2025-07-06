import React from 'react';
import { NEW_PROJECTS } from '../constants';
import type { NewProject } from '../types';

const StatusBadge: React.FC<{ status: NewProject['status'] }> = ({ status }) => {
  const statusStyles = {
    Launched: 'bg-green-500/20 text-green-400 border-green-500/30',
    'In Progress': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    Concept: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  };
  return (
    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${statusStyles[status]}`}>
      {status}
    </span>
  );
};

const NewProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <header className="text-center mb-12 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary">
          New & Upcoming Projects
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">
          A glimpse into what I'm currently working on and what's next on the horizon.
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {NEW_PROJECTS.map((project, index) => (
           <div key={project.id} 
             className="bg-base-300 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-brand-primary/20 transition-all duration-300 ease-in-out transform hover:-translate-y-1 animate-fade-in-up"
             style={{ animationDelay: `${0.2 + index * 0.1}s` }}
           >
             <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-text-primary pr-4">{project.title}</h2>
              <StatusBadge status={project.status} />
             </div>
             <p className="text-text-secondary mb-4 min-h-[60px]">
              {project.description}
             </p>
             <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-base-200 text-text-secondary text-xs font-medium px-2 py-1 rounded">
                    #{tag}
                  </span>
                ))}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProjectsPage;
