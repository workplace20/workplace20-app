import {
  Card,
  CardContent,
} from 'pages-lib/_components/card';

const Error = () => (
  <Card>
    <CardContent>
      <div class="text-sm text-red-600 h-80 text-center">Something went wrong on loading job detail</div>
    </CardContent>
  </Card>
)

export default Error;