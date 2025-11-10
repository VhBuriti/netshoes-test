import React, { memo } from "react";
import styles from "./index.module.scss";

type Props = {
  onClick?: () => void;
  icon: React.ReactNode;
};

function IconButton({
  onClick,
  icon,
  ...props
}: Props) {
  return (
    <button 
      className={`${styles.iconButton}`}
      data-icon-button 
      aria-label="Menu" 
      onClick={onClick}
      type="button" 
      {...props}
    >
      {icon}
    </button>
  );
}

export default memo(IconButton)