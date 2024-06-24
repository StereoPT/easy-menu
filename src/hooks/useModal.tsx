import { ReactNode, useRef } from 'react';
import { Modal, ModalProps } from 'react-daisyui';

export type UseModalResp = {
  modal: ReactNode;
  openModal: () => void;
  closeModal: () => void;
};

export type UseModalProps = ModalProps & {
  onModalOpen?: () => void;
  onModalClose?: () => void;
};

export const useModal = ({
  children,
  backdrop = true,
  onModalOpen,
  onModalClose,
}: UseModalProps): UseModalResp => {
  const ref = useRef<HTMLDialogElement | null>(null);

  const openModal = () => {
    onModalOpen && onModalOpen();
    ref.current?.showModal();
  };

  const closeModal = () => {
    onModalClose && onModalClose();
    ref.current?.close();
  };

  const modal: ReactNode = (
    <Modal backdrop={backdrop} ref={ref}>
      {children}
    </Modal>
  );

  return {
    modal,
    openModal,
    closeModal,
  };
};
