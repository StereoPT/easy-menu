import dynamic from 'next/dynamic';

import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MenuFormInputs, menuFormSchema } from '@/schemas/menuForm';

import { useAtomValue, useSetAtom } from 'jotai';
import { menuAtom, previewAtom } from '@/store/menu.atom';

import Navbar from '@/components/MenuBuilder/Navbar/Navbar';
import MenuHeader from './MenuHeader/MenuHeader';

import { Button, Card } from 'react-daisyui';

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

  const { handleSubmit, reset } = methods;

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

  const onFormReset = () => {
    reset();
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Navbar />
          <main className="flex flex-col items-center gap-16 p-4 my-8">
            <Card className="border border-base-200 border-opacity-20 bg-base-100 shadow-lg w-[600px]">
              <Card.Body>
                <h2 className="card-title">Create Menu</h2>
                <p className="mb-4">
                  Fill the form to create your personal menu.
                </p>
                <div className="flex flex-col items-center gap-4">
                  <div className="flex flex-col gap-8 w-full">
                    <MenuHeader />
                    <MenuCategories />
                    <div className="card-actions justify-end">
                      <Button
                        type="button"
                        color="neutral"
                        onClick={onFormReset}>
                        Reset
                      </Button>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </main>
        </form>
      </FormProvider>
      {menuModal}
      {showPreview && <MenuPreview />}
    </>
  );
};

export default MenuBuilder;
