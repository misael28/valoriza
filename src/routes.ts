import { Router } from "express";
import { CreateUserController } from "../src/controllers/createUser";
import { CreateTagController } from "./controllers/createTag";
import { ensureAdmin } from "../src/middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/authenticateUser";

const router = Router();
const createUser = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();

router.post("/users", createUser.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/auth", authenticateUserController.handle);
export { router };
