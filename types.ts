import type { ReactElement } from 'react';

export interface SocialLink {
  name: string;
  url: string;
  icon: ReactElement<{ className?: string }>;
}

export interface VideoProject {
  id: number;
  title: string;
  platform: 'YouTube' | 'TikTok' | 'Instagram' | 'Vimeo';
  videoUrl: string;
  thumbnailUrl: string;
}

export interface NewProject {
  id: number;
  title: string;
  description: string;
  status: 'Launched' | 'In Progress' | 'Concept';
  tags: string[];
}