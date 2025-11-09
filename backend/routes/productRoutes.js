import express from "express";
import { getConnectedClient } from "../config/mongo.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { codes } = req.query;
    const client = getConnectedClient();
    const db = client.db("data");
    const collection = db.collection("products");

    if (!codes) {
      const allProducts = await collection.find().toArray();
      if (!allProducts.length)
        return res.status(404).json({ message: "No products found" });
      return res.json(allProducts);
    }

    const codeList = codes.split(",").map((c) => c.trim());
    const result = await collection
      .find({ "products.code": { $in: codeList } })
      .toArray();

    if (!result.length)
      return res.status(404).json({ message: "No products found for given codes" });

    const matchedProducts = result.flatMap((doc) =>
      doc.products.filter((p) => codeList.includes(String(p.code)))
    );

    res.json(matchedProducts);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
