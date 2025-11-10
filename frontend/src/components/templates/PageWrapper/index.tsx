import React from "react";
import styles from "./index.module.scss";

interface PageWrapperProps {
  children: React.ReactNode;
}

function PageWrapper({ children }: PageWrapperProps) {
  return <main className={styles.pageWrapper}>{children}</main>;
}

export default PageWrapper
