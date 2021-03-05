import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from 'pages-lib/_components/card';

const Loading = () => (
  <Card>
    <CardHeader>
      <div className="animate-pulse bg-gray-200 h-8 w-80">
      </div>
    </CardHeader>
    <CardContent>
      <div className="animate-pulse bg-gray-200 h-80 w-full">
      </div>
    </CardContent>
    <CardFooter>
      <div className="animate-pulse bg-gray-200 h-8 w-full">
      </div>
    </CardFooter>
  </Card>
)

export default Loading;