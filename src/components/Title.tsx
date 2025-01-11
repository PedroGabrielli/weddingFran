import styled from "styled-components";

export const Title = styled.h2`
  font-size: calc(2vh + 1vw); /* Responsive font size */
  margin-bottom: 1vh;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    font-size: calc(1.5vh + 1vw);
  }
`;

export const Subtitle = styled.p`
  font-size: calc(4vh + 1vw); /* Larger for emphasis */
  font-weight: bold;
  margin: 0.5vh 0;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    font-size: calc(1.5vh + 1vw);
  }
`;

export const Text = styled.p`
  font-size: calc(1.5vh + 0.8vw); /* Smaller for secondary text */
  margin: 0.2vh 0;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    font-size: calc(1.2vh + 0.8vw);
  }
`;