import Section from '../components/Section';
import styled from 'styled-components';
import { Subtitle, Title } from '../components/Title';
import Met from '../assets/photos/nosConocimos.JPG';
import FirstDate from '../assets/photos/primeraCita.jpeg';
import Couple from '../assets/photos/paris.jpg';
import Proposal from '../assets/photos/propuesta.jpg'

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: relative;
`;

const TimelineLine = styled.div`
  width: 4px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
`;

const Dot = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25%; /* Assuming 4 rows */
  width: 100%;
`;

const Content = styled.div`
  text-align: center;
  width: 90%; /* Adjust as needed */
`;

const ResponsiveImage = styled.img`
  width: 100%;
  height: 150px; /* Fixed height for uniformity */
  object-fit: cover; /* Ensures the image maintains aspect ratio while filling the space */
  border-radius: 8px;
`;

const Column: React.FC<{ items: { type?: 'text' | 'image'; value: string, secondaryValue?: string }[] }> = ({ items }) => {
  return (
    <StyledColumn>
      {items.map((item, index) => (
        <Row key={index}>
          <Content>
            {item.type === 'text' || !item.type ? (
              <div>
                <Title>{item.value}</Title>
                <Subtitle>{item?.secondaryValue}</Subtitle>
              </div>
            ) : (
              <ResponsiveImage src={item.value} alt="Column Item" />
            )}
          </Content>
        </Row>
      ))}
    </StyledColumn>
  );
};

export default function Timeline() {
  const leftItems = [
    { type: 'image', value: Met },
    { type: 'text', value: 'Primera cita', secondaryValue: '18-12-2021' },
    { type: 'image', value: Couple },
    { type: 'text', value: 'La propuesta', secondaryValue: '19-8-2024' },
  ];

  const rightItems = [
    { type: 'text', value: 'Nos conocimos', secondaryValue: '10-12-2021' },
    { type: 'image', value: FirstDate },
    { type: 'text', value: 'Nos hicimos novios', secondaryValue: '16-3-2022' },
    { type: 'image', value: Proposal },
  ];

  return (
    <Section>
      <TimelineContainer>
        <Column items={leftItems} />
        <TimelineLine>
          {leftItems.map((_, index) => (
            <Dot key={index} style={{ top: `${(index + 0.5) * (100 / leftItems.length)}%` }} />
          ))}
        </TimelineLine>
        <Column items={rightItems} />
      </TimelineContainer>
    </Section>
  );
}
