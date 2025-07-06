import React from 'react';
import type { SocialLink, VideoProject, NewProject } from './types';

// Icons
const YouTubeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17Z"></path><path d="m10 15 5-3-5-3z"></path></svg>
);
const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 12a4 4 0 1 0 4 4V6a4 4 0 1 0-8 0"></path></svg>
);
const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
);
const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const TwitterXIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
);

// User Data
export const USER_DATA = {
  name: 'Alex Doe',
  title: 'Digital Content Creator & Social Media Strategist',
  bio: 'Transforming ideas into engaging digital experiences. I specialize in video content that captures attention and tells a story. Explore my work below.',
  imageUrl: 'https://picsum.photos/seed/profilepic/200/200',
};

// Social Links Data
export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'YouTube', url: 'https://youtube.com', icon: <YouTubeIcon /> },
  { name: 'TikTok', url: 'https://tiktok.com', icon: <TikTokIcon /> },
  { name: 'Instagram', url: 'https://instagram.com', icon: <InstagramIcon /> },
  { name: 'X / Twitter', url: 'https://x.com', icon: <TwitterXIcon /> },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: <LinkedInIcon /> },
];

// Video Portfolio Data
export const VIDEO_PROJECTS: VideoProject[] = [
  { id: 1, title: 'Epic Drone Shots Compilation', platform: 'YouTube', videoUrl: '#', thumbnailUrl: 'https://picsum.photos/seed/vid1/600/400' },
  { id: 2, title: 'Viral Dance Challenge #MyMoves', platform: 'TikTok', videoUrl: '#', thumbnailUrl: 'https://picsum.photos/seed/vid2/600/400' },
  { id: 3, title: 'Aesthetic Morning Routine', platform: 'Instagram', videoUrl: '#', thumbnailUrl: 'https://picsum.photos/seed/vid3/600/400' },
  { id: 4, title: 'How to Edit Videos Like a Pro', platform: 'YouTube', videoUrl: '#', thumbnailUrl: 'https://picsum.photos/seed/vid4/600/400' },
  { id: 5, title: 'Quick & Healthy 60s Recipe', platform: 'TikTok', videoUrl: '#', thumbnailUrl: 'https://picsum.photos/seed/vid5/600/400' },
  { id: 6, title: 'Behind the Scenes of a Photoshoot', platform: 'Instagram', videoUrl: '#', thumbnailUrl: 'https://picsum.photos/seed/vid6/600/400' },
];

// New Projects Data
export const NEW_PROJECTS: NewProject[] = [
  {
    id: 1,
    title: 'Project "Odyssey"',
    description: 'A weekly podcast exploring the intersection of technology, creativity, and digital culture. Featuring interviews with industry leaders.',
    status: 'In Progress',
    tags: ['Podcast', 'Technology', 'Creativity'],
  },
  {
    id: 2,
    title: 'Interactive Web Documentary',
    description: 'An immersive documentary experience built with modern web technologies, telling the story of urban exploration.',
    status: 'Concept',
    tags: ['Web Dev', 'Documentary', 'Storytelling'],
  },
  {
    id: 3,
    title: 'Creator-Focused SaaS Platform',
    description: 'A software-as-a-service tool designed to help content creators manage their workflow, sponsorships, and analytics all in one place.',
    status: 'Launched',
    tags: ['SaaS', 'Software', 'Creator Economy'],
  },
  {
    id: 4,
    title: 'Short Film: "The Digital Ghost"',
    description: 'A narrative short film about our digital footprints and the lives we live online. Currently in pre-production.',
    status: 'In Progress',
    tags: ['Film', 'Narrative', 'Sci-Fi'],
  }
];
