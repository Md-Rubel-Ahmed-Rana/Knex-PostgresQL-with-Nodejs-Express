import { Model } from "../database/knex";
import { IUser } from "../interfaces/user.interface";

export class UserModel {
  static tableName: string = "users";

  public static async all() {
    return Model.select("*").from(this.tableName);
  }

  public static async insert(data: IUser) {
    return Model(this.tableName).insert(data).returning("*");
  }
  public static async getUserById(id: string) {
    return Model.raw(`select * from ${this.tableName} where id = ${id}`);
  }

  public static async update(id: string, data: IUser) {
    return Model(this.tableName).where({ id }).update(data).returning("*");
  }

  public static async delete(id: string) {
    return Model(this.tableName).where({ id }).del().returning("*");
  }
}
