import { RecoilRoot } from 'recoil';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
} from "react-router-dom";

const Layout = () => (
  <RecoilRoot>
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  </RecoilRoot>
)

export default Layout;