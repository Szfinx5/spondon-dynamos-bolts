import Image from "next/image";
import Layout from "../components/Layout";
import data from "../data/data.json";
import shared from "../styles/Shared.module.css";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`${shared.container} ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <p className={shared.eyebrow}>
              {data.league} · Season {data.season}
            </p>
            <h1 className={styles.heroTitle}>
              Spondon
              <br />
              Dynamos
              <br />
              <span className={styles.heroAccent}>{data.shortName}</span>
            </h1>
            <p className={styles.heroIntro}>{data.home.intro}</p>
          </div>
          <div className={styles.heroPhoto}>
            <div className={styles.heroPhotoStripe} aria-hidden="true" />
            <Image
              src={data.images.teamPhoto}
              alt="The Bolts U8 squad and coaches lined up in front of the goal"
              width={1600}
              height={1200}
              sizes="(max-width: 1100px) 100vw, 640px"
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
