import { UseFieldArrayRemove, useWatch } from 'react-hook-form';
import { Accordion, Button } from 'react-daisyui';

import MenuItems from '../MenuItems/MenuItems';
import FormInput from '@/components/FormInput/FormInput';

import { FiTrash2 } from 'react-icons/fi';

type MenuCategoryProps = {
  categoryIndex: number;
  categoryAmount: number;
  removeCategory: UseFieldArrayRemove;
};

const MenuCategory = ({
  categoryIndex,
  categoryAmount,
  removeCategory,
}: MenuCategoryProps) => {
  const categoryName = useWatch({ name: `categories.${categoryIndex}.name` });

  return (
    <Accordion icon="arrow" defaultChecked>
      <Accordion.Title className="border border-base-500 rounded-2xl text-lg font-medium">
        {categoryName || 'Category Name'}
      </Accordion.Title>
      <Accordion.Content className="flex flex-col gap-8">
        <div className="flex justify-between gap-2 pt-4">
          <FormInput
            name={`categories.${categoryIndex}.name`}
            placeholder="Category Name"
            size="sm"
          />
          <Button
            type="button"
            size="sm"
            shape="square"
            color="error"
            disabled={categoryAmount <= 1}
            onClick={() => removeCategory(categoryIndex)}>
            <FiTrash2 size={20} />
          </Button>
        </div>
        <MenuItems category={`categories.${categoryIndex}`} />
      </Accordion.Content>
    </Accordion>
  );
};

export default MenuCategory;
