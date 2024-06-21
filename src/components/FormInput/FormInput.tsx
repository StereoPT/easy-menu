import { useFormContext } from 'react-hook-form';

import { cn } from '@/utils/cn';

type FormInputProps = {
  name: string;
  placeholder: string;
  label?: string;
  required?: boolean;
};

const FormInput = ({
  name,
  label,
  placeholder,
  required = false,
}: FormInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = errors[name];

  return (
    <label htmlFor={name} className="form-control w-full max-w-xs">
      {label && (
        <div className="label">
          <span className={cn('label-text', inputError && 'text-error')}>
            {label}
            {required && <span className="ml-1 text-red-700">*</span>}
          </span>
        </div>
      )}
      <input
        type="text"
        id={name}
        {...register(name)}
        placeholder={placeholder}
        className={cn(
          'input input-bordered w-full max-w-xs',
          inputError && 'input-error',
        )}
      />
      {inputError && (
        <div className="label">
          <span className="label-text-alt text-error">
            {inputError?.message as string}
          </span>
        </div>
      )}
    </label>
  );
};

export default FormInput;
