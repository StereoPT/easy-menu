import dynamic from 'next/dynamic';

import { Button } from 'react-daisyui';
import MenuBuilder from '@/components/MenuBuilder/MenuBuilder';
import MenuPDF from '@/components/MenuPDF/MenuPDF';

import { useAtomValue } from 'jotai';

import { menuCreated } from '@/store/menu.atom';
import Navbar from '@/components/Navbar/Navbar';

const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),
  {
    ssr: false,
  },
);

const Home = () => {
  const isMenuCreated = useAtomValue(menuCreated);

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center gap-16 p-4 mt-12">
        <MenuBuilder />
        <div className="flex justify-center">
          {isMenuCreated && (
            <div>
              <PDFDownloadLink document={<MenuPDF />} fileName="easy-menu.pdf">
                {({ blob, url, loading, error }) => (
                  <Button color="primary" loading={loading} disabled={loading}>
                    Download Now
                  </Button>
                )}
              </PDFDownloadLink>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
