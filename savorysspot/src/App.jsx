import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Specials from "./components/Specials";
import Reservation from "./components/Reservation";
import Events from "./components/Events";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <Hero />
      <main>
        <Menu />
        <Specials />
        <Reservation />
        <Events />
        <Reviews />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
