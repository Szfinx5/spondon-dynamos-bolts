import Layout from "../../components/Layout";
import data from "../../data/data.json";

function ContactForm() {
  return (
    <form
      style={{
        maxWidth: 400,
        margin: "1rem auto",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        alert("Message sent! (placeholder)");
      }}
    >
      <input
        type="text"
        placeholder="Your Name"
        required
        style={{
          padding: "0.5rem",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <input
        type="email"
        placeholder="Your Email"
        required
        style={{
          padding: "0.5rem",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <textarea
        placeholder="Your Message"
        required
        style={{
          padding: "0.5rem",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
        rows={4}
      />
      <button
        type="submit"
        style={{
          background: "#ffd600",
          color: "#111",
          border: "none",
          borderRadius: "4px",
          padding: "0.75rem",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Send
      </button>
    </form>
  );
}

export default function Contact() {
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
          Contact Us
        </h1>
        <p style={{ color: "#ffd600", fontWeight: 600 }}>
          Manager: {data.contact.manager}
        </p>
        <p style={{ color: "#eee" }}>
          Phone:{" "}
          <a href={`tel:${data.contact.phone}`} style={{ color: "#ffd600" }}>
            {data.contact.phone}
          </a>
        </p>

        {/* <ContactForm /> */}
        <p style={{ color: "#eee" }}>
          Please send enquiries to our team secretary Kelly:{" "}
          <a
            href={`mailto:Kellybetteridge87@gmail.com`}
            style={{ color: "#ffd600" }}
          >
            Kellybetteridge87@gmail.com
          </a>
        </p>
      </section>
    </Layout>
  );
}
