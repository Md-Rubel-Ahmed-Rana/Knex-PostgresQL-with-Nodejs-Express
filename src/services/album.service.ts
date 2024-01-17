import { IAlbum } from "../interfaces/album.interface";
import { AlbumArtistModel } from "../model/album.artists.model";
import { AlbumModel } from "../model/album.model";

class Service {
  async findMany() {
    const data = await AlbumModel.findMany();
    return data;
  }

  async findById(id: string) {
    const data = await AlbumModel.findById(id);
    return data?.rows[0];
  }

  async insertOne(data: IAlbum) {
    const [newData] = await AlbumModel.insertOne(data);

    // create album_artist
    if (newData) {
      const albumArtistData = {
        album_id: newData.id,
        artist_id: newData.user_id,
      };
      await AlbumArtistModel.insertOne(albumArtistData);
      return newData;
    } else {
      return "Album did't added";
    }
  }

  async updateOne(id: string, data: IAlbum) {
    const updatedRow = await AlbumModel.updateOne(id, data);
    return updatedRow[0];
  }

  async deleteOne(id: string) {
    const data = await AlbumModel.deleteOne(id);
    return data;
  }
}

export const AlbumService = new Service();
