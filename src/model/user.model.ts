import { Model } from "../database/knex";
import { IUser } from "../interfaces/user.interface";

export class UserModel {
  static tableName: string = "users";

  public static async findMany() {
    const users = await Model.select("*").from(this.tableName);
    users.forEach(function (user) {
      delete user?.password;
    });

    return users;
  }

  public static async insertOne(data: IUser) {
    return Model(this.tableName).insert(data).returning("*");
  }
  public static async findById(id: number) {
    const user = await Model.raw(
      `select * from ${this.tableName} where id = ${id}`
    );
    delete user?.rows[0]?.password;
    return user;
  }

  public static async updateOne(id: number, data: IUser) {
    const [user] = await Model(this.tableName)
      .where({ id })
      .update(data)
      .returning("*");
    delete user?.password;
    return user;
  }

  public static async deleteOne(id: number) {
    return Model(this.tableName).where({ id }).del().returning("*");
  }

  public static async findByEmail(email: string) {
    const user = await Model.select("*")
      .from(this.tableName)
      .where({ email })
      .first();
    delete user?.password;
    return user;
  }
}
