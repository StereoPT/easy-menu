import Link from 'next/link';
import { Footer as DaisyFooter } from 'react-daisyui';

const Footer = () => {
  return (
    <DaisyFooter className="relative p-10 bg-neutral text-neutral-content">
      <div>
        {/* LOGO HERE */}
        <p>
          Easy Menu
          <br />© Copyright 2024 | Easy Menu
        </p>
      </div>
      <div>
        <DaisyFooter.Title>Services</DaisyFooter.Title>
        <Link href="/builder">Builder</Link>
      </div>
    </DaisyFooter>
  );
};

export default Footer;
