import styled from 'styled-components';
import ChurchIcon from '../assets/placeholders/church-svgrepo-com.svg';
import PartyIcon from '../assets/placeholders/cheers-toast-svgrepo-com.svg';
import DressIcon from '../assets/placeholders/bow-tie-svgrepo-com.svg';
import { Subtitle, Text, TitleCursive } from '../components/Title';
import { Button } from 'antd';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { theme } from '../theme/theme';
import { eventLocation, churchLocation } from '../constants/eventLocationUrl';
import { Parallax } from 'rc-scroll-anim';

const EventContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2vh 1vw;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  min-height: 100vh;
  flex-wrap: wrap; /* Ensures wrapping if content is too large */
  overflow: hidden; /* Prevents extra white space */
  flex-direction: column;
  justify-content: space-evenly;
`;

export const EventBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;
  min-width: 20%;
  max-width: 100%;
  padding: 1vh 0;
`;

const Divider = styled.div`
  width: 2px;
  height: 80%; /* Prevents stretching */
  background-color: ${({ theme }) => theme.colors.primary};
  align-self: stretch;
  display: none;
`;

export const EventImage = styled.img`
  color: ${({ theme }) => theme.colors.primary};
  & path {
    fill: ${({ theme }) => theme.colors.primary}; /* Apply primary color */
  }
  width: 18vw;
  height: 18vw;
  max-width: 80px;
  max-height: 80px;
`;

const StyledButton = styled(Button)`
  margin-top: 0.5rem;
  background-color: ${theme.colors.primary};
  color: white;
`

export default function Evento() {

  const handleOpenMap = () => {
    const googleMapsUrl = eventLocation;
    window.open(googleMapsUrl, "_blank");
  }

  const handleOpenChurchMap = () => {
    const googleMapsUrl = churchLocation;
    window.open(googleMapsUrl, "_blank");
  }

  return (
    <EventContainer>
      <Parallax
        animation={{ x: 0, playScale: [0.05, 0.5]}}
        style={{ transform: 'translateX(-100px)', margin: '10px auto' }}
      >
        <EventBlock>
          <EventImage src={ChurchIcon} alt="Ceremonia" />
          <TitleCursive>Iglesia</TitleCursive>
          <Subtitle>5:00 pm</Subtitle>
          <Subtitle>Parroquia Cristo Redentor</Subtitle>
          <Text>Gdor. Justiniano Posse 864</Text>
          <Button onClick={handleOpenChurchMap} type='primary' icon={<FaMapMarkedAlt />}>
            Ver mapa
          </Button>
        </EventBlock>
      </Parallax>
      <Divider />
      <Parallax
        animation={{ x: 0, playScale: [0.05, 0.5]}}
        style={{ transform: 'translateX(100px)', margin: '10px auto' }}
      > <EventBlock>
          <EventImage src={PartyIcon} alt="Fiesta" />
          <TitleCursive>Recepción</TitleCursive>
          <Subtitle>6:30 pm</Subtitle>
          <Subtitle>Salón Santa Barbara</Subtitle>
          <Text>Av. Cdad. de Valparaíso 6000</Text>
          <Button onClick={handleOpenMap} type='primary' icon={<FaMapMarkedAlt />}>
            Ver mapa
          </Button>
        </EventBlock>
      </Parallax>
      <Divider />
      <Parallax
        animation={{ x: 0, playScale: [0.0, 0.3]}}
        style={{ transform: 'translateX(-100px)', margin: '10px auto' }}
      >
        <EventBlock>
          <EventImage src={DressIcon} alt="Dress Code" />
          <TitleCursive>Vestimenta</TitleCursive>
          <Subtitle>Formal</Subtitle>
          <Text>¡Luce tu mejor look!</Text>
        </EventBlock>
      </Parallax>
      <Divider />
    </EventContainer>
  );
}
