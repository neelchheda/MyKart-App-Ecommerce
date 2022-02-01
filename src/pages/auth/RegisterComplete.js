import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
        
      );
      toast.success(
        `Registration Successfull`
      );
      // console.log("RESULT",result)
      if(result.user.emailVerified){
        //remove the email id from local storage because itsnot needed anymore.
        //Get user id token which we will use  woth backend.
        //Redux Store.
        //Redirect.
        window.localStorage.removeItem("emailForRegistration");
        let user = auth.currentUser
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();
      }
    }catch(error){
      console.log(error);
      toast.error(error.messaage);
    }
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

      <input
        type="password"
        className="form-control mt-3"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        autoFocus
      />
      <br></br>

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
