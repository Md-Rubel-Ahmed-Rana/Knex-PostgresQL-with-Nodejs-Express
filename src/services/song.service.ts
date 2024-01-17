import { ISong } from "../interfaces/song.interface";
import { SongModel } from "../model/song.model";

class Service {
  async findMany() {
    const data = await SongModel.findMany();
    return data;
  }
  async findSongsByAlbum(album_id: number) {
    const data = await SongModel.findSongsByAlbum(album_id);
    return data;
  }

  async findSongsByArtist(user_id: number) {
    const data = await SongModel.findSongsByArtist(user_id);
    return data;
  }

  async findById(id: number) {
    const data = await SongModel.findById(id);
    return data?.rows[0];
  }

  async insertOne(data: ISong) {
    const [newData] = await SongModel.insertOne(data);
    return newData;
  }

  async updateOne(id: number, data: ISong) {
    const updatedRow = await SongModel.updateOne(id, data);
    return updatedRow[0];
  }

  async deleteOne(id: number) {
    const data = await SongModel.deleteOne(id);
    return data;
  }
}

export const SongService = new Service();
