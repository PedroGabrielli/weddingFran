import styled from "styled-components";
import Section from "../components/Section";
import BackgroundPhoto from '../assets/placeholders/gettyimages-868924246-1024x1024.jpg'
import RemainingTime from "../components/RemainingTime";
import { format } from "date-fns";
import { Button } from "antd";
import { CalendarFilled } from "@ant-design/icons";

//Foto de portada X
//Mensaje Nos Casamos (Nombres)
//SAve the date / Fecha 
//Cuenta regresiva
//BOton para guardar

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-image: url(${BackgroundPhoto});
  background-size: cover; /* Ensures the image covers the container */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Avoids tiling the image */
  color: white; /* Sets text color to stand out against the background */
  gap: 2rem;
    background-attachment: fixed; /* Enables parallax effect */

`;

const Message = styled.p`
  font-size: 100px;
  margin: 0px;
`

const Names = styled.p`
 font-size: 68px;
  margin: 0px
`

const DateLabel = styled.p`
  font-size: 28px;
  margin: 0;
`

export default function Portada() {
  const weddingDate = new Date('2025-09-20T16:00:00-03:00');

  return (
    <Section>
      <Container>
      <Message>Nos Casamos</Message>
      <Names>Fran y Adri</Names>
      <RemainingTime date={weddingDate}/>
      <DateLabel>{format(weddingDate, "EEEE, MMMM do  HH'hs', yyyy")}</DateLabel>
      <Button 
        type="primary"
        variant="solid" 
        icon={<CalendarFilled />}
        iconPosition="end"
      >Agregar al calendario</Button>
      </Container>
    </Section>
  )
}
