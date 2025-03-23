import Section from '../components/Section'
import styled from 'styled-components';
import { Text, Title, TitleCursive } from '../components/Title';
import { Button, Modal } from "antd";
import { CalendarFilled } from "@ant-design/icons";
import { googleCalendarUrl } from "../constants/calendarUrl";
import { theme } from '../theme/theme';
import PresentIcon from '../assets/placeholders/present-svgrepo-com.svg';
import { useState } from 'react';

const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Georgia', serif;
  text-align: center;
  gap: 2rem;
  padding: 0 5%;
`;

const StyledButton = styled(Button)`
  padding: 0.5rem 1.5rem;
  background-color: transparent;
  color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  font-size: 1rem;
  padding: 0.5rem 1rem;
`;

export const EventImage = styled.img`
  color: ${({ theme }) => theme.colors.primary};

  & path {
    fill: ${({ theme }) => theme.colors.primary}; /* Apply primary color */
  }
  width: 18vw;
  height: 18vw;
  max-width: 60px;
  max-height: 60px;
`;

const StyledTitleCursive = styled(TitleCursive)`
  font-size: 2rem;
  padding: 0.5rem 1rem;
`

const BankData = () => (
  <div>
    <p>Banco Galicia</p>
    <p>ADRIANA CAROLINA AGUILERA MILLAN</p>
    <p>CTA: 4016583-2 362-5</p>
    <p>CBU: 00703626-30004016583251</p>
    <p>ALIAS: COBRA.SORGO.SABANA</p>
  </div>
)

export default function ConfirmationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleAddToCalendar = () => {
    window.open(googleCalendarUrl, "_blank");
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleFormOk = () => {
    setIsFormOpen(false)
  }

  const handleConfirmAttendance = () => {
    setIsFormOpen(true)
  };

  return (
    <Section>
      <Modal title="Datos bancarios" open={isModalOpen} onCancel={handleOk} footer={[
          <Button key="submit" onClick={handleOk} type='primary'>
            OK
        </Button>
         ]}>
        <BankData />
      </Modal>
      <Modal title="Formulario de asistencia" open={isFormOpen} onCancel={handleFormOk} footer={[]}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScBlZwFxrKRPyg9XSOksAYERpu2pVdpMiHDZhcn3c5lE3DiEw/viewform?embedded=true" width="100%" height={window.innerHeight * 0.6} frameborder="0" marginheight="0" marginwidth="0">Cargando</iframe>
      </Modal>
      <ConfirmationContainer>
        <div>
          <EventImage src={PresentIcon} alt="Regalo" />
          <StyledTitleCursive>Regalo</StyledTitleCursive>
          <Text>Estamos emocionados de compartir nuestro día especial contigo. Si deseas hacernos un regalo, un aporte monetario sería genial.</Text>
          <Text>¡Gracias por ser parte!</Text>
          <StyledButton type="primary" onClick={showModal} style={{ marginTop: '1rem'}}>
            Ver datos bancarios
          </StyledButton>
        </div>
        <Title>¡Estamos deseando verte allí!</Title>
        <Button onClick={handleConfirmAttendance} type='primary' size='large'>
          Confirmar asistencia
        </Button>
        <StyledButton
          icon={<CalendarFilled />}
          iconPosition="end"
          variant="outlined"
          onClick={handleAddToCalendar}
        >
          Agregar al calendario
        </StyledButton>
      </ConfirmationContainer>
    </Section>
  );
}