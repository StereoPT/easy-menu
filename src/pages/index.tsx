import Navbar from '@/components/Navbar/Navbar';

import Hero from '@/components/LandingPage/Hero';
import FeatureList from '@/components/LandingPage/FeatureList';
import EmailSignup from '@/components/LandingPage/EmailSignup';

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex flex-col items-center overflow-y-auto overflow-x-hidden gap-24 py-8">
        <Hero />
        <FeatureList />
        <EmailSignup />
      </main>
    </div>
  );
};

export default Home;
