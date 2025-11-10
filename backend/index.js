import express from "express";
import cors from "cors";
import { connectToMongoDB } from "./config/mongo.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import wishlistRoutes from './routes/wishlistRoutes.js';

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

await connectToMongoDB();

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/wishlist", wishlistRoutes);

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
