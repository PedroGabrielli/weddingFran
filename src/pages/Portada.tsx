import styled from "styled-components";
import Section from "../components/Section";
import BackgroundPhoto from "../assets/photos/portada.jpg";
import RemainingTime from "../components/RemainingTime";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import "@fontsource/dancing-script";
import "@fontsource/roboto";
import '@fontsource/qwitcher-grypen';
import { FaChevronDown } from "react-icons/fa";
import { Subtitle } from "../components/Title";
import BackgroundMusic from "../components/BackgroundMusic";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  background-image: url(${BackgroundPhoto});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  background-attachment: fixed;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
  gap: 1rem;
  padding-top: 1rem;
  background-attachment: scroll;
`;

const ScrollHint = styled.div`
  position: absolute;
  bottom: 5vh;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  font-size: 2rem;
  color: white;

  @keyframes bounce {
    0%, 100% {
      transform: translate(-50%, 0);
    }
    50% {
      transform: translate(-50%, 10px);
    }
  }
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Name = styled.p`
  margin: 0rem 0 0 0;
  font-family: 'Qwitcher Grypen', cursive;
  font-weight: 400;
  font-size: 5rem;
`;

const DateLabel = styled(Subtitle)`
  color: white;
`

export default function Portada() {
  const weddingDate = new Date("2025-09-20T16:00:00-03:00");

  return (
    <Section>
      <Container>
        <NameContainer>
          <Name>{"Adriana"}</Name>
          <div style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', gap: '1rem'}}>
          <div style={{
            width: '100%',
            height: '1px',
            backgroundColor: 'white'
          }}/>
          <Name>{"&"}</Name>
          <div style={{
            width: '100%',
            height: '1px',
            backgroundColor: 'white'
          }}/>
          </div>
          <Name>{"Francisco"}</Name>
        </NameContainer>
        <DateLabel>{format(weddingDate, "EEEE d 'de' MMMM yyyy", { locale: es} ).toLocaleUpperCase()}</DateLabel>
        <RemainingTime date={weddingDate} />
        <BackgroundMusic />
        <ScrollHint><FaChevronDown /></ScrollHint>
      </Container>
    </Section>
  );
}
