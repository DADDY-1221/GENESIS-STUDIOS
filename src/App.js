export default function App() {
  const destinations = [
    {
      title: "Swiss Alps",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Dubai Nights",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Tokyo Dreams",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Iceland Escape",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#020617",
        color: "white",
        fontFamily: "Inter, sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 50px",
          background: "rgba(2,6,23,0.7)",
          backdropFilter: "blur(10px)",
          zIndex: 1000,
          boxSizing: "border-box",
        }}
      >
        <h2 style={{ margin: 0 }}>
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
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {destinations.map((place) => (
            <div
              key={place.title}
              style={{
                height: "350px",
                borderRadius: "24px",
                boxShadow: "0 0 30px rgba(255,255,255,0.08)",
                overflow: "hidden",
                position: "relative",
                transition: "0.4s",
                transition: "0.4s",
                cursor: "pointer",
                backgroundImage: `url(${place.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "30px",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                {place.title}
              </div>
            </div>
          ))}
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
      {/* SOCIALS */}
<section
  style={{
    padding: "100px 30px",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "50px",
      marginBottom: "30px",
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
      marginTop: "40px",
    }}
  >
    {["YouTube", "Instagram", "TikTok", "X/Twitter"].map((social) => (
      <div
        key={social}
        style={{
          background: "#0f172a",
          padding: "20px 40px",
          borderRadius: "16px",
          boxShadow: "0 0 20px rgba(255,255,255,0.05)",
          cursor: "pointer",
          transition: "0.3s",
        }}
      >
        {social}
      </div>
    ))}
  </div>
</section>
      {/* CONTACT */}
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
    Collaborate With Genesis Studios
  </h2>

  <p
    style={{
      fontSize: "20px",
      lineHeight: "1.8",
      opacity: "0.8",
      marginBottom: "40px",
    }}
  >
    Open for cinematic collaborations,
    creative partnerships, luxury travel campaigns,
    and global storytelling projects.
  </p>

  <div
    style={{
      background: "#0f172a",
      display: "inline-block",
      padding: "20px 40px",
      borderRadius: "16px",
      boxShadow: "0 0 25px rgba(255,255,255,0.05)",
      fontSize: "18px",
    }}
  >
    genesisstudiosbusiness@gmail.com
  </div>
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
