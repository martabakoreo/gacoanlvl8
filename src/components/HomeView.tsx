import { HERO_PHOTOS, getCategoryPhoto, getTopicPhoto, SPOTLIGHT_PHOTO } from '../data/photography';
import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Map as MapIcon, 
  FlaskConical, 
  ArrowRight, 
  CheckCircle2, 
  BookMarked, 
  Flame, 
  Globe2, 
  Layers, 
  Mountain, 
  CloudSun, 
  TreePine, 
  Users, 
  Building2, 
  Satellite, 
  Sparkles, 
  BarChart3, 
  Camera,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { categories } from '../data/categories';
import { allTopics, topicMap } from '../data/topics';
import { getCompletedTopics, getBookmarkedTopics, getStudyStreak } from '../utils/storage';

interface HomeViewProps {
  onNavigate: (route: string) => void;
  onSelectTopic: (topicId: string) => void;
  onSelectCategory: (categoryId: string) => void;
  onOpenSearch: () => void;
}

const HERO_NATURE_PHOTOS = HERO_PHOTOS.map(photo => ({ url: photo.src, title: photo.title, location: 'Photography · National Geographic', source: photo.source }));
const CATEGORY_BACKGROUNDS = Object.fromEntries(categories.map(category => [category.id, getCategoryPhoto(category.id, 'home').src]));

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectTopic,
  onSelectCategory,
  onOpenSearch
}) => {
  const completedIds = getCompletedTopics();
  const bookmarkedIds = getBookmarkedTopics();
  const streak = getStudyStreak();

  // Active hero carousel photo index
  const [photoIndex, setPhotoIndex] = useState(0);

  // Auto-rotate background every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % HERO_NATURE_PHOTOS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const featuredTopicIds = [
    'teori-tektonik-lempeng',
    'vulkanisme',
    'klasifikasi-iklim',
    'siklus-hidrologi',
    'garis-wallace-weber-dan-lydekker',
    'teori-struktur-kota-burgess-hoyt-harris',
  ];

  const featuredTopics = featuredTopicIds.map((id) => topicMap.get(id)).filter(Boolean);

  const getCategoryIcon = (code: string) => {
    switch (code) {
      case 'A': return Compass;
      case 'B': return Layers;
      case 'C': return Mountain;
      case 'D': return CloudSun;
      case 'E': return Globe2;
      case 'F': return TreePine;
      case 'G': return TreePine;
      case 'H': return Mountain;
      case 'I': return TreePine;
      case 'J': return Users;
      case 'K': return Flame;
      case 'L': return Globe2;
      case 'M': return Building2;
      case 'N': return Layers;
      case 'O': return Globe2;
      case 'P': return BarChart3;
      case 'Q': return TreePine;
      case 'R': return Satellite;
      case 'S': return Sparkles;
      default: return Globe2;
    }
  };

  return (
    <div className="home-photo-page relative min-h-screen space-y-16 pb-20">
      {/* =========================================================================
          FULL-SCREEN MINIMALIST HERO SECTION WITH NATURE PHOTOGRAPHY CAROUSEL
          ========================================================================= */}
      <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0A1118]">
        {/* Fullscreen Nature Landscape Carousel (Zero Watermarks) */}
        {HERO_NATURE_PHOTOS.map((photo, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === photoIndex ? 'opacity-60 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{
              backgroundImage: `url(${photo.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: idx === photoIndex ? 'scale(1)' : 'scale(1.04)',
              transition: 'opacity 1000ms ease-in-out, transform 7000ms ease-out'
            }}
          />
        ))}

        {/* Minimalist Dark Gradient Overlays for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/60 pointer-events-none" />

        {/* Top Spacer for Clean Spacing */}
        <div className="pt-16 sm:pt-20" />

        {/* Main Hero Foreground Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 text-center text-white flex flex-col items-center justify-center my-auto">
          {/* Subtle Personal Greeting */}
          <div className="font-instrument text-2xl sm:text-3xl text-[#E5B94B] tracking-wide mb-3 animate-fade-rise italic">
            Hi, Elena
          </div>

          {/* Headline: Carpe Diem. */}
          <h1 className="font-instrument text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal leading-[0.95] tracking-tight text-white max-w-5xl animate-fade-rise">
            Carpe Diem.
          </h1>

          {/* Minimalist Subtitle */}
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mt-6 leading-relaxed font-inter font-light animate-fade-rise-delay">
            An interactive encyclopedia exploring 135 topics across physical geography, lithospheric dynamics, atmospheric circulation, and spatial analysis.
          </p>

          {/* Three Modern Call-To-Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-10 animate-fade-rise-delay-2">
            <button
              onClick={() => onNavigate('curriculum')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#102A43] hover:bg-[#F5F1E8] font-inter font-medium text-xs sm:text-sm transition-all shadow-md hover:scale-[1.02]"
            >
              <span>Explore All Topics</span>
              <span className="text-[#245C45] font-bold">→</span>
            </button>

            <button
              onClick={() => onNavigate('lab')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-black/45 hover:bg-black/65 text-white border border-white/30 backdrop-blur-md font-inter font-medium text-xs sm:text-sm transition-all shadow-md hover:scale-[1.02]"
            >
              <FlaskConical className="w-4 h-4 text-[#E5B94B]" />
              <span>Launch Visual Lab</span>
              <span className="text-[#E5B94B] font-bold">→</span>
            </button>

            <button
              onClick={() => onNavigate('atlas')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-black/45 hover:bg-black/65 text-white border border-white/30 backdrop-blur-md font-inter font-medium text-xs sm:text-sm transition-all shadow-md hover:scale-[1.02]"
            >
              <MapIcon className="w-4 h-4 text-[#73A5C6]" />
              <span>Interactive Atlas</span>
              <span className="text-[#73A5C6] font-bold">→</span>
            </button>
          </div>
        </div>

        {/* Hero Bottom Bar: Photo Credit + Copyright Element in the Hero */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 pb-8 pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between text-xs font-inter text-white/70 gap-4">
          <div className="flex items-center gap-2 text-left truncate">
            <Camera className="w-3.5 h-3.5 text-[#E5B94B] shrink-0" />
            <span className="truncate">
              <a href={HERO_NATURE_PHOTOS[photoIndex].source} target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">{HERO_NATURE_PHOTOS[photoIndex].title} · <span className="text-white/70">{HERO_NATURE_PHOTOS[photoIndex].location} ↗</span></a>
            </span>
          </div>

          {/* Carousel Dot Indicators */}
          <div className="flex items-center gap-1.5 shrink-0">
            {HERO_NATURE_PHOTOS.map((_, i) => (
              <button
                key={i}
                onClick={() => setPhotoIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === photoIndex ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`View scene ${i + 1}`}
              />
            ))}
          </div>

          {/* Requested Hero Footer Copyright Element */}
          <div className="text-right text-white/70 font-inter text-xs">
            Copyright © ATLAS Geography Platform. Designed for Elena
          </div>
        </div>
      </section>

      {/* Continue Learning Banner */}
      {(completedIds.length > 0 || bookmarkedIds.length > 0) && (
        <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          <div className="bg-white rounded-2xl p-6 border border-[#EAEAEA] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E5B94B]/15 text-[#806247] flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6 text-[#245C45]" />
              </div>
              <div>
                <h3 className="font-instrument text-2xl font-bold text-[#000000]">
                  Study Progress
                </h3>
                <p className="text-xs text-[#6F6F6F] font-inter mt-0.5">
                  You have completed <strong className="text-[#000000]">{completedIds.length}</strong> of 135 topics ({Math.round((completedIds.length / 135) * 100)}%) with a <strong className="text-[#000000]">{streak} day streak</strong>.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('dashboard')}
                className="px-4 py-2 text-xs font-inter font-medium text-[#000000] bg-[#F7F7F7] hover:bg-[#EFEFEF] rounded-full transition-colors border border-[#E5E5E5]"
              >
                View Analytics
              </button>
              {bookmarkedIds.length > 0 && (
                <button
                  onClick={() => onSelectTopic(bookmarkedIds[0])}
                  className="px-5 py-2 text-xs font-inter font-medium text-white bg-[#000000] hover:bg-[#222222] rounded-full transition-colors"
                >
                  Continue Bookmarked Topic
                </button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Curated Highlights Section with Aesthetic Topic Background Images */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#EAEAEA]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#245C45] font-semibold">
              Curated Topics
            </span>
            <h2 className="font-instrument text-3xl sm:text-4xl text-[#000000] mt-1">
              Essential Physical & Spatial Phenomena
            </h2>
          </div>
          <button
            onClick={() => onNavigate('curriculum')}
            className="text-xs font-inter text-[#000000] hover:underline font-semibold flex items-center gap-1.5 mt-2 sm:mt-0"
          >
            <span>Browse Complete Curriculum (135)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTopics.map((topic) => {
            if (!topic) return null;
            const cat = categories.find((c) => c.id === topic.categoryId);
            const isCompleted = completedIds.includes(topic.id);
            const isBookmarked = bookmarkedIds.includes(topic.id);
            const topicPhoto = getTopicPhoto(topic, 'home');
            const bgImg = topicPhoto.src;

            return (
              <div
                key={topic.id}
                onClick={() => onSelectTopic(topic.id)}
                className="photographic-card group relative overflow-hidden rounded-2xl p-6 border border-[#EAEAEA] hover:border-[#000000] shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                {/* Connected Material Background Image with subtle transparency */}
                {bgImg && (
                  <div 
                    className="card-landscape absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage: `url(${bgImg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                )}

                <div className="relative z-10">
                  <div className="flex items-center justify-between text-xs text-[#6F6F6F] mb-3 font-mono">
                    <span className="font-bold text-[#000000]">
                      #{topic.number} · {cat?.code}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {isCompleted && (
                        <span className="text-[#245C45] flex items-center gap-0.5 text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Done
                        </span>
                      )}
                      {isBookmarked && (
                        <BookMarked className="w-3.5 h-3.5 text-[#E5B94B]" />
                      )}
                      <span className="px-1.5 py-0.5 bg-[#F4F4F4]/80 backdrop-blur-xs rounded text-[10px]">
                        {topic.difficulty}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-instrument text-2xl font-bold text-[#000000] group-hover:text-[#245C45] transition-colors leading-tight">
                    {topic.title}
                  </h3>
                  <p className="text-xs font-inter text-[#888888] italic mt-1 mb-3">
                    {topic.englishTitle}
                  </p>
                  <p className="text-xs font-inter text-[#555555] line-clamp-3 leading-relaxed mb-4">
                    {topic.description}
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-[#F5F5F5] flex items-center justify-between text-xs font-inter text-[#000000] font-medium group-hover:translate-x-1 transition-transform">
                  <span>Start Reading</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
                <a className="photo-credit relative z-10" href={topicPhoto.source} target="_blank" rel="noreferrer" onClick={event => event.stopPropagation()}>Foto: National Geographic ↗</a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Visual Lab Spotlight Banner */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="relative rounded-3xl bg-[#102A43] p-8 sm:p-12 text-[#FFFFFF] shadow-xl overflow-hidden">
          {/* Nature Landscape Backdrop for Lab */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              backgroundImage: `url(${SPOTLIGHT_PHOTO.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />

          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-mono uppercase tracking-wider backdrop-blur-xs">
              <FlaskConical className="w-3.5 h-3.5 text-[#E5B94B]" />
              <span>Interactive Simulations</span>
            </div>
            <h3 className="font-instrument text-3xl sm:text-5xl text-white">
              Explore 12 Interactive Visual Laboratories
            </h3>
            <p className="text-xs sm:text-sm text-[#D9E2EC] leading-relaxed font-inter font-light">
              Manipulate plate convergence velocities, calculate atmospheric lapse rates with Junghuhn's formula, simulate monsoon wind shifts, triangulate earthquake epicenters using the Laska equation, and inspect urban land use models in real time.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('lab')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFFFFF] text-[#102A43] font-inter font-medium text-xs sm:text-sm hover:scale-[1.03] transition-all shadow-md"
              >
                <span>Open Visual Laboratory</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 19 Categories Explorer Section with Aesthetic Photo for Each Category */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#EAEAEA]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#245C45] font-semibold">
              Curriculum Domains
            </span>
            <h2 className="font-instrument text-3xl sm:text-4xl text-[#000000] mt-1">
              Explore All 19 Categories (A–S)
            </h2>
          </div>
          <span className="text-xs font-mono text-[#888888]">
            135 continuous lessons · Topics 1 to 135
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {categories.map((cat) => {
            const Icon = getCategoryIcon(cat.code);
            const catTopics = allTopics.filter((t) => t.categoryId === cat.id);
            const catCompleted = catTopics.filter((t) => completedIds.includes(t.id)).length;
            const percent = Math.round((catCompleted / cat.topicCount) * 100);
            const catBg = CATEGORY_BACKGROUNDS[cat.id];

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="photographic-card group relative overflow-hidden rounded-2xl p-5 border border-[#EAEAEA] hover:border-[#000000] shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                {/* Specific Material Nature Background Photo with subtle transparency */}
                {catBg && (
                  <div 
                    className="card-landscape absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage: `url(${catBg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                )}

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-xs"
                      style={{ backgroundColor: cat.color.primary }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-[#888888] font-semibold">
                      #{cat.startNumber}–#{cat.endNumber}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#245C45] font-semibold mb-1">
                    <span>CATEGORY {cat.code}</span>
                    <span>·</span>
                    <span>{cat.topicCount} Topics</span>
                  </div>

                  <h4 className="font-instrument text-xl font-bold text-[#000000] group-hover:text-[#245C45] transition-colors leading-snug">
                    {cat.name}
                  </h4>
                  <p className="text-xs font-inter text-[#888888] italic mb-2 line-clamp-1">
                    {cat.englishName}
                  </p>
                  <p className="text-xs font-inter text-[#555555] line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                  <a className="photo-credit" href={getCategoryPhoto(cat.id, 'home').source} target="_blank" rel="noreferrer" onClick={event => event.stopPropagation()}>Foto: National Geographic ↗</a>
                </div>

                <div className="relative z-10 mt-5 pt-3 border-t border-[#F5F5F5]">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#6F6F6F] mb-1.5">
                    <span>Mastery</span>
                    <span>{catCompleted}/{cat.topicCount} ({percent}%)</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#F0F0F0] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#000000] transition-all duration-300"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
