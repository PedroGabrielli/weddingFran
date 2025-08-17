import styled from "styled-components";
import Section from "../components/Section";
import BackgroundPhoto from "../assets/photos/portada.jpg";
import RemainingTime from "../components/RemainingTime";
import { format } from "date-fns";
import { es } from "date-fns/locale";
// @ts-ignore
import "@fontsource/dancing-script";
// @ts-ignore
import "@fontsource/roboto";
// @ts-ignore
import '@fontsource/qwitcher-grypen';
import { FaChevronDown } from "react-icons/fa";
import { Subtitle } from "../components/Title";
import BackgroundMusic from "../components/BackgroundMusic";
import { name1, name2, weddingDate} from "../constants/portada";
import { theme } from "antd";

// Extracted styled components for better organization
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  background-image: url(${BackgroundPhoto});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.secondary};
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
  color: ${({ theme }) => theme.colors.secondary};

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
`;

const Name = styled.p`
  margin: 0rem 0 0 0;
  font-family: 'Qwitcher Grypen', cursive;
  font-weight: 400;
  font-size: 5rem;
`;

const DateLabel = styled(Subtitle)`
  color: ${({ theme }) => theme.colors.secondary};
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const DividerContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: 1rem;
`;

// Extracted component for names section (SRP)
interface NamesDisplayProps {
  firstName: string;
  secondName: string;
}

const NamesDisplay: React.FC<NamesDisplayProps> = ({ firstName, secondName }) => (
  <NameContainer>
    <Name>{firstName}</Name>
    <DividerContainer>
      <Divider />
      <Name>{"&"}</Name>
      <Divider />
    </DividerContainer>
    <Name>{secondName}</Name>
  </NameContainer>
);

// Extracted component for date formatting (SRP)
interface FormattedDateProps {
  date: Date;
}

const FormattedDate: React.FC<FormattedDateProps> = ({ date }) => {
  const formattedDate = format(date, "EEEE d 'de' MMMM yyyy", { locale: es }).toLocaleUpperCase();
  return <DateLabel>{formattedDate}</DateLabel>;
};

// Main component with single responsibility
export default function Portada() {
  return (
    <Section>
      <Container>
        <NamesDisplay firstName={name1} secondName={name2} />
        <FormattedDate date={weddingDate} />
        <RemainingTime date={weddingDate} />
        <BackgroundMusic />
        <ScrollHint><FaChevronDown /></ScrollHint>
      </Container>
    </Section>
  );
}