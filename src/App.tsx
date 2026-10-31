import { getPageBackdrop } from './data/photography';
import { topicMap } from './data/topics';
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { HomeView } from './components/HomeView';
import { LibraryView } from './components/LibraryView';
import { CategoryView } from './components/CategoryView';
import { TopicDetailView } from './components/TopicDetailView';
import { AtlasView } from './components/AtlasView';
import { VisualLabView } from './components/VisualLabView';
import { DashboardView } from './components/DashboardView';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [routeParam, setRouteParam] = useState<string | undefined>(undefined);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Parse URL hash on mount and hash changes
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash || hash === 'home') {
        setCurrentRoute('home');
        setRouteParam(undefined);
      } else if (hash.startsWith('topic/')) {
        setCurrentRoute('topic');
        setRouteParam(hash.replace('topic/', ''));
      } else if (hash.startsWith('category/')) {
        setCurrentRoute('category');
        setRouteParam(hash.replace('category/', ''));
      } else if (hash === 'curriculum' || hash === 'library') {
        setCurrentRoute('curriculum');
        setRouteParam(undefined);
      } else if (hash === 'atlas') {
        setCurrentRoute('atlas');
        setRouteParam(undefined);
      } else if (hash === 'lab') {
        setCurrentRoute('lab');
        setRouteParam(undefined);
      } else if (hash === 'dashboard') {
        setCurrentRoute('dashboard');
        setRouteParam(undefined);
      } else {
        setCurrentRoute('home');
        setRouteParam(undefined);
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const handleNavigate = (route: string) => {
    window.location.hash = `#${route}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTopic = (topicId: string) => {
    window.location.hash = `#topic/${topicId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (categoryId: string) => {
    window.location.hash = `#category/${categoryId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backdrop = getPageBackdrop(currentRoute, topicMap.get(routeParam || '')?.categoryId || routeParam, currentRoute === 'topic' ? routeParam : undefined);

  return (
    <div style={{ '--site-photo': `url("${backdrop.src}")` } as React.CSSProperties} className="photo-site min-h-screen flex flex-col text-[#102A43] font-sans selection:bg-[#245C45]/20 selection:text-[#102A43]">
      {/* Top Navbar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectTopic={handleSelectTopic}
            onSelectCategory={handleSelectCategory}
            onOpenSearch={() => setIsSearchOpen(true)}
          />
        )}

        {currentRoute === 'curriculum' && (
          <LibraryView
            onSelectTopic={handleSelectTopic}
            onSelectCategory={handleSelectCategory}
            initialCategoryFilter={routeParam}
          />
        )}

        {currentRoute === 'category' && routeParam && (
          <CategoryView
            categoryId={routeParam}
            onSelectTopic={handleSelectTopic}
            onSelectCategory={handleSelectCategory}
            onBackToCurriculum={() => handleNavigate('curriculum')}
          />
        )}

        {currentRoute === 'topic' && routeParam && (
          <TopicDetailView
            topicId={routeParam}
            onSelectTopic={handleSelectTopic}
            onSelectCategory={handleSelectCategory}
            onBackToCurriculum={() => handleNavigate('curriculum')}
            onOpenLab={() => handleNavigate('lab')}
          />
        )}

        {currentRoute === 'atlas' && (
          <AtlasView
            onSelectTopic={handleSelectTopic}
          />
        )}

        {currentRoute === 'lab' && (
          <VisualLabView
            onSelectTopic={handleSelectTopic}
          />
        )}

        {currentRoute === 'dashboard' && (
          <DashboardView
            onSelectTopic={handleSelectTopic}
            onSelectCategory={handleSelectCategory}
            onNavigateToCurriculum={() => handleNavigate('curriculum')}
          />
        )}
      </main>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectTopic={handleSelectTopic}
      />

      {/* Footer */}
      <Footer
        backgroundPhoto={backdrop}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />
    </div>
  );
}
