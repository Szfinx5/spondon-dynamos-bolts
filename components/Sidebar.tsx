import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Sidebar.module.css";
import data from "../data/data.json";
import Image from "next/image";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Bolts", href: "/about" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Contact Us", href: "/contact" },
  { label: "Parent Consent", href: "/parent-consent" },
  { label: "Spondon Dynamos", href: data.externalLinks[0].url, external: true },
  {
    label: "Derby Junior League",
    href: data.externalLinks[1].url,
    external: true,
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  // Close menu on route change (for mobile)
  React.useEffect(() => {
    if (!open) return;
    const handleRoute = () => setOpen(false);
    window.addEventListener("hashchange", handleRoute);
    window.addEventListener("popstate", handleRoute);
    return () => {
      window.removeEventListener("hashchange", handleRoute);
      window.removeEventListener("popstate", handleRoute);
    };
  }, [open]);

  // Close menu when clicking outside (mobile)
  React.useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      const menu = document.querySelector(`.${styles.menu}`);
      const hamburger = document.querySelector(`.${styles.hamburger}`);
      if (
        menu &&
        !menu.contains(e.target as Node) &&
        hamburger &&
        !hamburger.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <nav className={styles.sidebar}>
      <div className={styles.logo}>
        <Image
          src={data.images.logo}
          alt="Team Logo"
          width={185}
          height={185}
          style={{ borderRadius: 12, background: "#fff" }}
        />
      </div>
      {!open && (
        <button
          className={styles.hamburger}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      )}
      <ul className={`${styles.menu} ${open ? styles.open : ""}`}>
        {menuItems.map((item) => (
          <li key={item.label}>
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <Link href={item.href} legacyBehavior>
                <a onClick={() => setOpen(false)}>{item.label}</a>
              </Link>
            )}
          </li>
        ))}
      </ul>
      {/* Overlay for mobile menu */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.3)",
            zIndex: 99,
          }}
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
};

export default Sidebar;
