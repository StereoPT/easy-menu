import { CSSProperties } from 'react';
import { Button, Dropdown } from 'react-daisyui';
import {
  FiArrowDown,
  FiArrowUp,
  FiMoreVertical,
  FiPlus,
  FiTrash2,
} from 'react-icons/fi';

type MenuItemOptionProps = {
  transitionStyles: CSSProperties;
  itemAmount: number;
  itemIndex: number;
  addItem: (after: number) => void;
  removeItem: (item: number) => void;
  moveItem: (from: number, to: number) => void;
};

const MenuItemOptions = ({
  transitionStyles,
  itemAmount,
  itemIndex,
  addItem,
  removeItem,
  moveItem,
}: MenuItemOptionProps) => {
  return (
    <div
      className="p-2 flex flex-row gap-2 rounded"
      style={{ ...transitionStyles }}>
      <Button
        type="button"
        size="xs"
        shape="square"
        color="ghost"
        onClick={() => addItem(itemIndex + 1)}>
        <FiPlus size={16} />
      </Button>

      <Dropdown>
        <Dropdown.Toggle button={false}>
          <Button type="button" size="xs" shape="square" color="ghost">
            <FiMoreVertical size={16} />
          </Button>
        </Dropdown.Toggle>
        <Dropdown.Menu className="w-44 gap-2">
          <Button
            className="justify-start"
            type="button"
            size="xs"
            color="ghost"
            startIcon={<FiArrowUp size={16} />}
            disabled={itemIndex <= 0}
            onClick={() => moveItem(itemIndex, itemIndex - 1)}>
            Move Up
          </Button>
          <Button
            className="justify-start"
            type="button"
            size="xs"
            color="ghost"
            startIcon={<FiArrowDown size={16} />}
            disabled={itemIndex + 1 >= itemAmount}
            onClick={() => moveItem(itemIndex, itemIndex + 1)}>
            Move Down
          </Button>
          <Button
            className="justify-start"
            type="button"
            size="xs"
            color="error"
            startIcon={<FiTrash2 size={16} />}
            disabled={itemAmount <= 1}
            onClick={() => removeItem(itemIndex)}>
            Delete Item
          </Button>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default MenuItemOptions;
