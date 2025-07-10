import { Router } from "express";

import {
  createUser,
  getUsers,
  loginUser,
} from "../controllers/user.controller.js";

const router = Router();

// Rutas de usuarios
router.post("/create", createUser);
router.get("/", getUsers);
router.post("/login", loginUser);

export default router;
