import React, { useState } from "react";

export default function Reservation(){
  const [form, setForm] = useState({ name:"", email:"", date:"", time:"", guests:"" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${form.name}! Reservation requested for ${form.date} at ${form.time} (${form.guests} guest(s)). We'll email ${form.email}.`);
    setForm({ name:"", email:"", date:"", time:"", guests:"" });
  };

  return (
    <section id="reservation" className="container">
      <h2 className="section-title">Reserve a Table</h2>
      <div className="reserve-wrap">
        <form className="reserve-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
          <label>Email</label>
          <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
          <label>Date</label>
          <input type="date" value={form.date} onChange={e=>setForm({...form, date:e.target.value})} required />
          <label>Time</label>
          <input type="time" value={form.time} onChange={e=>setForm({...form, time:e.target.value})} required />
          <label>Guests</label>
          <select value={form.guests} onChange={e=>setForm({...form, guests:e.target.value})} required>
            <option value="">Select</option>
            <option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option>
          </select>
          <button className="btn" type="submit">Reserve Now</button>
        </form>
      </div>
    </section>
  );
}
