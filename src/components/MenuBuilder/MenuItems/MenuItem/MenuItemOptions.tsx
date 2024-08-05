import { cn } from '@/utils/cn';
import { DraggableProvidedDragHandleProps } from '@hello-pangea/dnd';
import { Button } from 'react-daisyui';
import { FiMove, FiPlus, FiTrash2 } from 'react-icons/fi';

type MenuItemOptionProps = {
  itemAmount: number;
  itemIndex: number;
  insertItem: (after: number) => void;
  removeItem: (item: number) => void;
  dragHandleProps: DraggableProvidedDragHandleProps | null;
};

const MenuItemOptions = ({
  itemAmount,
  itemIndex,
  insertItem,
  removeItem,
  dragHandleProps,
}: MenuItemOptionProps) => {
  return (
    <div className="p-2 flex flex-col lg:flex-row gap-1 rounded">
      <Button
        type="button"
        size="xs"
        shape="square"
        color="ghost"
        onClick={() => insertItem(itemIndex + 1)}>
        <FiPlus size={16} />
      </Button>
      {itemAmount > 1 && (
        <Button
          type="button"
          size="xs"
          shape="square"
          color="error"
          onClick={() => removeItem(itemIndex)}>
          <FiTrash2 size={16} />
        </Button>
      )}
      <Button
        type="button"
        size="xs"
        shape="square"
        color="ghost"
        {...dragHandleProps}>
        <FiMove size={16} />
      </Button>
    </div>
  );
};

export default MenuItemOptions;
