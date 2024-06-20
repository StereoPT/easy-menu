import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSetAtom } from 'jotai';

import MenuHeader from './MenuHeader/MenuHeader';
import MenuItem from './MenuItem/MenuItem';

import { menuAtom } from '@/store/menu.atom';

import { MenuFormInputs, menuFormSchema } from '@/schemas/menuForm';

const MenuBuilder = () => {
  const setMenuAtom = useSetAtom(menuAtom);
  const methods = useForm<MenuFormInputs>({
    resolver: yupResolver(menuFormSchema),
  });

  const { handleSubmit } = methods;

  const onFormSubmit: SubmitHandler<MenuFormInputs> = (values) => {
    setMenuAtom(values);
  };

  return (
    <div className="basis-1/2">
      <FormProvider {...methods}>
        <form
          className="flex flex-col items-center gap-4"
          onSubmit={handleSubmit(onFormSubmit)}>
          <div className="flex flex-col gap-8 w-full">
            <MenuHeader />
            <MenuItem />
            <div className="flex justify-end">
              <button className="btn btn-sm btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default MenuBuilder;
