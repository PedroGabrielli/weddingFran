import styled from "styled-components";
import Section from "../components/Section";
import BackgroundPhoto from "../assets/photos/portada.jpg";
import RemainingTime from "../components/RemainingTime";
import { format } from "date-fns";
import { Button } from "antd";
import { CalendarFilled } from "@ant-design/icons";

// Google Fonts: Include "Dancing Script" and "Roboto" for elegance and readability
import "@fontsource/dancing-script";
import "@fontsource/roboto";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  background-image: url(${BackgroundPhoto});
  background-size: cover; /* Ensures the image covers the container */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Avoids tiling the image */
  color: white;
  gap: 1.5rem; /* Adjust spacing between elements */
  background-attachment: fixed; /* Enables parallax effect */

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 1rem;
  }
`;

const Message = styled.p`
  font-size: 6rem; /* Large size for desktop */


  @media (max-width: 768px) {
    font-size: 3rem; /* Smaller size for mobile */
  }
`;

const Names = styled.p`
  font-size: 4rem; /* Large size for names */
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.5rem; /* Smaller size for mobile */
  }
`;

const DateLabel = styled.p`
  font-size: 1.5rem; /* Standard size for date label */
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Smaller size for mobile */
  }
`;

const StyledButton = styled(Button)`
  font-size: 1.2rem;
  padding: 0.5rem 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;

export default function Portada() {
  const weddingDate = new Date("2025-09-20T16:00:00-03:00");

  return (
    <Section>
      <Container>
        <Message>Nos Casamos</Message>
        <Names>Fran y Adri</Names>
        <RemainingTime date={weddingDate} />
        <DateLabel>{format(weddingDate, "EEEE, MMMM do  HH'hs', yyyy")}</DateLabel>
        <StyledButton
          type="primary"
          icon={<CalendarFilled />}
          iconPosition="end"
        >
          Agregar al calendario
        </StyledButton>
      </Container>
    </Section>
  );
}
