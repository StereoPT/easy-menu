import Feature from '@/components/Feature/Feature';
import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { Badge, Button, Hero, Stack } from 'react-daisyui';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center gap-8 my-8">
        <Hero>
          <Hero.Content className="text-center">
            <div className="flex flex-col items-center gap-6 max-w-xl">
              <Badge
                className="font-bold text-sm text-white"
                size="lg"
                color="primary">
                Alpha is now Available
              </Badge>
              <div className="flex flex-col items-center gap-4">
                <h1 className="text-5xl font-bold">
                  Pricing Lists made{' '}
                  <span className="text-primary">simple.</span>
                </h1>
                <p className="max-w-md">
                  Effortlessly create simple, customizable PDF pricing lists for
                  your business. Perfect for restaurants, cafes, and more!
                </p>
              </div>
              <Link href="/builder">
                <Button color="primary">Create Now</Button>
              </Link>
            </div>
          </Hero.Content>
        </Hero>
        <div className="flex flex-col items-center justify-center rounded-2xl bg-neutral-300 shadow-md w-[880px] h-[560px]">
          <Stack>
            <div className="grid w-[818px] h-[498px] rounded shadow-md bg-base-200 text-primary-content place-content-center">
              <Image
                className="rounded"
                src="/images/Easy-Menu_Alpha.jpeg"
                alt="Application"
                quality={100}
                priority
                fill
              />
            </div>
            <div className="grid w-[820px] h-[500px] rounded shadow-md bg-base-200 text-accent-content place-content-center" />
            <div className="grid w-[820px] h-[500px] rounded shadow-md bg-base-200 text-secondary-content place-content-center" />
          </Stack>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 content-center gap-y-12 gap-x-4 mt-12">
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
      </main>
    </>
  );
};

export default Home;
