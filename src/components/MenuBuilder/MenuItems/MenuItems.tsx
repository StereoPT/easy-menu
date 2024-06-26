import { Button } from 'react-daisyui';
import { FiPlus } from 'react-icons/fi';

import { Control, useFieldArray } from 'react-hook-form';
import { MenuFormInputs } from '@/schemas/menuForm';

import MenuItem from './MenuItem';

type MenuItemsProps = {
  control: Control<MenuFormInputs>;
  arrayName: 'products';
};

const MenuItems = ({ control, arrayName }: MenuItemsProps) => {
  const { fields, append, move, remove } = useFieldArray({
    control,
    name: arrayName,
  });

  const addNewItem = () => {
    append({
      name: '',
      description: '',
      price: 0,
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-end px-2">
        <Button
          type="button"
          size="sm"
          shape="square"
          color="primary"
          onClick={addNewItem}>
          <FiPlus size={20} />
        </Button>
      </div>
      {fields.map((field, index) => {
        return (
          <MenuItem
            key={field.id}
            itemIndex={index}
            itemAmount={fields.length}
            removeItem={remove}
            moveItem={move}
          />
        );
      })}
    </div>
  );
};

export default MenuItems;
