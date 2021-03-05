import AppLayout from './index';
import withAuthSecure from 'pages-lib/_hooks/withAuthSecure';

const withAppLayout = (Component) => withAuthSecure(({ ...props }) => {
  return (
    <AppLayout>
      <Component {...props} />
    </AppLayout>
  );
})

export default withAppLayout;