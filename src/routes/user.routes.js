import { Router } from "express";

import { createUser, getUsers } from "../controllers/user.controller.js";

const router = Router();

// Ruta para crear un usuario
router.post("/create", createUser);

// Ruta para obtener todos los usuarios
router.get("/", getUsers);

export default router;
