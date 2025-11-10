import { memo } from "react";
import ProductCard from "../ProductCard";
import styles from "./index.module.scss";

interface ProductGridProps {
  products: Product[];
  pageType?: "home" | "wishlist"
  isInWishlist: (code: string) => boolean;
  onToggleWishlist: (code: string) => void;
}

function ProductGrid({
  products,
  isInWishlist,
  onToggleWishlist,
  pageType
}: ProductGridProps) {
  return (
    <div className={styles.productGrid} data-product-grid>
      {products?.map((product) => (
        <ProductCard
          key={product.code}
          product={product}
          isWishListed={isInWishlist(product.code)}
          onToggleWishlist={onToggleWishlist}
          pageType={pageType}
        />
      ))}
    </div>
  );
}

export default memo(ProductGrid)