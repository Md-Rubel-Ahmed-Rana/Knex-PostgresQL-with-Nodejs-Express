import { Request, Response } from "express";
import { SongService } from "../services/song.service";

class Controller {
  async findMany(req: Request, res: Response) {
    try {
      const data = await SongService.findMany();
      res.status(200).json({
        success: true,
        message: "Songs found",
        data: data,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error finding songs",
        error: error.message,
      });
    }
  }

  async findSongsByAlbum(req: Request, res: Response) {
    try {
      const album_id = Number(req.params.album_id);
      const data = await SongService.findSongsByAlbum(album_id);
      res.status(200).json({
        success: true,
        message: "Songs found",
        data: data,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error finding songs",
        error: error.message,
      });
    }
  }
  async findSongsByArtist(req: Request, res: Response) {
    try {
      const user_id = Number(req.params.user_id);
      const data = await SongService.findSongsByArtist(user_id);
      res.status(200).json({
        success: true,
        message: "Songs found",
        data: data,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error finding songs",
        error: error.message,
      });
    }
  }

  async insertOne(req: Request, res: Response) {
    try {
      const newData = await SongService.insertOne(req.body);
      res.status(201).json({
        success: true,
        message: "Song created",
        data: newData,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error creating song",
        error: error.message,
      });
    }
  }

  async updateOne(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const updatedRow = await SongService.updateOne(id, req.body);
      res.status(200).json({
        success: true,
        message: "Song updated",
        data: updatedRow,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error updating song",
        error: error.message,
      });
    }
  }

  async deleteOne(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await SongService.deleteOne(id);
      res.status(200).json({
        success: true,
        message: "Song deleted",
        data: null,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error deleting song",
        error: error.message,
      });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const data = await SongService.findById(id);
      res.status(200).json({
        success: true,
        message: "Song found",
        data: data,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error finding song",
        error: error.message,
      });
    }
  }
}

export const SongController = new Controller();
