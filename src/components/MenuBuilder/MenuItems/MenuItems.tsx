import { useFieldArray, useFormContext } from 'react-hook-form';

import MenuItem from './MenuItem/MenuItem';

type MenuItemsProps = {
  category: string;
};

const MenuItems = ({ category }: MenuItemsProps) => {
  const { control } = useFormContext();
  const { fields, move, remove, insert } = useFieldArray({
    control,
    name: `${category}.items`,
  });

  const add = (after: number) => {
    insert(after, {
      name: '',
      description: '',
      price: 0,
    });
  };

  return (
    <div className="flex flex-col gap-2">
      {fields.map((field, index) => {
        return (
          <MenuItem
            key={field.id}
            category={category}
            itemIndex={index}
            itemAmount={fields.length}
            addItem={add}
            removeItem={remove}
            moveItem={move}
          />
        );
      })}
    </div>
  );
};

export default MenuItems;
