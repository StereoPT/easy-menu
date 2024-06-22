import FormInput from '@/components/FormInput/FormInput';

const MenuItem = () => {
  return (
    <div className="flex justify-between gap-2 w-full p-2 bg-neutral-200 rounded-xl">
      <div className="flex flex-col gap-2 basis-2/3">
        <div className="w-full">
          <FormInput name="productName" placeholder="Product Name" size="sm" />
        </div>
        <div className="w-full">
          <FormInput
            name="productDescription"
            placeholder="Product Description"
            size="sm"
          />
        </div>
      </div>
      <div className="basis-1/3">
        <FormInput name="productPrice" placeholder="Price" size="sm" />
      </div>
    </div>
  );
};

export default MenuItem;
