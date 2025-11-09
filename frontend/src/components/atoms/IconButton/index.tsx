import React from "react";
import styles from "./index.module.scss";

type Props = {
  onClick?: () => void;
  className?: string;
  icon: React.ReactNode;
};

export default function IconButton({
  onClick,
  icon,
  ...props
}: Props) {
  return (
    <button className={styles.iconButton} data-icon-button aria-label="Menu" onClick={onClick} {...props}>
      {icon}
    </button>
  );
}
