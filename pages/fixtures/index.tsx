import { useSyncExternalStore } from "react";
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
  todayIso,
  upcoming,
} from "../../lib/fixtures";

const months = groupByMonth(upcoming);
const noopSubscribe = () => () => {};

const leagueLink = data.externalLinks.find(
  (link) => link.label === data.league,
);

export default function Fixtures() {
  // Worked out in the browser (null while pre-rendering), so the static page never shows a stale "next match"
  const today = useSyncExternalStore(noopSubscribe, todayIso, () => null);
  const next = today ? upcoming.find((f) => f.date >= today) : undefined;

  const status = (date: string, key: string) => {
    if (next && key === fixtureKey(next)) return "next";
    if (today && date < today) return "awaiting";
    return undefined;
  };

  return (
    <Layout>
      <PageHeader
        eyebrow={`${data.league} · Season ${data.season}`}
        title="Fixtures"
      />

      <section className={shared.sectionCharcoal}>
        <div className={shared.container}>
          {months.length === 0 && (
            <p className={styles.empty}>
              No fixtures scheduled right now. Check back soon.
            </p>
          )}

          {months.map((month) => (
            <div key={month.label} className={styles.monthGroup}>
              <h2 className={styles.monthTitle}>{month.label}</h2>
              <ol className={styles.list}>
                {month.fixtures.map((fixture) => (
                  <MatchCard
                    key={fixtureKey(fixture)}
                    fixture={fixture}
                    status={status(fixture.date, fixtureKey(fixture))}
                  />
                ))}
              </ol>
            </div>
          ))}

          <p className={styles.note}>
            Looking for how we got on? See the{" "}
            <Link href="/results" className={shared.link}>
              results
            </Link>
            .{" "}
            {leagueLink && (
              <>
                Kick-off times and pitches can change. Check the latest on{" "}
                <a
                  href={leagueLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={shared.link}
                >
                  FA Full-Time
                </a>
                .
              </>
            )}
          </p>
        </div>
      </section>
    </Layout>
  );
}
