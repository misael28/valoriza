import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class CreateTag {
  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    if (!name) {
      throw Error("Incorrect name!");
    }

    const tagExists = await tagsRepositories.findOne({
      name,
    });

    if (tagExists) {
      throw Error("Name already exists!");
    }

    const tag = tagsRepositories.create({ name });

    await tagsRepositories.save(tag);

    return tag;
  }
}

export { CreateTag };
