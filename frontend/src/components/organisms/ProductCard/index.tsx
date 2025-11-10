import { memo } from "react";
import IconButton from "../../atoms/IconButton";
import StarsRating from "../../molecules/StarsRating";
import { CloseIcon, WishlistIcon } from "../../../assets";
import styles from "./index.module.scss";

interface ProductCardProps {
  product: Product;
  isWishListed: boolean;
  onToggleWishlist: (code: string) => void;
  pageType?: "home" | "wishlist";
}

function ProductCard({
  product,
  isWishListed,
  onToggleWishlist,
  pageType = "home",
}: ProductCardProps) {
  const {
    name,
    image,
    rating,
    priceInCents,
    salePriceInCents,
    details,
    code,
    available,
    visible,
  } = product;

  if (!available || !visible) {
    return null;
  }

  const displayRemoveBtn = isWishListed && pageType !== "home";

  const formatPrice = (price: string) =>
    `R$ ${(Number(price) / 100).toFixed(2).replace(".", ",")}`;

  return (
    <div className={styles.productCard}>
      <div data-product-image-wrapper>
        <img data-product-image src={image} alt={details?.name || name} />
        <IconButton
          data-product-wishlist
          icon={displayRemoveBtn ? <CloseIcon /> : <WishlistIcon />}
          onClick={() => onToggleWishlist(code)}
          data-iswishlisted={isWishListed}
          data-iswishlist-page={displayRemoveBtn}
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

export default memo(ProductCard)