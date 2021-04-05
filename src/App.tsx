import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import routes from './Config/routes';

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
