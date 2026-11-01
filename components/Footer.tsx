import Image from "next/image";
import styles from "../styles/Footer.module.css";
import data from "../data/data.json";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.stripe} aria-hidden="true" />
    <div className={styles.inner}>
      <div className={styles.brand}>
        <Image
          src={data.images.logo}
          alt=""
          width={44}
          height={44}
          className={styles.crest}
        />
        <p className={styles.copy}>
          © {new Date().getFullYear()} {data.clubName} · {data.shortName}
        </p>
      </div>
      <nav aria-label="Club links" className={styles.links}>
        {data.externalLinks.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  </footer>
);

export default Footer;
