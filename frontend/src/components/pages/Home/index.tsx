import ProductGrid from "../../organisms/ProductGrid";
import useProducts from "../../../hooks/useProducts";
import { useWishlistContext } from "../../../context/WishlistContext";

export default function HomePage() {
  const { products } = useProducts();
  const { isInWishlist, toggleWishlist } = useWishlistContext();

  return (
    <section>
      <ProductGrid
        products={products?.products || []}
        isInWishlist={isInWishlist}
        onToggleWishlist={toggleWishlist}
      />
    </section>
  );
}