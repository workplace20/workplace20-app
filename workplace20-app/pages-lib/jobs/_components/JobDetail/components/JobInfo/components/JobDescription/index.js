import { TextField } from 'pages-lib/_components/controls';
import ReactMarkdown from 'react-markdown';

const JobDescription = ({
  level,
  english,
  introduction,
  description
}) => (
  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
    <div className="sm:col-span-1">
      <TextField
        label="Level"
        value={level}
      />
    </div>
    <div className="sm:col-span-1">
      <TextField
        label="English"
        value={english}
      />
    </div>
    <div className="sm:col-span-2">
      <TextField
        label="Introduction"
        value={introduction}
      />
    </div>
    <div className="sm:col-span-2">
      <TextField>
        <TextField.Content>
          <ReactMarkdown>
            { description }
          </ReactMarkdown>
        </TextField.Content>
      </TextField>
    </div>
  </dl>
)

export default JobDescription;