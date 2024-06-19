import FormInput from '../FormInput/FormInput';

const MenuForm = () => {
  return (
    <div className="basis-1/2">
      <form className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2 w-full">
          <FormInput label="Menu Title" placeholder="Title" required />
          <FormInput label="Menu Subtitle" placeholder="Subtitle" />
        </div>
      </form>
    </div>
  );
};

export default MenuForm;
