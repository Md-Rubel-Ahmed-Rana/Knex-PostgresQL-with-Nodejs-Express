import express, { Application } from "express";
import dotenv from "dotenv";
import { rootRoutes } from "./routes/root.routes";
const port = process.env.PORT || 5000;
dotenv.config();

const app: Application = express();

app.use(express.json());

// routes
app.use("/api/v1", rootRoutes);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
