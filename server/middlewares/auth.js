const admin=require("../firebase/index")

exports.authCheck=(req,res,next)=>{
    console.log(req.headers);           //get the token
    next(); 
}