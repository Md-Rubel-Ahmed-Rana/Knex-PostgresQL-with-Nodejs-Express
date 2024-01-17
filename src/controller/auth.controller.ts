import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await AuthService.login(email, password);

  res.send(user);
};

const auth = async (req: Request, res: Response) => {
  const { email } = req;
  const user = await AuthService.auth(email);
  res.send(user);
};

export const AuthController = {
  login,
  auth,
};
