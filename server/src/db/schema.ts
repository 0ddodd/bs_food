import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    id: Number,
    text: String,
    isDone: Boolean,
    isEditing: Boolean
});

export const Todos = mongoose.model("Todos", todoSchema);