import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

const dataPath = path.resolve("data/products/mock-products.json");

router.get("/", (req, res) => {
  try {
    const { codes } = req.query;
    const products = JSON.parse(fs.readFileSync(dataPath, "utf8"));

    if (!codes) return res.json(products);

    const codeList = codes.split(",").map((c) => c.trim());
    const filtered = products.filter((p) => codeList.includes(p.code));

    if (!filtered.length)
      return res.status(404).json({ message: "No products found for given codes" });

    res.json(filtered);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error loading local data" });
  }
});

export default router;
