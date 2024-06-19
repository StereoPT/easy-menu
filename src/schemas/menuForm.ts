import * as yup from 'yup';

const TitleMessages = {
  required: 'Menu Title is required!',
};

export const menuFormSchema = yup
  .object({
    title: yup.string().trim().required(TitleMessages.required),
    subtitle: yup.string().trim().optional(),
  })
  .required();

export type MenuFormInputs = yup.InferType<typeof menuFormSchema>;
