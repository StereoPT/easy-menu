import * as yup from 'yup';

const TitleMessages = {
  required: 'Menu Title is required!',
};

export const menuFormSchema = yup
  .object({
    title: yup.string().trim().required(TitleMessages.required),
    subtitle: yup.string().trim().optional(),
    productName: yup.string().trim().required(),
    productDescription: yup.string().trim().optional(),
    productPrice: yup.number().min(0).required(),
  })
  .required();

export type MenuFormInputs = yup.InferType<typeof menuFormSchema>;
