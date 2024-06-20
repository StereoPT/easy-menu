import dynamic from 'next/dynamic';

import MenuBuilder from '@/components/MenuBuilder/MenuBuilder';
import MenuPDF from '@/components/MenuPDF/MenuPDF';

const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),
  {
    ssr: false,
  },
);

const Home = () => {
  return (
    <main className="flex justify-center gap-4 p-4">
      <MenuBuilder />
      <div className="basis-1/2 flex justify-center">
        <PDFDownloadLink document={<MenuPDF />} fileName="easy-menu.pdf">
          {({ blob, url, loading, error }) => (
            <button className="btn btn-primary" disabled={loading}>
              {loading && <span className="loading loading-spinner"></span>}
              Download Now
            </button>
          )}
        </PDFDownloadLink>
      </div>
    </main>
  );
};

export default Home;
