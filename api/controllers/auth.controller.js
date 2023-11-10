import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res) => {
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
