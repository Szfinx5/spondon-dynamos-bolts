import Link from "next/link";
import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import MatchCard from "../../components/MatchCard";
import data from "../../data/data.json";
import shared from "../../styles/Shared.module.css";
import styles from "../../styles/Fixtures.module.css";
import {
  fixtureKey,
  groupByMonth,
  Outcome,
  played,
} from "../../lib/fixtures";

const months = groupByMonth(played);

// Season record across every played match
const count = (o: Outcome) => played.filter((f) => f.result === o).length;
const summary = [
  { label: "Played", value: played.length },
  { label: "Won", value: count("win") },
  { label: "Drawn", value: count("draw") },
  { label: "Lost", value: count("loss") },
];

export default function Results() {
  return (
    <Layout>
      <PageHeader
        eyebrow={`${data.league} · Season ${data.season}`}
        title="Results"
      />

      <section className={shared.sectionCharcoal}>
        <div className={shared.container}>
          {played.length === 0 ? (
            <p className={styles.empty}>
              No results yet. They are added after each matchday.
            </p>
          ) : (
            <>
              <dl className={styles.summary}>
                {summary.map((item) => (
                  <div key={item.label} className={styles.stat}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>

              {months.map((month) => (
                <div key={month.label} className={styles.monthGroup}>
                  <h2 className={styles.monthTitle}>{month.label}</h2>
                  <ol className={styles.list}>
                    {month.fixtures.map((fixture) => (
                      <MatchCard key={fixtureKey(fixture)} fixture={fixture} />
                    ))}
                  </ol>
                </div>
              ))}
            </>
          )}

          <p className={styles.note}>
            See what&rsquo;s coming up on the{" "}
            <Link href="/fixtures" className={shared.link}>
              fixtures
            </Link>{" "}
            page.
          </p>
        </div>
      </section>
    </Layout>
  );
}
