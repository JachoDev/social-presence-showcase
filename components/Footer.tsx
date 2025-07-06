
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-8 mt-16 border-t border-base-300">
      <p className="text-text-secondary text-sm">
        &copy; {currentYear} Alex Doe. All Rights Reserved.
      </p>
      <p className="text-xs text-slate-500 mt-2">
        Crafted with passion and code.
      </p>
    </footer>
  );
};

export default Footer;
