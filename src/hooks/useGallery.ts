import { useState, useEffect } from 'react';
import { PhotoInfo } from '../types/gallery.types';
import { PhotoLoaderService } from '../services/PhotoLoaderService';
import { galleryPhotos } from '../config/galleryConfig';

interface LoadedPhoto {
  photo: PhotoInfo;
  url: string;
}

export const useGallery = () => {
  const [photos, setPhotos] = useState<LoadedPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPhotos = () => {
      try {
        setLoading(true);
        const loadedPhotos = PhotoLoaderService.loadPhotos(galleryPhotos);
        setPhotos(loadedPhotos);
      } catch (err) {
        setError('Error al cargar las fotos');
        console.error('Error loading gallery:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPhotos();
  }, []);

  const getPhotoUrls = (): string[] => {
    return photos.map(item => item.url);
  };

  const getPhotoById = (id: string): LoadedPhoto | undefined => {
    return photos.find(item => item.photo.id === id);
  };

  const getPhotosByCategory = (category: string): LoadedPhoto[] => {
    return photos.filter(item => item.photo.category === category);
  };

  const getAvailablePhotos = (): string[] => {
    return PhotoLoaderService.getAvailablePhotos();
  };

  return {
    photos,
    photoUrls: getPhotoUrls(),
    loading,
    error,
    getPhotoById,
    getPhotosByCategory,
    getAvailablePhotos
  };
};
