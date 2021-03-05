import Card from 'pages-lib/_components/card';
import { H3 } from 'pages-lib/_components/typography';

const Loading = () => (
  <Card>
    <Card.Header>
      <H3 className="py-2">
        Add Job
        </H3>
    </Card.Header>
    <Card.Content>
      <div className="animate-pulse bg-gray-200 h-80 w-full">
      </div>
    </Card.Content>
    <Card.Footer>
      <div className="animate-pulse bg-gray-200 h-8 w-full">
      </div>
    </Card.Footer>
  </Card>
)

export default Loading;