import Section from '../components/Section';
import styled from 'styled-components';
import ChurchIcon from '../assets/placeholders/church-svgrepo-com.svg'
import PartyIcon from '../assets/placeholders/cheers-toast-svgrepo-com.svg'
import PresentIcon from '../assets/placeholders/present-svgrepo-com.svg'
import DressIcon from '../assets/placeholders/bow-tie-svgrepo-com.svg'
import { Subtitle, Text, Title } from '../components/Title';

const EventContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 2vh 1vw;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    padding: 1vh 1vw;
  }
`;

const EventBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;
  padding: 0 1vw;

  @media (max-width: 768px) {
    padding: 1vh 0;
  }
`;

const EventTitle = styled.h2`
  font-size: calc(2vh + 1vw);
  margin-bottom: 1vh;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    font-size: calc(1.5vh + 1vw);
  }
`;

const EventTime = styled.p`
  font-size: calc(4vh + 1vw);
  font-weight: bold;
  margin: 0.5vh 0;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    font-size: calc(1.5vh + 1vw);
  }
`;

const EventLocation = styled.p`
  font-size: calc(1.5vh + 0.8vw);
  margin: 0.2vh 0;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    font-size: calc(1.2vh + 0.8vw);
  }
`;

const Divider = styled.div`
  width: 2px;
  height: auto;
  background-color: ${({ theme }) => theme.colors.primary};
  align-self: stretch;

  @media (max-width: 768px) {
    display: none;
  }
`;

const EventImage = styled.img`
  width: 15vw;
  height: 15vw;
  max-width: 128px;
  max-height: 128px;
  color: ${({ theme }) => theme.colors.primary};

  & path {
    fill: ${({ theme }) => theme.colors.primary}; /* Apply primary color */
  }

  @media (max-width: 768px) {
    width: 20vw;
    height: 20vw;
  }
`;

const MapContainer = styled.div`
  height: calc(20vh + 5vw);
  width: calc(20vh + 5vw);
  max-height: 240px;
  max-width: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 14px;
  margin-top: 2vh;

  @media (max-width: 768px) {
    height: calc(15vh + 5vw);
    width: calc(15vh + 5vw);
  }
`;

export default function Evento() {
  return (
    <Section>
      <EventContainer>
        <EventBlock>
          <EventImage src={ChurchIcon} alt="Ceremonia" />
          <Title>Ceremonia</Title>
          <Subtitle>4 pm</Subtitle>
          <Text>Iglesa<br />Direccion Iglesia</Text>
        </EventBlock>

        <Divider />

        <EventBlock>
          <EventImage src={PartyIcon} alt="Fiesta" />
          <Title>Recepción</Title>
          <Subtitle>7 pm</Subtitle>
          <Subtitle>Santa Barbara</Subtitle>
          <Text>
            Av. Cdad. de Valparaíso 6000
          </Text>
        </EventBlock>
        <Divider />
        <EventBlock>
          <EventImage src={DressIcon} alt="Fiesta" />
          <Title>Dress Code</Title>
          <Subtitle>Formal</Subtitle>
        </EventBlock>
        <Divider />
        <EventBlock>
          <EventImage src={PresentIcon} alt="Fiesta" />
          <Title>Regalo</Title>
          <Subtitle>Payoneer</Subtitle>
        </EventBlock>
      </EventContainer>
    </Section>
  );
}