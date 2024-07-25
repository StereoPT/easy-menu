import { CSSProperties, HTMLProps } from 'react';
import { Button } from 'react-daisyui';
import { FiArrowDown, FiArrowUp, FiTrash2 } from 'react-icons/fi';

type MenuItemOptionProps = {
  setFloating: (node: HTMLElement | null) => void;
  floatingStyles: CSSProperties;
  getFloatingProps: (
    userProps?: HTMLProps<HTMLElement>,
  ) => Record<string, unknown>;
  itemAmount: number;
  itemIndex: number;
  removeItem: (item: number) => void;
  moveItem: (from: number, to: number) => void;
};

const MenuItemOptions = ({
  setFloating,
  floatingStyles,
  getFloatingProps,
  itemAmount,
  itemIndex,
  removeItem,
  moveItem,
}: MenuItemOptionProps) => {
  return (
    <div
      className="p-2 flex flex-row gap-2 rounded"
      ref={setFloating}
      style={floatingStyles}
      {...getFloatingProps()}>
      <Button
        type="button"
        size="xs"
        shape="square"
        color="error"
        disabled={itemAmount <= 1}
        onClick={() => removeItem(itemIndex)}>
        <FiTrash2 size={16} />
      </Button>
      <div className="flex flex-col gap-2">
        <Button
          type="button"
          size="xs"
          shape="square"
          color="ghost"
          disabled={itemIndex <= 0}
          onClick={() => moveItem(itemIndex, itemIndex - 1)}>
          <FiArrowUp size={16} />
        </Button>
        <Button
          type="button"
          size="xs"
          shape="square"
          color="ghost"
          disabled={itemIndex + 1 >= itemAmount}
          onClick={() => moveItem(itemIndex, itemIndex + 1)}>
          <FiArrowDown size={16} />
        </Button>
      </div>
    </div>
  );
};

export default MenuItemOptions;
