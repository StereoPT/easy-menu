import Image from 'next/image';
import Link from 'next/link';

import { Badge, Button } from 'react-daisyui';

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center gap-16 text-center">
      <div className="flex flex-col justify-center items-center gap-8 max-w-lg lg:max-w-2xl">
        <Badge
          className="font-bold text-sm text-white"
          size="lg"
          color="primary">
          Alpha v.2.0 now Available!
        </Badge>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Pricing Lists made <span className="text-primary">simple.</span>
          </h1>
          <p className="text-sm sm:text-base max-w-sm lg:max-w-lg text-gray-400 font-light">
            Effortlessly create simple, customizable PDF pricing lists for your
            business. Perfect for restaurants, cafes, and more!
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
          className="shadow-xl border border-neutral-200 rounded-lg z-10"
          src="/images/Easy-Menu_Alpha.jpeg"
          alt="Application"
          quality={100}
          priority
          width={1104}
          height={620}
        />
      </div>
    </section>
  );
};

export default Hero;
