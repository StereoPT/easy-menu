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
  const { register, getFieldState } = useFormContext();
  const { error } = getFieldState(name);

  return (
    <label htmlFor={name} className="form-control w-full">
      {label && (
        <div className="label">
          <span className={cn('label-text', error && 'text-error')}>
            {label}
            {required && <span className="ml-1 text-red-700">*</span>}
          </span>
        </div>
      )}
      <Input
        id={name}
        placeholder={placeholder}
        size={size}
        color={error ? 'error' : 'neutral'}
        {...register(name)}
      />
      {error && (
        <div className="label">
          <span className="label-text-alt text-error">{error?.message}</span>
        </div>
      )}
    </label>
  );
};

export default FormInput;
