import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

const dataPath = path.resolve("data/users/userExample.json");

router.get("/:id", (req, res) => {
  try {
    const user = JSON.parse(fs.readFileSync(dataPath, "utf8"));
    if (user.userData._id !== req.params.id)
      return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error loading local user data" });
  }
});

router.get("/:id/wishlist", (req, res) => {
  try {
    const user = JSON.parse(fs.readFileSync(dataPath, "utf8"));
    if (user.userData._id !== req.params.id)
      return res.status(404).json({ message: "User not found" });

    res.json(user.userData.wishlist);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error loading local wishlist" });
  }
});

export default router;
