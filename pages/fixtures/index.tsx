import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import data from "../../data/data.json";
import shared from "../../styles/Shared.module.css";

// Placeholder until the FA Full-Time fixtures snippet is available
export default function Fixtures() {
  return (
    <Layout>
      <PageHeader
        eyebrow={`${data.league} · Season ${data.season}`}
        title="Fixtures"
      />

      <section className={shared.sectionCharcoal}>
        <div className={`${shared.container} ${shared.centered}`}>
          <h2 className={shared.title}>Coming soon</h2>
        </div>
      </section>
    </Layout>
  );
}
