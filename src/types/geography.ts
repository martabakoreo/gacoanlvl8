export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // 0-based index
  explanation: string;
}

export interface TerminologyItem {
  term: string;
  definition: string;
  scientificTerm?: string;
}

export interface CaseStudy {
  title: string;
  location: string;
  description: string;
  takeaway: string;
}

export interface ContentSection {
  subtitle: string;
  content: string;
  keyPoints?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  formula?: {
    expression: string;
    explanation: string;
    exampleCalculation?: string;
  };
}

export interface ClassificationGroup {
  categoryName: string;
  items: {
    name: string;
    description: string;
    example?: string;
  }[];
}

export interface ProcessStep {
  stage: string;
  title: string;
  description: string;
}

export interface TopicVisual {
  type: 'diagram' | 'chart' | 'map' | 'process' | 'simulation';
  title: string;
  caption: string;
  badge?: string;
  source?: string;
  interactiveLabId?: string;
}

export interface Topic {
  id: string; // URL-safe slug e.g. "hakikat-dan-konsep-dasar-geografi"
  number: number; // 1 to 135
  title: string;
  englishTitle: string;
  categoryId: string; // One of 19 category IDs
  difficulty: DifficultyLevel;
  description: string;
  keywords: string[];
  learningObjectives: string[];
  introduction: string;
  sections: ContentSection[];
  classifications: ClassificationGroup[];
  processes: ProcessStep[];
  caseStudies: CaseStudy[];
  visuals: TopicVisual[];
  terminology: TerminologyItem[];
  summary: string[];
  quiz: QuizQuestion[];
  references: string[];
  relatedTopicIds: string[];
}

export interface Category {
  id: string;
  code: string; // 'A' to 'S'
  name: string;
  englishName: string;
  description: string;
  color: {
    primary: string;
    accent: string;
    light: string;
    border: string;
  };
  iconName: string;
  topicCount: number;
  startNumber: number;
  endNumber: number;
}

export interface UserLearningState {
  completedTopics: string[]; // topic IDs
  bookmarkedTopics: string[]; // topic IDs
  quizScores: Record<string, { score: number; total: number; timestamp: number }>;
  lastVisitedTopicId?: string;
  studyTimeMinutes: number;
}

export interface AtlasMarker {
  id: string;
  name: string;
  category: 'geology' | 'climate' | 'hydrology' | 'biosphere' | 'indonesia' | 'urban';
  coordinates: [number, number]; // [lat, lng]
  elevationMeters?: number;
  description: string;
  topicId: string;
  significance: string;
  photoUrl?: string;
}
