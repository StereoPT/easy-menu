import { UseFieldArrayRemove } from 'react-hook-form';

import FormInput from '@/components/FormInput/FormInput';
import MenuItemOptions from './MenuItemOptions';

import useFloatingOptions from '@/hooks/useFloatingOptions';
import { DraggableProvided } from '@hello-pangea/dnd';
import { cn } from '@/utils/cn';

type MenuItemProps = {
  category: string;
  itemIndex: number;
  itemAmount: number;
  addItem: (after: number) => void;
  removeItem: UseFieldArrayRemove;
  provided: DraggableProvided;
};

const MenuItem = ({
  category,
  itemIndex,
  itemAmount,
  addItem,
  removeItem,
  provided,
}: MenuItemProps) => {
  const {
    refs,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
    isMounted,
    styles,
    setIsOpen,
  } = useFloatingOptions();

  const handleAddItem = (after: number) => {
    addItem(after);
    setIsOpen(false);
  };

  const handleRemoveItem = (item: number) => {
    removeItem(item);
    setIsOpen(false);
  };

  return (
    <div ref={provided.innerRef} {...provided.draggableProps}>
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
      <div
        ref={refs.setFloating}
        style={floatingStyles}
        {...getFloatingProps()}>
        <div
          className={cn(isMounted ? 'block' : 'hidden')}
          style={{ ...styles }}>
          <MenuItemOptions
            itemAmount={itemAmount}
            itemIndex={itemIndex}
            addItem={handleAddItem}
            removeItem={handleRemoveItem}
            dragHandleProps={provided.dragHandleProps}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
