import Link from 'next/link';
import { Button } from 'react-daisyui';

import { useSetAtom } from 'jotai';
import { menuAtom, previewAtom } from '@/store/menu.atom';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { MenuFormInputs } from '@/schemas/menuForm';
import Image from 'next/image';
import { FiChevronRight } from 'react-icons/fi';

const Navbar = () => {
  const setMenuAtom = useSetAtom(menuAtom);
  const setShowPreview = useSetAtom(previewAtom);

  const { handleSubmit } = useFormContext<MenuFormInputs>();

  const handlePreview: SubmitHandler<MenuFormInputs> = (values) => {
    setMenuAtom(values);
    setShowPreview(true);
  };

  return (
    <nav className="fixed top-0 right-0 left-0 flex items-center justify-between bg-white px-3 py-2 z-50">
      <div className="flex flex-row items-center">
        <Link href="/">
          <Button color="ghost" size="sm">
            <Image
              src="/images/logoBW.png"
              alt="Website Logo"
              width={24}
              height={24}
            />
          </Button>
        </Link>
        <FiChevronRight />
        <Link href="/">
          <Button color="ghost" size="sm">
            Easy-Menu
          </Button>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <Button
          type="button"
          color="ghost"
          size="sm"
          onClick={handleSubmit(handlePreview)}>
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
