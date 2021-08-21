import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthentication {
  email: string;
  password: string;
}

class AuthenticateUser {
  async execute({ email, password }: IAuthentication) {
    const userRepositories = getCustomRepository(UserRepositories);

    const userExists = await userRepositories.findOne({ email });
    if (!userExists) {
      throw Error("Email or password incorrect");
    }
    const passwordMatch = await compare(password, userExists.password);

    if (!passwordMatch) {
      throw Error("Email or password incorrect");
    }

    const token = sign(
      {
        email: userExists.email,
      },
      "jwtsecret",
      {
        subject: userExists.id,
        expiresIn: "1d",
      }
    );
    return token;
  }
}

export { AuthenticateUser };
