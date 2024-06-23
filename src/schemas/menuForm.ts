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

export const menuItemSchema = yup.object({
  name: yup.string().trim().required(ProductNameMessages.required),
  description: yup.string().trim().optional(),
  price: yup
    .number()
    .typeError(ProductPriceMessages.number)
    .nullable()
    .required(ProductPriceMessages.required)
    .min(0, ProductPriceMessages.min),
});

export const menuFormSchema = yup
  .object({
    title: yup.string().trim().required(TitleMessages.required),
    subtitle: yup.string().trim().optional(),
    products: yup.array().min(1).of(menuItemSchema).required(),
  })
  .required();

export type MenuFormInputs = yup.InferType<typeof menuFormSchema>;
