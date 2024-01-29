import jwt from "jsonwebtoken";
import cp from "crypto-js";
import { ENCRIPT_KEY, JWT_KEY } from "../config.js";
import User from "../model/user.model.js";

export const register = async (req, res) => {
  try {
    const { email, name, password, isAdmin } = req.body;
    if (!email || !password || !name)
      return res.status(200).json({ message: "bad request" });
    const encrypPassword = await cp.AES.encrypt(password, ENCRIPT_KEY);
    const userExist = await User.findOne({ email: email });
    if (userExist)
      return res.status(200).json({ message: "User already exists" });

    const newUser = new User({
      name,
      email,
      password: encrypPassword,
      isAdmin: isAdmin || false,
    });
    const result = await newUser.save();
    if (!result) return res.status(400).json({ message: "bad request" });
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(200).json({ message: "bad request" });
    const user = await User.findOne({ email: email });
    if (!user) return res.status(200).json({ message: "invalid email" });
    const OriginalPassword = cp.AES.decrypt(
      user.password,
      ENCRIPT_KEY
    ).toString(cp.enc.Utf8);
    if (OriginalPassword !== password)
      return res.status(200).json({ message: "invalid password" });

    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      JWT_KEY
    );
    console.log(token);
    res.cookie("token", token);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
