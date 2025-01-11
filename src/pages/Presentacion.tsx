import styled from 'styled-components';
import Section from '../components/Section';
import ProfilePhoto from '../assets/placeholders/profilephoto.jpeg';
import { presentacionUno, presentacionDos } from '../constants/Presentacion.constants';
import { Subtitle, Text } from '../components/Title';

// Styled Components
const SectionContainer = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ensure the entire section fits within the viewport */
  overflow: hidden; /* Prevent content overflow */
`;

const ProfileContainer = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%; /* Each profile section takes 50% of the viewport height */
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
    height: auto; /* Allow sections to adjust dynamically */
    padding: 0.5rem;
  }
`;

const Photo = styled.img`
  max-height: 80%; /* Photo takes 80% of its container's height */
  max-width: 40%; /* Maintain aspect ratio */
  border-radius: 10px; /* Add subtle rounding for aesthetics */
  margin: 0 1rem;

  @media (max-width: 768px) {
    max-height: 50%; /* Adjust photo size on smaller screens */
    max-width: 70%; /* Allow photo to stretch horizontally if needed */
    margin: 0.5rem 0;
  }
`;

const TextContainer = styled.div`
  max-height: 80%; /* Text container takes 80% of its container's height */
  width: 50%; /* Set a max width for text container */
  font-size: 1.25rem; /* Default size for readability */
  line-height: 1.5;
  text-align: center;
  margin: 0 1rem;

  @media (max-width: 768px) {
    font-size: 1rem; /* Reduce font size for smaller screens */
    line-height: 1.4;
    width: 90%; /* Expand width for mobile */
    margin: 0.5rem;
  }
`;

// Functional Component
export default function Presentacion() {
  return (
    <SectionContainer>
      <ProfileContainer reverse>
        <TextContainer>
            <Subtitle>
              {presentacionDos}
            </Subtitle>
          </TextContainer>
        <Photo src={ProfilePhoto} alt="Profile Photo" />
      </ProfileContainer>
      <ProfileContainer>
        <Photo src={ProfilePhoto} alt="Profile Photo" />
        <TextContainer>
          <Subtitle>
          {presentacionUno}
          </Subtitle>
        </TextContainer>
      </ProfileContainer>
    </SectionContainer>
  );
}
