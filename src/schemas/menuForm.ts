import * as yup from 'yup';

const TitleMessages = {
  required: 'Menu Title is required!',
};

const ProductNameMessages = {
  required: 'Product Name is required!',
};

const ProductPriceMessages = {
  required: 'Product Price is required!',
  number: 'Product Price must be a Number!',
  min: 'Product Price must be greater than 0!',
};

export const menuFormSchema = yup
  .object({
    title: yup.string().trim().required(TitleMessages.required),
    subtitle: yup.string().trim().optional(),
    productName: yup.string().trim().required(ProductNameMessages.required),
    productDescription: yup.string().trim().optional(),
    productPrice: yup
      .number()
      .typeError(ProductPriceMessages.number)
      .required(ProductPriceMessages.required)
      .min(0, ProductPriceMessages.min),
  })
  .required();

export type MenuFormInputs = yup.InferType<typeof menuFormSchema>;
