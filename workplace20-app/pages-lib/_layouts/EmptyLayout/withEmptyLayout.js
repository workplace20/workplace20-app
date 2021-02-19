import EmptyLayout from './index';
import withAuthSecure from 'pages-lib/_hooks/withAuthSecure';

const withEmptyLayout = (Component) => withAuthSecure(({ ...props }) => {
  return (
    <EmptyLayout>
      <Component {...props} />
    </EmptyLayout>
  );
})

export default withEmptyLayout;