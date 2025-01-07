import Section from '../components/Section';
import styled from 'styled-components';

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
  background-color: #364d79;
  position: relative;
`;

const Dot = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background-color: #364d79;
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

const Title = styled.p`
  font-family: "Dancing Script", cursive;
  font-size: 6rem; /* Large size for desktop */
  margin: 0;

  @media (max-width: 768px) {
    font-size: 3rem; /* Smaller size for mobile */
  }
`

const Column: React.FC<{ items: { type?: 'text' | 'image'; value: string }[] }> = ({ items }) => {
  return (
    <StyledColumn>
      {items.map((item, index) => (
        <Row key={index}>
          <Content>
            {item.type === 'text' || !item.type ? (
              <p>{item.value}</p>
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
    { type: 'image', value: 'https://via.placeholder.com/300' },
    { type: 'text', value: 'Text' },
    { type: 'image', value: 'https://via.placeholder.com/300' },
    { type: 'text', value: 'Text' },
  ];

  const rightItems = [
    { type: 'text', value: 'Text' },
    { type: 'image', value: 'https://via.placeholder.com/300' },
    { type: 'text', value: 'Text' },
    { type: 'image', value: 'https://via.placeholder.com/300' },
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
