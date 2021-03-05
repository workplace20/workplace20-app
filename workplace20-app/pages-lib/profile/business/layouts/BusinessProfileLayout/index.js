import { withAppLayout } from 'pages-lib/_layouts';
import {
  ProfileOverview,
  SideBar,
} from './components';

const BusinessProfileLayout = ({ children }) => {
  return (
    <div className="gap-4 items-start lg:gap-8">
      <div className="grid gap-4">
        <ProfileOverview />
      </div>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5 lg:pt-12">
        <aside className="py-6 sm:px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
          <SideBar />
        </aside>
        <div className="lg:px-0 lg:col-span-9">
          {children}
        </div>
      </div>
    </div>
  )
}

export default withAppLayout(BusinessProfileLayout);