import Section from '../components/Section';
import styled from 'styled-components';
import { Subtitle, Text, TitleCursive } from '../components/Title';
import FirstPhoto from '../assets/photos/nosConocimos.jpeg';
import SecondPhoto from '../assets/photos/primeraCita.png';
import ThirdPhoto from '../assets/photos/paris.jpg';
import FourthPhoto from '../assets/photos/propuesta.jpg'
import { Parallax } from 'rc-scroll-anim';
import { parallaxAnimation, parallaxAnimationLast, getParallaxStyle, primeraLinea, segundaLinea, tercerLinea, cuartaLinea, primerFecha, segundaFecha, tercerFecha, cuartaFecha, titulo} from '../constants/timeline'; 



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

const Column: React.FC<{ items: { type?: 'text' | 'image'; value: any, secondaryValue?: string }[] }> = ({ items }) => {
  return (
    <StyledColumn>
      {items.map((item, index) => (
        <Row key={index}>
          <Content>
            {item.type === 'text' || !item.type ? (
              <Parallax
                animation={index === items.length - 1 ? parallaxAnimationLast : parallaxAnimation}
                style={getParallaxStyle(index)}
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
    { type: 'image', value: FirstPhoto },
    { type: 'text', value: segundaLinea, secondaryValue: segundaFecha },
    { type: 'image', value: ThirdPhoto },
    { type: 'text', value: cuartaLinea, secondaryValue: cuartaFecha },
  ];

  const rightItems = [
    { type: 'text', value: primeraLinea, secondaryValue: primerFecha },
    { type: 'image', value: SecondPhoto },
    { type: 'text', value: tercerLinea, secondaryValue: tercerFecha },
    { type: 'image', value: FourthPhoto },
  ];

  return (
    <Section>
      <TitleContainer>
        <TitleCursive>{titulo}</TitleCursive>
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
