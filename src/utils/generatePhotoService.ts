/**
 * Generador automático de mapping de fotos
 * 
 * Este script puede ser ejecutado cuando se agreguen nuevas fotos
 * para regenerar automáticamente el PhotoLoaderService
 */

import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const PHOTOS_DIR = '../assets/photos';
const SERVICE_PATH = '../services/PhotoLoaderService.ts';

interface PhotoMapping {
  filename: string;
  importName: string;
}

function generatePhotoService() {
  try {
    // Leer archivos de la carpeta de fotos
    const photoFiles = readdirSync(join(__dirname, PHOTOS_DIR))
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .sort((a, b) => {
        // Ordenar numéricamente: 1.jpeg, 2.jpeg, ..., 10.jpeg, 11.jpeg
        const aNum = parseInt(a.match(/\d+/)?.[0] || '0');
        const bNum = parseInt(b.match(/\d+/)?.[0] || '0');
        return aNum - bNum;
      });

    // Generar mappings
    const mappings: PhotoMapping[] = photoFiles.map((filename, index) => ({
      filename,
      importName: `Photo${index + 1}`
    }));

    // Generar código del servicio
    const serviceCode = `import { PhotoInfo } from '../types/gallery.types';

// Imports estáticos para compatibilidad con Vite
${mappings.map(m => `import ${m.importName} from '../assets/photos/${m.filename}';`).join('\n')}

export class PhotoLoaderService {
  private static photoCache: Map<string, string> = new Map();
  
  // Mapping estático para compatibilidad con Vite
  private static readonly photoMap: Record<string, string> = {
${mappings.map(m => `    '${m.filename}': ${m.importName},`).join('\n')}
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

    console.error(\`Photo \${filename} not found in photoMap\`);
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

  /**
   * Genera automáticamente la configuración de galería
   */
  static generateGalleryConfig(): string {
    const config = this.getAvailablePhotos().map((filename, index) => {
      const id = \`photo-\${index + 1}\`;
      const alt = \`Foto de la pareja \${index + 1}\`;
      return \`  { id: '\${id}', filename: '\${filename}', alt: '\${alt}' }\`;
    }).join(',\\n');

    return \`import { PhotoInfo } from '../types/gallery.types';

export const galleryPhotos: PhotoInfo[] = [
\${config}
];\`;
  }
}`;

    // Escribir archivo
    writeFileSync(join(__dirname, SERVICE_PATH), serviceCode);
    
    console.log(`✅ PhotoLoaderService generado con ${mappings.length} fotos`);
    console.log('📁 Fotos encontradas:', mappings.map(m => m.filename).join(', '));
    
    return serviceCode;
  } catch (error) {
    console.error('❌ Error generando PhotoLoaderService:', error);
    throw error;
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  generatePhotoService();
}

export { generatePhotoService };
