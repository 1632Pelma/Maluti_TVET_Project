import "../styles/Programmes.css";
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
  const programmes = [
    { name: "Business Studies", icon: <FaBriefcase /> },
    { name: "Engineering Studies", icon: <FaTools /> },
    { name: "IT & Computer Science", icon: <FaLaptopCode /> },
    { name: "Hospitality", icon: <FaUtensils /> },
    { name: "Construction", icon: <FaHardHat /> },
    { name: "Electrical Engineering", icon: <FaBolt /> },
    { name: "Motor Mechanics", icon: <FaCar /> },
    { name: "Science Lab", icon: <FaFlask /> },
  ];

  return (
    <section className="programmes">
      <h2>Programmes</h2>

      <div className="programmes-grid">
        {programmes.map((item, index) => (
          <div key={index} className="programme-card">
            <div className="programme-icon">{item.icon}</div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Programmes;