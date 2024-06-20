import { MenuFormInputs } from '@/schemas/menuForm';
import { atom } from 'jotai';

export const menuAtom = atom<MenuFormInputs>({
  title: '',
  subtitle: '',
  productName: '',
  productDescription: '',
  productPrice: 0,
});
export const menuCreated = atom<boolean>(false);
