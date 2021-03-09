import Notification from './components/Notification';
import ProfileMenu from './components/ProfileMenu';
import MainMenu from './components/MainMenu';
import MobileMenuButton from './components/MobileMenuButton';
import MobileMenu from './components/MobileMenu';

const Header = () => (
  <header className="pb-24 bg-gradient-to-r from-orange-500 to-orange-300">
    <div className="max-w-7xl mx-auto px-2 lg:pt-4 sm:px-4 lg:px-8">
      <div className="relative h-16 flex items-center justify-between">
        <div className="flex items-center lg:px-0">
          <MainMenu />
        </div>
        
        <div className="absolute right-0 flex-shrink-0 lg:hidden">
          <MobileMenuButton />
        </div>
        
        <div className="hidden lg:block lg:ml-4">
          <div className="flex items-center">
            <Notification />
            <ProfileMenu />
          </div>
        </div>
      </div>
    </div>
    <MobileMenu />
  </header>
)

export default Header;