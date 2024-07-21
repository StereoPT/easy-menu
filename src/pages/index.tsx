import Navbar from '@/components/LandingPage/Navbar';
import Hero from '@/components/LandingPage/Hero';
import FeatureList from '@/components/LandingPage/FeatureList';
import EmailSignup from '@/components/LandingPage/EmailSignup';
import Footer from '@/components/LandingPage/Footer';

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-col items-center overflow-y-auto overflow-x-hidden gap-24">
        <main className="flex flex-col items-center gap-24 w-full pt-8">
          <Hero />
          <FeatureList />
          <EmailSignup />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
