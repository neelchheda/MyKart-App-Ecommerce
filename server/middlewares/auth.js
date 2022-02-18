const admin = require("../firebase/index");

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
