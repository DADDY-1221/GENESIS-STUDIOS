export default function GenesisStudiosWebsite() {
  return (
    <div
      style={{
        backgroundColor: "#020617",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial",
        textAlign: "center",
        padding: "60px 20px",
      }}
    >
      <h1 style={{ fontSize: "70px", marginBottom: "20px" }}>
        GENESIS STUDIOS
      </h1>

      <p
        style={{
          fontSize: "24px",
          color: "#cbd5e1",
          maxWidth: "800px",
          margin: "auto",
          lineHeight: "1.7",
        }}
      >
        Cinematic travel, luxury experiences, storytelling,
        and unforgettable adventures across the globe.
      </p>

      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        alt="Travel"
        style={{
          width: "90%",
          maxWidth: "1000px",
          marginTop: "50px",
          borderRadius: "20px",
          boxShadow: "0 0 40px rgba(0,0,0,0.5)",
        }}
      />

      <button
        style={{
          marginTop: "40px",
          padding: "18px 40px",
          backgroundColor: "#facc15",
          border: "none",
          borderRadius: "14px",
          fontSize: "20px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Explore More
      </button>
    </div>
  );
}
