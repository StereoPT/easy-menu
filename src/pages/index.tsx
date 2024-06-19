import MenuBuilder from '@/components/MenuBuilder/MenuBuilder';

const Home = () => {
  return (
    <main className="flex justify-center gap-4 p-4">
      <MenuBuilder />
      <div className="flex justify-center basis-1/2">Menu Preview</div>
    </main>
  );
};

export default Home;
