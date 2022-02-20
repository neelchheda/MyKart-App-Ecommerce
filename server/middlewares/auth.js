const admin = require("../firebase/index");
const User = require("../models/user");

exports.authCheck = async (req, res, next) => {
  // console.log(req.headers);           //get the token
  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);

    // console.log("FIREBASE USER IN AUTHCHECK", firebaseUser);
    req.user = firebaseUser;
    next();
  } catch (err) {
    res.status(401).json({
      err: "INVALID TOKEN",
    });
  }
};

exports.adminCheck = async(req,res,next)=>{
  const {email}=req.user;

  const adminUser = await User.findOne({email:email}).exec()

  if(adminUser.role !== "admin"){
    res.status(403).json({
      err:"Admin resource Access denied.",
    });
  }else{
    next();
  }

};