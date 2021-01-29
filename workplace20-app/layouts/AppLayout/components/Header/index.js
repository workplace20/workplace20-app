import Logo from './components/Logo';
import Notification from './components/Notification';
import ProfileMenu from './components/ProfileMenu';
import MainMenu from './components/MainMenu';
import SearchBox from './components/SearchBox';
import MobileMenuButton from './components/MobileMenuButton';
import MobileMenu from './components/MobileMenu';

const Header = () => (
  <header className="pb-24 bg-gradient-to-r from-orange-500 to-yellow-500">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
        <Logo />
        <div className="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
          <Notification />
          <ProfileMenu />
        </div>
        <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
            <MainMenu />
            <SearchBox />
          </div>
        </div>
        <div className="absolute right-0 flex-shrink-0 lg:hidden">
          <MobileMenuButton />
        </div>
      </div>
    </div>
    <MobileMenu />
  </header>
)

export default Header;