import DatePicker from "react-datepicker";
import { useField } from 'formik';

const FormDatePicker = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const isError = meta.touched && meta.error;
  const { required, helpText } = props;

  const onChangeDate = date => {        
    const { setValue } = helpers;    
    if (!date) {
      setValue(null);
    } else {   
      setValue(date);
    }
  }

  return (
    <>
      <label htmlFor={props.id || props.name} className="block text-sm font-medium text-gray-700">{label} {required && <span className="text-red-600">*</span>}</label>
      <DatePicker
        {...field}
        {...props}
        selected={field.value !== '' ? field.value : null}
        onChange={onChangeDate}
        className={`mt-1 ${isError ? 'focus:outline-none focus:ring-red-500 focus:border-red-500 border-red-300' : 'focus:ring-orange-500 focus:border-orange-500 border-gray-300'} block w-full shadow-sm sm:text-sm  rounded-md`}
      />
      { helpText && <p class="mt-2 text-sm text-gray-500">{helpText}</p> }
      { isError && <p class="mt-2 text-sm text-red-600" id="email-error">{meta.error}</p> }
    </>
  );
};

export default FormDatePicker;