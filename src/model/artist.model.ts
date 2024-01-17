import { Model } from "../database/knex";
import { IArtist } from "../interfaces/artist.interface";

export class ArtistModel {
  static tableName: string = "artists";

  public static async all() {
    return Model.select("*").from(this.tableName);
  }

  public static async insert(data: IArtist) {
    return Model(this.tableName).insert(data).returning("*");
  }
  public static async getUserById(id: string) {
    return Model.raw(`select * from ${this.tableName} where id = ${id}`);
  }

  public static async update(id: string, data: IArtist) {
    return Model(this.tableName).where({ id }).update(data).returning("*");
  }

  public static async delete(id: string) {
    return Model(this.tableName).where({ id }).del().returning("*");
  }
}
