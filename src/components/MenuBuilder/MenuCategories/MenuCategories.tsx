import { Control } from 'react-hook-form';
import { MenuFormInputs } from '@/schemas/menuForm';

import { Button, Join } from 'react-daisyui';

import { FiPlus } from 'react-icons/fi';
import MenuCategory from './MenuCategory';

type MenuCategoriesProps = {
  control: Control<MenuFormInputs>;
};

const MenuCategories = ({ control }: MenuCategoriesProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-end">
        <Button
          type="button"
          size="sm"
          color="primary"
          startIcon={<FiPlus size={20} />}>
          Add Category
        </Button>
      </div>
      <Join className="w-full" vertical={true}>
        <MenuCategory control={control} />
      </Join>
    </div>
  );
};

export default MenuCategories;
