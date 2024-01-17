import { NextFunction, Request, Response } from "express";
import { AlbumService } from "../services/album.service";

class Controller {
  async findMany(req: Request, res: Response) {
    try {
      const data = await AlbumService.findMany();
      res.status(200).json({
        success: true,
        message: "Albums found",
        data: data,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error finding albums",
        error: error.message,
      });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const data = await AlbumService.findById(id);
      res.status(200).json({
        success: true,
        message: "Album found",
        data: data,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error finding album",
        error: error.message,
      });
    }
  }

  async insertOne(req: Request, res: Response) {
    try {
      const newData = await AlbumService.insertOne(req.body);
      res.status(201).json({
        success: true,
        message: "Album created successfully",
        data: newData,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error inserting album",
        error: error.message,
      });
    }
  }

  async updateOne(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const updatedRow = await AlbumService.updateOne(id, req.body);
      res.status(200).json({
        success: true,
        message: "Album updated successfully",
        data: updatedRow,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error updating album",
        error: error.message,
      });
    }
  }

  async deleteOne(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      await AlbumService.deleteOne(id);
      res.status(200).json({
        success: true,
        message: "Album updated successfully",
        data: null,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error deleting album",
        error: error.message,
      });
    }
  }
}

export const AlbumController = new Controller();
