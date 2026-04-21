import Layout from "../../components/Layout";
import data from "../../data/data.json";

export default function ParentConsent() {
  return (
    <Layout>
      <section
        style={{
          color: "#ffd600",
          background: "#181818",
          borderRadius: "1rem",
          padding: "2rem",
          margin: "2rem auto",
          maxWidth: 700,
          boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: "1rem",
            color: "#ffd600",
          }}
        >
          Parent Consent Form
        </h1>
        <a
          href={data.parentConsentForm.file}
          download
          style={{
            color: "#111",
            background: "#ffd600",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
            display: "block",
            textAlign: "center",
          }}
        >
          {data.parentConsentForm.label}
        </a>
      </section>
    </Layout>
  );
}
