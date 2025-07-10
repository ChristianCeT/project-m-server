import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },

  author: {
    type: String,
  },

  year: {
    type: Number,
  },

  available: {
    type: Boolean,
    default: true,
  },

  borrowerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },

  borrowedAt: {
    type: Date,
    default: null,
  },
});

export const Book = mongoose.model("Book", bookSchema);
