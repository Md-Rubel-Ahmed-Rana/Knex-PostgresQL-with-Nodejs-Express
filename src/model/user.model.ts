import { Model } from "../database/knex";
import { IUser } from "../interfaces/user.interface";

export class UserModel {
  static tableName: string = "users";

  public static async findMany() {
    return Model.select("*").from(this.tableName);
  }

  public static async insertOne(data: IUser) {
    return Model(this.tableName).insert(data).returning("*");
  }
  public static async findById(id: number) {
    return Model.raw(`select * from ${this.tableName} where id = ${id}`);
  }

  public static async updateOne(id: number, data: IUser) {
    return Model(this.tableName).where({ id }).update(data).returning("*");
  }

  public static async deleteOne(id: number) {
    return Model(this.tableName).where({ id }).del().returning("*");
  }

  public static async findByEmail(email: string) {
    return Model.select("*").from(this.tableName).where({ email }).first();
  }
}
