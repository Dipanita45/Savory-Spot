import React from "react";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1500&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center",
        padding: "100px 20px",
        position: "relative",
      }}
    >
      <div className="hero-text">
        <h2 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "20px" }}>
          Delicious <span style={{ color: "#d4af37" }}>Food</span>, Cozy Atmosphere
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "700px",
            margin: "0 auto 30px",
            lineHeight: "1.6",
          }}
        >
          Welcome to <strong>Savory Spot</strong> — where fresh ingredients meet
          crafted flavours. Book a table, explore our menu, or join us for
          unforgettable evenings.
        </p>
        <div className="hero-cta" style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
          <a href="#reservation" className="btn btn-lg">
            Reserve a Table
          </a>
          <a href="#menu" className="btn btn-lg secondary">
            View Menu
          </a>
        </div>
      </div>
      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "2rem",
          animation: "bounce 2s infinite",
        }}
      >
        ↓
      </div>
    </section>
  );
}
