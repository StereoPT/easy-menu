import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import FormInput from '../FormInput/FormInput';
import { MenuFormInputs, menuFormSchema } from '@/schemas/menuForm';

const MenuForm = () => {
  const methods = useForm<MenuFormInputs>({
    resolver: yupResolver(menuFormSchema),
  });

  const { handleSubmit } = methods;

  const onFormSubmit: SubmitHandler<MenuFormInputs> = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className="basis-1/2">
      <FormProvider {...methods}>
        <form
          className="flex flex-col items-center gap-4"
          onSubmit={handleSubmit(onFormSubmit)}>
          <div className="flex flex-col items-center gap-2 w-full">
            <FormInput
              name="title"
              label="Menu Title"
              placeholder="Title"
              required
            />
            <FormInput
              name="subtitle"
              label="Menu Subtitle"
              placeholder="Subtitle"
            />
          </div>
          <div className="flex justify-end max-w-xs w-full">
            <button className="btn btn-sm btn-primary">Submit</button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default MenuForm;
