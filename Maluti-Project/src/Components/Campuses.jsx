import React from "react";
import "../styles/Campuses.css";

function Campuses() {
  const campuses = [
    { name: "Main Campus", image: "/images/hero.png" },
    { name: "Harrismith", image: "/images/Hari.png" },
    { name: "Bethlehem Campus", image: "/images/Beth.png" },
    { name: "Itemoheleng Campus", image: "/images/itemo.png" },
    { name: "Kwetlisong Campus", image: "/images/Kwetl.png" },
    { name: "Lere La Tshepe Campus", image: "/images/lere.png" },
    { name: "Sefikeng Campus", image: "/images/sefi.png" },
    { name: "Bonamelo Campus", image: "/images/bona.png" },
  ];

  return (
    <div className="campuses-section">
      <h2 className="campuses-title">Our Campuses</h2>

      <div className="campuses-container">
        {campuses.map((campus, index) => (
          <div className="campus-card" key={index}>
            <img
              src={campus.image}
              alt={campus.name}
              className="campus-image"
            />
            <div className="campus-name">
              <h3>{campus.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Campuses;