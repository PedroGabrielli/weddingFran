import styled from 'styled-components';
import Profile2 from '../assets/photos/presentacionFran.jpeg';
import Profile1 from '../assets/photos/presentacionAdri.jpg';
import { presentacionUno, presentacionDos } from '../constants/Presentacion.constants';
import { Text } from '../components/Title';
import { theme } from '../theme/theme';

const Container = styled.div`
  background-color: ${theme.colors.background};
  padding: 2rem 0;
`

const ProfileContainer = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 1rem;
  flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
  height: auto;
  padding: 0.5rem;
`;

const Photo = styled.img`
  object-fit: cover;       /* Ensures the image covers the container and crops if needed */
  border-radius: 10px;     /* Adds subtle rounding for aesthetics */
  height: auto;
  width: 80%;
  margin: 0.5rem 0;
`;

const TextContainer = styled.div`
  max-height: 80%; /* Text container takes 80% of its container's height */
  width: 50%; /* Set a max width for text container */
  font-size: 1.25rem; /* Default size for readability */
  line-height: 1.5;
  text-align: center;
  margin: 0 1rem;
  font-size: 1rem;
  line-height: 1.4;
  width: 90%; /* Expand width for mobile */
  margin: 0.5rem;
`;

const DescriptionText = styled(Text)`
  line-height: 1;
  font-size: calc(2.5vh + 1vw);
`

// Functional Component
export default function Presentacion() {
  return (
    <Container>
      <ProfileContainer reverse>
        <TextContainer>
            <DescriptionText>
              {presentacionDos}
            </DescriptionText>
          </TextContainer>
        <Photo src={Profile1} alt="Profile Photo" />
      </ProfileContainer>
      <ProfileContainer>
        <Photo src={Profile2} alt="Profile Photo" />
        <TextContainer>
          <DescriptionText>
          {presentacionUno}
          </DescriptionText>
        </TextContainer>
      </ProfileContainer>
      </Container>
  );
}
