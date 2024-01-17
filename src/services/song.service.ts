import { ISong } from "../interfaces/song.interface";
import { SongModel } from "../model/song.model";

class Service {
  async findMany() {
    const data = await SongModel.findMany();
    return data;
  }

  async findById(id: string) {
    const data = await SongModel.findById(id);
    return data?.rows[0];
  }

  async insertOne(data: ISong) {
    const [newData] = await SongModel.insertOne(data);
    return newData;
  }

  async updateOne(id: string, data: ISong) {
    const updatedRow = await SongModel.updateOne(id, data);
    return updatedRow[0];
  }

  async deleteOne(id: string) {
    const data = await SongModel.deleteOne(id);
    return data;
  }
}

export const SongService = new Service();
