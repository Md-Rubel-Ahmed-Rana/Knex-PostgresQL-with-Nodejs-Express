import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const verifyJwt = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    res.send("Did't provide token");
  }

  const extractedToken = token?.split(" ")[1] as string;

  const isVerified: any = jwt.verify(
    extractedToken,
    process.env.JWT_SECRET as string
  );

  if (!isVerified) {
    res.send("Invalid token");
  }

  req.email = isVerified.email;
  req.id = isVerified.id;
  next();
};

export default verifyJwt;
