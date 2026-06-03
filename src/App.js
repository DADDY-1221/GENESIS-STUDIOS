export default function App() {
  return (
    <div
      style={{
        background: "#050816",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          minHeight: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <nav
          style={{
            position: "absolute",
            top: "30px",
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>GENESIS STUDIOS</h2>

          <div
            style={{
              display: "flex",
              gap: "25px",
              fontSize: "14px",
              letterSpacing: "2px",
            }}
          >
            <span>HOME</span>
            <span>DESTINATIONS</span>
            <span>ABOUT</span>
            <span>CONTACT</span>
          </div>
        </nav>

        <div
          style={{
            background: "rgba(0,0,0,0.55)",
            padding: "60px",
            borderRadius: "30px",
            backdropFilter: "blur(8px)",
            maxWidth: "900px",
          }}
        >
          <p
            style={{
              letterSpacing: "4px",
              fontSize: "14px",
              marginBottom: "20px",
            }}
          >
            CINEMATIC LUXURY EXPERIENCES
          </p>

          <h1
            style={{
              fontSize: "72px",
              margin: "0",
              lineHeight: "1",
            }}
          >
            GENESIS STUDIOS
          </h1>

          <p
            style={{
              marginTop: "25px",
              fontSize: "20px",
              opacity: 0.8,
            }}
          >
            Cinematic travel, storytelling, and unforgettable luxury journeys.
          </p>

          <button
            style={{
              marginTop: "40px",
              padding: "18px 40px",
              borderRadius: "999px",
              border: "none",
              background: "white",
              color: "black",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Begin Journey
          </button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        style={{
          padding: "120px 20px",
          textAlign: "center",
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            marginBottom: "20px",
          }}
        >
          About Genesis Studios
        </h2>

        <p
          style={{
            fontSize: "20px",
            opacity: 0.8,
            lineHeight: "1.8",
          }}
        >
          Genesis Studios creates cinematic luxury experiences through travel,
          storytelling, design, and creative exploration around the world.
        </p>
      </section>

      {/* DESTINATIONS */}
      <section
        style={{
          padding: "80px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "48px",
            marginBottom: "60px",
          }}
        >
          Featured Destinations
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              title: "Dubai",
              image:
                "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
            },
            {
              title: "Tokyo",
              image:
                "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2070&auto=format&fit=crop",
            },
            {
              title: "Santorini",
              image:
                "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2070&auto=format&fit=crop",
            },
          ].map((place) => (
            <div
              key={place.title}
              style={{
                height: "400px",
                borderRadius: "25px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={place.image}
                alt={place.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  width: "100%",
                  padding: "30px",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
                }}
              >
                <h3
                  style={{
                    fontSize: "32px",
                    margin: 0,
                  }}
                >
                  {place.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "60px 20px",
          textAlign: "center",
          opacity: 0.7,
        }}
      >
        © 2026 Genesis Studios — Luxury Beyond Travel
      </footer>
    </div>
  );
}
