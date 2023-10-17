const userModel = require("../models/userModel");
const bycrypt = require("bcryptjs");

const loginController = (req, res) => {};

const registerController = async (req, res) => {
  try {
    const existUser = await userModel.findeOne({ email: req.body.email });
    if (existUser) {
      alert("user exist");
    }
    const password = req.body.password;
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);
    req.body.password = hashedPassword;

    const newUser = new userModel(req.body);
    await newUser.save();
    alert("user register ")
  } catch (error) {
    alert(error)
    console.log(error);
  }
};

module.exports = { loginController, registerController };
