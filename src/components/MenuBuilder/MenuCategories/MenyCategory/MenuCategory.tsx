import {
  UseFieldArrayMove,
  UseFieldArrayRemove,
  useWatch,
} from 'react-hook-form';
import { Accordion } from 'react-daisyui';

import MenuItems from '../../MenuItems/MenuItems';
import FormInput from '@/components/FormInput/FormInput';

import useMenuItemOptions from '@/hooks/useMenuItemOptions';
import MenuCategoryOptions from './MenuCategoryOptions';

type MenuCategoryProps = {
  categoryIndex: number;
  categoryAmount: number;
  addCategory: (after: number) => void;
  removeCategory: UseFieldArrayRemove;
  moveCategory: UseFieldArrayMove;
};

const MenuCategory = ({
  categoryIndex,
  categoryAmount,
  addCategory,
  removeCategory,
  moveCategory,
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

  const handleRemoveCategory = (category: number) => {
    removeCategory(category);
    setIsOpen(false);
  };

  const handleMoveCategory = (from: number, to: number) => {
    moveCategory(from, to);
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
            removeCategory={handleRemoveCategory}
            moveCategory={handleMoveCategory}
          />
        </div>
      )}
    </>
  );
};

export default MenuCategory;
