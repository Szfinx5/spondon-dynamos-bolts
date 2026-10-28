import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import data from "../../data/data.json";
import shared from "../../styles/Shared.module.css";

export default function ParentConsent() {
  return (
    <Layout>
      <PageHeader eyebrow="For parents" title="Parent Consent" />

      <section className={shared.sectionCharcoal}>
        <div className={`${shared.container} ${shared.centered}`}>
          <p className={shared.body}>
            Please download, complete and return the parent consent form to the
            team secretary, {data.contact.secretary}.
          </p>
          <div className={shared.buttons}>
            <a
              href={data.parentConsentForm.file}
              download
              className={shared.buttonPrimary}
            >
              {data.parentConsentForm.label}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
