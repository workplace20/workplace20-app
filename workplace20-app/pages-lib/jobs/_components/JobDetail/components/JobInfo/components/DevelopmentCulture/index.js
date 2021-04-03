import { TextField } from 'pages-lib/_components/controls';
import ReactMarkdown from 'react-markdown';

const DevelopmentCulture = ({
  developmentCulture
}) => (
  <TextField>
    <TextField.Content>
      <ReactMarkdown>
        {developmentCulture}
      </ReactMarkdown>
    </TextField.Content>
  </TextField>
)

export default DevelopmentCulture;