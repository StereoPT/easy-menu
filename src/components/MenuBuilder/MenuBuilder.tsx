import {
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSetAtom } from 'jotai';

import MenuHeader from './MenuHeader/MenuHeader';
import MenuItem from './MenuItem/MenuItem';

import { menuAtom } from '@/store/menu.atom';

import { MenuFormInputs, menuFormSchema } from '@/schemas/menuForm';
import { Button, Card } from 'react-daisyui';
import { FiPlus } from 'react-icons/fi';

import { useModal } from '@/hooks/useModal';
import MenuModal from './MenuModal/MenuModal';

const MenuBuilder = () => {
  const setMenuAtom = useSetAtom(menuAtom);

  const {
    modal: menuModal,
    openModal,
    closeModal,
  } = useModal({
    children: <MenuModal closeModal={() => closeModal()} />,
  });

  const methods = useForm<MenuFormInputs>({
    resolver: yupResolver(menuFormSchema),
    defaultValues: {
      products: [{}],
    },
  });

  const { handleSubmit, reset, control } = methods;

  const { fields, append, move, remove } = useFieldArray({
    control,
    name: 'products',
  });

  const addNewItem = () => {
    append({
      name: '',
      description: '',
      price: 0,
    });
  };

  const resetForm = () => {
    reset();
  };

  const onFormSubmit: SubmitHandler<MenuFormInputs> = (values) => {
    setMenuAtom(values);
    openModal();
  };

  return (
    <>
      <Card className="border border-base-200 border-opacity-20 bg-base-100 shadow-lg w-[560px]">
        <Card.Body>
          <h2 className="card-title">Create Menu</h2>
          <p className="mb-4">Fill the form to create your personal menu.</p>
          <FormProvider {...methods}>
            <form
              className="flex flex-col items-center gap-4"
              onSubmit={handleSubmit(onFormSubmit)}>
              <div className="flex flex-col gap-8 w-full">
                <MenuHeader />
                <div className="flex flex-col gap-2">
                  <div className="flex justify-end px-2">
                    <Button
                      type="button"
                      size="sm"
                      shape="square"
                      color="primary"
                      onClick={addNewItem}>
                      <FiPlus size={20} />
                    </Button>
                  </div>
                  {fields.map((field, index) => {
                    return (
                      <MenuItem
                        key={field.id}
                        itemIndex={index}
                        itemAmount={fields.length}
                        removeItem={remove}
                        moveItem={move}
                      />
                    );
                  })}
                </div>
                <div className="card-actions justify-end">
                  <Button type="button" color="neutral" onClick={resetForm}>
                    Reset
                  </Button>
                  <Button type="submit" color="primary">
                    Create
                  </Button>
                </div>
              </div>
            </form>
          </FormProvider>
        </Card.Body>
      </Card>
      {menuModal}
    </>
  );
};

export default MenuBuilder;
