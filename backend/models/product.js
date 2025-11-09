import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  total: Number,
  pageSize: Number,
  totalPages: Number,
  products: Array,
});

export default mongoose.model("Product", ProductSchema, "products");
