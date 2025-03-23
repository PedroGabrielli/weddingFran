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
  gap: 0.25rem;
`;

const Label = styled.p`
  font-family: 'Amatic SC', sans-serif;
  font-size: 3rem; /* 28px */
  margin: 0;
  font-size: 1.7rem; /* 20px */
`;

const Value = styled.p`
  font-family: 'Amatic SC', sans-serif;  font-size: 3rem; /* 32px */
  margin: 0;
  font-size: 1.7rem;
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
