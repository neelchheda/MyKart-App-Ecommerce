const User = require("../models/user");

exports.createOrUpdateUser = async (req, res) => {
  const { name, picture, email } = req.user;

  const user = await User.findOneAndUpdate(
    {
      email: email,
    },
    {
      name: email.split('@')[0],
      picture: picture,
    },
    {
      new: true,
    }
  );

  if (user) {
    // console.log("USER UPDATED",user)
    res.json(user);
  } else {
    const newUser = await new User({
      name: email.split('@')[0],
      email: email,
      picture: picture,
    }).save();
    res.json(newUser);
  }
};
