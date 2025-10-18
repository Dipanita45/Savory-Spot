import React from "react";

const specials = [
  {
    id: 1,
    name: "Chef’s Tandoori Platter",
    desc: "Aromatic grilled meats & veggies with chutney.",
    img: "/assests/specials/tandoori.jpg"
  },
  {
    id: 2,
    name: "Pasta Primavera",
    desc: "Fresh vegetables tossed with creamy pasta sauce.",
    img: "/assests/specials/pasta.jpg"
  }
];

export default function Specials() {
  return (
    <section id="specials">
      <h2 className="section-title">Daily Specials</h2>
      <div className="specials-grid">
        {specials.map(s => (
          <div className="special-card" key={s.id}>
            <img src={s.img} alt={s.name} />
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
