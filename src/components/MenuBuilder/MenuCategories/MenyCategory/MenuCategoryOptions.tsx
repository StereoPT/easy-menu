import { CSSProperties } from 'react';
import { Button } from 'react-daisyui';
import { FiPlus } from 'react-icons/fi';

type MenuCategoryOptionsProps = {
  transitionStyles: CSSProperties;
  categoryAmount: number;
  categoryIndex: number;
  addCategory: (after: number) => void;
};

const MenuCategoryOptions = ({
  transitionStyles,
  categoryAmount,
  categoryIndex,
  addCategory,
}: MenuCategoryOptionsProps) => {
  return (
    <div
      className="p-2 flex flex-row gap-2 rounded"
      style={{ ...transitionStyles }}>
      <Button
        type="button"
        size="xs"
        shape="square"
        color="ghost"
        onClick={() => addCategory(categoryIndex + 1)}>
        <FiPlus size={16} />
      </Button>
    </div>
  );
};

export default MenuCategoryOptions;
