import { IAlbum } from "../interfaces/album.interface";
import { AlbumArtistModel } from "../model/album.artists.model";
import { AlbumModel } from "../model/album.model";

const findMany = async () => {
  const data = await AlbumModel.findMany();
  return data;
};

const findById = async (id: string) => {
  const data = await AlbumModel.findById(id);
  return data?.rows[0];
};

const insertOne = async (data: IAlbum) => {
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
};

const updateOne = async (id: string, data: IAlbum) => {
  const updatedRow = await AlbumModel.updateOne(id, data);
  return updatedRow[0];
};

const deleteOne = async (id: string) => {
  const data = await AlbumModel.deleteOne(id);
  return data;
};

export const AlbumService = {
  findMany,
  insertOne,
  updateOne,
  findById,
  deleteOne,
};
