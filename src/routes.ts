import { Router } from "express";
import { CreateUserController } from "../src/controllers/createUser";
import { CreateTagController } from "./controllers/createTag";
import { ensureAdmin } from "../src/middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/authenticateUser";
import { CreateComplimentController } from "./controllers/createCompliments";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();
const createUser = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
router.post("/users", createUser.handle);
router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);
router.post("/auth", authenticateUserController.handle);
router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.handle
);
export { router };
