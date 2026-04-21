import Layout from "../../components/Layout";
import data from "../../data/data.json";
import Image from "next/image";

export default function Sponsors() {
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
          Sponsors
        </h1>
        {data.sponsors.map((sponsor) => (
          <div
            key={sponsor.name}
            style={{
              marginBottom: "2rem",
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={180}
              height={80}
              style={{
                background: "#fff",
                padding: "1rem",
                borderRadius: "8px",
                width: "auto",
                height: "auto",
              }}
            />
            <div>
              <p style={{ color: "#fff", fontSize: "1.1rem" }}>
                {sponsor.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
