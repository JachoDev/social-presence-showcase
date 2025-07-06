import React, { useState } from 'react';
import Header from './components/Header';
import SocialLinks from './components/SocialLinks';
import PortfolioSection from './components/PortfolioSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NewProjectsPage from './components/NewProjectsPage';
import { SOCIAL_LINKS, VIDEO_PROJECTS, USER_DATA } from './constants';

export type Page = 'home' | 'projects';

const HomePage: React.FC = () => (
  <div className="container mx-auto px-4 py-8 md:py-16">
    <Header 
      name={USER_DATA.name}
      title={USER_DATA.title}
      bio={USER_DATA.bio}
      imageUrl={USER_DATA.imageUrl}
    />
    
    <div className="my-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
      <SocialLinks links={SOCIAL_LINKS} />
    </div>

    <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
      <PortfolioSection projects={VIDEO_PROJECTS} />
    </div>
  </div>
);


const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <div className="min-h-screen bg-base-100 text-text-primary font-sans leading-relaxed flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow">
        {currentPage === 'home' ? <HomePage /> : <NewProjectsPage />}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
