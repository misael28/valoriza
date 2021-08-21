import { Request, Response } from "express";
import { CreateUser as CreateUserService } from "../services/CreateUser";
class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password, admin } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      email,
      password,
      admin,
    });

    return response.json(user);
  }
}

export { CreateUserController };
