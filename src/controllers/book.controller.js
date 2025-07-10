import { Book } from "../models/book.model.js";

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate("borrowerId", "name email");
    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id).populate("borrowerId", "name email");

    if (!book) return res.status(404).json({ message: "Libro no encontrado" });

    res.json(book);
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createBook = async (req, res) => {
  try {
    if (!req.body.title)
      return res.status(400).json({ message: "Title is required" });

    const book = await Book.create(req.body);

    res.status(201).json(book);
  } catch (error) {
    console.error("Error creating book:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, year, available, borrowerId, borrowedAt } = req.body;

    const book = await Book.findByIdAndUpdate(
      id,
      { title, author, year, available, borrowerId, borrowedAt },
      { new: true }
    );

    if (!book) return res.status(404).json({ message: "Libro no encontrado" });

    res.json(book);
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) return res.status(404).json({ message: "Libro no encontrado" });

    res.json({ message: "Libro eliminado correctamente" });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
