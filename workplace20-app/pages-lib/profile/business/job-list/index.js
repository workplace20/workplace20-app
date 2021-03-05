import { withAppLayout } from 'pages-lib/_layouts';
import {
  JobFilter,
  JobList
} from './components';
import { withBusinessProfileLayout } from '../layouts';

const Job = () => {
  return (
    <>
      <div className="w-full">
        <JobFilter />
      </div>
      <div className="space-y-6 lg:px-0 lg:col-span-9 mt-6">
        <JobList />
      </div>
    </>
  )
}

export default withAppLayout(withBusinessProfileLayout(Job));