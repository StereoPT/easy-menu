import { MenuFormInputs } from '@/schemas/menuForm';
import { atom } from 'jotai';

export const menuAtom = atom<MenuFormInputs>({
  title: '',
  subtitle: '',
  categories: [
    {
      name: '',
      products: [
        {
          name: '',
          description: '',
          price: 0,
        },
      ],
    },
  ],
});
