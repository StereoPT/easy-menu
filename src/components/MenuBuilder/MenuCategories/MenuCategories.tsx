import { useFieldArray, useFormContext } from 'react-hook-form';

import { Button, Join } from 'react-daisyui';

import { FiPlus } from 'react-icons/fi';
import MenuCategory from './MenuCategory';

const MenuCategories = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'categories',
  });

  const addNewCategory = () => {
    append({
      name: '',
      items: [{}],
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
          onClick={addNewCategory}>
          Add Category
        </Button>
      </div>
      {fields.map((field, index) => {
        return (
          <MenuCategory
            key={field.id}
            categoryIndex={index}
            categoryAmount={fields.length}
            removeCategory={remove}
          />
        );
      })}
    </div>
  );
};

export default MenuCategories;
