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
    fetch("http://localhost:5000/api/programmes")
      .then((res) => res.json())
      .then((data) => setProgrammes(data))
      .catch((err) => console.error(err));
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