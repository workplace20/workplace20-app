import classnames from 'classnames';
import {
  Header,
  Footer
} from './components';

const colorClasses = {
  gray: 'bg-gray-100',
  white: 'bg-white'
}

const MarketingLayout = ({ children, backgroundColor = "white" }) => {
  return (
    <div className={classnames("relative min-h-screen", colorClasses[backgroundColor])}>
      <Header />
      <main class="mx-auto max-w-7xl">
        {children}
      </main>
      <Footer />

    </div>
  )
}

export default MarketingLayout;
