import MenuForm from '@/components/MenuForm/MenuForm';

const Home = () => {
  return (
    <main className="flex justify-center gap-4 p-4">
      <MenuForm />
      <div className="flex justify-center basis-1/2">Menu Preview</div>
    </main>
  );
};

export default Home;
