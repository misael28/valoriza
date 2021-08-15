import { Router } from "express";
import { CreateUserController } from "../src/controllers/createUser";

const router = Router();
const createUser = new CreateUserController();
router.post("/users", createUser.handle);
export { router };
