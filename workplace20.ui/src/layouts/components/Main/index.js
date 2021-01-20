import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import MainMenuState from '../../states/mainMenu';

const Main = () => {
  const menuItems = useRecoilValue(MainMenuState);

  return (
    <main className="-mt-24 pb-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <Switch>
            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>
            {
              menuItems.map(item => (
                <Route exact path={item.path} component={item.component} />
              ))
            }
          </Switch>
      </div>
    </main>
  )
}

export default Main;