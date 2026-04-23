import "../styles/Programmes.css";
import { useEffect, useRef, useState } from "react";

import {
  FaBriefcase,
  FaTools,
  FaLaptopCode,
  FaFlask,
  FaHardHat,
  FaUtensils,
  FaCar,
  FaBolt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function Programmes() {
  const [programmes, setProgrammes] = useState([]);
  const [activeTab, setActiveTab] = useState("NCV");

  const scrollRef = useRef();

  const iconMap = {
    briefcase: <FaBriefcase />,
    tools: <FaTools />,
    laptop: <FaLaptopCode />,
    flask: <FaFlask />,
    hardhat: <FaHardHat />,
    utensils: <FaUtensils />,
    car: <FaCar />,
    bolt: <FaBolt />,
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/programmes")
      .then((res) => res.json())
      .then((data) => setProgrammes(data))
      .catch((err) => console.error(err));
  }, []);

  const filtered = programmes.filter(
    (item) => item.category === activeTab
  );

  const scroll = (dir) => {
    const container = scrollRef.current;
    const amount = 320;
    container.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="programmes" className="programmes">
      <h2>Programmes</h2>

 
      <div className="programme-tabs">
        <span
          className={activeTab === "NCV" ? "active" : ""}
          onClick={() => setActiveTab("NCV")}
        >
          NCV
        </span>

        <span className="divider">|</span>

        <span
          className={activeTab === "NATED" ? "active" : ""}
          onClick={() => setActiveTab("NATED")}
        >
          NATED
        </span>
      </div>

     
      <div className="programme-slider-wrapper">
        <div className="fade left" />

        <button className="arrow left" onClick={() => scroll("left")}>
          <FaChevronLeft />
        </button>

        <div className="programme-slider" ref={scrollRef}>
          {filtered.map((item) => (
            <div key={item.id} className="programme-item">
              <div className="programme-icon">
                {iconMap[item.icon?.toLowerCase()] || <FaBriefcase />}
              </div>
              <p>{item.name}</p>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={() => scroll("right")}>
          <FaChevronRight />
        </button>

        <div className="fade right" />
      </div>
    </section>
  );
}

export default Programmes;