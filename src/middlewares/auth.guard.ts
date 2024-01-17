import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user.service";

const authGuard = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.id;
  const user = await UserService.findById(id);
  if (!user) {
    res.status(401).json({
      success: false,
      message: "Unauthenticated",
      error: "You are not authenticated user",
    });
  }
  next();
};

export default authGuard;
