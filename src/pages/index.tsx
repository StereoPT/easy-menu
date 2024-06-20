import MenuBuilder from '@/components/MenuBuilder/MenuBuilder';
import MenuPreview from '@/components/MenuPreview/MenuPreview';

const Home = () => {
  return (
    <main className="flex justify-center gap-4 p-4">
      <MenuBuilder />
      <MenuPreview />
    </main>
  );
};

export default Home;
