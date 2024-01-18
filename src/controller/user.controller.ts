import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user.service";

class Controller {
  async findMany(req: Request, res: Response) {
    try {
      const users = await UserService.findMany();
      res.status(200).json({
        success: true,
        message: "Users found",
        data: users,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error finding users",
        error: error.message,
      });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const user = await UserService.findById(id);
      res.status(200).json({
        success: true,
        message: "User found",
        data: user?.rows,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error finding user",
        error: error.message,
      });
    }
  }

  async insertOne(req: Request, res: Response) {
    try {
      const newUser = await UserService.insertOne(req.body);
      res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: newUser,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error inserting user",
        error: error.message,
      });
    }
  }

  async updateOne(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const updatedUser = await UserService.updateOne(id, req.body);
      res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: updatedUser,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error updating user",
        error: error.message,
      });
    }
  }

  async deleteOne(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await UserService.deleteOne(id);
      res.status(200).json({
        success: true,
        message: "User deleted successfully",
        data: null,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error deleting user",
        error: error.message,
      });
    }
  }
}

export const UserController = new Controller();
