import React, { memo } from "react";
import { CloseIcon } from "../../../assets";
import styles from "./index.module.scss";

interface SliderProps {
  closeSlider: () => void;
  sliderTitle?: React.ReactNode;
  children?: React.ReactNode;
}

function Slider({ sliderTitle, closeSlider, children }: SliderProps) {
  return (
    <div className={styles.sliderOverlay} data-slider-overlay>
      <div data-slider>
        <div data-slider-header onClick={closeSlider}>
            {sliderTitle}
          <CloseIcon data-close-icon />
        </div>
        <div data-slider-content>{children}</div>
      </div>
    </div>
  );
}

export default memo(Slider)
