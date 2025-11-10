import ProductGrid from "../../organisms/ProductGrid";
import { useWishlistContext } from "../../../context/WishlistContext";

export default function WishlistPage() {
  const { wishlist, isInWishlist, toggleWishlist } = useWishlistContext();

  return (
    <section>
      <ProductGrid
        products={wishlist}
        isInWishlist={isInWishlist}
        onToggleWishlist={toggleWishlist}
      />
    </section>
  );
}