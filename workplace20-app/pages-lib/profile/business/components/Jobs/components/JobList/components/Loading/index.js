import Card from 'pages-lib/_components/card';

const Loading = ({
  numberItems = 5
}) => (
    <>
      {
        Array(numberItems)
          .fill(0)
          .map((_) => (
            <Card>
              <Card.Header>
                <div className="animate-pulse bg-gray-200 h-8 w-full">
                </div>
              </Card.Header>
              <Card.Content>
                <div className="animate-pulse bg-gray-200 h-20 w-full">
                </div>
              </Card.Content>
              <Card.Footer>
                <div className="animate-pulse bg-gray-200 h-8 w-full">
                </div>
              </Card.Footer>
            </Card>
          ))
      }
    </>
  )

export default Loading;