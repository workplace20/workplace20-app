import MarketingLayout from './index';

const withMarketingLayout = (Component) => ({ ...props }) => {
  return (
    <MarketingLayout>
      <Component {...props} />
    </MarketingLayout>
  );
}

export default withMarketingLayout;