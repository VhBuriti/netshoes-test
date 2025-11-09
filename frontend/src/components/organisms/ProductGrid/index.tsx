import React from "react";
import ProductCard from "../ProductCard";
import styles from "./index.module.scss";

export default function ProductGrid() {
    const productsQuantity = 12;
    const ProductGridMock = Array.from({ length: productsQuantity }, (_, i) => (
        <ProductCard key={i} />
    ));
    return (
        <div className={styles.productGrid} data-product-grid>
            {ProductGridMock}
        </div>
    );
}