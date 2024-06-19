import FormInput from '@/components/FormInput/FormInput';

const MenuItem = () => {
  return (
    <div className="flex justify-between gap-2 w-full">
      <div className="flex flex-col gap-2 basis-2/3">
        <div className="w-full">
          <FormInput
            name="productName"
            label="Product Name"
            placeholder="Product Name"
            required
          />
        </div>
        <div className="w-full">
          <FormInput
            name="productDescription"
            label="Product Description"
            placeholder="Product Description"
          />
        </div>
      </div>
      <div className="basis-1/3">
        <FormInput
          name="productPrice"
          label="Price"
          placeholder="Price"
          required
        />
      </div>
    </div>
  );
};

export default MenuItem;
