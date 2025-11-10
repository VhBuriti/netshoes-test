import ProductGrid from "../../organisms/ProductGrid";
import { useWishlistContext } from "../../../context/WishlistContext";

function WishlistPage() {
  const { wishlist, isInWishlist, toggleWishlist } = useWishlistContext();

  return (
    <section>
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