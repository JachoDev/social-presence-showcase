
import React from 'react';

interface HeaderProps {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

const Header: React.FC<HeaderProps> = ({ name, title, bio, imageUrl }) => {
  return (
    <header className="text-center flex flex-col items-center space-y-6">
      <div className="animate-fade-in-up">
        <img
          src={imageUrl}
          alt={name}
          className="w-32 h-32 rounded-full ring-4 ring-brand-primary p-1 object-cover"
        />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary">
          {name}
        </h1>
        <p className="mt-2 text-lg md:text-xl font-medium text-brand-primary">
          {title}
        </p>
      </div>
      <p className="max-w-2xl text-md md:text-lg text-text-secondary animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        {bio}
      </p>
    </header>
  );
};

export default Header;
