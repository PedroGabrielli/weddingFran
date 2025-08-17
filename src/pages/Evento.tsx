import styled from 'styled-components';
import { EventItem } from '../components/EventItem';
import { useEvents } from '../hooks/useEvents';

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

export default function Evento() {
  const { getEvents } = useEvents();
  const events = getEvents();

  return (
    <EventContainer>
      {events.map((event, index) => (
        <div key={event.id}>
          <EventItem event={event} />
          {index < events.length - 1 && <Divider />}
        </div>
      ))}
    </EventContainer>
  );
}
