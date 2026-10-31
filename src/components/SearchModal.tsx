import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, ChevronRight, Hash } from 'lucide-react';
import { allTopics } from '../data/topics';
import { categories } from '../data/categories';
import { Topic } from '../types/geography';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTopic: (topicId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectTopic }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
      setSelectedCategory('all');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Filter topics
  const filteredTopics = allTopics.filter((topic) => {
    const matchesCat = selectedCategory === 'all' || topic.categoryId === selectedCategory;
    if (!matchesCat) return false;

    if (!query.trim()) return true;
    const q = query.toLowerCase();

    return (
      topic.title.toLowerCase().includes(q) ||
      topic.englishTitle.toLowerCase().includes(q) ||
      topic.description.toLowerCase().includes(q) ||
      topic.number.toString().includes(q) ||
      topic.keywords.some((kw) => kw.toLowerCase().includes(q))
    );
  }).slice(0, 15); // Show top 15 results for performance

  const handleKeyDownInInput = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filteredTopics.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter' && filteredTopics[selectedIndex]) {
      e.preventDefault();
      onSelectTopic(filteredTopics[selectedIndex].id);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#102A43]/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl bg-[#FAFAF7] rounded-xl shadow-2xl border border-[#D9E2EC] overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#D9E2EC] bg-white gap-3">
          <Search className="w-5 h-5 text-[#627D98]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDownInInput}
            placeholder="Search all 135 topics by title, number (#42), or keyword..."
            className="flex-1 bg-transparent text-sm sm:text-base text-[#102A43] placeholder-[#829AB1] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#829AB1] hover:text-[#102A43] rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs text-[#627D98] hover:text-[#102A43] font-mono bg-[#F0F4F8] hover:bg-[#D9E2EC] rounded border border-[#D9E2EC]"
          >
            ESC
          </button>
        </div>

        {/* Quick Category Filter Pills */}
        <div className="px-4 py-2 border-b border-[#E2E8F0] bg-[#F7F6F2] flex items-center gap-1.5 overflow-x-auto text-xs whitespace-nowrap">
          <span className="text-[#829AB1] font-mono text-[11px] uppercase mr-1">Category:</span>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-2.5 py-1 rounded text-xs transition-colors ${
              selectedCategory === 'all'
                ? 'bg-[#102A43] text-white font-medium'
                : 'text-[#486581] hover:bg-[#E2E8F0]'
            }`}
          >
            All (135)
          </button>
          {categories.slice(0, 8).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-2 py-1 rounded text-xs transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-[#245C45] text-white font-medium'
                  : 'text-[#486581] hover:bg-[#E2E8F0]'
              }`}
            >
              {cat.code}. {cat.name}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="overflow-y-auto flex-1 p-2 space-y-1">
          {filteredTopics.length === 0 ? (
            <div className="py-12 text-center text-[#829AB1]">
              <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-40 text-[#486581]" />
              <p className="text-sm font-medium">No topics found matching "{query}"</p>
              <p className="text-xs text-[#9FB3C8] mt-1">Try searching for keywords like "tectonics", "el nino", "karst", or "sig"</p>
            </div>
          ) : (
            filteredTopics.map((topic: Topic, idx: number) => {
              const isSelected = idx === selectedIndex;
              const cat = categories.find((c) => c.id === topic.categoryId);
              return (
                <div
                  key={topic.id}
                  onClick={() => {
                    onSelectTopic(topic.id);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3 rounded-lg cursor-pointer transition-all flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-[#102A43] text-white shadow-sm'
                      : 'hover:bg-[#EAE6DF] text-[#102A43]'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`inline-flex items-center gap-0.5 font-mono text-xs px-1.5 py-0.2 rounded font-semibold ${
                        isSelected ? 'bg-[#243B53] text-[#E5B94B]' : 'bg-[#D9E2EC] text-[#102A43]'
                      }`}>
                        <Hash className="w-3 h-3 inline -mr-0.5" />
                        {topic.number}
                      </span>
                      {cat && (
                        <span className={`text-[11px] font-medium truncate ${
                          isSelected ? 'text-[#BCCCDC]' : 'text-[#627D98]'
                        }`}>
                          {cat.code} · {cat.name}
                        </span>
                      )}
                      <span className={`text-[10px] ml-auto font-mono px-1.5 py-0.5 rounded ${
                        isSelected ? 'bg-[#245C45] text-white' : 'bg-[#E2E8F0] text-[#486581]'
                      }`}>
                        {topic.difficulty}
                      </span>
                    </div>

                    <h4 className="font-editorial text-sm font-semibold truncate leading-snug">
                      {topic.title}
                    </h4>
                    <p className={`text-xs italic truncate mt-0.5 ${
                      isSelected ? 'text-[#9FB3C8]' : 'text-[#627D98]'
                    }`}>
                      {topic.englishTitle}
                    </p>
                    <p className={`text-xs line-clamp-1 mt-1 text-ellipsis ${
                      isSelected ? 'text-[#D9E2EC]' : 'text-[#486581]'
                    }`}>
                      {topic.description}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 mt-2 shrink-0 ${
                    isSelected ? 'text-[#E5B94B]' : 'text-[#9FB3C8]'
                  }`} />
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 border-t border-[#D9E2EC] bg-[#F7F6F2] flex items-center justify-between text-[11px] text-[#627D98]">
          <div className="flex items-center gap-3">
            <span>↑↓ to navigate</span>
            <span>↵ to select</span>
            <span>esc to dismiss</span>
          </div>
          <span className="font-mono text-[#829AB1]">{filteredTopics.length} of 135 topics displayed</span>
        </div>
      </div>
    </div>
  );
};
