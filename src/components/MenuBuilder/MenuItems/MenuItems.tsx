import { useFieldArray, useFormContext } from 'react-hook-form';

import MenuItem from './MenuItem/MenuItem';

import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from '@hello-pangea/dnd';

type MenuItemsProps = {
  category: string;
};

const MenuItems = ({ category }: MenuItemsProps) => {
  const { control } = useFormContext();
  const { fields, move, remove, insert } = useFieldArray({
    control,
    name: `${category}.items`,
  });

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination || destination.index === source.index) {
      return;
    }

    move(source.index, destination.index);
  };

  const add = (after: number) => {
    insert(after, {
      name: '',
      description: '',
      price: 0,
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="">
        <Droppable droppableId="category-items">
          {(provided) => (
            <div
              className="flex flex-col gap-2"
              {...provided.droppableProps}
              ref={provided.innerRef}>
              {fields.map((field, index) => {
                return (
                  <Draggable
                    key={`item[${index}]`}
                    draggableId={`item-${index}`}
                    index={index}>
                    {(provided) => (
                      <MenuItem
                        key={field.id}
                        category={category}
                        itemIndex={index}
                        itemAmount={fields.length}
                        addItem={add}
                        removeItem={remove}
                        provided={provided}
                      />
                    )}
                  </Draggable>
                );
              })}
              <div>{provided.placeholder}</div>
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default MenuItems;
