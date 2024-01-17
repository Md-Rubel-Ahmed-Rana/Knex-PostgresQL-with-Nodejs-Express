import { ArtistModel } from "../model/artist.model";
import { IArtist } from "../interfaces/artist.interface";

class Service {
  async findMany() {
    const data = await ArtistModel.findMany();
    return data;
  }

  async findById(id: string) {
    const data = await ArtistModel.findById(id);
    return data?.rows[0];
  }

  async insertOne(data: IArtist) {
    const newData = await ArtistModel.insertOne(data);
    return newData;
  }

  async updateOne(id: string, data: IArtist) {
    const updatedRow = await ArtistModel.updateOne(id, data);
    return updatedRow[0];
  }

  async deleteOne(id: string) {
    const data = await ArtistModel.deleteOne(id);
    return data;
  }
}

export const ArtistService = new Service();
