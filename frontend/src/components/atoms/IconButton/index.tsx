import React, { memo } from "react";
import styles from "./index.module.scss";

type Props = {
  onClick?: () => void;
  className?: string;
  icon: React.ReactNode;
  active?: boolean;
};

function IconButton({
  onClick,
  icon,
  active,
  className,
  ...props
}: Props) {
  return (
    <button 
      className={`${styles.iconButton} ${active ? styles.active : ''} ${className || ''}`}
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