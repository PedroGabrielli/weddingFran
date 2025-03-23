import Section from '../components/Section';
import styled from 'styled-components';
import { Subtitle, Text, TitleCursive } from '../components/Title';
import Met from '../assets/photos/nosConocimos.jpeg';
import FirstDate from '../assets/photos/primeraCita.png';
import Couple from '../assets/photos/paris.jpg';
import Proposal from '../assets/photos/propuesta.jpg'
import { Parallax } from 'rc-scroll-anim';

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10vh;
`

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 100%;
  position: relative;
  overflow: hidden;
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
  
  flex: 1;
  width: 100%;
`;

const Content = styled.div`
  text-align: center;
  width: 90%;
`;

const ResponsiveImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 2px;
`;

const Column: React.FC<{ items: { type?: 'text' | 'image'; value: string, secondaryValue?: string }[] }> = ({ items }) => {
  return (
    <StyledColumn>
      {items.map((item, index) => (
        <Row key={index}>
          <Content>
            {item.type === 'text' || !item.type ? (
              <Parallax
                animation={{ x: 0, playScale: index === items.length - 1 ? [0, 0.1] : [0.05, 0.3] }}
                style={{ transform: `translateX(${index % 2 === 0 ? '100px' : '-100px'})`, margin: '10px auto' }}
              >
                <div>
                  <Subtitle>{item.value}</Subtitle>
                  <Text>{item?.secondaryValue}</Text>
                </div>
              </Parallax>
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
    { type: 'text', value: 'Primera cita', secondaryValue: '18/12/2021' },
    { type: 'image', value: Couple },
    { type: 'text', value: 'Nos comprometimos', secondaryValue: '19/08/2024' },
  ];

  const rightItems = [
    { type: 'text', value: 'Nos conocimos', secondaryValue: '19/09/2021' },
    { type: 'image', value: FirstDate },
    { type: 'text', value: 'Nos hicimos novios', secondaryValue: '16/03/2022' },
    { type: 'image', value: Proposal },
  ];

  return (
    <Section>
      <TitleContainer>
        <TitleCursive>Nuestra historia</TitleCursive>
      </TitleContainer>
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
