import { Route, BrowserRouter as Router, Switch, useHistory, } from 'react-router-dom';
import { GlobalProvider } from './context/Provider';
// import './App.css';
import { routes } from './routes';
import isAuthenticated from './utils/isAuthenticated';

const RenderRoute = (route) => {
  const history = useHistory()
  if (route.needsAuth && !isAuthenticated()) {
    history.push('/auth/login');
  }
  return (<Route
    path={route.path}
    exact
    render={(props) => <route.component {...props} />}>

  </Route>)
}

function App() {
  // const element = useRoutes(routes);
  return (
    <GlobalProvider >
      <Switch>
        {routes.map((route, index) => (
          <RenderRoute {...route} key={index} />
        ))}
      </Switch>
    </GlobalProvider>
  );
}

export default App;
