import Section from '../components/Section';
import styled from 'styled-components';
import { Title } from '../components/Title';
import { Button } from "antd";
import { CalendarFilled } from "@ant-design/icons";
import { theme } from '../theme/theme';
import { textoInvitacion } from '../constants/confirmation';
import { useConfirmationModals } from '../hooks/useConfirmationModals';
import { BankDataModal } from '../components/confirmation/BankDataModal';
import { AttendanceFormModal } from '../components/confirmation/AttendanceFormModal';
import { GiftSection } from '../components/confirmation/GiftSection';

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

export default function ConfirmationPage() {
  const {
    isBankModalOpen,
    isFormModalOpen,
    showBankModal,
    closeBankModal,
    showFormModal,
    closeFormModal,
    handleAddToCalendar
  } = useConfirmationModals();

  return (
    <Section>
      <BankDataModal isOpen={isBankModalOpen} onClose={closeBankModal} />
      <AttendanceFormModal isOpen={isFormModalOpen} onClose={closeFormModal} />
      
      <ConfirmationContainer>
        <GiftSection onShowBankData={showBankModal} />
        
        <Title>{textoInvitacion}</Title>
        
        <Button onClick={showFormModal} type='primary' size='large'>
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