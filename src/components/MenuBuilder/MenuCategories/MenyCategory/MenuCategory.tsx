import {
  FieldValues,
  UseFieldArrayInsert,
  UseFieldArrayMove,
  UseFieldArrayRemove,
  useWatch,
} from 'react-hook-form';
import { Accordion } from 'react-daisyui';

import MenuItems from '../../MenuItems/MenuItems';
import FormInput from '@/components/FormInput/FormInput';

import useFloatingOptions from '@/hooks/useFloatingOptions';
import MenuCategoryOptions from './MenuCategoryOptions';
import { cn } from '@/utils/cn';

type MenuCategoryProps = {
  categoryIndex: number;
  categoryAmount: number;
  insertCategory: UseFieldArrayInsert<FieldValues, 'categories'>;
  removeCategory: UseFieldArrayRemove;
  moveCategory: UseFieldArrayMove;
};

const MenuCategory = ({
  categoryIndex,
  categoryAmount,
  insertCategory,
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
  } = useFloatingOptions();

  const handleInsertCategory = (after: number) => {
    insertCategory(after, {
      name: '',
      items: [{}],
    });
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
          className="z-50"
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}>
          <div
            className={cn(isMounted ? 'block' : 'hidden')}
            style={{ ...styles }}>
            <MenuCategoryOptions
              categoryAmount={categoryAmount}
              categoryIndex={categoryIndex}
              insertCategory={handleInsertCategory}
              removeCategory={handleRemoveCategory}
              moveCategory={handleMoveCategory}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MenuCategory;
