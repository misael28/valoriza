import { Router } from "express";
import { CreateUserController } from "../src/controllers/createUser";
import { CreateTagController } from "./controllers/createTag";
import { ensureAdmin } from "../src/middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/authenticateUser";
import { CreateComplimentController } from "./controllers/createCompliments";

const router = Router();
const createUser = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateTagController();
router.post("/users", createUser.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/auth", authenticateUserController.handle);
router.post("/compliments", createComplimentController.handle);
export { router };
