import { PhotoInfo } from '../types/gallery.types';

// Imports estáticos para compatibilidad con Vite
import Photo1 from '../assets/photos/1.jpeg';
import Photo2 from '../assets/photos/2.jpeg';
import Photo3 from '../assets/photos/3.jpeg';
import Photo4 from '../assets/photos/4.jpeg';
import Photo5 from '../assets/photos/5.jpg';
import Photo6 from '../assets/photos/6.jpeg';
import Photo7 from '../assets/photos/7.jpeg';
import Photo8 from '../assets/photos/8.jpeg';
import Photo9 from '../assets/photos/9.jpeg';
import Photo10 from '../assets/photos/10.jpeg';
import Photo11 from '../assets/photos/11.jpeg';
import Photo12 from '../assets/photos/12.jpeg';
import Photo13 from '../assets/photos/13.jpeg';
import Photo14 from '../assets/photos/14.jpeg';
import Photo15 from '../assets/photos/15.jpeg';
import Photo16 from '../assets/photos/16.jpeg';

export class PhotoLoaderService {
  private static photoCache: Map<string, string> = new Map();
  
  // Mapping estático para compatibilidad con Vite
  private static readonly photoMap: Record<string, string> = {
    '1.jpeg': Photo1,
    '2.jpeg': Photo2,
    '3.jpeg': Photo3,
    '4.jpeg': Photo4,
    '5.jpg': Photo5,
    '6.jpeg': Photo6,
    '7.jpeg': Photo7,
    '8.jpeg': Photo8,
    '9.jpeg': Photo9,
    '10.jpeg': Photo10,
    '11.jpeg': Photo11,
    '12.jpeg': Photo12,
    '13.jpeg': Photo13,
    '14.jpeg': Photo14,
    '15.jpeg': Photo15,
    '16.jpeg': Photo16
  };

  /**
   * Carga una foto usando el mapping estático
   */
  static loadPhoto(filename: string): string {
    if (this.photoCache.has(filename)) {
      return this.photoCache.get(filename)!;
    }

    const photoUrl = this.photoMap[filename];
    if (photoUrl) {
      this.photoCache.set(filename, photoUrl);
      return photoUrl;
    }

    console.error(`Photo ${filename} not found in photoMap`);
    return '';
  }

  /**
   * Carga múltiples fotos
   */
  static loadPhotos(photos: PhotoInfo[]): Array<{ photo: PhotoInfo; url: string }> {
    return photos.map(photo => ({
      photo,
      url: this.loadPhoto(photo.filename)
    })).filter(item => item.url); // Filtrar fotos que no se pudieron cargar
  }

  /**
   * Obtiene todas las fotos disponibles
   */
  static getAvailablePhotos(): string[] {
    return Object.keys(this.photoMap);
  }

  /**
   * Verifica si una foto existe
   */
  static hasPhoto(filename: string): boolean {
    return filename in this.photoMap;
  }
}
