import styles from "./index.module.scss";
import { CloseIcon, WishlistIcon } from "../../../assets";
import IconButton from "../../atoms/IconButton";
import StarsRating from "../../molecules/StarsRating";
import { useMemo } from "react";

interface ProductCardProps {
  product: Product;
  isWishListed: boolean;
  onToggleWishlist: (code: string) => void;
}

export default function ProductCard({
  product,
  isWishListed,
  onToggleWishlist
}: ProductCardProps) {
  const {
    name,
    image,
    rating,
    priceInCents,
    salePriceInCents,
    details,
    code
  } = product;

  const formatPrice = (price: string) =>
    `R$ ${(Number(price) / 100).toFixed(2).replace(".", ",")}`;

  return (
    <div className={styles.productCard}>
      <div data-product-image-wrapper>
        <img data-product-image src={image} alt={details?.name || name} />
        <IconButton
          data-product-wishlist
          icon={isWishListed ? <CloseIcon /> : <WishlistIcon />}
          onClick={() => onToggleWishlist(code)}
        />
      </div>

      <div data-product-info>
        <span data-product-name>{details?.name || name}</span>
        <div data-product-rating>
          <StarsRating rating={rating} />
        </div>
        <div data-product-pricing>
          <span data-product-original-price>{formatPrice(priceInCents)}</span>
          <span data-product-discounted-price>
            {formatPrice(salePriceInCents)}
          </span>
        </div>
      </div>
    </div>
  );
}