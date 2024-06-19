import FormInput from '@/components/FormInput/FormInput';

const MenuHeader = () => {
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <FormInput name="title" label="Menu Title" placeholder="Title" required />
      <FormInput name="subtitle" label="Menu Subtitle" placeholder="Subtitle" />
    </div>
  );
};

export default MenuHeader;
