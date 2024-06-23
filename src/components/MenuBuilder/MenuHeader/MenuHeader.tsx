import FormInput from '@/components/FormInput/FormInput';
import { Input } from 'react-daisyui';

const MenuHeader = () => {
  return (
    <div className="flex flex-col gap-2">
      <FormInput name="title" placeholder="Menu Title" />
      <FormInput name="subtitle" placeholder="Menu Subtitle" />
    </div>
  );
};

export default MenuHeader;
