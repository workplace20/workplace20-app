import { SelectChip } from 'pages-lib/_components/controls';
import { useField } from 'formik';

const FormSelectChip = ({ label, options, multipleSelect, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const isError = meta.touched && meta.error;
  const { required, helpText } = props;
  const { setValue } = helpers;    

  return (
    <>
      <label htmlFor={props.id || props.name} className="block text-sm font-medium text-gray-700">{label} {required && <span className="text-red-600">*</span>}</label>
      <SelectChip
        onChange={setValue}
        value={field.value}
        options={options}
        multipleSelect={multipleSelect}
        className="mt-2"
      />
      {helpText && <p class="mt-2 text-sm text-gray-500">{helpText}</p>}
      {isError && <p class="mt-2 text-sm text-red-600" id="email-error">{meta.error}</p>}
    </>
  );
};

export default FormSelectChip;
