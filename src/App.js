export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#020617",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          height: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "50px",
            borderRadius: "20px",
            maxWidth: "800px",
          }}
        >
          <h1
            style={{
              fontSize: "80px",
              marginBottom: "20px",
            }}
          >
            GENESIS STUDIOS
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.7",
              marginBottom: "30px",
            }}
          >
            Cinematic travel, luxury experiences,
            storytelling, and unforgettable adventures
            across the globe.
          </p>

          <button
            style={{
              padding: "16px 36px",
              fontSize: "18px",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Begin Journey
          </button>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section
        style={{
          padding: "100px 40px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "50px",
            marginBottom: "50px",
          }}
        >
          Featured Destinations
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          <div
            style={{
              background: "#0f172a",
              padding: "80px 20px",
              borderRadius: "20px",
              fontSize: "28px",
            }}
          >
            Swiss Alps
          </div>

          <div
            style={{
              background: "#0f172a",
              padding: "80px 20px",
              borderRadius: "20px",
              fontSize: "28px",
            }}
          >
            Dubai Nights
          </div>

          <div
            style={{
              background: "#0f172a",
              padding: "80px 20px",
              borderRadius: "20px",
              fontSize: "28px",
            }}
          >
            Tokyo Dreams
          </div>

          <div
            style={{
              background: "#0f172a",
              padding: "80px 20px",
              borderRadius: "20px",
              fontSize: "28px",
            }}
          >
            Iceland Escape
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        style={{
          padding: "100px 30px",
          textAlign: "center",
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            fontSize: "50px",
            marginBottom: "30px",
          }}
        >
          About Genesis Studios
        </h2>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.8",
            opacity: "0.8",
          }}
        >
          Genesis Studios is a cinematic travel and storytelling brand
          focused on global exploration, luxury experiences,
          creative filmmaking, and modern digital storytelling.
        </p>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "40px",
          opacity: "0.6",
        }}
      >
        © 2026 Genesis Studios
      </footer>
    </div>
  );
}
