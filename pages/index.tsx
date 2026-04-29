import Layout from "../components/Layout";
import data from "../data/data.json";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <section
        style={{
          textAlign: "center",
          margin: "0 auto",
          maxWidth: 700,
          padding: "2rem 0",
        }}
      >
        {/* Yellow bold heading */}
        <h1
          style={{
            color: "#ffd600",
            fontWeight: 900,
            fontSize: "2.2rem",
            letterSpacing: 1,
            marginBottom: "1.5rem",
            textShadow: "0 2px 8px #000",
          }}
        >
          Spondon Dynamos Bolts U8s 26/27 season
        </h1>

        {/* Large logo */}
        <div style={{ margin: "0 auto 2.5rem auto", maxWidth: 260 }}>
          <Image
            src={data.images.logo}
            alt="Spondon Dynamos Logo"
            width={260}
            height={260}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "20%",
              background: "#fff",
              boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
            }}
            priority
          />
        </div>

        {/* Italic white welcome text */}
        <div style={{ margin: "2.5rem auto 2.5rem auto", maxWidth: 600 }}>
          <p
            style={{
              color: "#fff",
              fontStyle: "italic",
              fontSize: "1.15rem",
              lineHeight: 1.7,
              fontWeight: 400,
              margin: 0,
            }}
          >
            A warm welcome to the Spondon Dynamos Bolts. We are a U8 grassroots
            football team playing in the Derby Junior Football League throughout
            the 2026/2027 season.
            <br />
            <br />
            Training is based at our home ground in Spondon where we pride
            ourselves on providing a safe, fun environment for children to
            develop their skills and passion for football.
          </p>
        </div>

        {/* Team photo at the bottom */}
        <div style={{ margin: "3rem auto 0 auto", maxWidth: 650 }}>
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
      </section>
    </Layout>
  );
}
