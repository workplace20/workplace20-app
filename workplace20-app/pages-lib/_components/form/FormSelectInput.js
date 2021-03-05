import classnames from 'classnames';
import { SelectBox } from "../controls";
import { useField } from 'formik';

const FormDatePicker = ({
  label,
  options,
  required,
  helpText,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const isError = meta.touched && meta.error;
  const { setValue } = helpers;

  return (
    <>
      <label htmlFor={props.id || props.name} className="block text-sm font-medium text-gray-700">{label} {required && <span className="text-red-600">*</span>}</label>
      <SelectBox 
        className={classnames(
          "mt-1",
          {
            'focus:outline-none focus:ring-red-500 focus:border-red-500 border-red-300': isError,
            'focus:outline-none focus:ring-orange-500 focus:border-orange-500': !isError
          }
        )}
        onChange={setValue}
        value={field.value}
        options={options}
      />
      {helpText && <p class="mt-2 text-sm text-gray-500">{helpText}</p>}
      {isError && <p class="mt-2 text-sm text-red-600" id="email-error">{meta.error}</p>}
    </>
  );
};

export default FormDatePicker;
