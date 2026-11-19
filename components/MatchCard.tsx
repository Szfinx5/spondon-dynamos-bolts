import styles from "../styles/Fixtures.module.css";
import {
  DAYS,
  Fixture,
  MONTHS,
  isBolts,
  parseDate,
} from "../lib/fixtures";

const OUTCOME_LABEL = { win: "Won", draw: "Drew", loss: "Lost" };
const OUTCOME_LETTER = { win: "W", draw: "D", loss: "L" };

const Team = ({ name }: { name: string }) => (
  <span className={isBolts(name) ? styles.teamBolts : styles.team}>{name}</span>
);

interface Props {
  fixture: Fixture;
  // Fixtures page only: highlight the next match / flag one awaiting its result
  status?: "next" | "awaiting";
}

// One match: an upcoming fixture, or a result once it has one in data.json
const MatchCard = ({ fixture, status }: Props) => {
  const date = parseDate(fixture.date);
  const home = isBolts(fixture.home);
  const cup = fixture.type === "cup";
  const result = fixture.result;
  const next = status === "next";

  return (
    <li
      className={[
        styles.fixture,
        next ? styles.next : "",
        result ? styles[result] : "",
      ].join(" ")}
    >
      <time className={styles.date} dateTime={`${fixture.date}T${fixture.time}`}>
        <span className={styles.weekday}>{DAYS[date.getUTCDay()]}</span>
        <span className={styles.day}>{date.getUTCDate()}</span>
        <span className={styles.month}>
          {MONTHS[date.getUTCMonth()].slice(0, 3)}
        </span>
      </time>

      <div className={styles.main}>
        <div className={styles.tags}>
          {next && <span className={styles.tagNext}>Next match</span>}
          {status === "awaiting" && (
            <span className={styles.tag}>Result to follow</span>
          )}
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

      {result ? (
        <div className={styles.score}>
          <span
            className={`${styles.badge} ${styles[`badge_${result}`]}`}
            aria-hidden="true"
          >
            {OUTCOME_LETTER[result]}
          </span>
          <p className={styles.scoreText}>
            <span className={styles.scoreLabel}>Result</span>
            <span className={styles.scoreLine}>{OUTCOME_LABEL[result]}</span>
          </p>
        </div>
      ) : (
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
      )}
    </li>
  );
};

export default MatchCard;
