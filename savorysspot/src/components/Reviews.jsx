import React, { useRef } from "react";

const reviews = [
  { id:1, text:"Best dining experience — outstanding food and service!", author:"Priya", rating:5 },
  { id:2, text:"Lovely ambience. The seafood platter was superb.", author:"Raj", rating:4 },
  { id:3, text:"Perfect spot for date night. Try the risotto.", author:"Ananya", rating:5 },
  { id:4, text:"Friendly staff and quick service. Cakes are delicious.", author:"Karan", rating:4 }
];

export default function Reviews(){
  const scrollRef = useRef();

  const next = () => {
    const el = scrollRef.current;
    if (el) el.scrollBy({ left: el.clientWidth, behavior: "smooth" });
  };
  const prev = () => {
    const el = scrollRef.current;
    if (el) el.scrollBy({ left: -el.clientWidth, behavior: "smooth" });
  };

  return (
    <section id="reviews">
      <h2 className="section-title">What Our Guests Say</h2>
      <div className="reviews-wrap container">
        <div style={{display:"flex", justifyContent:"flex-end", gap:8, marginBottom:8}}>
          <button className="small-btn" onClick={prev}>◀</button>
          <button className="small-btn" onClick={next}>▶</button>
        </div>
        <div className="carousel" ref={scrollRef}>
          {reviews.map(r => (
            <div key={r.id} className="review-slide" style={{minWidth:300}}>
              <div style={{fontSize:18, fontWeight:700, marginBottom:6}}>{'⭐'.repeat(r.rating)} <span style={{fontSize:14, color:"#666", marginLeft:8}}>{r.author}</span></div>
              <p style={{color:"#444"}}>"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
