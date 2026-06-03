```jsx
export default function App() {
  const places = [
    {
      title: "Dubai",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Tokyo",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Santorini",
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop",
    },
  ];

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
          alignItems: "center",
          padding: "20px 40px",
          background: "#020617",
        }}
      >
        <h2>GENESIS STUDIOS</h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <span>HOME</span>
          <span>ABOUT</span>
          <span>TRAVEL</span>
          <span>CONTACT</span>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          minHeight: "80vh",
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
            background: "rgba(0,0,0,0.5)",
            padding: "50px",
            borderRadius: "20px",
            maxWidth: "700px",
          }}
        >
          <h1
            style={{
              fontSize: "70px",
              marginBottom: "20px",
            }}
          >
            GENESIS STUDIOS
          </h1>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.7",
            }}
          >
            Cinematic travel and luxury storytelling across the world.
          </p>

          <button
            style={{
              marginTop: "30px",
              padding: "15px 35px",
              borderRadius: "50px",
              border: "none",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
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
        }}
      >
        <h2
          style={{
            textAlign: "center",
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
          {places.map((place) => (
            <div
              key={place.title}
              style={{
                height: "350px",
                borderRadius: "20px",
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
                  bottom: 0,
                  width: "100%",
                  padding: "25px",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
                }}
              >
                <h3
                  style={{
                    fontSize: "30px",
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
          focused on luxury experiences, exploration, and visual creativity.
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
```
