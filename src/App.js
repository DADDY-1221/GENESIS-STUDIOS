```jsx id="r7x3nq"
export default function App() {
  return (
    <div
      style={{
        background: "#050816",
        color: "white",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop')",
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
            background: "rgba(0,0,0,0.6)",
            padding: "60px",
            borderRadius: "30px",
            maxWidth: "800px",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              marginBottom: "20px",
            }}
          >
            GENESIS STUDIOS
          </h1>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.8",
              opacity: 0.8,
            }}
          >
            Cinematic travel, luxury storytelling,
            and unforgettable experiences.
          </p>

          <button
            style={{
              marginTop: "40px",
              padding: "18px 40px",
              borderRadius: "999px",
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
          padding: "120px 30px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "50px",
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
                  bottom: 0,
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
          textAlign: "center",
          padding: "60px 20px",
          opacity: 0.7,
        }}
      >
        © 2026 Genesis Studios
      </footer>
    </div>
  );
}
```
