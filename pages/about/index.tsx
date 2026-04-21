import Layout from "../../components/Layout";
import data from "../../data/data.json";

export default function About() {
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
          About Bolts
        </h1>
        <p style={{ color: "#eee", fontSize: "1.2rem", marginBottom: "1rem" }}>
          {data.about.description}
        </p>
        <p style={{ color: "#ffd600", fontWeight: 600 }}>{data.teamName}</p>
        Team Officials:
        <p
          style={{
            color: "#eee",
            gap: "0.5rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {data.about.officials.map((official, index) => (
            <span key={index}>
              {official.name} - {official.role}
              {index < data.about.officials.length - 1 && <br />}
            </span>
          ))}
        </p>
        <p style={{ color: "#ffd600" }}>Training Sessions:</p>
        <p
          style={{
            color: "#eee",
            gap: "0.5rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {data.about.training.map((session, index) => (
            <span key={index}>
              {session.day} - {session.time} @ {session.location}
              {index < data.about.training.length - 1 && <br />}
            </span>
          ))}
        </p>
      </section>
    </Layout>
  );
}
