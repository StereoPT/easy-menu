import dynamic from 'next/dynamic';

import { Modal } from 'react-daisyui';
import { Button } from 'react-daisyui';

import MenuPDF from '@/components/MenuPDF/MenuPDF';
import { FiX } from 'react-icons/fi';

const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),
  {
    ssr: false,
  },
);

type MenuModalProps = {
  closeModal: () => void;
};

const MenuModal = ({ closeModal }: MenuModalProps) => {
  return (
    <>
      <Button
        type="button"
        size="sm"
        color="ghost"
        shape="circle"
        className="absolute right-2 top-2"
        onClick={closeModal}>
        <FiX size={20} />
      </Button>
      <Modal.Header>Your Menu is Created</Modal.Header>
      <Modal.Body>Thank you for choosing Easy-Menu</Modal.Body>
      <Modal.Actions>
        <PDFDownloadLink document={<MenuPDF />} fileName="easy-menu.pdf">
          {({ blob, url, loading, error }) => (
            <Button color="primary" loading={loading} disabled={loading}>
              Download Now
            </Button>
          )}
        </PDFDownloadLink>
      </Modal.Actions>
    </>
  );
};

export default MenuModal;
