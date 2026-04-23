import "../styles/Programmes.css";
import { useEffect, useState } from "react";

import {
  FaBriefcase,
  FaTools,
  FaLaptopCode,
  FaFlask,
  FaHardHat,
  FaUtensils,
  FaCar,
  FaBolt,
} from "react-icons/fa";

function Programmes() {
  const [programmes, setProgrammes] = useState([]);
  const [activeTab, setActiveTab] = useState("NCV");
  const [showAll, setShowAll] = useState(false);

const iconMap = {
  laptop: <FaLaptopCode />,
  bolt: <FaBolt />,
  tools: <FaTools />,
  hardhat: <FaHardHat />,
  briefcase: <FaBriefcase />,
  flask: <FaFlask />,
  utensils: <FaUtensils />,
  car: <FaCar />,
};

  useEffect(() => {
  const fallbackData = [
    { id: 1, name: "Engineering Studies", category: "NCV", icon: "tools" },
    { id: 2, name: "Information Technology", category: "NCV", icon: "laptop" },
    { id: 3, name: "Business Management", category: "NATED", icon: "briefcase" },
    { id: 4, name: "Hospitality", category: "NCV", icon: "utensils" },
    { id: 5, name: "Electrical Infrastructure", category: "NCV", icon: "bolt" },
    { id: 6, name: "Civil Engineering", category: "NATED", icon: "hardhat" },
    { id: 7, name: "Tourism", category: "NCV", icon: "car" },
    { id: 8, name: "Science Lab Tech", category: "NCV", icon: "flask" },
  ];

  fetch("http://localhost:5000/api/programmes")
    .then((res) => {
      if (!res.ok) throw new Error();
      return res.json();
    })
    .then((data) => setProgrammes(data))
    .catch(() => {
      console.log("Using fallback data");
      setProgrammes(fallbackData);
    });
}, []);

  // Filter by tab
  const filtered = programmes.filter(
    (item) => item.category === activeTab
  );

  // Show only 8 unless expanded
  const visibleProgrammes = showAll
    ? filtered
    : filtered.slice(0, 8);

  // 🔥 Split dynamically into two columns
  const half = Math.ceil(visibleProgrammes.length / 2);

  return (
    <section id="programmes" className="programmes">
      <h2>Programmes</h2>

      {/* Tabs */}
      <div className="programme-tabs">
        <span
          className={activeTab === "NCV" ? "active" : ""}
          onClick={() => {
            setActiveTab("NCV");
            setShowAll(false);
          }}
        >
          NCV
        </span>

        <span className="divider">|</span>

        <span
          className={activeTab === "NATED" ? "active" : ""}
          onClick={() => {
            setActiveTab("NATED");
            setShowAll(false);
          }}
        >
          NATED
        </span>
      </div>

      {/* Two Columns */}
      <div className="programme-columns">
        
        {/* LEFT COLUMN */}
        <div className="programme-column">
          {visibleProgrammes.slice(0, half).map((item) => (
            <div key={item.id} className="programme-line">
              <div className="programme-line-content">
                <span className="programme-icon">
                  {iconMap[item.icon?.toLowerCase()] || <FaBriefcase />}
                </span>
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="programme-column">
          {visibleProgrammes.slice(half).map((item) => (
            <div key={item.id} className="programme-line">
              <div className="programme-line-content">
                <span className="programme-icon">
                  {iconMap[item.icon?.toLowerCase()] || <FaBriefcase />}
                </span>
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Show More / Less */}
      {filtered.length > 8 && (
        <div className="show-more-container">
          <button
            className="show-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "−" : "+"}
          </button>
        </div>
      )}
    </section>
  );
}

export default Programmes;
