import React, { memo, useCallback } from "react";
import { FullStarIcon, HalfStarIcon, EmptyStarIcon } from "../../../assets";
import styles from "./index.module.scss";

interface StarRatingProps {
  rating: number;
}

function StarRating({ rating }: StarRatingProps) {
  rating = Math.round(rating * 2) / 2;

  const renderStar = useCallback(
    (index: number) => {
      const StarIcon = () => {
        if (rating >= index + 1) {
          return <FullStarIcon />;
        }
        if (rating >= index + 0.5) {
          return <HalfStarIcon />;
        }
        return <EmptyStarIcon />;
      };

      return (
        <div key={index} data-star-wrapper>
          <span data-star>
            <StarIcon />
          </span>
        </div>
      );
    },
    [rating]
  );

  const stars = (
    <>{Array.from({ length: 5 }).map((_, index) => renderStar(index))}</>
  );

  return (
    <div className={styles.ratingStars}>
      {stars} <span data-rating>{rating}</span>
    </div>
  );
}

export default memo(StarRating);
