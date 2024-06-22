import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSetAtom } from 'jotai';

import MenuHeader from './MenuHeader/MenuHeader';
import MenuItem from './MenuItem/MenuItem';

import { menuAtom, menuCreated } from '@/store/menu.atom';

import { MenuFormInputs, menuFormSchema } from '@/schemas/menuForm';
import { Button, Card } from 'react-daisyui';

const MenuBuilder = () => {
  const setMenuAtom = useSetAtom(menuAtom);
  const setMenuCreated = useSetAtom(menuCreated);

  const methods = useForm<MenuFormInputs>({
    resolver: yupResolver(menuFormSchema),
  });

  const { handleSubmit, reset } = methods;

  const resetForm = () => {
    reset();
    setMenuCreated(false);
  };

  const onFormSubmit: SubmitHandler<MenuFormInputs> = (values) => {
    setMenuAtom(values);
    setMenuCreated(true);
  };

  return (
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
              <MenuItem />
              <div className="card-actions justify-end">
                <Button color="neutral" onClick={resetForm}>
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
  );
};

export default MenuBuilder;
