import { Model } from "../database/knex";
import { IAlbumArtist } from "../interfaces/album.artists.interface";

export class AlbumArtistModel {
  static tableName: string = "album_artists";

  public static async findMany() {
    return Model.select("*").from(this.tableName);
  }

  public static async insertOne(data: IAlbumArtist) {
    return Model(this.tableName).insert(data).returning("*");
  }

  public static async findById(id: string) {
    return Model.raw(`select * from ${this.tableName} where id = ${id}`);
  }

  public static async updateOne(id: string, data: IAlbumArtist) {
    return Model(this.tableName).where({ id }).update(data).returning("*");
  }

  public static async deleteOne(id: string) {
    return Model(this.tableName).where({ id }).del().returning("*");
  }
}
