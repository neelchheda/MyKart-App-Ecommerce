import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Header from "./components/nav/header";
import RegisterComplete from "./pages/auth/RegisterComplete";
import ForgotPassword from "./pages/auth/ForgotPassword"


import {auth} from './firebase';
import { useDispatch } from "react-redux";
import { useEffect } from "react";


const App = () => {
const dispatch = useDispatch();

//to check firebasefromauth
useEffect(()=>{
  const unsubscribe= auth.onAuthStateChanged(async(user) =>{

    if(user){

      const idTokenResult = await user.getIdToken();
      console.log("user",user);
      dispatch({
        type:'LOGGED_IN_USER',
        payload:{
          email:user.email,
          token:idTokenResult,
        },
      });
    }
  });
  //cleanup
  return()=> unsubscribe();

},[])



  return (
    <>
      <Router>
        <Header />
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/register/complete" component={RegisterComplete} />
          <Route exact path="/forgot/password" component={ForgotPassword} />
        </Switch>
      </Router>
    </>
  );
};

export default App;