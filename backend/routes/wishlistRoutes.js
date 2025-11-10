import express from "express";
import { getConnectedClient } from "../config/mongo.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const client = getConnectedClient();
    const db = client.db("data");
    const users = db.collection("users");

    const userData = await users.findOne({ "userData._id": userId });
    if (!userData) return res.status(404).json({ message: "User not found" });

    const codes = userData.userData?.wishlist?.products || [];
    res.json({ codes });
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

async function getFullWishlist(userId, db) {
  const users = db.collection("users");
  const products = db.collection("products");

  const userData = await users.findOne({ "userData._id": userId });
  if (!userData) return [];

  const codes = userData.userData?.wishlist?.products || [];
  if (codes.length === 0) return [];

  const result = await products
    .find({ "products.code": { $in: codes } })
    .toArray();

  return result.flatMap((doc) =>
    doc.products.filter((p) => codes.includes(String(p.code)))
  );
}

router.post("/:id/add", async (req, res) => {
  try {
    const userId = req.params.id;
    const { productId } = req.body;
    if (!productId)
      return res.status(400).json({ message: "productId is required" });

    const client = getConnectedClient();
    const db = client.db("data");
    const users = db.collection("users");

    const updateResult = await users.updateOne(
      { "userData._id": userId },
      { $addToSet: { "userData.wishlist.products": productId } }
    );

    if (updateResult.matchedCount === 0)
      return res.status(404).json({ message: "User not found" });

    const wishlist = await getFullWishlist(userId, db);
    res.json({ wishlist });
  } catch (error) {
    console.error("Error adding product to wishlist:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/:id/remove/:productId", async (req, res) => {
  try {
    const userId = req.params.id;
    const productId = req.params.productId;

    const client = getConnectedClient();
    const db = client.db("data");
    const users = db.collection("users");

    const updateResult = await users.updateOne(
      { "userData._id": userId },
      { $pull: { "userData.wishlist.products": productId } }
    );

    if (updateResult.matchedCount === 0)
      return res.status(404).json({ message: "User not found" });

    const wishlist = await getFullWishlist(userId, db);
    res.json({ wishlist });
  } catch (error) {
    console.error("Error removing product from wishlist:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/:id/full", async (req, res) => {
  try {
    const userId = req.params.id;
    const client = getConnectedClient();
    const db = client.db("data");
    const wishlist = await getFullWishlist(userId, db);
    res.json({ wishlist });
  } catch (error) {
    console.error("Error fetching full wishlist:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
