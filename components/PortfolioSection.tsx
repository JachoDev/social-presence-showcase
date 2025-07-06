
import React from 'react';
import type { VideoProject } from '../types';
import VideoCard from './VideoCard';

interface PortfolioSectionProps {
  projects: VideoProject[];
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ projects }) => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-10 tracking-wide">
        My Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
            <VideoCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
