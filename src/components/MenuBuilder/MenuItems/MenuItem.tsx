import FormInput from '@/components/FormInput/FormInput';
import { Button } from 'react-daisyui';
import { UseFieldArrayMove, UseFieldArrayRemove } from 'react-hook-form';
import { FiArrowDown, FiArrowUp, FiTrash2 } from 'react-icons/fi';

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
  return (
    <div className="flex justify-between gap-2 w-full p-2 bg-neutral-200 rounded-xl">
      <div className="flex flex-col gap-2">
        <Button
          type="button"
          size="sm"
          shape="square"
          color="ghost"
          disabled={itemIndex <= 0}
          onClick={() => moveItem(itemIndex, itemIndex - 1)}>
          <FiArrowUp size={20} />
        </Button>
        <Button
          type="button"
          size="sm"
          shape="square"
          color="ghost"
          disabled={itemIndex + 1 >= itemAmount}
          onClick={() => moveItem(itemIndex, itemIndex + 1)}>
          <FiArrowDown size={20} />
        </Button>
      </div>
      <div className="flex flex-col gap-2 basis-2/3">
        <div className="w-full">
          <FormInput
            name={`${category}.products.${itemIndex}.name`}
            placeholder="Product Name"
            size="sm"
          />
        </div>
        <div className="w-full">
          <FormInput
            name={`${category}.products.${itemIndex}.description`}
            placeholder="Product Description"
            size="sm"
          />
        </div>
      </div>
      <div className="basis-1/3">
        <FormInput
          name={`${category}.products.${itemIndex}.price`}
          placeholder="Price"
          size="sm"
        />
      </div>
      <Button
        type="button"
        size="sm"
        shape="square"
        color="error"
        disabled={itemAmount <= 1}
        onClick={() => removeItem(itemIndex)}>
        <FiTrash2 size={20} />
      </Button>
    </div>
  );
};

export default MenuItem;
