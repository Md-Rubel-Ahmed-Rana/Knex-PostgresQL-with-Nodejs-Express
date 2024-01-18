import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { rootRoutes } from "./routes/root.routes";
const port = process.env.PORT || 5000;
dotenv.config();

const app: Application = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// base route

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Building a Music Library System server is running",
    data: null,
  });
});

// routes
app.use("/api/v1", rootRoutes);

// 404 route not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Not Found",
    error: "API endpoint you hit is not found",
  });
  next();
});

// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false,
    message: "Something went wrong",
    error: error,
  });
});

// starting application
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
