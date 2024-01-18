import { Model } from "../database/knex";
import { ISong } from "../interfaces/song.interface";
import { IUser } from "../interfaces/user.interface";
const knex_populate = require("knex-populate");

export class SongModel {
  static tableName: string = "songs";

  public static async findMany() {
    const songs = await knex_populate(Model, this.tableName)
      .find()
      .populate("users", "user_id", "artist")
      .populate("albums", "album_id", "album")
      .exec();

    songs?.forEach((song: any) => {
      delete song?.artist[0]?.password;
    });

    return songs;
  }

  public static async findSongsByAlbum(album_id: number) {
    const songs = await knex_populate(Model, this.tableName)
      .find({ album_id })
      .populate("users", "user_id", "artist")
      .populate("albums", "album_id", "album")
      .exec();

    songs?.forEach((song: any) => {
      delete song?.artist[0]?.password;
    });

    return songs;
  }

  public static async findSongsByArtist(user_id: number) {
    const songs = await knex_populate(Model, this.tableName)
      .find({ user_id })
      .populate("users", "user_id", "artist")
      .populate("albums", "album_id", "album")
      .exec();

    songs?.forEach((song: any) => {
      delete song?.artist[0]?.password;
    });

    return songs;
  }

  public static async insertOne(data: ISong) {
    return Model(this.tableName).insert(data).returning("*");
  }

  public static async findById(id: number) {
    const [song] = await knex_populate(Model, this.tableName)
      .findById(id)
      .populate("users", "user_id", "artist")
      .populate("albums", "album_id", "album")
      .exec();

    song?.artist?.forEach((artist: Partial<IUser>) => {
      delete artist?.password;
    });

    return song;
  }

  public static async updateOne(id: number, data: ISong) {
    return Model(this.tableName).where({ id }).update(data).returning("*");
  }

  public static async deleteOne(id: number) {
    return Model(this.tableName).where({ id }).del().returning("*");
  }
}
