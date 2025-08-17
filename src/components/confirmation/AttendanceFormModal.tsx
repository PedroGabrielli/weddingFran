import { Modal } from "antd";
import { forms } from "../../constants/confirmation";

interface AttendanceFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AttendanceFormModal = ({ isOpen, onClose }: AttendanceFormModalProps) => (
  <Modal 
    title="Formulario de asistencia" 
    open={isOpen} 
    onCancel={onClose} 
    footer={[]}
  >
    <iframe 
      src={forms} 
      width="100%" 
      height={window.innerHeight * 0.6} 
      style={{
        border: "none",
        margin: 0
      }}
    >
      Cargando
    </iframe>
  </Modal>
);