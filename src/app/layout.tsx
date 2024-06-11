import React, { ReactNode } from "react";
import styles from "./styles/style.module.css";

interface RootLayoutProps {
  children: ReactNode;
  sectionName: string;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={styles.body}>{children}</body>
    </html>
  );
};

export default RootLayout;
