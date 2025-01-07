import Section from '../components/Section'
import styled from 'styled-components';

const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #fff9f6, #fce9e3);
  color: #6c3e3e;
  font-family: 'Georgia', serif;
  text-align: center;
  padding: 2rem;
`;

const ConfirmationTitle = styled.h1`
  font-size: calc(3vh + 2vw);
  margin-bottom: 2rem;
  color: #6c3e3e;
`;

const Button = styled.a`
  padding: 1rem 2rem;
  font-size: calc(1.2vh + 1vw);
  font-weight: bold;
  color: white;
  background-color: #6c3e3e;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #8a6d6d;
  }
`;

const FooterText = styled.p`
  font-size: calc(1vh + 0.8vw);
  margin-top: 2rem;
  color: #8a6d6d;
`;

export default function ConfirmationPage() {
  return (
    <Section>
    <ConfirmationContainer>
      <ConfirmationTitle>¡Confirma tu asistencia!</ConfirmationTitle>
      <FooterText>¡Estamos deseando verte allí!</FooterText>
      <Button href="https://tu-enlace-al-formulario.com" target="_blank">
        Confirmar Asistencia
      </Button>
    </ConfirmationContainer>
    </Section>
  );
}