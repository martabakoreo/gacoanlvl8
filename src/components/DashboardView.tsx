import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  CheckCircle2, 
  BookmarkCheck, 
  Flame, 
  Award, 
  BookOpen, 
  ChevronRight, 
  RotateCcw,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { categories } from '../data/categories';
import { allTopics, topicMap } from '../data/topics';
import { 
  getCompletedTopics, 
  getBookmarkedTopics, 
  getStudyStreak, 
  getAllQuizScores, 
  clearAllProgress 
} from '../utils/storage';

interface DashboardViewProps {
  onSelectTopic: (topicId: string) => void;
  onSelectCategory: (categoryId: string) => void;
  onNavigateToCurriculum: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  onSelectTopic,
  onSelectCategory,
  onNavigateToCurriculum
}) => {
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [streak, setStreak] = useState(1);
  const [quizScores, setQuizScores] = useState<Record<string, number>>({});

  const reloadData = () => {
    setCompletedIds(getCompletedTopics());
    setBookmarkedIds(getBookmarkedTopics());
    setStreak(getStudyStreak());
    setQuizScores(getAllQuizScores());
  };

  useEffect(() => {
    reloadData();
    window.addEventListener('atlas_storage_update', reloadData);
    return () => window.removeEventListener('atlas_storage_update', reloadData);
  }, []);

  const totalTopics = 135;
  const completedCount = completedIds.length;
  const percentCompleted = Math.round((completedCount / totalTopics) * 100);

  // Average quiz score
  const scoreValues = Object.values(quizScores);
  const avgQuizScore = scoreValues.length > 0
    ? Math.round(scoreValues.reduce((a, b) => a + b, 0) / scoreValues.length)
    : 0;

  // Bookmarked topics list
  const bookmarkedTopics = bookmarkedIds.map((id) => topicMap.get(id)).filter(Boolean);

  const handleResetProgress = () => {
    if (window.confirm('Apakah Anda yakin ingin mereset seluruh progres pembelajaran, bookmark, dan skor kuis?')) {
      clearAllProgress();
      reloadData();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#D9E2EC]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#245C45] font-semibold mb-1">
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Personal Learning Progress & Analytics</span>
          </div>
          <h1 className="font-editorial text-3xl font-bold text-[#102A43]">
            Study Dashboard
          </h1>
          <p className="text-xs text-[#486581] mt-0.5">
            Track your mastery across 135 curriculum topics, review quiz scores, and manage bookmarked lessons.
          </p>
        </div>

        <button
          onClick={handleResetProgress}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#C76D4B] hover:text-[#803E26] hover:bg-[#C76D4B]/10 rounded-lg border border-[#C76D4B]/30 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Progress</span>
        </button>
      </div>

      {/* Top 4 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Completed */}
        <div className="bg-white rounded-xl p-5 border border-[#D9E2EC] shadow-sm flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono uppercase text-[#829AB1] font-semibold">Total Completed</span>
            <div className="text-3xl font-editorial font-bold text-[#102A43] mt-1">
              {completedCount} <span className="text-sm font-mono text-[#829AB1]">/ {totalTopics}</span>
            </div>
            <p className="text-[11px] text-[#245C45] font-semibold mt-0.5">{percentCompleted}% Curriculum Mastered</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-[#245C45]/10 flex items-center justify-center text-[#245C45]">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        </div>

        {/* Card 2: Quiz Average */}
        <div className="bg-white rounded-xl p-5 border border-[#D9E2EC] shadow-sm flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono uppercase text-[#829AB1] font-semibold">Quiz Average</span>
            <div className="text-3xl font-editorial font-bold text-[#102A43] mt-1">
              {scoreValues.length > 0 ? `${avgQuizScore}%` : '—'}
            </div>
            <p className="text-[11px] text-[#627D98] mt-0.5">{scoreValues.length} Quizzes Attempted</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-[#E5B94B]/15 flex items-center justify-center text-[#806247]">
            <Award className="w-6 h-6 text-[#E5B94B]" />
          </div>
        </div>

        {/* Card 3: Study Streak */}
        <div className="bg-white rounded-xl p-5 border border-[#D9E2EC] shadow-sm flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono uppercase text-[#829AB1] font-semibold">Study Streak</span>
            <div className="text-3xl font-editorial font-bold text-[#102A43] mt-1">
              {streak} <span className="text-sm font-mono text-[#829AB1]">Hari</span>
            </div>
            <p className="text-[11px] text-[#C76D4B] font-semibold mt-0.5">Keep learning daily</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-[#C76D4B]/10 flex items-center justify-center text-[#C76D4B]">
            <Flame className="w-6 h-6" />
          </div>
        </div>

        {/* Card 4: Bookmarks */}
        <div className="bg-white rounded-xl p-5 border border-[#D9E2EC] shadow-sm flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono uppercase text-[#829AB1] font-semibold">Bookmarks</span>
            <div className="text-3xl font-editorial font-bold text-[#102A43] mt-1">
              {bookmarkedIds.length} <span className="text-sm font-mono text-[#829AB1]">Topik</span>
            </div>
            <p className="text-[11px] text-[#627D98] mt-0.5">Saved for revision</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-[#102A43]/10 flex items-center justify-center text-[#102A43]">
            <BookmarkCheck className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Bookmarked Topics Section */}
      {bookmarkedTopics.length > 0 && (
        <section className="bg-white rounded-xl p-6 border border-[#D9E2EC] shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#F0F4F8]">
            <h2 className="font-editorial text-xl font-bold text-[#102A43] flex items-center gap-2">
              <BookmarkCheck className="w-5 h-5 text-[#E5B94B]" />
              <span>Bookmarked Lessons for Revision</span>
            </h2>
            <span className="text-xs font-mono text-[#829AB1]">{bookmarkedTopics.length} topics saved</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bookmarkedTopics.map((topic) => {
              if (!topic) return null;
              const cat = categories.find((c) => c.id === topic.categoryId);
              return (
                <div
                  key={topic.id}
                  onClick={() => onSelectTopic(topic.id)}
                  className="p-4 rounded-xl border border-[#D9E2EC] hover:border-[#245C45] bg-[#FAFAF7] hover:bg-white cursor-pointer transition-all group"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#627D98] mb-1">
                    <span>Topic #{topic.number} · {cat?.code}</span>
                    <span className="text-[#245C45] group-hover:translate-x-0.5 transition-transform">Study →</span>
                  </div>
                  <h4 className="font-editorial text-sm font-bold text-[#102A43] group-hover:text-[#245C45] transition-colors leading-snug">
                    {topic.title}
                  </h4>
                  <p className="text-xs text-[#829AB1] italic line-clamp-1 mt-0.5">
                    {topic.englishTitle}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Mastery by 19 Categories */}
      <section className="bg-white rounded-xl p-6 border border-[#D9E2EC] shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#F0F4F8]">
          <div>
            <h2 className="font-editorial text-xl font-bold text-[#102A43]">
              Curriculum Mastery by Category (A–S)
            </h2>
            <p className="text-xs text-[#627D98] mt-0.5">
              Progress breakdown across all 19 curriculum domains.
            </p>
          </div>
          <button
            onClick={onNavigateToCurriculum}
            className="text-xs font-semibold text-[#245C45] hover:underline"
          >
            View All in Curriculum →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat) => {
            const catTopics = allTopics.filter((t) => t.categoryId === cat.id);
            const catCompleted = catTopics.filter((t) => completedIds.includes(t.id)).length;
            const pct = Math.round((catCompleted / cat.topicCount) * 100);

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="p-3.5 rounded-lg border border-[#E2E8F0] hover:border-[#245C45] bg-[#F8FAFC] hover:bg-white cursor-pointer transition-all space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-2.5 h-2.5 rounded-full inline-block"
                      style={{ backgroundColor: cat.color.primary }} 
                    />
                    <span className="font-mono text-xs font-bold text-[#102A43]">
                      Cat {cat.code}: {cat.name}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#245C45]">
                    {catCompleted}/{cat.topicCount} ({pct}%)
                  </span>
                </div>

                <div className="w-full h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#245C45] transition-all duration-300"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
