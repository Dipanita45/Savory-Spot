import React, { useEffect, useState } from "react";

export default function Header() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    const updateStatus = () => {
      const h = new Date().getHours();
      setStatus(h >= 11 && h < 22 ? "Open · 11:00–22:00" : "Closed · Opens at 11:00");
    };
    updateStatus();
    const id = setInterval(updateStatus, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner container">
        <div className="brand">Savory <span style={{color:"#333"}}>Spot</span></div>
        <nav className="nav-links">
          <a href="#menu">Menu</a>
          <a href="#specials">Specials</a>
          <a href="#reservation">Reservations</a>
          <a href="#events">Events</a>
          <a href="#reviews">Reviews</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="status-pill">{status}</div>
      </div>
    </header>
  );
}
