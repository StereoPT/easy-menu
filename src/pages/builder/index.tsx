import MenuBuilder from '@/components/MenuBuilder/MenuBuilder';
import Navbar from '@/components/MenuBuilder/Navbar/Navbar';

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
