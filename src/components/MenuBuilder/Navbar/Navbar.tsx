import Link from 'next/link';
import { Button } from 'react-daisyui';

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 flex items-center justify-between bg-white px-3 py-2 z-50">
      <Link href="/">
        <Button color="ghost" size="sm">
          Easy-Menu
        </Button>
      </Link>
      <div className="flex items-center gap-2">
        <Button type="button" color="ghost" size="sm">
          Preview
        </Button>
        <Button className="text-white" type="submit" color="primary" size="sm">
          Create
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
