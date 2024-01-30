import jwt from "jsonwebtoken";
import { JWT_KEY } from "../config.js";

export const verifyToken = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(400).json("NO AUTHORIZATION");
    }

    const user = await new Promise((resolve, reject) => {
      jwt.verify(token, JWT_KEY, (err, encoded) => {
        if (err) reject(err);
        resolve(encoded);
      });
    });
    req.user = user;
    next();
  } catch (error) {
    console.error("Error en verifyToken:", error);
    return res.status(500).json(error);
  }
};

export const verifyTokenAndAdmin = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      console.log("No se encontró el token.");
      return res.status(404).json("NO AUTHORIZATION");
    }

    const user = await new Promise((resolve, reject) => {
      jwt.verify(token, JWT_KEY, (err, encoded) => {
        if (err) reject(err);
        resolve(encoded);
      });
    });

    console.log("Usuario verificado:", user);

    req.user = user;
    if (user.isAdmin) {
      next();
    } else {
      console.log("Usuario no es administrador.");
      return res.status(403).json("FORBIDDEN: Not an admin");
    }
  } catch (error) {
    console.error("Error en verifyTokenAndAdmin:", error);
    return res.status(500).json(error);
  }
};
