# 📸 Tutorial: Agregar nueva foto al carrusel

## Ejemplo práctico: Agregar 17.jpeg

### 1️⃣ **Paso 1: Agregar foto física**
```bash
# Colocar archivo en:
src/assets/photos/17.jpeg
```

### 2️⃣ **Paso 2: Actualizar PhotoLoaderService.ts**

#### Agregar import:
```typescript
// En src/services/PhotoLoaderService.ts
// Después de Photo16:
import Photo17 from '../assets/photos/17.jpeg';
```

#### Agregar al mapping:
```typescript
private static readonly photoMap: Record<string, string> = {
  '1.jpeg': Photo1,
  '2.jpeg': Photo2,
  // ... todas las fotos existentes
  '16.jpeg': Photo16,
  '17.jpeg': Photo17,  // ← NUEVA LÍNEA
};
```

### 3️⃣ **Paso 3: Actualizar galleryConfig.ts**

```typescript
// En src/config/galleryConfig.ts
export const galleryPhotos: PhotoInfo[] = [
  { id: 'photo-1', filename: '1.jpeg', alt: 'Foto de la pareja 1' },
  // ... todas las fotos existentes
  { id: 'photo-16', filename: '16.jpeg', alt: 'Foto de la pareja 16' },
  { id: 'photo-17', filename: '17.jpeg', alt: 'Foto de la pareja 17' }  // ← NUEVA LÍNEA
];
```

