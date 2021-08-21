import { Request, Response } from "express";
import { AuthenticateUser } from "../services/AuthenticateUser";
class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const AuthenticateUserController = new AuthenticateUser();

    const token = await AuthenticateUserController.execute({ email, password });

    return res.status(200).json({ token });
  }
}

export { AuthenticateUserController };
