import { UserRepositories } from "../repositories/UserRepositores";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUser {
  async execute({ name, email, admin }: IUserRequest) {
    const userRepositories = new UserRepositories();

    if (!email) {
      throw new Error("Email incorrect");
    }

    const userExists = userRepositories.findOne({
      email,
    });

    if (userExists) {
      throw new Error("User already exists");
    }

    const user = userRepositories.create({
      name,
      email,
      admin,
    });

    await userRepositories.save(user);

    return user;
  }
}

export { CreateUser };
