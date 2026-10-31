import { EditorialPhoto } from './EditorialPhoto';
import { getTopicPhoto, getCategoryPhoto } from '../data/photography';
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Bookmark, 
  BookmarkCheck, 
  BookOpen, 
  MapPin, 
  HelpCircle, 
  Share2, 
  FlaskConical, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Info,
  Check,
  AlertCircle,
  Globe,
  Play,
  Pause,
  RotateCcw,
  Sliders,
  Layers,
  Box,
  Shuffle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { GeographicIntelligenceModal } from './GeographicIntelligenceModal';
import { ThreeGeoLaboratory } from './ThreeGeoLaboratory';
import { InteractiveGeoCalculator } from './InteractiveGeoCalculator';
import { Topic, QuizQuestion } from '../types/geography';
import { topicMap, topicNumberMap, adjacentTopicMap } from '../data/topics';
import { categoryMap } from '../data/categories';
import { 
  isTopicCompleted, 
  isTopicBookmarked, 
  toggleCompleted, 
  toggleBookmark, 
  recordQuizScore, 
  getQuizScore 
} from '../utils/storage';

interface TopicDetailViewProps {
  topicId: string;
  onSelectTopic: (topicId: string) => void;
  onSelectCategory: (categoryId: string) => void;
  onBackToCurriculum: () => void;
  onOpenLab: (labId?: string) => void;
}

// Maps topics/categories to the corresponding 3D Three.js model index (0-5)
const getTopicModelIndex = (tId: string, catId?: string): number => {
  const lower = tId.toLowerCase();
  if (lower.includes('gunung') || lower.includes('vulkan') || lower.includes('magma') || lower.includes('erupsi')) return 2;
  if (lower.includes('lempeng') || lower.includes('subduksi') || lower.includes('gempa') || lower.includes('tektonik') || lower.includes('patahan')) return 1;
  if (lower.includes('hidrologi') || lower.includes('sungai') || lower.includes('air') || lower.includes('das') || lower.includes('danau') || lower.includes('rawa')) return 3;
  if (lower.includes('atmosfer') || lower.includes('cuaca') || lower.includes('iklim') || lower.includes('angin') || lower.includes('awan') || lower.includes('hujan') || lower.includes('aurora')) return 4;
  if (lower.includes('kota') || lower.includes('desa') || lower.includes('ruang') || lower.includes('burgess') || lower.includes('permukiman') || lower.includes('tata')) return 5;
  if (catId === 'cat-c' || catId === 'cat-d') return 0;
  if (catId === 'cat-f') return 4;
  if (catId === 'cat-g') return 3;
  if (catId === 'cat-l' || catId === 'cat-m') return 5;
  return 0; // Default: Earth Cutaway
};

export const TopicDetailView: React.FC<TopicDetailViewProps> = ({
  topicId,
  onSelectTopic,
  onSelectCategory,
  onBackToCurriculum,
  onOpenLab
}) => {
  const topic = topicMap.get(topicId);
  const [completed, setCompleted] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  // Quiz state: map of questionId -> selectedOption index
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);

  // Live Grounding Intelligence Modal
  const [isIntelligenceOpen, setIsIntelligenceOpen] = useState(false);
  const [intelligenceTitle, setIntelligenceTitle] = useState('');
  const [intelligenceQuery, setIntelligenceQuery] = useState('');

  // Interactive 3D Model Explorer State
  const [showEmbedded3D, setShowEmbedded3D] = useState(false);
  const initial3DIndex = topic ? getTopicModelIndex(topic.id, topic.categoryId) : 0;
  const [active3DModelIndex, setActive3DModelIndex] = useState<number>(initial3DIndex);

  // Interactive Step Sequencer for Processes
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [isProcessPlaying, setIsProcessPlaying] = useState(false);

  // Interactive Terminology Flashcards State
  const [flashcardMode, setFlashcardMode] = useState(false);
  const [activeFlashcardIndex, setActiveFlashcardIndex] = useState(0);
  const [isFlashcardFlipped, setIsFlashcardFlipped] = useState(false);
  const [masteredTermIndices, setMasteredTermIndices] = useState<number[]>([]);

  useEffect(() => {
    if (!topic) return;
    setCompleted(isTopicCompleted(topic.id));
    setBookmarked(isTopicBookmarked(topic.id));

    // Reset quiz state when switching topics
    setQuizAnswers({});
    setQuizSubmitted(false);
    const existingScore = getQuizScore(topic.id);
    setQuizScore(existingScore);

    // Reset interactive states
    const new3DIdx = getTopicModelIndex(topic.id, topic.categoryId);
    setActive3DModelIndex(new3DIdx);
    setActiveProcessStep(0);
    setIsProcessPlaying(false);
    setFlashcardMode(false);
    setActiveFlashcardIndex(0);
    setIsFlashcardFlipped(false);
    setMasteredTermIndices([]);
    setIntelligenceTitle(topic.title);
    setIntelligenceQuery(`Kondisi geografis dan data verifikasi terkini: ${topic.title} (${topic.englishTitle})`);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [topicId, topic]);

  // Process Auto-play interval
  useEffect(() => {
    if (!isProcessPlaying || !topic?.processes || topic.processes.length <= 1) return;

    const interval = setInterval(() => {
      setActiveProcessStep((prev) => (prev + 1) % topic.processes.length);
    }, 3800);

    return () => clearInterval(interval);
  }, [isProcessPlaying, topic?.processes]);

  if (!topic) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="font-editorial text-2xl font-bold text-[#102A43]">Topic Not Found</h2>
        <p className="text-sm text-[#627D98] mt-2">The topic ID "{topicId}" does not exist in the curriculum.</p>
        <button
          onClick={onBackToCurriculum}
          className="mt-6 px-4 py-2 bg-[#245C45] text-white rounded-lg text-sm"
        >
          Return to Curriculum
        </button>
      </div>
    );
  }

  const category = categoryMap.get(topic.categoryId);
  const adjacent = adjacentTopicMap.get(topic.id);

  const handleToggleCompleted = () => {
    const nextState = toggleCompleted(topic.id);
    setCompleted(nextState);
    if (nextState) {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#245C45', '#E5B94B', '#102A43']
        });
      } catch (err) {
        // silent fallback if confetti disabled
      }
    }
  };

  const handleToggleBookmark = () => {
    const nextState = toggleBookmark(topic.id);
    setBookmarked(nextState);
  };

  const handleSelectQuizOption = (qId: string, optIdx: number) => {
    if (quizSubmitted) return; // Prevent changing after submit
    setQuizAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const handleSubmitQuiz = () => {
    if (Object.keys(quizAnswers).length < topic.quiz.length) {
      alert('Silakan jawab semua pertanyaan uji pemahaman sebelum mengirimkan.');
      return;
    }

    let correctCount = 0;
    topic.quiz.forEach((q) => {
      if (quizAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    const percent = Math.round((correctCount / topic.quiz.length) * 100);
    setQuizScore(percent);
    setQuizSubmitted(true);
    recordQuizScore(topic.id, percent);

    if (percent >= 70 && !completed) {
      handleToggleCompleted();
    }
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const handleOpenGroundingFor = (title: string, query: string) => {
    setIntelligenceTitle(title);
    setIntelligenceQuery(query);
    setIsIntelligenceOpen(true);
  };

  const toggleMasteredTerm = (idx: number) => {
    if (masteredTermIndices.includes(idx)) {
      setMasteredTermIndices(masteredTermIndices.filter((i) => i !== idx));
    } else {
      setMasteredTermIndices([...masteredTermIndices, idx]);
    }
  };

  const currentTerm = topic.terminology[activeFlashcardIndex];

  return (
    <article className="lesson-surface max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* 1. Breadcrumbs Navigation */}
      <nav className="flex items-center gap-2 text-xs text-[#627D98] font-mono">
        <button onClick={onBackToCurriculum} className="hover:text-[#102A43]">
          Curriculum
        </button>
        <span>/</span>
        {category && (
          <button 
            onClick={() => onSelectCategory(category.id)} 
            className="hover:text-[#245C45] truncate max-w-[200px]"
          >
            {category.code}: {category.name}
          </button>
        )}
        <span>/</span>
        <span className="text-[#102A43] font-semibold">
          Topic #{topic.number}
        </span>
      </nav>

      {/* 2. Topic Header Meta Bar */}
      <header className="space-y-4 pb-8 border-b border-[#D9E2EC]">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#627D98]">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-[#102A43] text-[#E5B94B] font-bold">
              TOPIC #{topic.number}
            </span>
            <span>·</span>
            <span>{category?.code}: {category?.name}</span>
            <span>·</span>
            <span className="px-1.5 py-0.5 rounded bg-[#E2E8F0] text-[#486581]">
              {topic.difficulty}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setShowEmbedded3D(!showEmbedded3D)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all shadow-xs ${
                showEmbedded3D
                  ? 'bg-[#245C45] border-[#245C45] text-white'
                  : 'bg-white border-[#D9E2EC] text-[#245C45] hover:bg-[#F0F4F8]'
              }`}
              title="Tampilkan Model 3D Interaktif Langsung di Materi"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{showEmbedded3D ? 'Tutup Model 3D' : 'Model 3D Interaktif'}</span>
              {showEmbedded3D ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            <button
              onClick={handleToggleBookmark}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                bookmarked
                  ? 'bg-[#E5B94B]/15 border-[#E5B94B] text-[#806247]'
                  : 'bg-white border-[#D9E2EC] text-[#486581] hover:text-[#102A43]'
              }`}
            >
              {bookmarked ? (
                <>
                  <BookmarkCheck className="w-3.5 h-3.5 fill-[#E5B94B] text-[#806247]" />
                  <span>Bookmarked</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>Bookmark</span>
                </>
              )}
            </button>

            <button
              onClick={handleToggleCompleted}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                completed
                  ? 'bg-[#245C45] border-[#245C45] text-white'
                  : 'bg-white border-[#D9E2EC] text-[#486581] hover:text-[#102A43]'
              }`}
            >
              <CheckCircle2 className={`w-3.5 h-3.5 ${completed ? 'fill-white text-[#245C45]' : ''}`} />
              <span>{completed ? 'Completed' : 'Mark Complete'}</span>
            </button>

            <button
              onClick={() => handleOpenGroundingFor(topic.title, `Kondisi geografis dan data ilmiah terkini: ${topic.title} (${topic.englishTitle})`)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium bg-[#102A43] text-white hover:bg-[#1C3A5A] transition-colors shadow-xs"
              title="Live Google Search & Maps Grounding"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E5B94B]" />
              <span>Live Intel</span>
            </button>
          </div>
        </div>

        <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102A43] leading-tight">
          {topic.title}
        </h1>
        <p className="text-base sm:text-lg text-[#627D98] italic font-light">
          {topic.englishTitle}
        </p>

        {/* Overview Description Box */}
        <div className="p-4 rounded-xl bg-[#F8FAFC] border-l-4 border-[#245C45] text-sm text-[#334E68] leading-relaxed">
          {topic.description}
        </div>
      </header>

      <EditorialPhoto photo={getTopicPhoto(topic, 'detail')} priority />

      {/* 2.5 EMBEDDED 3D INTERACTIVE THREE.JS EXPLORER (TOGGLEABLE) */}
      {showEmbedded3D && (
        <section className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl space-y-3 animate-fade-rise">
          <div className="p-4 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-white">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#E5B94B]" />
              <h3 className="font-editorial text-base font-bold">
                Eksplorasi 3D Geosfer Interaktif (Three.js WebGL)
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={() => onOpenLab()}
                className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-[11px] font-mono text-[#D9E2EC] transition-colors"
              >
                Buka di Lab Layar Penuh &rarr;
              </button>
              <button
                onClick={() => setShowEmbedded3D(false)}
                className="px-2 py-1 text-slate-400 hover:text-white text-xs font-mono"
              >
                Tutup [X]
              </button>
            </div>
          </div>

          <div className="p-2 sm:p-4">
            <ThreeGeoLaboratory
              initialModelIndex={active3DModelIndex}
              onSelectTopic={onSelectTopic}
            />
          </div>
        </section>
      )}

      {/* 3. Learning Objectives */}
      <section className="bg-white rounded-xl p-6 border border-[#D9E2EC] shadow-sm space-y-3">
        <h2 className="font-editorial text-xl font-bold text-[#102A43] flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#245C45]" />
          <span>Tujuan Pembelajaran (Learning Objectives)</span>
        </h2>
        <ul className="space-y-2 text-sm text-[#334E68]">
          {topic.learningObjectives.map((obj, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#245C45]/10 text-[#245C45] font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                {i + 1}
              </span>
              <span className="leading-relaxed">{obj}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. Pengantar & Konsep Inti */}
      <section className="space-y-4">
        <h2 className="font-editorial text-2xl font-bold text-[#102A43] pb-2 border-b border-[#E2E8F0]">
          1. Pengantar & Landasan Konsep
        </h2>
        <div className="prose prose-slate max-w-none text-[#102A43] leading-relaxed text-base font-normal">
          <p>{topic.introduction}</p>
        </div>
      </section>

      {/* 5. Pembahasan Mendalam (Subtopics & Tables) */}
      <section className="space-y-6">
        <h2 className="font-editorial text-2xl font-bold text-[#102A43] pb-2 border-b border-[#E2E8F0]">
          2. Pembahasan Ilmiah Komprehensif
        </h2>

        {topic.sections.map((sec, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 border border-[#D9E2EC] shadow-sm space-y-4">
            <h3 className="font-editorial text-lg font-bold text-[#102A43]">
              {sec.subtitle}
            </h3>
            <p className="text-sm text-[#334E68] leading-relaxed">
              {sec.content}
            </p>

            {/* Key points if present */}
            {sec.keyPoints && sec.keyPoints.length > 0 && (
              <div className="bg-[#FAFAF7] p-4 rounded-lg border border-[#E2E8F0] space-y-2">
                <span className="text-xs font-mono uppercase text-[#245C45] font-bold tracking-wider">
                  Poin Kunci:
                </span>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-[#486581]">
                  {sec.keyPoints.map((kp, kIdx) => (
                    <li key={kIdx} className="leading-relaxed">{kp}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Scientific Data Table if present */}
            {sec.table && (
              <div className="overflow-x-auto pt-2">
                <table className="w-full text-left text-xs border border-[#D9E2EC] rounded-lg overflow-hidden">
                  <thead className="bg-[#102A43] text-white font-mono">
                    <tr>
                      {sec.table.headers.map((h, hIdx) => (
                        <th key={hIdx} className="p-2.5 font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0] bg-white text-[#334E68]">
                    {sec.table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="p-2.5 align-top leading-relaxed">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* 5.5 INTERACTIVE GEOGRAPHIC COMPUTATION & SIMULATION SANDBOX */}
      <section className="space-y-4">
        <InteractiveGeoCalculator 
          categoryId={topic.categoryId} 
          topicId={topic.id} 
        />
      </section>

      {/* 6. Klasifikasi & Taksonomi */}
      {topic.classifications && topic.classifications.length > 0 && (
        <section className="space-y-4">
          <h2 className="font-editorial text-2xl font-bold text-[#102A43] pb-2 border-b border-[#E2E8F0]">
            3. Klasifikasi & Taksonomi Geografis
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topic.classifications.map((cls, cIdx) => (
              <div key={cIdx} className="bg-white rounded-xl p-5 border border-[#D9E2EC] shadow-sm space-y-3">
                <h3 className="font-mono text-xs font-bold text-[#245C45] uppercase tracking-wider">
                  {cls.categoryName}
                </h3>
                <div className="space-y-2.5">
                  {cls.items.map((item, iIdx) => (
                    <div key={iIdx} className="border-l-2 border-[#E5B94B] pl-3 py-0.5">
                      <div className="font-editorial text-sm font-bold text-[#102A43]">
                        {item.name}
                      </div>
                      <div className="text-xs text-[#486581] mt-0.5 leading-relaxed">
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7. Tahapan & Proses Geografis (INTERACTIVE STEP SEQUENCER) */}
      {topic.processes && topic.processes.length > 0 && (
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#E2E8F0]">
            <h2 className="font-editorial text-2xl font-bold text-[#102A43]">
              4. Dinamika Proses & Urutan Kejadian
            </h2>

            {/* Interactive Step Controller */}
            <div className="flex items-center gap-2 self-start sm:self-center">
              <button
                onClick={() => setIsProcessPlaying(!isProcessPlaying)}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border transition-colors ${
                  isProcessPlaying 
                    ? 'bg-[#E5B94B] border-[#D4A33B] text-[#102A43] font-bold' 
                    : 'bg-white border-[#D9E2EC] text-[#486581] hover:bg-[#F8FAFC]'
                }`}
                title={isProcessPlaying ? 'Jeda Simulasi Tahapan' : 'Putar Otomatis Tahapan'}
              >
                {isProcessPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isProcessPlaying ? 'Jeda Simulasi' : 'Putar Bertahap'}</span>
              </button>

              <button
                onClick={() => setActiveProcessStep(0)}
                className="p-1.5 rounded-lg border border-[#D9E2EC] bg-white text-[#486581] hover:text-[#102A43] text-xs"
                title="Mulai Ulang dari Tahap 1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Stage Step Tabs */}
          <div className="flex flex-wrap gap-2 pb-2">
            {topic.processes.map((proc, pIdx) => {
              const isActive = activeProcessStep === pIdx;
              return (
                <button
                  key={pIdx}
                  onClick={() => {
                    setActiveProcessStep(pIdx);
                    setIsProcessPlaying(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#245C45] text-white shadow-xs'
                      : 'bg-[#F0F4F8] text-[#486581] hover:bg-[#E2E8F0]'
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-mono font-bold ${
                    isActive ? 'bg-[#E5B94B] text-[#102A43]' : 'bg-black/10'
                  }`}>
                    {pIdx + 1}
                  </span>
                  <span>{proc.stage || `Tahap ${pIdx + 1}`}</span>
                </button>
              );
            })}
          </div>

          {/* Active Highlighted Process Card */}
          {topic.processes[activeProcessStep] && (
            <div className="bg-gradient-to-br from-[#FAFAF7] to-white rounded-xl p-6 border-2 border-[#245C45] shadow-md space-y-3 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-[#245C45] font-bold tracking-wider">
                  {topic.processes[activeProcessStep].stage} ({activeProcessStep + 1} dari {topic.processes.length})
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    disabled={activeProcessStep === 0}
                    onClick={() => setActiveProcessStep((prev) => Math.max(0, prev - 1))}
                    className="p-1 rounded bg-white border border-[#D9E2EC] disabled:opacity-40 text-xs text-[#486581]"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    disabled={activeProcessStep === topic.processes.length - 1}
                    onClick={() => setActiveProcessStep((prev) => Math.min(topic.processes.length - 1, prev + 1))}
                    className="p-1 rounded bg-white border border-[#D9E2EC] disabled:opacity-40 text-xs text-[#486581]"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <h4 className="font-editorial text-xl font-bold text-[#102A43]">
                {topic.processes[activeProcessStep].title}
              </h4>

              <p className="text-sm text-[#334E68] leading-relaxed">
                {topic.processes[activeProcessStep].description}
              </p>

              {/* Progress bar */}
              <div className="w-full bg-[#E2E8F0] h-1.5 rounded-full overflow-hidden mt-2">
                <div 
                  className="bg-[#245C45] h-full transition-all duration-300"
                  style={{ width: `${((activeProcessStep + 1) / topic.processes.length) * 100}%` }}
                />
              </div>
            </div>
          )}
        </section>
      )}

      {/* 8. Studi Kasus Lapangan Indonesia / Dunia */}
      <section className="space-y-4">
        <h2 className="font-editorial text-2xl font-bold text-[#102A43] pb-2 border-b border-[#E2E8F0]">
          5. Studi Kasus Lapangan (Empirical Case Study)
        </h2>

        {topic.caseStudies.map((cs, csIdx) => (
          <div key={csIdx} className="bg-gradient-to-br from-[#FAFAF7] to-white rounded-xl p-6 border border-[#D9E2EC] shadow-sm space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C76D4B] font-semibold">
                <MapPin className="w-4 h-4" />
                <span>Lokasi Kasus: {cs.location}</span>
              </div>

              <button
                onClick={() => handleOpenGroundingFor(
                  cs.title, 
                  `Studi kasus dan verifikasi kondisi geografis lapangan: ${cs.title} di lokasi ${cs.location}, Indonesia`
                )}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-[#102A43] hover:bg-[#1E3A5F] text-white transition-colors"
                title="Telusuri pembaruan lapangan dengan Google Maps & Search Grounding"
              >
                <Sparkles className="w-3 h-3 text-[#E5B94B]" />
                <span>Ground Truth ({cs.location})</span>
              </button>
            </div>

            <h3 className="font-editorial text-lg font-bold text-[#102A43]">
              {cs.title}
            </h3>

            <p className="text-sm text-[#334E68] leading-relaxed">
              {cs.description}
            </p>

            <div className="p-3 bg-[#E5B94B]/10 rounded-lg border border-[#E5B94B]/30 flex items-start gap-2 text-xs text-[#806247]">
              <Sparkles className="w-4 h-4 shrink-0 text-[#E5B94B] mt-0.5" />
              <div>
                <strong>Intisari Pembelajaran: </strong>
                {cs.takeaway}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 9. Visual Learning & Lab Trigger */}
      <section className="space-y-4">
        <h2 className="font-editorial text-2xl font-bold text-[#102A43] pb-2 border-b border-[#E2E8F0]">
          6. Visualisasi & Model Representasi
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {topic.visuals.map((vis, vIdx) => (
            <div key={vIdx} className="bg-white rounded-xl p-6 border border-[#D9E2EC] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-2 max-w-2xl">
                <span className="px-2 py-0.5 rounded bg-[#102A43] text-white text-[10px] font-mono uppercase tracking-wider">
                  {vis.badge || vis.type}
                </span>
                <h4 className="font-editorial text-base font-bold text-[#102A43]">
                  {vis.title}
                </h4>
                <p className="text-xs text-[#627D98] leading-relaxed">
                  {vis.caption}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <button
                  onClick={() => setShowEmbedded3D(!showEmbedded3D)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#245C45] hover:bg-[#1D4A37] text-white text-xs font-medium rounded-lg transition-colors shadow-xs"
                >
                  <Globe className="w-3.5 h-3.5 text-[#E5B94B]" />
                  <span>{showEmbedded3D ? 'Sembunyikan 3D' : 'Inspeksi Model 3D'}</span>
                </button>

                <button
                  onClick={() => onOpenLab()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#102A43] hover:bg-[#1F3A56] text-white text-xs font-medium rounded-lg transition-colors shadow-xs"
                >
                  <Sliders className="w-3.5 h-3.5 text-[#E5B94B]" />
                  <span>Buka Visual Lab</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Glosarium & Nomenklatur Ilmiah (INTERACTIVE FLASHCARDS MODE) */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#E2E8F0]">
          <h2 className="font-editorial text-2xl font-bold text-[#102A43]">
            7. Glosarium & Nomenklatur Ilmiah
          </h2>

          {/* Flashcard Toggle Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setFlashcardMode(!flashcardMode);
                setIsFlashcardFlipped(false);
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                flashcardMode
                  ? 'bg-[#102A43] border-[#102A43] text-[#E5B94B] font-bold'
                  : 'bg-white border-[#D9E2EC] text-[#486581] hover:bg-[#F8FAFC]'
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>{flashcardMode ? 'Tampilkan Mode Daftar' : '🃏 Mode Flashcard Interaktif'}</span>
            </button>
          </div>
        </div>

        {/* 10A. FLASHCARD INTERACTIVE MODE */}
        {flashcardMode ? (
          <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-[#D9E2EC] space-y-6">
            <div className="flex items-center justify-between text-xs font-mono text-[#627D98]">
              <span>
                Kartu {activeFlashcardIndex + 1} dari {topic.terminology.length}
              </span>
              <div className="flex items-center gap-2">
                <span>Dikuasai: <strong>{masteredTermIndices.length} / {topic.terminology.length}</strong></span>
                <button
                  onClick={() => {
                    const nextIdx = Math.floor(Math.random() * topic.terminology.length);
                    setActiveFlashcardIndex(nextIdx);
                    setIsFlashcardFlipped(false);
                  }}
                  className="p-1 rounded hover:bg-white border border-[#D9E2EC] text-[#486581]"
                  title="Acak Kartu"
                >
                  <Shuffle className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Flippable 3D Flashcard */}
            {currentTerm && (
              <div
                onClick={() => setIsFlashcardFlipped(!isFlashcardFlipped)}
                className="cursor-pointer min-h-[220px] bg-white rounded-2xl p-8 border-2 border-[#102A43] shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center text-center space-y-4 group"
              >
                {!isFlashcardFlipped ? (
                  <>
                    <span className="text-[11px] font-mono text-[#245C45] uppercase tracking-wider bg-[#245C45]/10 px-2.5 py-1 rounded-full font-bold">
                      {currentTerm.scientificTerm || 'ISTILAH GEOGRAFI'}
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#102A43] group-hover:text-[#245C45] transition-colors">
                      {currentTerm.term}
                    </h3>
                    <p className="text-xs text-[#829AB1] italic">
                      (Klik kartu untuk membalik dan melihat definisi ilmiah &rarr;)
                    </p>
                  </>
                ) : (
                  <>
                    <span className="text-[11px] font-mono text-[#C76D4B] uppercase tracking-wider bg-[#C76D4B]/10 px-2.5 py-1 rounded-full font-bold">
                      DEFINISI & MEKANISME
                    </span>
                    <h4 className="font-editorial text-xl font-bold text-[#102A43]">
                      {currentTerm.term}
                    </h4>
                    <p className="text-sm text-[#334E68] max-w-lg leading-relaxed">
                      {currentTerm.definition}
                    </p>
                    <p className="text-xs text-[#829AB1] italic">
                      (Klik kartu untuk membalik kembali)
                    </p>
                  </>
                )}
              </div>
            )}

            {/* Flashcard Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2">
                <button
                  disabled={activeFlashcardIndex === 0}
                  onClick={() => {
                    setActiveFlashcardIndex((prev) => Math.max(0, prev - 1));
                    setIsFlashcardFlipped(false);
                  }}
                  className="px-3.5 py-2 rounded-lg border border-[#D9E2EC] bg-white text-xs text-[#486581] hover:bg-[#F0F4F8] disabled:opacity-40"
                >
                  &larr; Sebelumnya
                </button>
                <button
                  disabled={activeFlashcardIndex === topic.terminology.length - 1}
                  onClick={() => {
                    setActiveFlashcardIndex((prev) => Math.min(topic.terminology.length - 1, prev + 1));
                    setIsFlashcardFlipped(false);
                  }}
                  className="px-3.5 py-2 rounded-lg border border-[#D9E2EC] bg-white text-xs text-[#486581] hover:bg-[#F0F4F8] disabled:opacity-40"
                >
                  Selanjutnya &rarr;
                </button>
              </div>

              <button
                onClick={() => toggleMasteredTerm(activeFlashcardIndex)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  masteredTermIndices.includes(activeFlashcardIndex)
                    ? 'bg-[#245C45] text-white shadow'
                    : 'bg-white border border-[#245C45] text-[#245C45] hover:bg-[#245C45]/10'
                }`}
              >
                <Check className="w-3.5 h-3.5" />
                <span>
                  {masteredTermIndices.includes(activeFlashcardIndex)
                    ? 'Sudah Dikuasai ✓'
                    : 'Tandai Sudah Dikuasai'}
                </span>
              </button>
            </div>
          </div>
        ) : (
          /* 10B. STANDARD GLOSSARY LIST */
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {topic.terminology.map((term, tIdx) => (
              <div key={tIdx} className="bg-white p-4 rounded-xl border border-[#D9E2EC] shadow-sm space-y-1">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-editorial text-sm font-bold text-[#102A43]">
                    {term.term}
                  </span>
                  {term.scientificTerm && (
                    <span className="text-[10px] font-mono text-[#245C45] bg-[#245C45]/10 px-1.5 py-0.5 rounded">
                      {term.scientificTerm}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#486581] leading-relaxed">
                  {term.definition}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 11. Ringkasan Materi */}
      <section className="bg-[#102A43] text-[#F5F1E8] rounded-xl p-6 shadow-md space-y-3">
        <h2 className="font-editorial text-xl font-bold text-white flex items-center gap-2">
          <Info className="w-5 h-5 text-[#E5B94B]" />
          <span>Ringkasan Konseptual (Takeaways)</span>
        </h2>
        <ul className="space-y-2 text-xs sm:text-sm text-[#D9E2EC]">
          {topic.summary.map((sum, sIdx) => (
            <li key={sIdx} className="flex items-start gap-2">
              <span className="text-[#E5B94B] font-bold mt-0.5">•</span>
              <span className="leading-relaxed">{sum}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 12. Uji Pemahaman Mandiri (Interactive Quiz) */}
      <section className="bg-white rounded-xl p-6 sm:p-8 border border-[#D9E2EC] shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E2E8F0]">
          <div>
            <span className="text-xs font-mono uppercase text-[#245C45] font-bold tracking-wider">
              Evaluasi Mandiri
            </span>
            <h2 className="font-editorial text-2xl font-bold text-[#102A43] mt-0.5">
              Uji Pemahaman: {topic.title}
            </h2>
          </div>

          {quizScore !== null && (
            <div className="bg-[#F0F4F8] px-3 py-1.5 rounded-lg border border-[#D9E2EC] text-xs font-mono">
              Nilai Terakhir: <strong className="text-[#245C45] font-bold">{quizScore}%</strong>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {topic.quiz.map((q: QuizQuestion, qIdx: number) => {
            const selectedOpt = quizAnswers[q.id];
            const isAnswered = selectedOpt !== undefined;
            const isCorrect = isAnswered && selectedOpt === q.correctAnswer;

            return (
              <div key={q.id} className="p-4 rounded-xl bg-[#FAFAF7] border border-[#E2E8F0] space-y-3">
                <div className="flex items-start gap-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#102A43] text-white">
                    Soal {qIdx + 1}
                  </span>
                  <p className="text-sm font-medium text-[#102A43] leading-relaxed">
                    {q.question}
                  </p>
                </div>

                {/* Options list */}
                <div className="space-y-2 pt-1">
                  {q.options.map((opt, oIdx) => {
                    const isOptionSelected = selectedOpt === oIdx;
                    let optionClass = 'bg-white border-[#D9E2EC] text-[#334E68] hover:border-[#245C45]';

                    if (quizSubmitted) {
                      if (oIdx === q.correctAnswer) {
                        optionClass = 'bg-[#245C45]/15 border-[#245C45] text-[#1D4A37] font-semibold';
                      } else if (isOptionSelected && !isCorrect) {
                        optionClass = 'bg-[#C76D4B]/15 border-[#C76D4B] text-[#803E26]';
                      } else {
                        optionClass = 'bg-white border-[#E2E8F0] text-[#9FB3C8]';
                      }
                    } else if (isOptionSelected) {
                      optionClass = 'bg-[#102A43] border-[#102A43] text-white font-medium';
                    }

                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectQuizOption(q.id, oIdx)}
                        disabled={quizSubmitted}
                        className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-start gap-3 ${optionClass}`}
                      >
                        <span className="font-mono font-bold text-xs uppercase px-1.5 py-0.5 rounded bg-black/5 shrink-0">
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span className="flex-1 leading-snug">{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation feedback after submit */}
                {quizSubmitted && (
                  <div className={`p-3 rounded-lg border text-xs space-y-1 ${
                    isCorrect ? 'bg-[#245C45]/10 border-[#245C45]/30 text-[#1D4A37]' : 'bg-[#C76D4B]/10 border-[#C76D4B]/30 text-[#803E26]'
                  }`}>
                    <div className="font-bold flex items-center gap-1.5">
                      {isCorrect ? <Check className="w-4 h-4 text-[#245C45]" /> : <AlertCircle className="w-4 h-4 text-[#C76D4B]" />}
                      <span>{isCorrect ? 'Jawaban Benar!' : 'Jawaban Belum Tepat'}</span>
                    </div>
                    <p className="leading-relaxed text-[#334E68]">{q.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quiz Actions */}
        <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
          <button
            onClick={handleResetQuiz}
            className="text-xs text-[#627D98] hover:text-[#102A43]"
          >
            Reset Pilihan
          </button>

          {!quizSubmitted ? (
            <button
              onClick={handleSubmitQuiz}
              className="px-6 py-2.5 bg-[#245C45] hover:bg-[#1D4A37] text-white text-xs font-semibold rounded-lg transition-colors shadow"
            >
              Kirim Jawaban & Periksa Nilai
            </button>
          ) : (
            <button
              onClick={handleResetQuiz}
              className="px-6 py-2.5 bg-[#102A43] hover:bg-[#1F3A56] text-white text-xs font-semibold rounded-lg transition-colors shadow"
            >
              Ulangi Uji Pemahaman
            </button>
          )}
        </div>
      </section>

      {/* 13. Topik Terkait (Related Topics) */}
      {topic.relatedTopicIds && topic.relatedTopicIds.length > 0 && (
        <section className="space-y-4">
          <h2 className="font-editorial text-2xl font-bold text-[#102A43] pb-2 border-b border-[#E2E8F0]">
            8. Topik Terkait (Cross-Disciplinary Links)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topic.relatedTopicIds.map((relId) => {
              const relTopic = topicMap.get(relId);
              if (!relTopic) return null;
              return (
                <div
                  key={relId}
                  onClick={() => onSelectTopic(relId)}
                  className="bg-white p-4 rounded-xl border border-[#D9E2EC] hover:border-[#245C45] cursor-pointer shadow-sm group transition-all"
                >
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#627D98] mb-1">
                    <span>Topic #{relTopic.number}</span>
                    <span>·</span>
                    <span>{relTopic.difficulty}</span>
                  </div>
                  <h4 className="font-editorial text-sm font-bold text-[#102A43] group-hover:text-[#245C45] transition-colors leading-snug">
                    {relTopic.title}
                  </h4>
                  <p className="text-xs text-[#627D98] italic line-clamp-1 mt-0.5">
                    {relTopic.englishTitle}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 14. Referensi Akademik */}
      <section className="space-y-2 pt-4 border-t border-[#E2E8F0] text-xs text-[#829AB1]">
        <h4 className="font-mono text-xs uppercase tracking-wider text-[#486581] font-semibold">
          Referensi Akademik (Citations)
        </h4>
        <ul className="list-disc list-inside space-y-1 font-serif italic text-[#627D98]">
          {topic.references.map((ref, rIdx) => (
            <li key={rIdx}>{ref}</li>
          ))}
        </ul>
      </section>

      {/* 15. Previous & Next Topic Footer Navigation */}
      <nav className="pt-8 border-t border-[#D9E2EC] grid grid-cols-1 sm:grid-cols-2 gap-4">
        {adjacent?.prev ? (
          <button
            onClick={() => onSelectTopic(adjacent.prev!.id)}
            className="p-4 rounded-xl border border-[#D9E2EC] bg-white hover:border-[#245C45] text-left group transition-all"
          >
            <div className="flex items-center gap-1 text-xs text-[#627D98] font-mono mb-1">
              <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Sebelumnya (#{adjacent.prev.number})</span>
            </div>
            <div className="font-editorial text-sm font-bold text-[#102A43] group-hover:text-[#245C45] transition-colors line-clamp-1">
              {adjacent.prev.title}
            </div>
          </button>
        ) : <div />}

        {adjacent?.next ? (
          <button
            onClick={() => onSelectTopic(adjacent.next!.id)}
            className="p-4 rounded-xl border border-[#D9E2EC] bg-white hover:border-[#245C45] text-right group transition-all"
          >
            <div className="flex items-center justify-end gap-1 text-xs text-[#627D98] font-mono mb-1">
              <span>Selanjutnya (#{adjacent.next.number})</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <div className="font-editorial text-sm font-bold text-[#102A43] group-hover:text-[#245C45] transition-colors line-clamp-1">
              {adjacent.next.title}
            </div>
          </button>
        ) : <div />}
      </nav>

      {/* Live Grounding Intelligence Modal (Google Search & Maps Grounding) */}
      <GeographicIntelligenceModal
        isOpen={isIntelligenceOpen}
        onClose={() => setIsIntelligenceOpen(false)}
        initialTopicTitle={intelligenceTitle || topic.title}
        initialQuery={intelligenceQuery || `Scientific geographic analysis and verified location data for: ${topic.title} (${topic.englishTitle})`}
      />
    </article>
  );
};
