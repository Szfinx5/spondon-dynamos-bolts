import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className={styles.container}>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
