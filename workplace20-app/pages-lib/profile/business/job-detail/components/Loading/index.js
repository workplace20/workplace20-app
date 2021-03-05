import Card from 'pages-lib/_components/card';

const Loading = () => (
  <Card>
    <Card.Header>
      <div className="animate-pulse bg-gray-200 h-8 w-80">
      </div>
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