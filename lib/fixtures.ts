import data from "../data/data.json";

/*
 * Every match lives in data.json under "fixtures".
 * Add "result": "win", "draw" or "loss" (from the Bolts' point of view) once
 * a match is played and it moves from the Fixtures page to the Results page.
 */
export interface Fixture {
  type: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  home: string;
  away: string;
  venue: string;
  pitch: string | null;
  competition: string;
  result?: Outcome;
}

export type Outcome = "win" | "draw" | "loss";

// Our team's name as it appears on FA Full-Time
export const BOLTS = "Spondon Dynamos Bolts";
export const isBolts = (team: string) => team === BOLTS;

const all = (data.fixtures as Fixture[])
  .slice()
  .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`));

// Still to play, soonest first
export const upcoming = all.filter((f) => !f.result);

// Played, most recent first
export const played = all.filter((f) => f.result).reverse();

export const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// Parse "YYYY-MM-DD" as a calendar date, so the result never shifts with the time zone
export const parseDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d));
};

// Groups matches under a "Month Year" heading, keeping their order
export const groupByMonth = (fixtures: Fixture[]) =>
  fixtures.reduce<{ label: string; fixtures: Fixture[] }[]>((groups, f) => {
    const date = parseDate(f.date);
    const label = `${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
    const last = groups[groups.length - 1];
    if (last?.label === label) last.fixtures.push(f);
    else groups.push({ label, fixtures: [f] });
    return groups;
  }, []);

// Today as YYYY-MM-DD in the visitor's time zone
export const todayIso = () => {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
};

export const fixtureKey = (f: Fixture) => `${f.date}-${f.time}`;
