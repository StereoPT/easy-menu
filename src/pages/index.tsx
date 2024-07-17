import Image from 'next/image';
import Link from 'next/link';

import { Badge, Button } from 'react-daisyui';

import Feature from '@/components/Feature/Feature';
import Navbar from '@/components/Navbar/Navbar';

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex flex-col items-center overflow-y-auto overflow-x-hidden gap-32 py-8">
        <section
          id="hero"
          className="flex flex-col items-center gap-16 text-center">
          <div className="flex flex-col justify-center items-center gap-8 max-w-lg lg:max-w-2xl">
            <Badge
              className="font-bold text-sm text-white"
              size="lg"
              color="primary">
              Alpha now Available!
            </Badge>
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-4xl sm:text-5xl font-bold">
                Pricing Lists made <span className="text-primary">simple.</span>
              </h1>
              <p className="text-sm sm:text-base max-w-sm lg:max-w-lg text-gray-400 font-light">
                Effortlessly create simple, customizable PDF pricing lists for
                your business. Perfect for restaurants, cafes, and more!
              </p>
            </div>
            <Link href="/builder">
              <Button className="text-white" color="primary">
                Create Now
              </Button>
            </Link>
          </div>
          <div className="relative flex justify-center mx-auto px-4 max-w-[72rem] before:content-[''] before:opacity-20 before:blur-3xl before:bg-zinc-900 before:z-1 before:absolute before:w-96 before:h-96 before:-top-12 before:rounded-full">
            <Image
              className="shadow-xl rounded-lg z-10"
              src="/images/Easy-Menu_Alpha.jpeg"
              alt="Application"
              quality={100}
              priority
              width={1104}
              height={620}
            />
          </div>
        </section>
        <section id="features" className="bg-zinc-50 w-full">
          <div className="py-12 lg:py-20 px-4 lg:px-6 max-w-[72rem] mx-auto">
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Get to know our features
                </h2>
                <p className="text-sm sm:text-base text-gray-400 font-light max-w-sm lg:max-w-lg">
                  Discover the tools that make Easy Menu the ultimate solution
                  for professional, customizable pricing lists.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 content-center gap-4 lg:gap-6">
                <Feature title="Easy to Use">
                  <p>Intuitive interface for </p>
                  <p>quick and easy list creation.</p>
                </Feature>
                <Feature title="Simple Design">
                  <p>Clean, user-friendly design.</p>
                </Feature>
                <Feature title="Alpha Version">
                  <p>Early access with the latest</p>
                  <p>features and updates.</p>
                </Feature>
                <Feature title="Multi Categories">
                  <p>Categorize items for better organization.</p>
                </Feature>
                <Feature title="Manage Items">
                  <p>Easily add, edit, delete </p>
                  <p>and organize your items.</p>
                </Feature>
                <Feature title="Export as PDF">
                  <p>Generate high-quality PDFs.</p>
                  <p>Ready for print or sharing.</p>
                </Feature>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
