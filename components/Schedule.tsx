import { ReactNode } from "react";
import styles from "../styles/Schedule.module.css";
import data from "../data/data.json";

const ClockIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.icon}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const BallIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.icon}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8l3 2.2-1.2 3.6h-3.6L9 10.2z" />
    <path d="M12 3v5M21 10l-6 .2M18 20l-4.2-6.2M6 20l4.2-6.2M3 10l6 .2" />
  </svg>
);

const TrophyIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.icon}>
    <path d="M8 4h8v5a4 4 0 0 1-8 0z" />
    <path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4" />
    <path d="M12 13v4M8 20h8" />
  </svg>
);

interface CardProps {
  icon: ReactNode;
  label: string;
  title: string;
  highlight: string;
  children: ReactNode;
}

const Card = ({ icon, label, title, highlight, children }: CardProps) => (
  <div className={styles.card}>
    {icon}
    <p className={styles.label}>{label}</p>
    <p className={styles.title}>{title}</p>
    <p className={styles.highlight}>{highlight}</p>
    <div className={styles.detail}>{children}</div>
  </div>
);

const leagueLink = data.externalLinks.find(
  (link) => link.label === data.league,
);

// Training, matchday and league details, all read from data.json
const Schedule = () => (
  <div className={styles.grid}>
    {data.about.training.map((session) => (
      <Card
        key={session.day}
        icon={<ClockIcon />}
        label="Training"
        title={session.day}
        highlight={session.time.replace(" - ", " – ")}
      >
        {session.location}
      </Card>
    ))}
    {data.about.matches.map((match) => (
      <Card
        key={match.day}
        icon={<BallIcon />}
        label="Matchday"
        title={match.day}
        highlight={`Kick-off ${match.time}`}
      >
        {match.location}
      </Card>
    ))}
    <Card
      icon={<TrophyIcon />}
      label="League"
      title={data.league}
      highlight={`Under 8s · ${data.season}`}
    >
      {leagueLink && (
        <a
          href={leagueLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Fixtures &amp; results on FA Full-Time
        </a>
      )}
    </Card>
  </div>
);

export default Schedule;
