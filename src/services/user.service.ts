import { IUser } from "../interfaces/user.interface";
import { UserModel } from "../model/user.model";
import bcrypt from "bcrypt";

class Service {
  async findMany() {
    const users = await UserModel.findMany();
    return users;
  }

  async findById(id: number) {
    const user = await UserModel.findById(id);
    return user;
  }

  async insertOne(data: IUser) {
    const hashedPassword = await bcrypt.hash(data.password, 12);
    data.password = hashedPassword;
    const newUser = await UserModel.insertOne(data);
    return newUser;
  }

  async updateOne(id: number, data: IUser) {
    const updatedUser = await UserModel.updateOne(id, data);
    return updatedUser;
  }

  async deleteOne(id: number) {
    const updatedUser = await UserModel.deleteOne(id);
    return updatedUser;
  }
}

export const UserService = new Service();
