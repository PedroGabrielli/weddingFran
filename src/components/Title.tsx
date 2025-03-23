import styled from "styled-components";

export const Title = styled.h2`
  font-size: calc(5vh + 2vw); /* Increased size */
  font-family: 'Amatic SC', sans-serif;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.2; /* Improved readability */
  letter-spacing: 1px;
  margin: 0;
  font-size: calc(3.1vh + 2vw);
`;

export const TitleCursive = styled(Title)`
  font-family: 'Parisienne', cursive;
  font-size: calc(3vh + 2.5vw);
`;

export const Subtitle = styled.p`
  font-weight: bold;
  margin: 0;
  font-family: 'Amatic SC', sans-serif;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.3;
  font-size: calc(2.5vh + 1vw);
`;

export const SubtitleCursive = styled(Subtitle)`
  font-family: 'Parisienne', cursive;
  font-size: calc(2vh + 2vw);
`;

export const Text = styled.p`
  margin: 0;
  font-family: 'Amatic SC', sans-serif;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.4;
  font-size: calc(2.5vh + 1vw);
`;

export const TextCursive = styled(Text)`
  font-family: 'Parisienne', cursive;
  font-size: calc(4vh + 1vw);
`;
