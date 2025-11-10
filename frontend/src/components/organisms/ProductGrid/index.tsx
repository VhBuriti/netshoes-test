import ProductCard from "../ProductCard";
import styles from "./index.module.scss";

interface ProductGridProps {
  products: Product[];
  isInWishlist: (code: string) => boolean;
  onToggleWishlist: (code: string) => void;
}

export default function ProductGrid({
  products,
  isInWishlist,
  onToggleWishlist
}: ProductGridProps) {
  return (
    <div className={styles.productGrid} data-product-grid>
      {products?.map((product) => (
        <ProductCard
          key={product.code}
          product={product}
          isWishListed={isInWishlist(product.code)}
          onToggleWishlist={onToggleWishlist}
        />
      ))}
    </div>
  );
}