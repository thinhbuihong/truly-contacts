import { Route, BrowserRouter as Router, Switch, } from 'react-router-dom';
// import './App.css';
import { routes } from './routes';

function App() {
  // const element = useRoutes(routes);
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
