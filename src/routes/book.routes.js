import { Router } from "express";

import {
  createBook,
  getAllBooks,
  deleteBook,
  getBookById,
  updateBook,
} from "../controllers/book.controller.js";

const router = Router();

// Rutas de libros
router.post("/create", createBook);
router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
