import { useState } from 'react';

import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import type { PDFDocumentProxy } from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

type PDFFile = string | File | null;

const MenuPreview = () => {
  const [file, setFile] = useState<PDFFile>('./easy-menu.pdf');
  const [nrPages, setNrPages] = useState<number>();

  function onDocumentLoadSuccess({ numPages }: PDFDocumentProxy): void {
    setNrPages(numPages);
  }

  return (
    <div>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(nrPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} width={420} />
        ))}
      </Document>
    </div>
  );
};

export default MenuPreview;
