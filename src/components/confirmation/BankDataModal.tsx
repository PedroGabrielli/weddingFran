import { Modal, Button } from "antd";
import { bankData } from "../../constants/confirmation";

interface BankDataModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BankDataModal = ({ isOpen, onClose }: BankDataModalProps) => (
  <Modal 
    title="Datos bancarios" 
    open={isOpen} 
    onCancel={onClose} 
    footer={[
      <Button key="submit" onClick={onClose} type='primary'>
        OK
      </Button>
    ]}
  >
    <div style={{ whiteSpace: 'pre-line' }}>
      {bankData}
    </div>
  </Modal>
);