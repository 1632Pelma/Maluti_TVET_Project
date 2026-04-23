import "../styles/Programmes.css";
import { useState } from "react";

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
  const [activeTab, setActiveTab] = useState("NCV");
  const [showAll, setShowAll] = useState(false);

  const programmes = [
    // ===== NCV =====
    {
      id: 1,
      name: "Information Technology & Computer Science",
      category: "NCV",
      icon: "laptop",
    },
    {
      id: 2,
      name: "Electrical Infrastructure Construction",
      category: "NCV",
      icon: "bolt",
    },
    {
      id: 3,
      name: "Engineering & Related Design",
      category: "NCV",
      icon: "tools",
    },
    {
      id: 4,
      name: "Civil Engineering & Building Construction",
      category: "NCV",
      icon: "hardhat",
    },
    {
      id: 5,
      name: "Marketing",
      category: "NCV",
      icon: "briefcase",
    },
    {
      id: 6,
      name: "Finance, Economics & Accounting",
      category: "NCV",
      icon: "briefcase",
    },
    {
      id: 7,
      name: "Office Administration",
      category: "NCV",
      icon: "briefcase",
    },
    {
      id: 8,
      name: "Primary Agriculture",
      category: "NCV",
      icon: "flask",
    },
    {
      id: 9,
      name: "Tourism",
      category: "NCV",
      icon: "utensils",
    },
    {
      id: 10,
      name: "Education and Development",
      category: "NCV",
      icon: "flask",
    },
    {
      id: 11,
      name: "Hospitality",
      category: "NCV",
      icon: "utensils",
    },
    {
      id: 12,
      name: "Primary Health",
      category: "NCV",
      icon: "flask",
    },

    // ===== NATED =====
    {
      id: 13,
      name: "Electrical Engineering (N1–N6)",
      category: "NATED",
      icon: "bolt",
    },
    {
      id: 14,
      name: "Mechanical Engineering (N1–N6)",
      category: "NATED",
      icon: "tools",
    },
    {
      id: 15,
      name: "Civil Engineering (N1–N6)",
      category: "NATED",
      icon: "hardhat",
    },
    {
      id: 16,
      name: "Business Management",
      category: "NATED",
      icon: "briefcase",
    },
    {
      id: 17,
      name: "Marketing Management",
      category: "NATED",
      icon: "briefcase",
    },
    {
      id: 18,
      name: "Management Assistant",
      category: "NATED",
      icon: "briefcase",
    },
    {
      id: 19,
      name: "Financial Management",
      category: "NATED",
      icon: "briefcase",
    },
    {
      id: 20,
      name: "Public Management",
      category: "NATED",
      icon: "briefcase",
    },
    {
      id: 21,
      name: "Human Resource Management",
      category: "NATED",
      icon: "briefcase",
    },
    {
      id: 22,
      name: "Educare",
      category: "NATED",
      icon: "flask",
    },
    {
      id: 23,
      name: "Hospitality (N4–N6)",
      category: "NATED",
      icon: "utensils",
    },
    {
      id: 24,
      name: "Clothing Production",
      category: "NATED",
      icon: "flask",
    },
    {
      id: 25,
      name: "Art",
      category: "NATED",
      icon: "flask",
    },
  ];

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

  const filtered = programmes.filter(
    (item) => item.category === activeTab
  );

  const visibleProgrammes = showAll
    ? filtered
    : filtered.slice(0, 8);

  const half = Math.ceil(visibleProgrammes.length / 2);

  return (
    <section id="programmes" className="programmes">
      <h2>Programmes</h2>

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

      <div className="programme-columns">
        <div className="programme-column">
          {visibleProgrammes.slice(0, half).map((item) => (
            <div key={item.id} className="programme-line">
              <div className="programme-line-content">
                <span className="programme-icon">
                  {iconMap[item.icon] || <FaBriefcase />}
                </span>
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="programme-column">
          {visibleProgrammes.slice(half).map((item) => (
            <div key={item.id} className="programme-line">
              <div className="programme-line-content">
                <span className="programme-icon">
                  {iconMap[item.icon] || <FaBriefcase />}
                </span>
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

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