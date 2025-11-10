import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

const userPath = path.resolve("data/users/userExample.json");
const productsPath = path.resolve("data/products/mock-products.json");

const readJSON = (p) => JSON.parse(fs.readFileSync(p, "utf8"));
const writeJSON = (p, data) =>
  fs.writeFileSync(p, JSON.stringify(data, null, 2), "utf8");


router.get("/:id", (req, res) => {
  try {
    const user = readJSON(userPath);
    const userId = req.params.id;

    if (user.userData._id !== userId)
      return res.status(404).json({ message: "User not found" });

    const codes = user.userData?.wishlist?.products || [];
    res.json({ codes });
  } catch (error) {
    console.error("Error reading wishlist:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

function getFullWishlistLocal(userId) {
  const user = readJSON(userPath);
  const products = readJSON(productsPath);

  if (user.userData._id !== userId) return [];

  const codes = user.userData?.wishlist?.products || [];
  if (!codes.length) return [];

  return products.products.filter((p) => codes.includes(String(p.code)));
}


router.get("/:id/full", (req, res) => {
  try {
    const userId = req.params.id;
    const wishlist = getFullWishlistLocal(userId);
    res.json({ wishlist });
  } catch (error) {
    console.error("Error fetching full wishlist:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/:id/add", (req, res) => {
  try {
    const userId = req.params.id;
    const { productId } = req.body;

    if (!productId)
      return res.status(400).json({ message: "productId is required" });

    const user = readJSON(userPath);
    if (user.userData._id !== userId)
      return res.status(404).json({ message: "User not found" });

    const wishlist = user.userData.wishlist.products || [];

    if (!wishlist.includes(productId)) {
      wishlist.push(productId);
      user.userData.wishlist.products = wishlist;
      writeJSON(userPath, user);
    }

    const fullWishlist = getFullWishlistLocal(userId);
    res.json({ wishlist: fullWishlist });
  } catch (error) {
    console.error("Error adding product to wishlist:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/:id/remove/:productId", (req, res) => {
  try {
    const userId = req.params.id;
    const productId = req.params.productId;

    const user = readJSON(userPath);
    if (user.userData._id !== userId)
      return res.status(404).json({ message: "User not found" });

    user.userData.wishlist.products =
      user.userData.wishlist.products.filter((id) => id !== productId);

    writeJSON(userPath, user);

    const fullWishlist = getFullWishlistLocal(userId);
    res.json({ wishlist: fullWishlist });
  } catch (error) {
    console.error("Error removing product from wishlist:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
