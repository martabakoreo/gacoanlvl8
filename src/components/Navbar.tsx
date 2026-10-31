import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Menu, 
  X,
  BookmarkCheck
} from 'lucide-react';
import { getCompletedTopics, getBookmarkedTopics } from '../utils/storage';

interface NavbarProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);
  const [bookmarkCount, setBookmarkCount] = useState(0);

  useEffect(() => {
    const updateStats = () => {
      setCompletedCount(getCompletedTopics().length);
      setBookmarkCount(getBookmarkedTopics().length);
    };

    updateStats();
    window.addEventListener('atlas_storage_update', updateStats);
    return () => window.removeEventListener('atlas_storage_update', updateStats);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'atlas', label: 'Interactive Atlas' },
    { id: 'lab', label: 'Visual Lab' },
    { id: 'dashboard', label: 'Dashboard' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#e7eddd]/75 backdrop-blur-md border-b border-[#EAEAEA] text-[#000000]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => handleNavClick('home')}
        >
          <span className="font-instrument text-3xl font-bold tracking-tight text-[#000000]">
            ATLAS
          </span>
          <span className="hidden sm:inline-block text-[11px] uppercase tracking-wider text-[#6F6F6F] font-inter border-l border-[#E5E5E5] pl-3 py-0.5">
            Geography Platform
          </span>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-7">
          {navItems.map((item) => {
            const isActive = currentRoute === item.id || (item.id === 'curriculum' && currentRoute.startsWith('category'));
            
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm tracking-normal transition-colors font-inter ${
                  isActive
                    ? 'text-[#000000] font-semibold'
                    : 'text-[#6F6F6F] hover:text-[#000000]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Search & Actions */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 text-xs bg-[#F7F7F7] hover:bg-[#EFEFEF] text-[#6F6F6F] hover:text-[#000000] rounded-full border border-[#E5E5E5] transition-all"
            title="Search (⌘K)"
          >
            <Search className="w-3.5 h-3.5 text-[#6F6F6F]" />
            <span className="text-xs font-inter">Search topics</span>
            <kbd className="text-[10px] font-mono bg-white px-1.5 py-0.2 rounded border border-[#E0E0E0] text-[#888]">
              ⌘K
            </kbd>
          </button>

          <button
            onClick={() => handleNavClick('curriculum')}
            className="rounded-full px-5 py-2 text-xs font-medium bg-[#000000] text-[#FFFFFF] hover:bg-[#222222] transition-all"
          >
            Explore 135 Topics
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={onOpenSearch}
            className="p-2 text-[#6F6F6F] hover:text-[#000000]"
            aria-label="Open search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#000000]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#EAEAEA] px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="w-full text-left py-2 text-sm font-inter text-[#6F6F6F] hover:text-[#000000]"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-[#EAEAEA]">
            <button
              onClick={() => handleNavClick('curriculum')}
              className="w-full rounded-full py-2.5 text-center text-sm font-medium bg-[#000000] text-[#FFFFFF]"
            >
              Explore 135 Topics
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
