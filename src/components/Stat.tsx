import styled from 'styled-components';

// Props Interface
interface IStat {
  value: string;
  label: string;
}

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    gap: 0.25rem; /* Reduced gap for smaller screens */
  }
`;

const Label = styled.p`
  font-family: 'Dancing Script', cursive;
  font-size: 1.75rem; /* 28px */
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.25rem; /* 20px */
  }
`;

const Value = styled.p`
  font-family: 'Dancing Script', cursive;
  font-size: 2rem; /* 32px */
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.75rem; /* 28px */
  }
`;

// Functional Component
export default function Stat({ label, value }: IStat) {
  return (
    <Container>
      <Value>{value}</Value>
      <Label>{label}</Label>
    </Container>
  );
}
