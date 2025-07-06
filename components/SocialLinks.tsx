
import React from 'react';
import type { SocialLink } from '../types';

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex justify-center items-center space-x-4 md:space-x-6">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="text-text-secondary hover:text-brand-primary transition-transform duration-300 ease-in-out hover:scale-125"
        >
          {React.cloneElement(link.icon, { className: 'w-7 h-7 md:w-8 md:h-8' })}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;