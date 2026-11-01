import Image from "next/image";
import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import data from "../../data/data.json";
import shared from "../../styles/Shared.module.css";
import styles from "../../styles/Sponsors.module.css";

export default function Sponsors() {
  return (
    <Layout>
      <PageHeader eyebrow="Proudly supported by" title="Sponsors" />

      <section className={shared.sectionLight}>
        <div className={`${shared.container} ${styles.list}`}>
          {data.sponsors.map((sponsor) => (
            <article key={sponsor.name} className={styles.sponsor}>
              <div className={styles.logoTile}>
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={240}
                  height={120}
                  className={styles.logo}
                />
              </div>
              <div className={styles.text}>
                <h2 className={styles.name}>{sponsor.name}</h2>
                <p className={styles.description}>{sponsor.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={shared.section}>
        <div className={shared.container}>
          <Image
            src={data.images.sponsorsPhoto}
            alt="Bolts players on matchday"
            width={1600}
            height={1200}
            sizes="(max-width: 1240px) 100vw, 1192px"
            className={`${shared.photo} ${styles.photo}`}
          />
        </div>
      </section>
    </Layout>
  );
}
