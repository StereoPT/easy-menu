import { Input } from 'react-daisyui';
import { useFormContext } from 'react-hook-form';

import { cn } from '@/utils/cn';

type FormInputProps = {
  name: string;
  placeholder: string;
  label?: string;
  required?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
};

const FormInput = ({
  name,
  label,
  placeholder,
  required = false,
  size = 'md',
}: FormInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = errors[name];

  return (
    <label htmlFor={name} className="form-control w-full">
      {label && (
        <div className="label">
          <span className={cn('label-text', inputError && 'text-error')}>
            {label}
            {required && <span className="ml-1 text-red-700">*</span>}
          </span>
        </div>
      )}
      <Input
        id={name}
        placeholder={placeholder}
        size={size}
        color={inputError ? 'error' : 'neutral'}
        {...register(name)}
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
