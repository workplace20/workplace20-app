import {
  Header,
  Footer
} from './components';

const MarketingLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main class="mx-auto max-w-7xl px-4">
          {children}
      </main>
      <Footer />
    </div>
  )
}

export default MarketingLayout;
