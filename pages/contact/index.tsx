import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import Schedule from "../../components/Schedule";
import data from "../../data/data.json";
import shared from "../../styles/Shared.module.css";
import styles from "../../styles/Contact.module.css";

export default function Contact() {
  return (
    <Layout>
      <PageHeader eyebrow="Get in touch" title="Contact Us" />

      <section className={shared.sectionCharcoal}>
        <div className={`${shared.container} ${styles.cards}`}>
          <div className={styles.card}>
            <p className={styles.label}>Team manager</p>
            <p className={styles.name}>{data.contact.manager}</p>
            <a href={`tel:${data.contact.phone}`} className={styles.value}>
              {data.contact.phone}
            </a>
          </div>
          <div className={styles.card}>
            <p className={styles.label}>Team secretary · enquiries</p>
            <p className={styles.name}>{data.contact.secretary}</p>
            <a href={`mailto:${data.contact.email}`} className={styles.value}>
              {data.contact.email}
            </a>
          </div>
        </div>
        {/* <ContactForm /> */}

        <div className={`${shared.container} ${styles.schedule}`}>
          <h2 className={shared.title}>Where to find us</h2>
          <Schedule />
        </div>
      </section>
    </Layout>
  );
}
