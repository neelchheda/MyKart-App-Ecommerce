import React, { useState } from "react";
import UserNav from "../../components/nav/UserNav";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Password = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(password);
    //
    await auth.currentUser
      .updatePassword(password)
      .then(() => {
        //
        setLoading(false);
        toast.success("Password Updated")
      })
      .catch((err) => {
        setLoading(false)
        toast.error(err.message);
      });
  };

  const passwordUpdateForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <h6 mt-2>Your Password</h6>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="Enter New Password"
          autoFocus
          disabled={loading}
        />
        <button 
        className="btn btn-primary mt-2"
        disabled={!password|| loading}
        >
            Submit
            </button>
      </div>
    </form>
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 ">
          <UserNav />
        </div>
        <div className="col-md-4 ">
            {loading ? <h4 className="danger">Loading...</h4> : <h4>Password Update</h4>}
          
          {passwordUpdateForm()}
        </div>
      </div>
    </div>
  );
};

export default Password;
