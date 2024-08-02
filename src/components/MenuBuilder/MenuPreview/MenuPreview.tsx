import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import { Alert, Button, Loading } from 'react-daisyui';
import { useSetAtom } from 'jotai';
import { previewAtom } from '@/store/menu.atom';
import { FiAlertCircle, FiChevronLeft } from 'react-icons/fi';

import { usePDF } from '@react-pdf/renderer';
import MenuPDF from '@/components/MenuPDF/MenuPDF';
import { cn } from '@/utils/cn';
import { useWindowSize } from 'usehooks-ts';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const MenuPreview = () => {
  const { width = 0 } = useWindowSize();

  const setShowPreview = useSetAtom(previewAtom);
  const [instance] = usePDF({ document: MenuPDF() });

  const handleBack = () => {
    setShowPreview(false);
  };

  return (
    <div className="absolute top-0 left-0 z-[100] bg-white w-screen h-screen overflow-hidden animate-popup">
      <nav className="fixed top-0 right-0 left-0 flex items-center justify-end px-3 py-2 z-50">
        <Button
          type="button"
          color="ghost"
          size="sm"
          startIcon={<FiChevronLeft size={20} />}
          onClick={handleBack}>
          Back to editor
        </Button>
      </nav>
      <div className="flex justify-center items-center h-full">
        <div
          className={cn(
            !instance.loading && 'rounded-lg shadow-lg',
            'overflow-hidden',
          )}>
          <Document
            file={instance.blob}
            loading={
              <Loading
                className="absolute"
                variant="dots"
                size="lg"
                color="primary"
              />
            }
            noData=""
            error={
              <Alert
                className="text-white min-w-96"
                icon={<FiAlertCircle size={20} />}
                status="error">
                Something went Wrong!
              </Alert>
            }>
            <Page pageNumber={1} width={width - 50 > 520 ? 520 : width - 50} />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default MenuPreview;
