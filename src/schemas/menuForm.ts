import * as yup from 'yup';

const TitleMessages = {
  required: 'Menu Title is required!',
};

const ItemNameMessages = {
  required: 'Name is required!',
};

const ItemPriceMessages = {
  required: 'Price is required!',
  number: 'Price must be a Number!',
  min: 'Price must be greater than 0!',
};

export const menuItemSchema = yup.object({
  name: yup.string().trim().required(ItemNameMessages.required),
  description: yup.string().trim().optional(),
  price: yup
    .number()
    .typeError(ItemPriceMessages.number)
    .nullable()
    .required(ItemPriceMessages.required)
    .min(0, ItemPriceMessages.min),
});

export const menuCategorySchema = yup.object({
  name: yup.string().trim().required(),
  items: yup.array().min(1).of(menuItemSchema).required(),
});

export const menuFormSchema = yup
  .object({
    title: yup.string().trim().required(TitleMessages.required),
    subtitle: yup.string().trim().optional(),
    categories: yup.array().min(1).of(menuCategorySchema).required(),
  })
  .required();

export type MenuFormInputs = yup.InferType<typeof menuFormSchema>;
