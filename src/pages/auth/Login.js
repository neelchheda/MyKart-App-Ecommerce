import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const config = {
    //   url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
    //   handleCodeInApp: true,
    // };
    // await auth.sendSignInLinkToEmail(email, config);
    // toast.success(
    //   `Email is successfully sent to ${email}. Click the link to complete your registration`
    // );
    // //save user email to your local storage
    // window.localStorage.setItem("emailForRegistration", email);
    // //Clear the state
    // setEmail("");
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

      <button type="submit" className="btn btn-raised btn-primary mt-3">
        Login
      </button>
    </form>
  );
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-10">
          <h4>Register</h4>

          {loginForm()}
        </div>
      </div>
    </div>
  );
};

export default Login;
