import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  //second parameter is salt number that's combined with our password to encrypt it
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({
      message: "user created successfully!",
    });
  } catch (error) {
    next(error);
  }
};

//checking if user is a real user
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email: email });
    if (!validUser) return next(errorHandler(404, "User not found!"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong credentials"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    //destructuring the user object, excluding the password
    //...rest collects the rest of the properties from 'validUser._doc into a new 'rest' object
    //validUser._doc accesses the raw data of the mongoose document being sent in
    const { password: pass, ...rest } = validUser._doc;
    // Code to use to set expiration to 7 days from now
    // expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    // setting an http-only cookie with the JWT token
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
