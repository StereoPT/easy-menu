import FormInput from '@/components/FormInput/FormInput';
import { UseFieldArrayMove, UseFieldArrayRemove } from 'react-hook-form';
import {
  safePolygon,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  offset,
  useTransitionStyles,
} from '@floating-ui/react';
import { useState } from 'react';
import MenuItemOptions from './MenuItemOptions';

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
  const [isOpen, setIsOpen] = useState(false);

  const { refs, context, floatingStyles } = useFloating({
    placement: 'left',
    strategy: 'fixed',
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(4)],
  });

  const hover = useHover(context, {
    handleClose: safePolygon(),
  });
  const focus = useFocus(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
  ]);

  const { isMounted, styles } = useTransitionStyles(context);

  return (
    <>
      <div
        className="flex justify-between gap-2 w-full p-2 bg-neutral-200 rounded-xl"
        ref={refs.setReference}
        {...getReferenceProps()}>
        <div className="flex flex-col gap-2 basis-2/3">
          <FormInput
            name={`${category}.items.${itemIndex}.name`}
            placeholder="Item Name"
            size="sm"
          />
          <FormInput
            name={`${category}.items.${itemIndex}.description`}
            placeholder="Item Description"
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
      {isMounted && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}>
          <MenuItemOptions
            transitionStyles={styles}
            itemAmount={itemAmount}
            itemIndex={itemIndex}
            removeItem={(item) => {
              removeItem(item);
              setIsOpen(false);
            }}
            moveItem={(from, to) => {
              moveItem(from, to);
              setIsOpen(false);
            }}
          />
        </div>
      )}
    </>
  );
};

export default MenuItem;
