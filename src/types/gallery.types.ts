export interface PhotoInfo {
  id: string;
  filename: string;
  alt: string;
  category?: string;
  description?: string;
}

export interface GalleryConfig {
  photos: PhotoInfo[];
  categories?: string[];
}
