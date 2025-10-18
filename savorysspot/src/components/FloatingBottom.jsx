import React from "react";

export default function FloatingButton() {
  return (
    <button
      className="reserve-btn"
      onClick={() => document.querySelector("#reservation").scrollIntoView({ behavior: "smooth" })}
    >
      Reserve Table
    </button>
  );
}
