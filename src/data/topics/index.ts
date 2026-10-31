import { Topic } from '../../types/geography';
import { topicsPart1 } from './part1_dasar_pemetaan';
import { topicsPart2 } from './part2_litosfer';
import { topicsPart3 } from './part3_atmosfer_hidrosfer';
import { topicsPart4 } from './part4_biosfer_indonesia_sda';
import { topicsPart5 } from './part5_lingkungan_kependudukan_bencana';
import { topicsPart6 } from './part6_wilayah_desa_tataruang';
import { topicsPart7 } from './part7_regional_ekonomi';
import { topicsPart8 } from './part8_isu_digital_tematik';

export const allTopics: Topic[] = [
  ...topicsPart1,
  ...topicsPart2,
  ...topicsPart3,
  ...topicsPart4,
  ...topicsPart5,
  ...topicsPart6,
  ...topicsPart7,
  ...topicsPart8,
];

// Verify total count
export const TOTAL_TOPIC_COUNT = allTopics.length; // Expects exactly 135

// Fast Lookup Map by ID
export const topicMap = new Map<string, Topic>(
  allTopics.map((topic) => [topic.id, topic])
);

// Fast Lookup Map by Number
export const topicNumberMap = new Map<number, Topic>(
  allTopics.map((topic) => [topic.number, topic])
);

// Topics grouped by Category ID
export const topicsByCategory = allTopics.reduce<Record<string, Topic[]>>((acc, topic) => {
  if (!acc[topic.categoryId]) {
    acc[topic.categoryId] = [];
  }
  acc[topic.categoryId].push(topic);
  return acc;
}, {});

// Adjacent navigation lookup (previous and next topics)
export const adjacentTopicMap = new Map<
  string,
  { prev: Topic | null; next: Topic | null }
>(
  allTopics.map((topic, index) => [
    topic.id,
    {
      prev: index > 0 ? allTopics[index - 1] : null,
      next: index < allTopics.length - 1 ? allTopics[index + 1] : null,
    },
  ])
);

// Search helper function
export function searchTopics(query: string): Topic[] {
  if (!query || query.trim() === '') return allTopics;
  const q = query.toLowerCase().trim();
  return allTopics.filter((t) => {
    return (
      t.title.toLowerCase().includes(q) ||
      t.englishTitle.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.keywords.some((k) => k.toLowerCase().includes(q)) ||
      t.number.toString() === q
    );
  });
}
