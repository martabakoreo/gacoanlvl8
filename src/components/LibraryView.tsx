import { EditorialPhoto } from './EditorialPhoto';
import { getTopicPhoto, getCategoryPhoto } from '../data/photography';
import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  SlidersHorizontal, 
  CheckCircle2, 
  Bookmark, 
  BookmarkCheck, 
  ArrowUpDown, 
  BookOpen, 
  HelpCircle,
  Hash,
  ExternalLink
} from 'lucide-react';
import { allTopics } from '../data/topics';
import { categories } from '../data/categories';
import { Topic, DifficultyLevel } from '../types/geography';
import { 
  getCompletedTopics, 
  getBookmarkedTopics, 
  toggleBookmark, 
  toggleCompleted,
  getQuizScore
} from '../utils/storage';

interface LibraryViewProps {
  onSelectTopic: (topicId: string) => void;
  onSelectCategory: (categoryId: string) => void;
  initialCategoryFilter?: string;
}

export const LibraryView: React.FC<LibraryViewProps> = ({
  onSelectTopic,
  onSelectCategory,
  initialCategoryFilter
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategoryFilter || 'all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all'); // all, completed, incomplete, bookmarked
  const [sortBy, setSortBy] = useState<'number-asc' | 'number-desc' | 'title-asc' | 'difficulty'>('number-asc');

  const [completedList, setCompletedList] = useState<string[]>([]);
  const [bookmarkedList, setBookmarkedList] = useState<string[]>([]);

  useEffect(() => {
    const syncState = () => {
      setCompletedList(getCompletedTopics());
      setBookmarkedList(getBookmarkedTopics());
    };
    syncState();
    window.addEventListener('atlas_storage_update', syncState);
    return () => window.removeEventListener('atlas_storage_update', syncState);
  }, []);

  useEffect(() => {
    if (initialCategoryFilter) {
      setSelectedCategory(initialCategoryFilter);
    }
  }, [initialCategoryFilter]);

  // Filter & sort logic
  const filteredTopics = useMemo(() => {
    return allTopics.filter((topic) => {
      // Category filter
      if (selectedCategory !== 'all' && topic.categoryId !== selectedCategory) {
        return false;
      }

      // Difficulty filter
      if (selectedDifficulty !== 'all' && topic.difficulty !== selectedDifficulty) {
        return false;
      }

      // Status filter
      if (selectedStatus === 'completed' && !completedList.includes(topic.id)) {
        return false;
      }
      if (selectedStatus === 'incomplete' && completedList.includes(topic.id)) {
        return false;
      }
      if (selectedStatus === 'bookmarked' && !bookmarkedList.includes(topic.id)) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = topic.title.toLowerCase().includes(q);
        const matchesEnglish = topic.englishTitle.toLowerCase().includes(q);
        const matchesDesc = topic.description.toLowerCase().includes(q);
        const matchesNumber = topic.number.toString().includes(q);
        const matchesKeywords = topic.keywords.some((k) => k.toLowerCase().includes(q));

        if (!matchesTitle && !matchesEnglish && !matchesDesc && !matchesNumber && !matchesKeywords) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'number-asc') return a.number - b.number;
      if (sortBy === 'number-desc') return b.number - a.number;
      if (sortBy === 'title-asc') return a.title.localeCompare(b.title);
      if (sortBy === 'difficulty') {
        const diffWeight: Record<string, number> = { Beginner: 1, Basic: 1, Intermediate: 2, Advanced: 3 };
        return (diffWeight[a.difficulty] || 2) - (diffWeight[b.difficulty] || 2);
      }
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty, selectedStatus, sortBy, completedList, bookmarkedList]);

  const handleToggleBookmark = (e: React.MouseEvent, topicId: string) => {
    e.stopPropagation();
    toggleBookmark(topicId);
  };

  const handleToggleComplete = (e: React.MouseEvent, topicId: string) => {
    e.stopPropagation();
    toggleCompleted(topicId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header & Subtitle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#D9E2EC]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#245C45] font-semibold mb-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Complete Curriculum Archive · 135 Topics</span>
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#102A43]">
            Curriculum Encyclopedia
          </h1>
          <p className="text-sm text-[#486581] mt-1 max-w-2xl font-light">
            Browse all 135 topics across physical geography, human systems, regional studies, and geospatial technologies. Filter by syllabus category or study status.
          </p>
        </div>

        {/* Quick Stat Counter */}
        <div className="flex items-center gap-4 bg-white px-4 py-2.5 rounded-lg border border-[#D9E2EC] shadow-sm text-xs font-mono">
          <div>
            <span className="text-[#829AB1] uppercase">Filtered: </span>
            <strong className="text-[#102A43] font-bold">{filteredTopics.length}</strong> / 135
          </div>
          <div className="border-l border-[#D9E2EC] pl-4">
            <span className="text-[#829AB1] uppercase">Mastered: </span>
            <strong className="text-[#245C45] font-bold">{completedList.length}</strong>
          </div>
        </div>
      </div>

      {/* Control Bar: Search + Filter Dropdowns */}
      <div className="bg-white p-4 rounded-xl border border-[#D9E2EC] shadow-sm space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#829AB1] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search title, keyword, #..."
              className="w-full pl-9 pr-3 py-2 bg-[#F8FAFC] border border-[#D9E2EC] rounded-lg text-xs text-[#102A43] placeholder-[#829AB1] focus:outline-none focus:border-[#245C45]"
            />
          </div>

          {/* Category Dropdown */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#D9E2EC] rounded-lg text-xs text-[#102A43] focus:outline-none focus:border-[#245C45] truncate"
            >
              <option value="all">All Categories (A–S)</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.code}. {c.name} ({c.topicCount} topics)
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Dropdown */}
          <div className="relative">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#D9E2EC] rounded-lg text-xs text-[#102A43] focus:outline-none focus:border-[#245C45]"
            >
              <option value="all">All Difficulties</option>
              <option value="Basic">Basic (Dasar)</option>
              <option value="Intermediate">Intermediate (Menengah)</option>
              <option value="Advanced">Advanced (Lanjut)</option>
            </select>
          </div>

          {/* Status & Sort Options */}
          <div className="flex gap-2">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-1/2 px-2.5 py-2 bg-[#F8FAFC] border border-[#D9E2EC] rounded-lg text-xs text-[#102A43] focus:outline-none focus:border-[#245C45]"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed ({completedList.length})</option>
              <option value="incomplete">Incomplete</option>
              <option value="bookmarked">Bookmarked ({bookmarkedList.length})</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-1/2 px-2.5 py-2 bg-[#F8FAFC] border border-[#D9E2EC] rounded-lg text-xs text-[#102A43] focus:outline-none focus:border-[#245C45]"
            >
              <option value="number-asc">Topic # (1→135)</option>
              <option value="number-desc">Topic # (135→1)</option>
              <option value="title-asc">Title (A–Z)</option>
              <option value="difficulty">Difficulty</option>
            </select>
          </div>
        </div>

        {/* Active Filter Reset */}
        {(searchQuery || selectedCategory !== 'all' || selectedDifficulty !== 'all' || selectedStatus !== 'all') && (
          <div className="flex items-center justify-between pt-2 border-t border-[#F0F4F8] text-xs">
            <span className="text-[#627D98]">Filters applied</span>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedDifficulty('all');
                setSelectedStatus('all');
              }}
              className="text-[#245C45] hover:underline font-semibold"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Topic Cards Grid */}
      {filteredTopics.length === 0 ? (
        <div className="bg-white rounded-xl p-12 text-center border border-[#D9E2EC]">
          <BookOpen className="w-10 h-10 text-[#829AB1] mx-auto mb-3 opacity-50" />
          <h3 className="font-editorial text-lg font-bold text-[#102A43]">No Topics Found</h3>
          <p className="text-xs text-[#627D98] mt-1 max-w-md mx-auto">
            Try loosening your filters or resetting your search query to explore the 135 topics.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTopics.map((topic) => {
            const cat = categories.find((c) => c.id === topic.categoryId);
            const isCompleted = completedList.includes(topic.id);
            const isBookmarked = bookmarkedList.includes(topic.id);
            const quizScore = getQuizScore(topic.id);

            return (
              <div
                key={topic.id}
                onClick={() => onSelectTopic(topic.id)}
                className={`bg-white rounded-xl p-5 border transition-all cursor-pointer group flex flex-col justify-between shadow-sm hover:shadow-md ${
                  isCompleted 
                    ? 'border-[#245C45]/40 hover:border-[#245C45]' 
                    : 'border-[#D9E2EC] hover:border-[#102A43]'
                }`}
              >
                <div>
                  <EditorialPhoto photo={getTopicPhoto(topic)} compact />
                  {/* Top Unboxed Metadata Line */}
                  <div className="flex items-center justify-between text-xs text-[#627D98] mb-2 font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-[#102A43] bg-[#F0F4F8] px-1.5 py-0.5 rounded">
                        #{topic.number}
                      </span>
                      {cat && (
                        <span 
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectCategory(cat.id);
                          }}
                          className="hover:text-[#245C45] cursor-pointer"
                        >
                          {cat.code} · {cat.name}
                        </span>
                      )}
                    </div>
                    
                    {/* Action toggles: Bookmark & Complete */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={(e) => handleToggleBookmark(e, topic.id)}
                        className={`p-1 rounded hover:bg-[#F0F4F8] transition-colors ${
                          isBookmarked ? 'text-[#E5B94B]' : 'text-[#9FB3C8] hover:text-[#627D98]'
                        }`}
                        title={isBookmarked ? 'Remove bookmark' : 'Bookmark topic'}
                      >
                        {isBookmarked ? (
                          <BookmarkCheck className="w-4 h-4 fill-[#E5B94B]" />
                        ) : (
                          <Bookmark className="w-4 h-4" />
                        )}
                      </button>
                      <button
                        onClick={(e) => handleToggleComplete(e, topic.id)}
                        className={`p-1 rounded hover:bg-[#F0F4F8] transition-colors ${
                          isCompleted ? 'text-[#245C45]' : 'text-[#9FB3C8] hover:text-[#627D98]'
                        }`}
                        title={isCompleted ? 'Mark as uncompleted' : 'Mark as completed'}
                      >
                        <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'fill-[#245C45] text-white' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-editorial text-lg font-bold text-[#102A43] group-hover:text-[#245C45] transition-colors leading-snug">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-[#627D98] italic mt-0.5 mb-2 line-clamp-1">
                    {topic.englishTitle}
                  </p>

                  {/* Indonesian Description */}
                  <p className="text-xs text-[#486581] line-clamp-3 leading-relaxed mb-4">
                    {topic.description}
                  </p>

                  {/* Keywords Preview */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {topic.keywords.slice(0, 3).map((kw, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-1.5 py-0.5 bg-[#F0F4F8] text-[#486581] rounded"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Difficulty, Quiz Score, Read Link */}
                <div className="pt-3 border-t border-[#F0F4F8] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-[#F7F6F2] text-[#627D98]">
                      {topic.difficulty}
                    </span>
                    {quizScore !== null && (
                      <span className="font-mono text-[10px] text-[#245C45] font-semibold">
                        Quiz: {quizScore}%
                      </span>
                    )}
                  </div>

                  <span className="text-[#245C45] font-medium text-xs flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Read Topic</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
