import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import {useDispatch} from 'react-redux';



const Login = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false);

  let dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try{
        const result = await auth.signInWithEmailAndPassword(email,password);
        // console.log(result)
      const {user} = result;
      const idTokenResult = await user.getIdTokenResult();
      dispatch({
        type:'LOGGED_IN_USER',
        payload:{
          email:user.email,
          token:idTokenResult,
        },
      });
      toast.success(
        `Login Successfull`
      );
      history.push('/');
    }
    catch(error){
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
    
  };
  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email}
        outline="none"
        onChange={(e) => setEmail(e.target.value)}
        autoFocus
        placeholder="Email Address"
      />

      <input
        type="password"
        className="form-control mt-3"
        value={password}
        outline="none"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Passsword"
      />

      <Button
        onClick={handleSubmit}
        className="mt-3"
        type="primary"
        block
        shape="round"
        icon={<MailOutlined />}
        size="large"
        disabled={!email || password.length < 6}
      >
        Login
      </Button>
    </form>
  );
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-10">
          <h4>Login</h4>
          {loginForm()}
        </div>
      </div>
    </div>
  );
};

export default Login;
