import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

class Controller {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const token = await AuthService.login(email, password);

      // Set the token in the cookie
      res.cookie("accessToken", token, { httpOnly: true });

      res.status(200).json({
        success: true,
        message: "Login successful",
        token: token,
      });
    } catch (error: any) {
      res.status(401).json({
        success: false,
        message: "Login failed",
        error: error.message,
      });
    }
  }

  async auth(req: Request, res: Response) {
    try {
      const { email } = req.body;
      const user = await AuthService.auth(email);

      res.status(200).json({
        success: true,
        message: "Authentication successful",
        user: user,
      });
    } catch (error: any) {
      res.status(401).json({
        success: false,
        message: "Authentication failed",
        error: error.message,
      });
    }
  }

  async logout(req: Request, res: Response) {
    try {
      res.clearCookie("accessToken");
      res.status(200).json({
        success: true,
        message: "Logout successful",
        data: null,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Logout failed",
        error: error.message,
      });
    }
  }
}

export const AuthController = new Controller();
