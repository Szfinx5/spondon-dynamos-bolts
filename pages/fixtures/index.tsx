import { useSyncExternalStore } from "react";
import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import data from "../../data/data.json";
import shared from "../../styles/Shared.module.css";
import styles from "../../styles/Fixtures.module.css";

type Fixture = (typeof data.fixtures)[number];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// Parse "YYYY-MM-DD" as a calendar date, so the result never shifts with the time zone
const parseDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d));
};

// Our team's name as it appears on FA Full-Time
const BOLTS = "Spondon Dynamos Bolts";
const isBolts = (team: string) => team === BOLTS;

// Fixtures grouped under a "Month Year" heading, in date order
const months = data.fixtures
  .slice()
  .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`))
  .reduce<{ label: string; fixtures: Fixture[] }[]>((groups, fixture) => {
    const date = parseDate(fixture.date);
    const label = `${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
    const last = groups[groups.length - 1];
    if (last?.label === label) last.fixtures.push(fixture);
    else groups.push({ label, fixtures: [fixture] });
    return groups;
  }, []);

const noopSubscribe = () => () => {};
const todayIso = () => {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
};

const leagueLink = data.externalLinks.find(
  (link) => link.label === data.league,
);

const Team = ({ name }: { name: string }) => (
  <span className={isBolts(name) ? styles.teamBolts : styles.team}>{name}</span>
);

const FixtureCard = ({ fixture, next }: { fixture: Fixture; next: boolean }) => {
  const date = parseDate(fixture.date);
  const home = isBolts(fixture.home);
  const cup = fixture.type === "cup";

  return (
    <li className={`${styles.fixture} ${next ? styles.next : ""}`}>
      <time className={styles.date} dateTime={`${fixture.date}T${fixture.time}`}>
        <span className={styles.weekday}>{DAYS[date.getUTCDay()]}</span>
        <span className={styles.day}>{date.getUTCDate()}</span>
        <span className={styles.month}>{MONTHS[date.getUTCMonth()].slice(0, 3)}</span>
      </time>

      <div className={styles.main}>
        <div className={styles.tags}>
          {next && <span className={styles.tagNext}>Next match</span>}
          <span className={cup ? styles.tagCup : styles.tag}>
            {cup ? "Cup" : "League"}
          </span>
          <span className={styles.tag}>{home ? "Home" : "Away"}</span>
        </div>
        <p className={styles.teams}>
          <Team name={fixture.home} />
          <span className={styles.vs}>vs</span>
          <Team name={fixture.away} />
        </p>
        <p className={styles.competition}>{fixture.competition}</p>
      </div>

      <dl className={styles.details}>
        <div>
          <dt>Kick-off</dt>
          <dd className={styles.kickoff}>{fixture.time}</dd>
        </div>
        <div>
          <dt>Venue</dt>
          <dd>
            {fixture.venue}
            <span className={styles.pitch}>
              {fixture.pitch ?? "Pitch to be allocated"}
            </span>
          </dd>
        </div>
      </dl>
    </li>
  );
};

export default function Fixtures() {
  // Worked out in the browser (null while pre-rendering), so the static page never shows a stale "next match"
  const today = useSyncExternalStore(noopSubscribe, todayIso, () => null);
  const nextKey =
    today && months.flatMap((m) => m.fixtures).find((f) => f.date >= today)?.date;

  return (
    <Layout>
      <PageHeader
        eyebrow={`${data.league} · Season ${data.season}`}
        title="Fixtures"
      />

      <section className={shared.sectionCharcoal}>
        <div className={shared.container}>
          {months.map((month) => (
            <div key={month.label} className={styles.monthGroup}>
              <h2 className={styles.monthTitle}>{month.label}</h2>
              <ol className={styles.list}>
                {month.fixtures.map((fixture) => (
                  <FixtureCard
                    key={`${fixture.date}-${fixture.time}`}
                    fixture={fixture}
                    next={fixture.date === nextKey}
                  />
                ))}
              </ol>
            </div>
          ))}

          {leagueLink && (
            <p className={styles.note}>
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
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
}
