import styles from "./index.module.scss";
import { WishlistIcon } from "../../../assets";
import IconButton from "../../atoms/IconButton";
import StarsRating from "../../molecules/StarsRating";

export default function ProductCard() {
  return (
    <div className={styles.productCard}>
      <div data-product-image-wrapper>
        <img
          data-product-image
          src="https://static.netshoes.com.br/produtos/kit-3x-colageno-tipo-2-vitaminas-joelho-e-articulacao-60-capsulas-sabor-sem-sabor/14/BKB-0035-014/BKB-0035-014_zoom1.jpg?ts=1713881543?ims=544x"
          alt=""
        />
        <IconButton data-product-wishlist icon={<WishlistIcon />} />
      </div>

      <div data-product-info>
        <span data-product-name>Tênis Infantil Adidas Runfalcon</span>
        <div data-product-rating>
          <StarsRating rating={4.5} />
        </div>
        <div data-product-pricing>
          <span data-product-original-price>R$ 249,90</span>
          <span data-product-discounted-price>R$ 199,90</span>
        </div>
      </div>
    </div>
  );
}
