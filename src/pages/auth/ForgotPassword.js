import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ForgotPassword = ({hostory})=>{
    const [email,setEmail]=useState("")
    const [loading,setLoading]=useState(false)

    return <div className="container col-md-6 offset-md-3 p-5">
        
        
        <h4>Forgot Password</h4>
        <form onSubmit={handleSubmit}>
          
        </form>
        

    </div>
}

export default ForgotPassword;
