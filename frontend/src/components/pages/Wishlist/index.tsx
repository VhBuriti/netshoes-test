import ProductGrid from "../../organisms/ProductGrid";
import { useWishlistContext } from "../../../context/WishlistContext";
import styles from "./index.module.scss"

function WishlistPage() {
  const { wishlist, isInWishlist, toggleWishlist } = useWishlistContext();

  return (
    <section className={styles.wishlistPage}>
      <ProductGrid
        products={wishlist}
        isInWishlist={isInWishlist}
        onToggleWishlist={toggleWishlist}
        pageType="wishlist"
      />
    </section>
  );
}

export default WishlistPage