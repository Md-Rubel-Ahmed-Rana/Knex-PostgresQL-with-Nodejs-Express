import bcrypt from "bcrypt";
import { UserModel } from "../model/user.model";
import jwt from "jsonwebtoken";

const login = async (email: string, password: string) => {
  const user = await UserModel.findByEmail(email);
  if (!user) {
    return "User not found";
  }

  // match password
  const isMatchedPassword = await bcrypt.compare(password, user.password);
  if (isMatchedPassword) {
    return "Did't matched password";
  }

  const jwtPayload = {
    id: user.id,
    email: user.email,
  };

  // generate access token
  const token = jwt.sign(jwtPayload, process.env.JWT_SECRET as string, {
    expiresIn: "360d",
  });
  return `Bearer ${token}`;
};

const auth = async (email: string) => {
  const user = await UserModel.findByEmail(email);
  return user;
};

export const AuthService = {
  login,
  auth,
};
