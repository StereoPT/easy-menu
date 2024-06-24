import MenuBuilder from '@/components/MenuBuilder/MenuBuilder';

import Navbar from '@/components/Navbar/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center gap-16 p-4 mt-12">
        <MenuBuilder />
      </main>
    </>
  );
};

export default Home;
