import { useFieldArray, useFormContext } from 'react-hook-form';

import MenuCategory from './MenyCategory/MenuCategory';

const MenuCategories = () => {
  const { control } = useFormContext();
  const { fields, move, insert, remove } = useFieldArray({
    control,
    name: 'categories',
  });

  const add = (after: number) => {
    insert(after, {
      name: '',
      items: [{}],
    });
  };

  return (
    <div className="flex flex-col gap-2">
      {fields.map((field, index) => {
        return (
          <MenuCategory
            key={field.id}
            categoryIndex={index}
            categoryAmount={fields.length}
            addCategory={add}
            removeCategory={remove}
            moveCategory={move}
          />
        );
      })}
    </div>
  );
};

export default MenuCategories;
