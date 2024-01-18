import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const verifyJwt = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Did't provide access token",
        error: "You have not sent your access token",
      });
    }

    const extractedToken = token?.split(" ")[1] as string;

    const isVerified: any = jwt.verify(
      extractedToken,
      process.env.JWT_SECRET as string
    );

    if (!isVerified) {
      return res.status(500).json({
        success: false,
        message: "Invalid token",
        error: "Your provide access token is not valid",
      });
    }

    req.email = isVerified.email;
    req.id = isVerified.id;
    next();
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Something went wrong to verify token",
      error: error.message,
    });
  }
};

export default verifyJwt;
