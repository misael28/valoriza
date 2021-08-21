import { Router } from "express";
import { CreateUserController } from "../src/controllers/createUser";
import { CreateTagController } from "./controllers/createTag";
import { ensureAdmin } from "../src/middlewares/ensureAdmin";
const router = Router();
const createUser = new CreateUserController();
const createTagController = new CreateTagController();

router.post("/users", createUser.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
export { router };
