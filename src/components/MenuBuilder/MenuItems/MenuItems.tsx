import { Button } from 'react-daisyui';
import { FiPlus } from 'react-icons/fi';

import { useFieldArray, useFormContext } from 'react-hook-form';

import MenuItem from './MenuItem';

type MenuItemsProps = {
  arrayName: 'products';
};

const MenuItems = ({ arrayName }: MenuItemsProps) => {
  const { control } = useFormContext();
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
      <div className="flex justify-end">
        <Button
          type="button"
          size="sm"
          color="primary"
          startIcon={<FiPlus size={20} />}
          onClick={addNewItem}>
          Add Item
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
