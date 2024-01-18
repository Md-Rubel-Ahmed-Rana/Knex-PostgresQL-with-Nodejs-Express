import bcrypt from "bcrypt";
import { UserModel } from "../model/user.model";
import jwt from "jsonwebtoken";

class Service {
  async login(email: string, password: string) {
    const user = await UserModel.findByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }

    // match password
    const isMatchedPassword = await bcrypt.compare(password, user.password);
    if (!isMatchedPassword) {
      throw new Error("Incorrect password");
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
  }

  async auth(email: string) {
    const user = await UserModel.findByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}

export const AuthService = new Service();
