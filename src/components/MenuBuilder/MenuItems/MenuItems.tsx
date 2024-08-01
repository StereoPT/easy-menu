import { useFieldArray, useFormContext } from 'react-hook-form';

import MenuItem from './MenuItem/MenuItem';

import { DragDropContext, Droppable, DropResult } from '@hello-pangea/dnd';

type MenuItemsProps = {
  category: string;
};

const MenuItems = ({ category }: MenuItemsProps) => {
  const { control } = useFormContext();
  const { fields, move, insert, remove } = useFieldArray({
    control,
    name: `${category}.items`,
  });

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination || destination.index === source.index) {
      return;
    }

    move(source.index, destination.index);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="category-items">
        {(provided) => (
          <div
            className="flex flex-col gap-2"
            {...provided.droppableProps}
            ref={provided.innerRef}>
            {fields.map((field, index) => {
              return (
                <MenuItem
                  key={field.id}
                  category={category}
                  itemIndex={index}
                  itemAmount={fields.length}
                  insertItem={insert}
                  removeItem={remove}
                />
              );
            })}
            <div>{provided.placeholder}</div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default MenuItems;
