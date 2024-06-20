import { useAtomValue } from 'jotai';

import { menuAtom } from '@/store/menu.atom';

const MenuPreview = () => {
  const menuAtomValue = useAtomValue(menuAtom);

  return (
    <div className="flex justify-center basis-1/2">
      {JSON.stringify(menuAtomValue, null, 2)}
    </div>
  );
};

export default MenuPreview;
