import { ErrorMessage, useField, FieldHookConfig } from 'formik';

type Props = {
  label?: string;
  name: string;
  type?: string;
  multiple?: boolean;
  value?: string;
  placeholder?: string;
  validate?: (value: any) => undefined | string | Promise<any>;
};

const InputField = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  return (
    <div className='mb-4'>
      <label htmlFor={field.name} className='mb-2 color-text-secondary'>
        {label}
      </label>
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field}
        {...props}
        autoComplete='off'
      />
      <ErrorMessage component='div' name={field.name} className='error' />
    </div>
  );
};

export default InputField;
