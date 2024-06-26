import { Control } from 'react-hook-form';
import { MenuFormInputs } from '@/schemas/menuForm';

import { Accordion, Button } from 'react-daisyui';

import MenuItems from '../MenuItems/MenuItems';
import FormInput from '@/components/FormInput/FormInput';

import { FiTrash2 } from 'react-icons/fi';

type MenuCategoryProps = {
  control: Control<MenuFormInputs>;
};

const MenuCategory = ({ control }: MenuCategoryProps) => {
  return (
    <Accordion
      className="border border-base-500 join-item"
      icon="arrow"
      defaultChecked>
      <Accordion.Title className="text-lg font-medium">
        Category One
      </Accordion.Title>
      <Accordion.Content className="flex flex-col gap-8">
        <div className="flex justify-between gap-2">
          <FormInput name="category" placeholder="Category Name" size="sm" />
          <Button type="button" size="sm" shape="square" color="error">
            <FiTrash2 size={20} />
          </Button>
        </div>
        <MenuItems control={control} arrayName="products" />
      </Accordion.Content>
    </Accordion>
  );
};

export default MenuCategory;
