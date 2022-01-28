import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Header from "./components/nav/header";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
