import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";
import data from "../data/data.json";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Team Bolts", href: "/about" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Parent Consent", href: "/parent-consent" },
  { label: "Fixtures", href: "/fixtures" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Close the mobile menu after navigating
  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on("routeChangeStart", close);
    return () => router.events.off("routeChangeStart", close);
  }, [router.events]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <Image
            src={data.images.logo}
            alt={`${data.clubName} crest`}
            width={56}
            height={56}
            className={styles.crest}
            priority
          />
          <span className={styles.brandText}>
            <span className={styles.club}>{data.clubName}</span>
            <span className={styles.team}>{data.shortName}</span>
          </span>
        </Link>

        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-menu"
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="main-menu"
          aria-label="Main"
          className={`${styles.nav} ${open ? styles.open : ""}`}
        >
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                router.pathname === item.href ? styles.active : styles.link
              }
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className={styles.cta}>
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
