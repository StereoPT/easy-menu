import { Input } from 'react-daisyui';
import { FieldErrors, FieldValues, useFormContext } from 'react-hook-form';

import { cn } from '@/utils/cn';

type FormInputProps = {
  name: string;
  placeholder: string;
  label?: string;
  required?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
};

const getErrors = (name: string, errors: FieldErrors<FieldValues>) => {
  if (name.includes('.')) {
    const [array, index, field] = name.split('.');
    // TODO: Check this later
    // @ts-ignore
    return errors?.[array]?.[index]?.[field];
  } else {
    return errors?.[name];
  }
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

  const inputError = getErrors(name, errors);

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
            {inputError?.message}
          </span>
        </div>
      )}
    </label>
  );
};

export default FormInput;
