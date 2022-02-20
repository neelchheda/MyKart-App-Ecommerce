import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createOrUpdateUser } from "../../functions/auth";

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const { user } = useSelector((state) => ({ ...state }));
  let dispatch = useDispatch();

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));
  }, [history]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    //password validation
    if (!email || !password) {
      toast.error("Check your credentials");
      setPassword("");
      return;
    }

    if (password.length < 6) {
      toast.error("Password shoud be at least 6 characters");
      setPassword("");
      return;
    }
    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      toast.success(`Registration Successfull`);
      // console.log("RESULT",result)
      if (result.user.emailVerified) {
        //remove the email id from local storage because itsnot needed anymore.
        window.localStorage.removeItem("emailForRegistration");
        //Get user id token which we will use  woth backend.
        let user = auth.currentUser;
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();
        //Redux Store.
        console.log("user", user, "idTokenResult", idTokenResult);
        createOrUpdateUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult,
                role: res.data.role,
                _id: res.data._id,
              },
            });
            toast.success(`Login Successfull`);
            history.push("/");
          })
          .catch((err)=>console.log(err));
        //Redirect.
        history.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
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

      <button
        type="submit"
        className="btn btn-raised btn-primary mt-2"
        disabled={!email || password.length < 6}
      >
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
