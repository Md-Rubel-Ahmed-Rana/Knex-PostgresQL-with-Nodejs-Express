import { NextFunction, Request, Response } from "express";
import { ArtistService } from "../services/artist.service";

class Controller {
  async findMany(req: Request, res: Response) {
    try {
      const data = await ArtistService.findMany();
      res.status(200).json({
        success: true,
        message: "Artists found",
        data: data,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error finding artists",
        error: error.message,
      });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const data = await ArtistService.findById(id);
      res.status(200).json({
        success: true,
        message: "Artist found",
        data: data,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error finding artist",
        error: error.message,
      });
    }
  }

  async insertOne(req: Request, res: Response) {
    try {
      const newData = await ArtistService.insertOne(req.body);
      res.status(201).json({
        success: true,
        message: "Artist created",
        data: newData,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error creating artist",
        error: error.message,
      });
    }
  }

  async updateOne(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const updatedRow = await ArtistService.updateOne(id, req.body);
      res.status(200).json({
        success: true,
        message: "Artist updated",
        data: updatedRow,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error updating artist",
        error: error.message,
      });
    }
  }

  async deleteOne(req: Request, res: Response) {
    try {
      const id = req.params.id;
      await ArtistService.deleteOne(id);
      res.status(200).json({
        success: true,
        message: "Artist deleted",
        data: null,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error deleting artist",
        error: error.message,
      });
    }
  }
}

export const ArtistController = new Controller();
