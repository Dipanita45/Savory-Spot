import React from "react";

const events = [
  {
    id: 1,
    title: "Drinks Tasting Evening",
    desc: "Sample premium drinks with cheese pairings.",
    date: "Sept 25, 2025",
    img: "/assests/events/drinks.jpg"
  },
  {
    id: 2,
    title: "Cozy Dinner Club",
    desc: "Join us for a cozy evening of food, drinks, and great company!",
    date: "Nov 8, 2025",
    img: "/assests/events/dinner.jpg"
  },
  {
    id: 2,
    title: "Family Sunday Brunch",
    desc: "Buffet with live music for the whole family.",
    date: "Oct 5, 2025",
    img:"/assests/events/brunch.jpg"
  }
];

export default function Events() {
  return (
    <section id="events">
      <h2 className="section-title">Upcoming Events</h2>
      <div className="events-grid">
        {events.map(e => (
          <div className="event-card" key={e.id}>
            <img src={e.img} alt={e.title} />
            <span className="event-meta">{e.date}</span>
            <h3>{e.title}</h3>
            <p>{e.desc}</p>
            <button className="btn">RSVP</button>
          </div>
        ))}
      </div>
    </section>
  );
}
