import { FiSearch, FiChevronDown } from "react-icons/fi";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>

      
      <div className="nav-right">
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Study</a>
          <a href="#">Apply</a>
          <a href="#">Campuses</a>
          <a href="#">Student Life</a>

        <div className="dropdown">
  <span className="dropdown-toggle">
    Staff <FiChevronDown className="dropdown-icon" />
  </span>

  <div className="dropdown-menu">
    <a href="#">Vacancies</a>
    <a href="#">Tenders</a>
    <a href="#">Publications</a>
    <a href="#">Staff QMS</a>
    <a href="#">Fraud Hotline</a>
    <a href="#">IT Satisfaction Survey</a>
  </div>
</div>

          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="nav-actions">
          <FiSearch className="icon" />
          <button className="btn primary">Apply Now</button>
        </div>
      </div>
    </nav>
  );
}