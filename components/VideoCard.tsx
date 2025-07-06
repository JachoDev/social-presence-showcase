
import React from 'react';
import type { VideoProject } from '../types';

interface VideoCardProps {
  project: VideoProject;
}

const PlatformTag: React.FC<{ platform: VideoProject['platform'] }> = ({ platform }) => {
  const platformColors = {
    YouTube: 'bg-red-500/20 text-red-400 border-red-500/30',
    TikTok: 'bg-cyan-400/20 text-cyan-300 border-cyan-400/30',
    Instagram: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
    Vimeo: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
  };

  return (
    <span className={`absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full border ${platformColors[platform]}`}>
      {platform}
    </span>
  );
};

const VideoCard: React.FC<VideoCardProps> = ({ project }) => {
  return (
    <a
      href={project.videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-base-300 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-brand-primary/20 transition-all duration-300 ease-in-out transform hover:-translate-y-2"
    >
      <div className="relative">
        <img
          src={project.thumbnailUrl}
          alt={project.title}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <PlatformTag platform={project.platform} />
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-lg font-bold text-text-primary leading-tight">
            {project.title}
          </h3>
        </div>
      </div>
    </a>
  );
};

export default VideoCard;
