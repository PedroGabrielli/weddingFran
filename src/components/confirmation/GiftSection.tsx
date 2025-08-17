import { Text, TitleCursive } from '../Title';
import { Button } from "antd";
import { EventImage } from '../../pages/Confirmation';
import { textoRegalo } from "../../constants/confirmation";
import PresentIcon from '../../assets/placeholders/present-svgrepo-com.svg';
import styled from 'styled-components';
import { theme } from '../../theme/theme';

const StyledTitleCursive = styled(TitleCursive)`
  font-size: 2rem;
  padding: 0.5rem 1rem;
`;

const StyledButton = styled(Button)`
  padding: 0.5rem 1.5rem;
  background-color: transparent;
  color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  font-size: 1rem;
  padding: 0.5rem 1rem;
`;

interface GiftSectionProps {
  onShowBankData: () => void;
}

export const GiftSection = ({ onShowBankData }: GiftSectionProps) => (
  <div>
    <EventImage src={PresentIcon} alt="Regalo" />
    <StyledTitleCursive>Regalo</StyledTitleCursive>
    <Text>
      <div style={{ whiteSpace: 'pre-line' }}>
        {textoRegalo}
      </div>
    </Text>
    <StyledButton type="primary" onClick={onShowBankData} style={{ marginTop: '1rem'}}>
      Ver datos bancarios
    </StyledButton>
  </div>
);