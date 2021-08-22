import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { UserRepositories } from "../repositories/UserRepositories";

interface ICompliments {
  tag: string;
  userSender: string;
  userReciever: string;
  message: string;
}
class CreateCompliments {
  async execute({ tag, userSender, userReciever, message }: ICompliments) {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);
    const usersRepository = getCustomRepository(UserRepositories);
    const tagRepository = getCustomRepository(TagsRepositories);

    if (userSender === userReciever) {
      throw Error("User Sender can't not be equal to User Reciever");
    }

    const userRecieverExists = usersRepository.findOne(userReciever);
    if (!userRecieverExists) {
      throw new Error("User does not exist");
    }

    const tagIdExists = tagRepository.findOne(tag);
    if (!tagIdExists) {
      throw new Error("Tag does not exist");
    }

    const newCompliment = complimentsRepository.create({
      user_send: userSender,
      user_receiver: userReciever,
      tag,
      message,
    });

    await complimentsRepository.save(newCompliment);
	return newCompliment;
  }
}

export { CreateCompliments };
