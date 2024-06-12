import React, { ReactNode } from "react";
import styles from "./styles/style.module.css";
import MainLayout from "./components/layout/Layout";
import { NavbarContext } from "./context/NavbarContext";

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
