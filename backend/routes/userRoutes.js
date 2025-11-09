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

    res.json(userData);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/:id/wishlist", async (req, res) => {
  try {
    const userId = req.params.id;
    const client = getConnectedClient();
    const db = client.db("data");
    const users = db.collection("users");

    const userData = await users.findOne({ "userData._id": userId });
    if (!userData) return res.status(404).json({ message: "User not found" });

    res.json(userData.userData.wishlist);
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
