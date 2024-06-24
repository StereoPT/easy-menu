import { MenuFormInputs } from '@/schemas/menuForm';
import { atom } from 'jotai';

export const menuAtom = atom<MenuFormInputs>({
  title: '',
  subtitle: '',
  products: [
    {
      name: '',
      description: '',
      price: 0,
    },
  ],
});
