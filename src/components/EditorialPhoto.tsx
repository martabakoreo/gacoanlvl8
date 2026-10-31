import React from 'react';
import type { EditorialPhoto as Photo } from '../data/photography';

export function EditorialPhoto({ photo, compact = false, priority = false }: { photo: Photo; compact?: boolean; priority?: boolean }) {
  return (
    <figure className={`editorial-photo ${compact ? 'editorial-photo--compact' : ''}`}>
      <img src={photo.src} alt={photo.title} loading={priority ? 'eager' : 'lazy'} decoding="async" width={1600} height={900} />
      <figcaption>
        {!compact && <span>{photo.title}</span>}
        <a href={photo.source} target="_blank" rel="noreferrer" onClick={event => event.stopPropagation()}>Foto: National Geographic ↗</a>
      </figcaption>
    </figure>
  );
}
