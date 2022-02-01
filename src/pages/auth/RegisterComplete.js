import React, { useState , useEffect} from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  useState(() =>{
    setEmail(window.localStorage.getItem('emailForRegistration'))
  },[])
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  const completeRegistrationForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email}
        
        disabled
        placeholder="Email Address"
      />

      <button type="submit" className="btn btn-raised btn-primary mt-2">
        Register
      </button>
    </form>
  );
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-10">
          <h4>Register with password</h4>

          {completeRegistrationForm()}
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
