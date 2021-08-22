import { Request, Response } from "express";
import { CreateCompliments } from "../services/CreateCompliments";
class CreateComplimentController {
  async handle(req: Request, res: Response) {
    const { userSender, userReciever, tag, message } = req.body;

    const createCompliment = new CreateCompliments();

    const compliment = await createCompliment.execute({
      userSender,
      userReciever,
      tag,
      message,
    });

    res.json(compliment);
  }
}

export { CreateComplimentController };
