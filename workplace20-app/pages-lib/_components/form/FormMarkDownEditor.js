import dynamic from 'next/dynamic';
import classnames from 'classnames';
import { useField } from 'formik';
import ReactMarkdown from "react-markdown";
import 'react-markdown-editor-lite/lib/index.css';

const Editor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false
});

const FormMarkDownEditor = ({
  label,
  options,
  required,
  helpText,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const isError = meta.touched && meta.error;
  const { setValue } = helpers;

  const markDownClass = classnames(
            'shadow-sm block w-full sm:text-sm rounded-md',
            {
              'focus:outline-none focus:ring-red-500 focus:border-red-500 border-red-300': isError,
              'focus:ring-orange-500 focus:border-orange-500 border-gray-300': !isError
            }
          );

  const handleEditorChange = ({ text }) => setValue(text);

  return (
    <>
      <label htmlFor={props.id || props.name} className="block text-sm font-medium text-gray-700">{label} {required && <span className="text-red-600">*</span>}</label>
      <Editor
        name={field.name}
        value={field.value}
        style={{
          height: "400px",
          marginTop: "16px"
        }}
        config={{
          markdownClass: markDownClass,
          htmlClass: "prose max-w-none"
        }}
        onChange={handleEditorChange}
        renderHTML={text => <ReactMarkdown>{text}</ReactMarkdown>}
      />
      {helpText && <p class="mt-2 text-sm text-gray-500">{helpText}</p>}
      {isError && <p class="mt-2 text-sm text-red-600" id="email-error">{meta.error}</p>}
    </>
  )
};

export default FormMarkDownEditor;