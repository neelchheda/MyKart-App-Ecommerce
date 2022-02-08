import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ForgotPassword = ({hostory})=>{
    const [email,setEmail]=useState("")
    const [loading,setLoading]=useState(false)
}

export default ForgotPassword;
