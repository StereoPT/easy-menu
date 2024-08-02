import dynamic from 'next/dynamic';

import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MenuFormInputs, menuFormSchema } from '@/schemas/menuForm';

import { useAtomValue, useSetAtom } from 'jotai';
import { menuAtom, previewAtom } from '@/store/menu.atom';

import Navbar from '@/components/MenuBuilder/Navbar/Navbar';
import MenuHeader from './MenuHeader/MenuHeader';

import { useModal } from '@/hooks/useModal';
import MenuModal from './MenuModal/MenuModal';
import MenuCategories from './MenuCategories/MenuCategories';

const MenuPreview = dynamic(
  () => import('@/components/MenuBuilder/MenuPreview/MenuPreview'),
  {
    ssr: false,
  },
);

const MenuBuilder = () => {
  const showPreview = useAtomValue(previewAtom);
  const setMenuAtom = useSetAtom(menuAtom);

  const methods = useForm<MenuFormInputs>({
    resolver: yupResolver(menuFormSchema),
    defaultValues: {
      categories: [{ items: [{}] }],
    },
  });

  const { handleSubmit } = methods;

  const {
    modal: menuModal,
    openModal,
    closeModal,
  } = useModal({
    children: <MenuModal closeModal={() => closeModal()} />,
  });

  const onFormSubmit: SubmitHandler<MenuFormInputs> = (values) => {
    setMenuAtom(values);
    openModal();
  };

  return (
    <>
      <FormProvider {...methods}>
        <form className="px-8 py-8 mt-16" onSubmit={handleSubmit(onFormSubmit)}>
          <Navbar />
          <main className="flex flex-col items-center gap-16">
            <div className="flex flex-col gap-4 w-[350px] sm:w-[600px]">
              <div>
                <h2 className="card-title">Create Menu</h2>
                <p className="mb-4">
                  Fill the form to create your personal menu.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col gap-8 w-full">
                  <MenuHeader />
                  <MenuCategories />
                </div>
              </div>
            </div>
          </main>
        </form>
      </FormProvider>
      {menuModal}
      {showPreview && <MenuPreview />}
    </>
  );
};

export default MenuBuilder;
