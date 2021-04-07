import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LogInPage from './pages/LogInPage';
import Profile from './pages/Profile';

function App() {
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <LogInPage />
      </Route>
      <Route  path="/profile/:username">
        <Profile />
      </Route>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
