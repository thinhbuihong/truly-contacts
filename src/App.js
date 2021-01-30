import { Route, BrowserRouter as Router, Switch, } from 'react-router-dom';
import { GlobalProvider } from './context/Provider';
// import './App.css';
import { routes } from './routes';

function App() {
  // const element = useRoutes(routes);
  return (
    <GlobalProvider >
      <Switch>
        {routes.map((route, index) => (
          <Route
            path={route.path}
            exact
            render={(props) => <route.component {...props} />}
            key={index}>
          </Route>
        ))}
      </Switch>
    </GlobalProvider>
  );
}

export default App;
