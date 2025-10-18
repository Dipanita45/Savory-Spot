import React, { useState } from "react";

const dishes = [
  {
    id: 1,
    name: "Classic Caesar Salad",
    price: "₹300",
    desc: "Crisp romaine, parmesan, Caesar dressing.",
    category: "Starters",
    rating: 3,
    img: "/assests/menu/salad.jpg"
  },
  {
    id: 2,
    name: "Enchanted Forest Mushroom Gnocchi",
    price: "₹710",
    desc: "Hand-rolled potato gnocchi tossed in a velvety, house-made sauce.",
    category: "Mains",
    rating: 5,
    img: "/assests/menu/mushrooms.jpg"
  },
  {
    id: 3,
    name: "Summer's Kiss Berry Panna Cotta",
    price: "₹500",
    desc: "A silky smooth, vanilla-infused panna cotta, topped with a compote of seasonal mixed berries.",
    category: "Desserts",
    rating: 4,
    img: "/assests/menu/panna.jpg"
  },
  {
    id: 4,
    name: "Dahi Vada",
    price: "₹150",
    desc: "Spicy, tangy, yogurt-filled fritters.",
    category: "Starters",
    rating: 3,
    img: "/assests/menu/dahi.jpg"
  },
  {
    id: 5,
    name: "Grilled Salmon",
    price: "₹550",
    desc: "Salmon with herbs and lemon butter.",
    category: "Mains",
    rating: 5,
    img: "/assests/menu/salmon.jpg"
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    price: "₹280",
    desc: "Warm cake with molten center.",
    category: "Desserts",
    rating: 4,
    img: "/assests/menu/lava.jpg"
  },
  {
    id: 4,
    name: "Fresh Lemonade",
    price: "₹120",
    desc: "Refreshing homemade lemonade.",
    category: "Drinks",
    rating: 5,
    img: "/assests/menu/lemonade.jpg"
  }
];

export default function Menu() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Starters", "Mains", "Desserts", "Drinks"];
  const filtered = filter === "All" ? dishes : dishes.filter(d => d.category === filter);

  return (
    <section id="menu">
      <h2 className="section-title">Our Menu</h2>
      <div className="menu-controls">
        <div className="filters">
          {categories.map(c => (
            <button
              key={c}
              className={filter === c ? "active" : ""}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="menu-grid">
        {filtered.map(d => (
          <div className="card" key={d.id}>
            <div className="dish-image">
              <img src={d.img} alt={d.name} />
              <span className="price">{d.price}</span>
            </div>
            <div className="dish-info">
              <h3>{d.name}</h3>
              <p>{d.desc}</p>
              <div className="rating">{"⭐".repeat(d.rating)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
