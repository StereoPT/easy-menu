import Navbar from '@/components/Navbar/Navbar';
import MenuBuilder from '@/components/MenuBuilder/MenuBuilder';

const Builder = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center gap-16 p-4 my-8">
        <MenuBuilder />
      </main>
    </>
  );
};

export default Builder;
