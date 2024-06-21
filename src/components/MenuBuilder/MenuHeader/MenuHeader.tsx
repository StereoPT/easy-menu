import FormInput from '@/components/FormInput/FormInput';

const MenuHeader = () => {
  return (
    <div className="flex flex-col gap-2">
      <FormInput name="title" placeholder="Menu Title" />
      <FormInput name="subtitle" placeholder="Menu Subtitle" />
    </div>
  );
};

export default MenuHeader;
