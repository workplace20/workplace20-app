import MarketingLayout from './index';

const withMarketingLayout = (Component, backgroundColor = "white") => ({ ...props }) => {
  return (
    <MarketingLayout backgroundColor={backgroundColor}>
      <Component {...props} />
    </MarketingLayout>
  );
}

export default withMarketingLayout;