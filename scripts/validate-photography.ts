import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { allTopics } from '../src/data/topics';
import { categories } from '../src/data/categories';
import { photoCatalog } from '../src/data/photoCatalog';
import { getTopicPhoto, getCategoryPhoto, getPageBackdrop, HOME_TOPIC_PHOTOS, type EditorialPhoto } from '../src/data/photography';

const topicCollections: Record<string, EditorialPhoto>[] = [photoCatalog.topics, photoCatalog.topicDetails, photoCatalog.categoryPreviews, photoCatalog.topicBackdrops];
for (const collection of topicCollections) {
  assert.equal(Object.keys(collection).length, allTopics.length);
  for (const topic of allTopics) assert.ok(collection[topic.id], `Missing lesson photo: ${topic.id}`);
}
const categoryCollections: Record<string, EditorialPhoto>[] = [photoCatalog.categories, photoCatalog.categoryHeaders, photoCatalog.categoryBackdrops];
for (const collection of categoryCollections) {
  assert.equal(Object.keys(collection).length, categories.length);
  for (const category of categories) assert.ok(collection[category.id], `Missing category photo: ${category.id}`);
}
const photos: EditorialPhoto[] = [
  ...topicCollections.flatMap(collection => Object.values(collection)),
  ...Object.values(photoCatalog.categories), ...Object.values(photoCatalog.categoryHeaders),
  ...Object.values(photoCatalog.categoryBackdrops), ...Object.values(photoCatalog.homeTopics),
  ...photoCatalog.heroes, ...photoCatalog.backgrounds, photoCatalog.spotlight,
];
assert.equal(new Set(photos.map(photo => photo.src)).size, photos.length, 'Photographs must be exclusive to one placement');
const hashes = new Set<string>();
for (const photo of photos) {
  assert.ok(photo.title.trim().length > 15, `Missing descriptive alt text: ${photo.src}`);
  assert.equal(new URL(photo.source).hostname, 'www.nationalgeographic.com');
  const bytes = readFileSync(`public${photo.src}`);
  assert.ok(bytes[0] === 0xff && bytes[1] === 0xd8, `Invalid JPEG: ${photo.src}`);
  const hash = createHash('sha256').update(bytes).digest('hex');
  assert.ok(!hashes.has(hash), `Duplicate image file: ${photo.src}`);
  hashes.add(hash);
}
// Check actual selectors too: unique catalog entries alone do not prevent reused photos.
for (const topic of allTopics) {
  const placements = ['library', 'category', 'detail'] as const;
  const sources = placements.map(placement => getTopicPhoto(topic, placement).src);
  sources.push(getPageBackdrop('topic', topic.categoryId, topic.id).src);
  if (HOME_TOPIC_PHOTOS[topic.id]) sources.push(getTopicPhoto(topic, 'home').src);
  assert.equal(new Set(sources).size, sources.length, `Repeated photo across lesson surfaces: ${topic.id}`);
}
for (const category of categories) {
  const sources = [getCategoryPhoto(category.id, 'home').src, getCategoryPhoto(category.id).src, getPageBackdrop('category', category.id).src];
  assert.equal(new Set(sources).size, sources.length, `Repeated category photograph: ${category.id}`);
}
const routePhotos = ['home', 'curriculum', 'atlas', 'lab', 'dashboard'].map(route => getPageBackdrop(route).src);
assert.equal(new Set(routePhotos).size, routePhotos.length, 'Main pages must have different backdrops');
assert.equal(readdirSync('public/images/national-geographic').filter(file => file.endsWith('.jpg')).length, photos.length, 'Unassigned photo assets');
console.log(`Verified ${allTopics.length} lessons, ${categories.length} categories, and ${photos.length} exclusive local photographs across cards, headers, lessons, and backdrops.`);
