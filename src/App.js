import { Switch, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" componenent={Home} />
      <Route exact path="/login" componenent={Login} />
      <Route exact path="/register" componenent={Register} />
    </Switch>
  );
};

export default App;
