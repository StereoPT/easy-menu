import { Button, Dropdown } from 'react-daisyui';
import {
  FiArrowDown,
  FiArrowUp,
  FiMoreVertical,
  FiPlus,
  FiTrash2,
} from 'react-icons/fi';

type MenuCategoryOptionsProps = {
  categoryAmount: number;
  categoryIndex: number;
  insertCategory: (after: number) => void;
  removeCategory: (item: number) => void;
  moveCategory: (from: number, to: number) => void;
};

const MenuCategoryOptions = ({
  categoryAmount,
  categoryIndex,
  insertCategory,
  removeCategory,
  moveCategory,
}: MenuCategoryOptionsProps) => {
  return (
    <div className="p-2 flex flex-row gap-2 rounded">
      <Button
        type="button"
        size="xs"
        shape="square"
        color="ghost"
        onClick={() => insertCategory(categoryIndex + 1)}>
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
            disabled={categoryIndex <= 0}
            onClick={() => moveCategory(categoryIndex, categoryIndex - 1)}>
            Move Up
          </Button>
          <Button
            className="justify-start"
            type="button"
            size="xs"
            color="ghost"
            startIcon={<FiArrowDown size={16} />}
            disabled={categoryIndex + 1 >= categoryAmount}
            onClick={() => moveCategory(categoryIndex, categoryIndex + 1)}>
            Move Down
          </Button>
          <Button
            className="justify-start"
            type="button"
            size="xs"
            color="error"
            startIcon={<FiTrash2 size={16} />}
            disabled={categoryAmount <= 1}
            onClick={() => removeCategory(categoryIndex)}>
            Delete Item
          </Button>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default MenuCategoryOptions;
