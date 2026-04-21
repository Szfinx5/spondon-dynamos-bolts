import Layout from "../components/Layout";
import data from "../data/data.json";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <section style={{ textAlign: "center", marginBottom: "2rem" }}>
        <div
          style={{
            color: "#ffd600",
            background: "#111",
            padding: "1.5rem 1rem 1rem 1rem",
            borderRadius: "1.5rem",
            fontWeight: 700,
            letterSpacing: 1,
            marginBottom: "2rem",
          }}
        >
          <h1>{data.welcomeMessageTop}</h1>

          <h2> {data.welcomeMessageBottom}</h2>
        </div>
        <div style={{ margin: "2rem auto", maxWidth: 650 }}>
          <Image
            src={data.images.teamPhoto}
            alt="Team Photo"
            width={650}
            height={500}
            style={{
              borderRadius: "1.5rem",
              width: "100%",
              height: "auto",
              boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
            }}
          />
        </div>
        {/* <h1
          style={{
            color: "#ffd600",
            background: "#111",
            padding: "1.5rem 1rem 1rem 1rem",
            borderRadius: "1.5rem",
            fontSize: "2.2rem",
            fontWeight: 700,
            letterSpacing: 1,
            marginBottom: "2rem",
          }}
        >
          {data.welcomeMessageBottom}
        </h1> */}
      </section>
    </Layout>
  );
}
