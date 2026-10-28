import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import Schedule from "../../components/Schedule";
import data from "../../data/data.json";
import shared from "../../styles/Shared.module.css";
import styles from "../../styles/Contact.module.css";

// Not shown yet: there is no backend to send messages to
function ContactForm() {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        alert("Message sent! (placeholder)");
      }}
    >
      <label className={styles.field}>
        Your name
        <input type="text" required className={styles.input} />
      </label>
      <label className={styles.field}>
        Your email
        <input type="email" required className={styles.input} />
      </label>
      <label className={styles.field}>
        Your message
        <textarea required rows={4} className={styles.input} />
      </label>
      <button type="submit" className={shared.buttonPrimary}>
        Send
      </button>
    </form>
  );
}

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
