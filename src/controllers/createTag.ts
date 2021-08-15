import { Request, Response } from "express";
import { CreateTag } from "../services/CreateTags";

class CreateTagController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const createTagService = new CreateTag();

    const tag = await createTagService.execute(name);

    return response.json(tag);
  }
}

export { CreateTagController };
