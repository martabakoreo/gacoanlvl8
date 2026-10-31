import { UserLearningState } from '../types/geography';

const STORAGE_KEY = 'atlas_user_learning_state';
const STREAK_KEY = 'atlas_user_study_streak';

const DEFAULT_STATE: UserLearningState = {
  completedTopics: [],
  bookmarkedTopics: [],
  quizScores: {},
  studyTimeMinutes: 0,
};

export function getStoredLearningState(): UserLearningState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw);
    return {
      completedTopics: Array.isArray(parsed.completedTopics) ? parsed.completedTopics : [],
      bookmarkedTopics: Array.isArray(parsed.bookmarkedTopics) ? parsed.bookmarkedTopics : [],
      quizScores: parsed.quizScores && typeof parsed.quizScores === 'object' ? parsed.quizScores : {},
      lastVisitedTopicId: parsed.lastVisitedTopicId,
      studyTimeMinutes: typeof parsed.studyTimeMinutes === 'number' ? parsed.studyTimeMinutes : 0,
    };
  } catch (e) {
    console.error('Failed to parse learning state from localStorage:', e);
    return DEFAULT_STATE;
  }
}

export function saveStoredLearningState(state: UserLearningState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save learning state to localStorage:', e);
  }
}

// Completed topics helpers
export function getCompletedTopics(): string[] {
  return getStoredLearningState().completedTopics;
}

export function isTopicCompleted(topicId: string): boolean {
  return getStoredLearningState().completedTopics.includes(topicId);
}

export function toggleTopicCompletion(topicId: string): boolean {
  const state = getStoredLearningState();
  const index = state.completedTopics.indexOf(topicId);
  let isNowCompleted = false;

  if (index >= 0) {
    state.completedTopics.splice(index, 1);
    isNowCompleted = false;
  } else {
    state.completedTopics.push(topicId);
    isNowCompleted = true;
  }

  saveStoredLearningState(state);
  updateStudyStreak();
  window.dispatchEvent(new Event('atlas_storage_update'));
  return isNowCompleted;
}

export const toggleCompleted = toggleTopicCompletion;

// Bookmark helpers
export function getBookmarkedTopics(): string[] {
  return getStoredLearningState().bookmarkedTopics;
}

export function isTopicBookmarked(topicId: string): boolean {
  return getStoredLearningState().bookmarkedTopics.includes(topicId);
}

export function toggleTopicBookmark(topicId: string): boolean {
  const state = getStoredLearningState();
  const index = state.bookmarkedTopics.indexOf(topicId);
  let isNowBookmarked = false;

  if (index >= 0) {
    state.bookmarkedTopics.splice(index, 1);
    isNowBookmarked = false;
  } else {
    state.bookmarkedTopics.push(topicId);
    isNowBookmarked = true;
  }

  saveStoredLearningState(state);
  window.dispatchEvent(new Event('atlas_storage_update'));
  return isNowBookmarked;
}

export const toggleBookmark = toggleTopicBookmark;

// Quiz Score recording
export function recordQuizScore(topicId: string, score: number, total: number = 100): void {
  const state = getStoredLearningState();
  
  // If score is a percentage 0-100 and total is omitted
  const normalizedScore = total === 100 ? score : Math.round((score / total) * 100);

  state.quizScores[topicId] = {
    score: normalizedScore,
    total: 100,
    timestamp: Date.now(),
  };

  // If score >= 60%, also mark topic as completed if not already
  if (normalizedScore >= 60 && !state.completedTopics.includes(topicId)) {
    state.completedTopics.push(topicId);
  }

  saveStoredLearningState(state);
  updateStudyStreak();
  window.dispatchEvent(new Event('atlas_storage_update'));
}

export function getQuizScore(topicId: string): number | null {
  const state = getStoredLearningState();
  const entry = state.quizScores[topicId];
  if (!entry) return null;
  return entry.score;
}

export function getAllQuizScores(): Record<string, number> {
  const state = getStoredLearningState();
  const result: Record<string, number> = {};
  for (const [k, v] of Object.entries(state.quizScores)) {
    result[k] = v.score;
  }
  return result;
}

// Last visited topic
export function setLastVisitedTopic(topicId: string): void {
  const state = getStoredLearningState();
  state.lastVisitedTopicId = topicId;
  saveStoredLearningState(state);
}

export function getLastVisitedTopic(): string | undefined {
  return getStoredLearningState().lastVisitedTopicId;
}

export function addStudyTime(minutes: number): void {
  const state = getStoredLearningState();
  state.studyTimeMinutes += minutes;
  saveStoredLearningState(state);
}

// Study Streak Management
export function getStudyStreak(): number {
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    if (!raw) return 1;
    const parsed = JSON.parse(raw);
    const lastDate = new Date(parsed.lastDate);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));

    if (diffDays === 0) return parsed.streak || 1;
    if (diffDays === 1) return parsed.streak || 1;
    return 1; // streak reset if skipped a day
  } catch (e) {
    return 1;
  }
}

export function updateStudyStreak(): void {
  try {
    const today = new Date().toISOString().split('T')[0];
    const raw = localStorage.getItem(STREAK_KEY);
    if (!raw) {
      localStorage.setItem(STREAK_KEY, JSON.stringify({ streak: 1, lastDate: today }));
      return;
    }
    const parsed = JSON.parse(raw);
    if (parsed.lastDate !== today) {
      const lastDate = new Date(parsed.lastDate);
      const now = new Date();
      const diffDays = Math.floor((now.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));
      const nextStreak = diffDays === 1 ? (parsed.streak || 1) + 1 : 1;
      localStorage.setItem(STREAK_KEY, JSON.stringify({ streak: nextStreak, lastDate: today }));
    }
  } catch (e) {
    // silent fallback
  }
}

// Reset progress
export function clearAllProgress(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STREAK_KEY);
    window.dispatchEvent(new Event('atlas_storage_update'));
  } catch (e) {
    console.error('Failed to clear progress:', e);
  }
}
