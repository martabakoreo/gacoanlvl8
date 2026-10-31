import type { Topic } from '../types/geography';
import { photoCatalog } from './photoCatalog';

export interface EditorialPhoto { src: string; title: string; source: string; }

export const TOPIC_PHOTOS: Record<string, EditorialPhoto> = photoCatalog.topics;
export const CATEGORY_PHOTOS: Record<string, EditorialPhoto> = photoCatalog.categories;
export const HERO_PHOTOS: EditorialPhoto[] = photoCatalog.heroes;
export const PAGE_BACKDROPS: EditorialPhoto[] = photoCatalog.backgrounds;
export const SPOTLIGHT_PHOTO: EditorialPhoto = photoCatalog.spotlight;
export const TOPIC_DETAIL_PHOTOS: Record<string, EditorialPhoto> = photoCatalog.topicDetails;
export const CATEGORY_PREVIEW_PHOTOS: Record<string, EditorialPhoto> = photoCatalog.categoryPreviews;
export const TOPIC_BACKDROPS: Record<string, EditorialPhoto> = photoCatalog.topicBackdrops;
export const CATEGORY_HEADER_PHOTOS: Record<string, EditorialPhoto> = photoCatalog.categoryHeaders;
export const CATEGORY_BACKDROPS: Record<string, EditorialPhoto> = photoCatalog.categoryBackdrops;
export const HOME_TOPIC_PHOTOS: Record<string, EditorialPhoto> = photoCatalog.homeTopics;

export const getCategoryPhoto = (categoryId: string, placement: 'header' | 'home' = 'header'): EditorialPhoto => {
  const photo = (placement === 'home' ? CATEGORY_PHOTOS : CATEGORY_HEADER_PHOTOS)[categoryId];
  if (!photo) throw new Error(`Missing ${placement} photograph for category ${categoryId}`);
  return photo;
};

// Every surface has its own collection: a card never reuses its lesson's photograph.
export const getTopicPhoto = (topic: Pick<Topic, 'id'>, placement: 'library' | 'category' | 'detail' | 'home' = 'library'): EditorialPhoto => {
  const collections = { library: TOPIC_PHOTOS, category: CATEGORY_PREVIEW_PHOTOS, detail: TOPIC_DETAIL_PHOTOS, home: HOME_TOPIC_PHOTOS };
  const photo = collections[placement][topic.id];
  if (!photo) throw new Error(`Missing ${placement} photograph for topic ${topic.id}`);
  return photo;
};

const BACKDROP_BY_ROUTE: Record<string, number> = {
  home: 0, curriculum: 1, atlas: 2, lab: 3, dashboard: 4,
};
export function getPageBackdrop(route: string, categoryId?: string, topicId?: string): EditorialPhoto {
  if (route === 'topic' && topicId && TOPIC_BACKDROPS[topicId]) return TOPIC_BACKDROPS[topicId];
  if (route === 'category' && categoryId && CATEGORY_BACKDROPS[categoryId]) return CATEGORY_BACKDROPS[categoryId];
  return PAGE_BACKDROPS[BACKDROP_BY_ROUTE[route] ?? 5];
}
