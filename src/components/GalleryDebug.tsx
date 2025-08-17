import React from 'react';
import { useGallery } from '../hooks/useGallery';
import { PhotoLoaderService } from '../services/PhotoLoaderService';

export const GalleryDebug: React.FC = () => {
  const { photos, photoUrls, loading, error } = useGallery();
  
  console.log('Gallery Debug Info:');
  console.log('Loading:', loading);
  console.log('Error:', error);
  console.log('Photos:', photos);
  console.log('Photo URLs:', photoUrls);
  console.log('Available photos:', PhotoLoaderService.getAvailablePhotos());
  
  return (
    <div style={{ padding: '20px', background: '#f0f0f0', margin: '20px' }}>
      <h3>🐛 Gallery Debug Info</h3>
      <div>
        <strong>Loading:</strong> {loading ? 'Yes' : 'No'}
      </div>
      <div>
        <strong>Error:</strong> {error || 'None'}
      </div>
      <div>
        <strong>Photos loaded:</strong> {photos.length}
      </div>
      <div>
        <strong>Photo URLs:</strong> {photoUrls.length}
      </div>
      <div>
        <strong>Available photos:</strong> {PhotoLoaderService.getAvailablePhotos().length}
      </div>
      
      <h4>📁 Available Photos:</h4>
      <ul>
        {PhotoLoaderService.getAvailablePhotos().map(filename => (
          <li key={filename}>
            {filename} - {PhotoLoaderService.hasPhoto(filename) ? '✅' : '❌'}
          </li>
        ))}
      </ul>
      
      <h4>🖼️ Loaded Photos:</h4>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '10px' }}>
        {photos.map(({ photo, url }) => (
          <div key={photo.id} style={{ border: '1px solid #ccc', padding: '5px' }}>
            <img 
              src={url} 
              alt={photo.alt}
              style={{ width: '100%', height: '80px', objectFit: 'cover' }}
              onLoad={() => console.log(`✅ Loaded: ${photo.filename}`)}
              onError={() => console.log(`❌ Error loading: ${photo.filename}`)}
            />
            <small>{photo.filename}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryDebug;
