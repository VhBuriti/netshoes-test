import ProductGrid from "../../organisms/ProductGrid";
import { useWishlistContext } from "../../../context/WishlistContext";
import useProducts from "../../../hooks/useProducts";

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