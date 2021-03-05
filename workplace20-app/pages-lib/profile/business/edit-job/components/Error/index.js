import {
  Card,
  CardContent,
} from 'pages-lib/_components/card';
import { H3 } from 'pages-lib/_components/typography';

const Error = () => (
  <Card>
    <CardContent>
      <div class="text-sm text-red-600 h-80 text-center">Something went wrong</div>
    </CardContent>
  </Card>
)

export default Error;