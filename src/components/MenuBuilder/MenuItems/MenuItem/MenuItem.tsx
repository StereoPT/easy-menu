import {
  FieldValues,
  UseFieldArrayInsert,
  UseFieldArrayRemove,
} from 'react-hook-form';

import FormInput from '@/components/FormInput/FormInput';
import MenuItemOptions from './MenuItemOptions';

import useFloatingOptions from '@/hooks/useFloatingOptions';
import { Draggable } from '@hello-pangea/dnd';
import { cn } from '@/utils/cn';

type MenuItemProps = {
  category: string;
  itemIndex: number;
  itemAmount: number;
  insertItem: UseFieldArrayInsert<FieldValues, `${string}.items`>;
  removeItem: UseFieldArrayRemove;
};

const MenuItem = ({
  category,
  itemIndex,
  itemAmount,
  insertItem,
  removeItem,
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

  const handleInsertItem = (after: number) => {
    insertItem(after, {
      name: '',
      description: '',
      price: 0,
    });
    setIsOpen(false);
  };

  const handleRemoveItem = (item: number) => {
    removeItem(item);
    setIsOpen(false);
  };

  return (
    <Draggable
      key={`item[${itemIndex}]`}
      draggableId={`item-${itemIndex}`}
      index={itemIndex}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps}>
          <div
            className="flex flex-col gap-2 w-full p-3 bg-neutral-100 rounded-xl"
            ref={refs.setReference}
            {...getReferenceProps()}>
            <div className="flex flex-col lg:flex-row justify-between gap-2">
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
                insertItem={handleInsertItem}
                removeItem={handleRemoveItem}
                dragHandleProps={provided.dragHandleProps}
              />
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default MenuItem;
