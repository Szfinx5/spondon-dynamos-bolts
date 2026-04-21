import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import styles from "../styles/Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className={styles.container}>
    <Sidebar />
    <main className={styles.main}>{children}</main>
  </div>
);

export default Layout;
