import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

class CreateUser {
  async execute({ name, email, password, admin = false }: IUserRequest) {
    const userRepositories = getCustomRepository(UserRepositories);

    if (!email) {
      throw new Error("Email incorrect");
    }

    const userExists = await userRepositories.findOne({
      email,
    });

    if (userExists) {
      throw new Error("User already exists");
    }
    const passwordHash = await hash(password, 8);
    const user = userRepositories.create({
      name,
      email,
      password: passwordHash,
      admin,
    });

    await userRepositories.save(user);

    return user;
  }
}

export { CreateUser };
