import { EditorialPhoto } from './EditorialPhoto';
import { getTopicPhoto, getCategoryPhoto } from '../data/photography';
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ChevronRight, 
  CheckCircle2, 
  Bookmark, 
  BookmarkCheck, 
  Layers, 
  BookOpen, 
  ExternalLink 
} from 'lucide-react';
import { categories, categoryMap } from '../data/categories';
import { allTopics } from '../data/topics';
import { 
  getCompletedTopics, 
  getBookmarkedTopics, 
  toggleBookmark, 
  toggleCompleted, 
  getQuizScore 
} from '../utils/storage';

interface CategoryViewProps {
  categoryId: string;
  onSelectTopic: (topicId: string) => void;
  onSelectCategory: (categoryId: string) => void;
  onBackToCurriculum: () => void;
}

export const CategoryView: React.FC<CategoryViewProps> = ({
  categoryId,
  onSelectTopic,
  onSelectCategory,
  onBackToCurriculum
}) => {
  const category = categoryMap.get(categoryId) || categories[0];
  const [completedList, setCompletedList] = useState<string[]>([]);
  const [bookmarkedList, setBookmarkedList] = useState<string[]>([]);

  useEffect(() => {
    const sync = () => {
      setCompletedList(getCompletedTopics());
      setBookmarkedList(getBookmarkedTopics());
    };
    sync();
    window.addEventListener('atlas_storage_update', sync);
    return () => window.removeEventListener('atlas_storage_update', sync);
  }, []);

  const topics = allTopics
    .filter((t) => t.categoryId === category.id)
    .sort((a, b) => a.number - b.number);

  const completedInCat = topics.filter((t) => completedList.includes(t.id)).length;
  const progressPercent = Math.round((completedInCat / category.topicCount) * 100);

  // Find next/prev category
  const currentIdx = categories.findIndex((c) => c.id === category.id);
  const prevCat = currentIdx > 0 ? categories[currentIdx - 1] : null;
  const nextCat = currentIdx < categories.length - 1 ? categories[currentIdx + 1] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <EditorialPhoto photo={getCategoryPhoto(category.id)} priority />
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBackToCurriculum}
          className="inline-flex items-center gap-1.5 text-xs text-[#245C45] hover:text-[#1D4A37] font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Categories</span>
        </button>

        <div className="flex items-center gap-3">
          {prevCat && (
            <button
              onClick={() => onSelectCategory(prevCat.id)}
              className="text-xs text-[#627D98] hover:text-[#102A43] font-medium"
            >
              ← Cat {prevCat.code}: {prevCat.name}
            </button>
          )}
          {nextCat && (
            <button
              onClick={() => onSelectCategory(nextCat.id)}
              className="text-xs text-[#627D98] hover:text-[#102A43] font-medium"
            >
              Cat {nextCat.code}: {nextCat.name} →
            </button>
          )}
        </div>
      </div>

      {/* Category Hero Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D9E2EC] shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#F0F4F8]">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2">
              <span 
                className="w-3 h-3 rounded-full inline-block" 
                style={{ backgroundColor: category.color.primary }} 
              />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#245C45]">
                CATEGORY {category.code} · TOPICS #{category.startNumber}–#{category.endNumber}
              </span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#102A43]">
              {category.name}
            </h1>
            <p className="text-sm text-[#829AB1] italic font-light">
              {category.englishName}
            </p>
            <p className="text-sm text-[#486581] leading-relaxed pt-2">
              {category.description}
            </p>
          </div>

          {/* Category Progress Stats Box */}
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#D9E2EC] min-w-[220px]">
            <div className="flex items-center justify-between text-xs font-mono text-[#627D98] mb-1">
              <span>Category Mastery</span>
              <span className="font-bold text-[#102A43]">{progressPercent}%</span>
            </div>
            <div className="w-full h-2 bg-[#E2E8F0] rounded-full overflow-hidden mb-2">
              <div 
                className="h-full bg-[#245C45] transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-[11px] text-[#627D98]">
              {completedInCat} of {category.topicCount} topics completed
            </p>
          </div>
        </div>

        {/* Topics List in Category */}
        <div className="mt-8 space-y-4">
          <h2 className="font-editorial text-xl font-bold text-[#102A43]">
            Syllabus Topics in Category {category.code}
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {topics.map((topic) => {
              const isCompleted = completedList.includes(topic.id);
              const isBookmarked = bookmarkedList.includes(topic.id);
              const score = getQuizScore(topic.id);

              return (
                <div
                  key={topic.id}
                  onClick={() => onSelectTopic(topic.id)}
                  className={`bg-[#FAFAF7] hover:bg-white rounded-xl p-5 border transition-all cursor-pointer group flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                    isCompleted ? 'border-[#245C45]/40' : 'border-[#D9E2EC] hover:border-[#245C45]'
                  }`}
                >
                  <div className="md:w-52 shrink-0"><EditorialPhoto photo={getTopicPhoto(topic, 'category')} compact /></div>
                  <div className="flex-1 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#E2E8F0] text-[#102A43]">
                        Topic #{topic.number}
                      </span>
                      <span className="text-[11px] font-mono text-[#627D98] uppercase">
                        {topic.difficulty}
                      </span>
                      {score !== null && (
                        <span className="text-[11px] font-mono text-[#245C45] font-semibold">
                          Score: {score}%
                        </span>
                      )}
                    </div>

                    <h3 className="font-editorial text-lg font-bold text-[#102A43] group-hover:text-[#245C45] transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-xs text-[#829AB1] italic">
                      {topic.englishTitle}
                    </p>
                    <p className="text-xs text-[#486581] line-clamp-2 pt-0.5">
                      {topic.description}
                    </p>
                  </div>

                  {/* Actions & Navigation */}
                  <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[#E2E8F0]">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark(topic.id);
                      }}
                      className={`p-2 rounded-lg hover:bg-white transition-colors ${
                        isBookmarked ? 'text-[#E5B94B]' : 'text-[#829AB1] hover:text-[#102A43]'
                      }`}
                      title={isBookmarked ? 'Bookmarked' : 'Add bookmark'}
                    >
                      {isBookmarked ? (
                        <BookmarkCheck className="w-5 h-5 fill-[#E5B94B]" />
                      ) : (
                        <Bookmark className="w-5 h-5" />
                      )}
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCompleted(topic.id);
                      }}
                      className={`p-2 rounded-lg hover:bg-white transition-colors ${
                        isCompleted ? 'text-[#245C45]' : 'text-[#829AB1] hover:text-[#102A43]'
                      }`}
                      title={isCompleted ? 'Completed' : 'Mark complete'}
                    >
                      <CheckCircle2 className={`w-5 h-5 ${isCompleted ? 'fill-[#245C45] text-white' : ''}`} />
                    </button>

                    <div className="pl-2 border-l border-[#D9E2EC] flex items-center text-xs font-semibold text-[#245C45] group-hover:translate-x-1 transition-transform">
                      <span className="hidden sm:inline mr-1">Study</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
