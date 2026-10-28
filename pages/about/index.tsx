import dynamic from "next/dynamic";
import Image from "next/image";
import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import data from "../../data/data.json";
import shared from "../../styles/Shared.module.css";
import styles from "../../styles/About.module.css";

const Slideshow = dynamic(() => import("../../components/Slideshow"), {
  ssr: false,
});

export default function About() {
  return (
    <Layout>
      <PageHeader eyebrow={data.teamName} title="Team Bolts" />

      {/* About + officials */}
      <section className={shared.sectionLight}>
        <div className={`${shared.container} ${shared.split}`}>
          <div className={shared.splitItem}>
            <Image
              src={data.images.aboutPhoto}
              alt="Bolts players on matchday"
              width={1600}
              height={1200}
              sizes="(max-width: 1000px) 100vw, 580px"
              className={`${shared.photo} ${styles.aboutPhoto}`}
            />
          </div>
          <div className={shared.splitItem}>
            <p className={shared.eyebrow}>About the team</p>
            <h2 className={styles.aboutTitle}>{data.home.aboutTitle}</h2>
            <p className={shared.body}>{data.home.aboutText}</p>
            <h3 className={shared.subtitle}>Team officials</h3>
            <div className={shared.people}>
              {data.about.officials.map((official) => (
                <div key={official.name} className={shared.person}>
                  <p className={shared.personName}>{official.name}</p>
                  <p className={shared.personRole}>{official.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={shared.section}>
        <div className={`${shared.container} ${styles.gallery}`}>
          <h2 className={shared.title}>Gallery</h2>
          <Slideshow />
        </div>
      </section>
    </Layout>
  );
}
