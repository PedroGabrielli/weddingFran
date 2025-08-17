import styled from 'styled-components';
import Section from '../components/Section';
import { Carousel, Spin, Alert } from 'antd';
import { useGallery } from '../hooks/useGallery';

const PhotoContainer = styled.div`
  height: 100vh;
  width: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; 
  background: #364d79;
`;

const Photo = styled.img`
  height: 100%; 
  width: 100%; 
  object-fit: cover;
  object-position: center;
`;

export default function Gallery() {
  const { photoUrls, loading, error } = useGallery();

  return (
    <Section>
      {loading && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <Spin size="large" />
        </div>
      )}

      {error && (
        <Alert 
          message="Error al cargar las fotos" 
          description={error} 
          type="error" 
          showIcon 
        />
      )}

      {!loading && !error && photoUrls.length === 0 && (
        <Alert 
          message="No hay fotos disponibles" 
          description="No se encontraron fotos en la galería" 
          type="warning" 
          showIcon 
        />
      )}

      {!loading && !error && photoUrls.length > 0 && (
        <Carousel autoplay arrows dots={true}>
          {photoUrls.map((photo, index) => (
            <PhotoContainer key={index}>
              <Photo src={photo} alt={`Carousel photo ${index + 1}`} />
            </PhotoContainer>
          ))}
        </Carousel>
      )}
    </Section>
  );
}
