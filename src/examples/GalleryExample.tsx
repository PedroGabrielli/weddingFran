import React from 'react';
import { useGallery } from '../hooks/useGallery';
import { Spin, Alert } from 'antd';

// Ejemplo de componente que usa el nuevo sistema
export const GalleryExample: React.FC = () => {
  const { photos, photoUrls, loading, error } = useGallery();

  if (loading) {
    return <Spin size="large" />;
  }

  if (error) {
    return <Alert message="Error" description={error} type="error" />;
  }

  return (
    <div>
      <h2>Galería de Fotos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
        {photos.map(({ photo, url }) => (
          <img 
            key={photo.id} 
            src={url} 
            alt={photo.alt} 
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          />
        ))}
      </div>
      
      {/* Para usar solo las URLs (compatibilidad con carousel existente) */}
      <div>
        <h3>URLs para Carousel:</h3>
        {photoUrls.map((url, index) => (
          <div key={index}>{url}</div>
        ))}
      </div>
    </div>
  );
};
