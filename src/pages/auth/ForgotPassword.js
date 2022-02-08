import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ForgotPassword = ({hostory})=>{
    const [email,setEmail]=useState("")
    const [loading,setLoading]=useState(false)

    return <div className="container col-md-6 offset-md-3 p-5">
        Form to get user email


    </div>
}

export default ForgotPassword;
