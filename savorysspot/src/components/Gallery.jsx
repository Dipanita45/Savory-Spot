import React, { useState } from "react";

const images = [
  "/assests/gallery/g1.jpg",
  "/assests/gallery/g2.jpg",
  "/assests/gallery/g3.jpg",
  "/assests/gallery/g4.jpg",
  "/assests/gallery/g5.jpg",
  "/assests/gallery/g6.jpg"
];

export default function Gallery() {
  const [open, setOpen] = useState(null);

  return (
    <section id="gallery">
      <h2 className="section-title">Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <div className="gallery-item" key={i} onClick={() => setOpen(src)}>
            <img src={src} alt={`gallery-${i}`} />
          </div>
        ))}
      </div>

      <div
        className={`lightbox ${open ? "open" : ""}`}
        onClick={() => setOpen(null)}
      >
        {open && (
          <img src={open} alt="enlarged" onClick={(e) => e.stopPropagation()} />
        )}
      </div>
    </section>
  );
}
