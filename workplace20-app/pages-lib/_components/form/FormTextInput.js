import { useField } from 'formik';

const FormTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;
  const {required, helpText} = props;

  return (
    <>
      <label htmlFor={props.id || props.name} className="block text-sm font-medium text-gray-700">{label} {required && <span className="text-red-600">*</span>}</label>
      <input 
        {...field} 
        {...props} 
        className={`mt-1 ${isError ? 'focus:outline-none focus:ring-red-500 focus:border-red-500 border-red-300' : 'focus:ring-orange-500 focus:border-orange-500 border-gray-300'} block w-full shadow-sm sm:text-sm  rounded-md`}
      />
      { helpText && <p class="mt-2 text-sm text-gray-500">{helpText}</p> }
      { isError && <p class="mt-2 text-sm text-red-600" id="email-error">{meta.error}</p> }
    </>
  );
};

export default FormTextInput;