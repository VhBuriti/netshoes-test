import React from "react";
import styles from "./index.module.scss";

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return <main className={styles.pageWrapper}>{children}</main>;
}
