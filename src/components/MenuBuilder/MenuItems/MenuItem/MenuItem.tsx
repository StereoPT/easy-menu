import { UseFieldArrayMove, UseFieldArrayRemove } from 'react-hook-form';

import FormInput from '@/components/FormInput/FormInput';
import MenuItemOptions from './MenuItemOptions';

import useMenuItemOptions from '@/hooks/useMenuItemOptions';

type MenuItemProps = {
  category: string;
  itemIndex: number;
  itemAmount: number;
  removeItem: UseFieldArrayRemove;
  moveItem: UseFieldArrayMove;
};

const MenuItem = ({
  category,
  itemIndex,
  itemAmount,
  removeItem,
  moveItem,
}: MenuItemProps) => {
  const {
    refs,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
    isMounted,
    styles,
    setIsOpen,
  } = useMenuItemOptions();

  const handleRemoveItem = (item: number) => {
    removeItem(item);
    setIsOpen(false);
  };

  const handleMoveItem = (from: number, to: number) => {
    moveItem(from, to);
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="flex flex-col gap-2 w-full p-3 bg-neutral-100 rounded-xl"
        ref={refs.setReference}
        {...getReferenceProps()}>
        <div className="flex justify-between gap-2">
          <div className="flex flex-col gap-2 basis-2/3">
            <FormInput
              name={`${category}.items.${itemIndex}.name`}
              placeholder="Item Name"
              size="sm"
            />
          </div>
          <div className="basis-1/3">
            <FormInput
              name={`${category}.items.${itemIndex}.price`}
              placeholder="Price"
              size="sm"
            />
          </div>
        </div>
        <FormInput
          name={`${category}.items.${itemIndex}.description`}
          placeholder="Item Description"
          size="sm"
        />
      </div>
      {isMounted && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}>
          <MenuItemOptions
            transitionStyles={styles}
            itemAmount={itemAmount}
            itemIndex={itemIndex}
            removeItem={handleRemoveItem}
            moveItem={handleMoveItem}
          />
        </div>
      )}
    </>
  );
};

export default MenuItem;
