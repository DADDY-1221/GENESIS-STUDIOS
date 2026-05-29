export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#020617",
        color: "white",
        fontFamily: "Arial",
        minHeight: "100vh",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "25px 60px",
          position: "fixed",
          width: "100%",
          top: 0,
          backdropFilter: "blur(10px)",
          background: "rgba(2,6,23,0.7)",
          zIndex: 1000,
          boxSizing: "border-box",
        }}
      >
        <h2 style={{ margin: 0 }}>GENESIS STUDIOS</h2>

        <div style={{ display: "flex", gap: "30px" }}>
          <span>HOME</span>
          <span>DESTINATIONS</span>
          <span>STORIES</span>
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
            background: "rgba(0,0,0,0.45)",
            padding: "50px",
            borderRadius: "20px",
            backdropFilter: "blur(5px)",
          }}
        >
          <p
            style={{
              letterSpacing: "6px",
              fontSize: "14px",
              opacity: 0.8,
            }}
          >
            CINEMATIC LUXURY EXPERIENCES
          </p>

          <h1
            style={{
              fontSize: "80px",
              margin: "20px 0",
              lineHeight: 1,
            }}
          >
            GENESIS
            <br />
            STUDIOS
          </h1>

          <p
            style={{
              maxWidth: "700px",
              fontSize: "20px",
              opacity: 0.9,
              marginBottom: "30px",
            }}
          >
            Explore breathtaking destinations, cinematic storytelling,
            and unforgettable luxury adventures across the globe.
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
          padding: "100px 50px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "50px", marginBottom: "60px" }}>
          Featured Destinations
       [
  {
    name: "Swiss Alps",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Dubai Nights",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Tokyo Dreams",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Iceland Escape",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop",
  },
].map((place) => (
  <div
    key={place.name}
    style={{
      backgroundImage: `url(${place.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "350px",
      borderRadius: "24px",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
        display: "flex",
        alignItems: "flex-end",
        padding: "30px",
        fontSize: "32px",
        fontWeight: "bold",
      }}
    >
      {place.name}
    </div>
  </div>
))
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "40px",
          opacity: 0.6,
        }}
      >
        © 2026 Genesis Studios — Cinematic Luxury Experiences
      </footer>
    </div>
  );
}
