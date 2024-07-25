import { UseFieldArrayRemove, useWatch } from 'react-hook-form';
import { Accordion, Button } from 'react-daisyui';

import MenuItems from '../../MenuItems/MenuItems';
import FormInput from '@/components/FormInput/FormInput';

import { FiTrash2 } from 'react-icons/fi';
import useMenuItemOptions from '@/hooks/useMenuItemOptions';
import MenuCategoryOptions from './MenuCategoryOptions';

type MenuCategoryProps = {
  categoryIndex: number;
  categoryAmount: number;
  addCategory: (after: number) => void;
  removeCategory: UseFieldArrayRemove;
};

const MenuCategory = ({
  categoryIndex,
  categoryAmount,
  addCategory,
  removeCategory,
}: MenuCategoryProps) => {
  const categoryName = useWatch({ name: `categories.${categoryIndex}.name` });

  const {
    refs,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
    isMounted,
    styles,
    setIsOpen,
  } = useMenuItemOptions();

  const handleAddCategory = (after: number) => {
    addCategory(after);
    setIsOpen(false);
  };

  return (
    <>
      <Accordion
        icon="arrow"
        defaultChecked
        ref={refs.setReference}
        {...getReferenceProps()}>
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
      {isMounted && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}>
          <MenuCategoryOptions
            transitionStyles={styles}
            categoryAmount={categoryAmount}
            categoryIndex={categoryIndex}
            addCategory={handleAddCategory}
          />
        </div>
      )}
    </>
  );
};

export default MenuCategory;
