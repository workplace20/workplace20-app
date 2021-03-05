import {
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from 'pages-lib/_components/card';
import { H3 } from 'pages-lib/_components/typography';

const Loading = () => (
  <Card>
    <CardHeader>
      <H3 className="py-2">
        Add Job
        </H3>
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