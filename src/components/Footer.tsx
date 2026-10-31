import React from 'react';
import type { EditorialPhoto } from '../data/photography';

interface FooterProps {
  backgroundPhoto: EditorialPhoto;
  onNavigate: (route: string) => void;
  onOpenSearch: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, backgroundPhoto }) => {
  return (
    <footer className="bg-white text-[#102A43] border-t border-[#EAEAEA] mt-20 py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-inter text-[#6F6F6F]">
        <div className="flex flex-wrap items-center gap-6">
          <span className="font-instrument text-2xl font-bold tracking-tight text-[#000000]">
            ATLAS
          </span>
          <nav className="flex items-center gap-5">
            <button onClick={() => onNavigate('home')} className="hover:text-[#000000] transition-colors">
              Home
            </button>
            <button onClick={() => onNavigate('curriculum')} className="hover:text-[#000000] transition-colors">
              Curriculum
            </button>
            <button onClick={() => onNavigate('atlas')} className="hover:text-[#000000] transition-colors">
              Atlas
            </button>
            <button onClick={() => onNavigate('lab')} className="hover:text-[#000000] transition-colors">
              Visual Lab
            </button>
            <button onClick={() => onNavigate('dashboard')} className="hover:text-[#000000] transition-colors">
              Dashboard
            </button>
          </nav>
        </div>

        <div className="text-right text-[#6F6F6F]">
          © ATLAS Geography Platform. Designed for Elena
          <p className="mt-2"><a href="https://www.nationalgeographic.com/photography" target="_blank" rel="noreferrer" className="underline underline-offset-4">Photography: National Geographic</a></p>
          <p className="mt-2"><a href={backgroundPhoto.source} title={backgroundPhoto.title} target="_blank" rel="noreferrer" className="underline underline-offset-4">Background photography ↗</a></p>
          <p className="mt-1 text-[10px]">Hak foto milik pemegang hak masing-masing. ATLAS tidak berafiliasi dengan National Geographic.</p>
        </div>
      </div>
    </footer>
  );
};
