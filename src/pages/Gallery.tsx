import styled from 'styled-components';
import Section from '../components/Section';
import { Carousel } from 'antd';
import { CarouselPhotos } from '../constants/Gallery.constants';

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
  return (
    <Section>
      <Carousel autoplay arrows dots={true}>
        {CarouselPhotos.map((photo, index) => (
          <PhotoContainer key={index}>
            <Photo src={photo} alt={`Carousel photo ${index + 1}`} />
          </PhotoContainer>
        ))}
      </Carousel>
    </Section>
  );
}
