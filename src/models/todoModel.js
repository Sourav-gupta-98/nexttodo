import mongoose, { mongo } from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    unique: true,
  },
  todo: {
    type: String,
    required: [true, "Todo is required"],
    unique: true,
  },
  created_at: {
    type: Date,
    required: [true, "created_at is required"],
  },
  updated_at: {
    type: Date,
    required: [true, "Updated_at is required"],
  },
  status: {
    type: String,
    required: [true, "Status is required"],
  },
  photo: {
    type: String,
    required: [true, "photo is required"],
  },
});

const Todo = mongoose.models.todos || mongoose.model("todos", todoSchema);

export default Todo;
