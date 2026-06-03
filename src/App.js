```jsx
export default function App() {
  return (
    <div
      style={{
        background: "#050816",
        color: "white",
        fontFamily: "Inter, sans-serif",
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
          position: "relative",
        }}
      >
        {/* NAVBAR */}
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
          <h2
            style={{
              fontSize: "28px",
              letterSpacing: "2px",
            }}
          >
            GENESIS STUDIOS
          </h2>

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

        {/* HERO CONTENT */}
        <div
          style={{
            background: "rgba(0,0,0,0.55)",
            padding: "60px",
            borderRadius: "30px",
            backdropFilter: "blur(8px)",
            maxWidth: "900px",
            boxShadow: "0 0 40px rgba(255,255,255,0.08)",
          }}
        >
          <p
            style={{
              letterSpacing: "4px",
              fontSize: "14px",
              marginBottom: "20px",
              opacity: 0.8,
            }}
          >
            CINEMATIC LUXURY EXPERIENCES
          </p>

          <h1
            style={{
              fontSize: "84px",
              margin: "0",
              lineHeight: "1",
              fontWeight: "800",
              letterSpacing: "-3px",
            }}
          >
            GENESIS STUDIOS
          </h1>

          <p
            style={{
              marginTop: "25px",
              fontSize: "20px",
              opacity: 0.8,
              lineHeight: "1.8",
            }}
          >
            Cinematic travel, storytelling,
            luxury exploration, and unforgettable journeys.
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
              transition: "0.3s",
            }}
          >
            Begin Journey
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section
        style={{
          padding: "140px 30px",
          textAlign: "center",
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            marginBottom: "30px",
          }}
        >
          About Genesis Studios
        </h2>

        <p
          style={{
            fontSize: "21px",
            lineHeight: "1.9",
            opacity: 0.8,
          }}
        >
          Genesis Studios is a cinematic travel and storytelling brand
          focused on luxury experiences, creative exploration,
          modern design, and visual storytelling inspired by the world.
        </p>
      </section>

      {/* DESTINATIONS */}
      <section
        style={{
          padding: "120px 30px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "52px",
            marginBottom: "70px",
          }}
        >
          Featured Destinations
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "35px",
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
                height: "420px",
                borderRadius: "28px",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
                boxShadow: "0 0 30px rgba(255,255,255,0.08)",
              }}
            >
              <img
                src={place.image}
                alt={place.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "0.5s",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "35px",
                }}
              >
                <h3
                  style={{
                    fontSize: "34px",
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

      {/* SOCIALS */}
      <section
        style={{
          padding: "120px 30px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            marginBottom: "40px",
          }}
        >
          Connect With Genesis Studios
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {["YouTube", "Instagram", "TikTok", "X/Twitter"].map(
            (social) => (
              <div
                key={social}
                style={{
                  background: "#111827",
                  padding: "20px 40px",
                  borderRadius: "18px",
                  cursor: "pointer",
                  boxShadow: "0 0 20px rgba(255,255,255,0.05)",
                }}
              >
                {social}
              </div>
            )
          )}
        </div>
      </section>

      {/* CONTACT */}
      <section
        style={{
          padding: "120px 30px",
          textAlign: "center",
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            marginBottom: "30px",
          }}
        >
          Collaborate With Genesis Studios
        </h2>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.8",
            opacity: 0.8,
            marginBottom: "40px",
          }}
        >
          Open for cinematic collaborations, creative partnerships,
          luxury campaigns, and visual storytelling projects.
        </p>

        <div
          style={{
            background: "#111827",
            display: "inline-block",
            padding: "20px 40px",
            borderRadius: "18px",
            fontSize: "18px",
            boxShadow: "0 0 25px rgba(255,255,255,0.05)",
          }}
        >
          genesisstudiosbusiness@gmail.com
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "70px 20px",
          textAlign: "center",
          opacity: 0.6,
          fontSize: "15px",
        }}
      >
        © 2026 Genesis Studios — Luxury Beyond Travel
      </footer>
    </div>
  );
}
```
