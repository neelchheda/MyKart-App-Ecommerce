import {Switch,Route} from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';


const App = () => {
  return (
    <Switch>
      <Route path="/" componenent={Home}/>
    </Switch>

  )
  };

export default App;
