import React, { ReactNode } from "react";
import styles from "./styles/style.module.css";
import MainLayout from "./components/layout/Layout";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={styles.body}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
};

export default RootLayout;
