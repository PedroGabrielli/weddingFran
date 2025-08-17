import { useState } from 'react';
import { googleCalendarUrl } from '../constants/calendarUrl';

export const useConfirmationModals = () => {
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const showBankModal = () => setIsBankModalOpen(true);
  const closeBankModal = () => setIsBankModalOpen(false);
  
  const showFormModal = () => setIsFormModalOpen(true);
  const closeFormModal = () => setIsFormModalOpen(false);

  const handleAddToCalendar = () => {
    window.open(googleCalendarUrl, "_blank");
  };

  return {
    isBankModalOpen,
    isFormModalOpen,
    showBankModal,
    closeBankModal,
    showFormModal,
    closeFormModal,
    handleAddToCalendar
  };
};