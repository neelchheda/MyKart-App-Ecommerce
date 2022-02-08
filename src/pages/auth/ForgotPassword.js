import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ForgotPassword = ({ hostory }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    //

  }

  return (
    <div className="container col-md-6 offset-md-3 p-5">
      <h4>Forgot Password</h4>
      <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control mt-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email Address"
        autoFocus
      />
      <button className="btn btn-primary mt-3" disabled={!email}>
        Submit 
      </button>


      </form>
    </div>
  );
};

export default ForgotPassword;
