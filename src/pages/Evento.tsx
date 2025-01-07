import Section from '../components/Section';
import styled from 'styled-components';

const EventContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 2rem 1rem;
  background-color: #fff9f6;
  color: #6c3e3e;
  font-family: 'Georgia', serif;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;


const EventBlock = styled.div`
  text-align: center;
  flex: 1;
  padding: 0 1rem;
`;

const EventTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #6c3e3e;
`;

const EventTime = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0.5rem 0;
  color: #6c3e3e;
`;

const EventLocation = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
  color: #8a6d6d;
`;

const Divider = styled.div`
  width: 2px;
  height: auto;
  background-color: #d8c2ba;
  align-self: stretch;

  @media (max-width: 768px) {
    display: none;
  }
`;

const EventImage = styled.img`
  width: 2px;
  height: 100%;
  margin-bottom: 1rem;
`;

export default function Evento() {
  return (
    <Section>
      <EventContainer>
        <EventBlock>
          <EventImage src="/src/assets/placeholders/catholic-church-icon-by-Vexels.svg" alt="Ceremonia" />
          <EventTitle>Ceremonia</EventTitle>
          <EventTime>4 pm</EventTime>
          <EventLocation>IGLESIA<br />DIRECCION IGLESIA</EventLocation>
          <p>MAPA</p>
        </EventBlock>

        <Divider />

        <EventBlock>
          <EventImage src="/src/assets/placeholders/glasses-brindis-with-a-heart-svgrepo-com.svg" alt="Fiesta" />
          <EventTitle>Fiesta</EventTitle>
          <EventTime>6 pm</EventTime>
          <EventLocation>SALON<br />DIRECCION SALON</EventLocation>
          <p>MAPA</p>
        </EventBlock>
      </EventContainer>
    </Section>
  );
}