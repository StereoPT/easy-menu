type FormInputProps = {
  label: string;
  placeholder: string;
  required?: boolean;
};

const FormInput = ({
  label,
  placeholder,
  required = false,
}: FormInputProps) => {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">
          {label}
          {required && <span className="ml-1 text-red-700">*</span>}
        </span>
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="input input-sm input-bordered w-full max-w-xs"
      />
    </label>
  );
};

export default FormInput;
