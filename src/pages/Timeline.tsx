import Section from '../components/Section';
import styled from 'styled-components';

const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 4px;
  height: 90%;
  background-color: #364d79;
`;

const TimelineItem = styled.div`
  position: relative;
  margin: 40px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${({ index }) => (index % 2 === 0 ? 'flex-end' : 'flex-start')};
  align-items: center;
`;

const Dot = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background-color: #364d79;
  border-radius: 50%;
  z-index: 1;
`;

const Content = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 2;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 10px;
`;

export default function Timeline() {
  const items = [
    { title: 'Step 1', photo: 'https://via.placeholder.com/300' },
    { title: 'Step 2', photo: 'https://via.placeholder.com/300' },
    { title: 'Step 3', photo: 'https://via.placeholder.com/300' },
    { title: 'Step 4', photo: 'https://via.placeholder.com/300' },
  ];

  return (
    <Section>
      <TimelineContainer>
        <TimelineLine />
        {items.map((item, index) => (
          <TimelineItem key={index} index={index}>
            <Dot />
            <Content>
              <Title>{item.title}</Title>
              <Photo src={item.photo} alt={item.title} />
            </Content>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </Section>
  );
}
