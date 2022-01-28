import { Switch, Route, Router } from "react-router-dom";
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
          <Route exact path="/" componenent={Home} />
          <Route exact path="/login" componenent={Login} />
          <Route exact path="/register" componenent={Register} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
