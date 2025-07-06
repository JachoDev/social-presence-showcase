import React from 'react';
import type { Page } from '../App';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const navItems: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'New Projects' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-base-200/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center h-16">
          <ul className="flex space-x-2 items-center bg-base-300 p-2 rounded-full shadow-lg">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-base-300 focus-visible:ring-brand-primary ${
                    currentPage === item.id
                      ? 'bg-brand-primary text-white shadow-md'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                  aria-current={currentPage === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
