import ProductGrid from "../../organisms/ProductGrid";
import useProducts from "../../../hooks/useProducts";
import { useWishlistContext } from "../../../context/WishlistContext";
import styles from "./index.module.scss"

export default function HomePage() {
  const { products } = useProducts();
  const { isInWishlist, toggleWishlist } = useWishlistContext();

  return (
    <section className={styles.homeSection}>
      <ProductGrid
        products={products?.products || []}
        isInWishlist={isInWishlist}
        onToggleWishlist={toggleWishlist}
      />
    </section>
  );
}