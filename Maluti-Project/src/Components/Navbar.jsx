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
          <a href="#">About Us</a>
          <a href="#">Study</a>
  
         
        <div className="dropdown">
  <span className="dropdown-toggle">
    Student Support <FiChevronDown className="dropdown-icon" />
  </span>

  <div className="dropdown-menu">
    <a href="#">Study Guides</a>
    <a href="#">PLP CANVAS</a>
    <a href="#">Archie</a>
    <a href="#">Registration</a>
    <a href="#">Financial aid</a>
    <a href="#">Previous Question Papers</a>
    <a href="#">Social & Cultural Services</a>
    <a href="#">Health Education & Related Services</a>
        <a href="#">GBVF Student Survey</a>
        <a href="#">Student Enrolment Satisfaction Survey</a>
  </div>
</div>

          <div className="dropdown">
  <span className="dropdown-toggle">
    Campuses <FiChevronDown className="dropdown-icon" />
  </span>

  <div className="dropdown-menu">
    <a href="#">Main Campus</a>
    <a href="#">Bethlehem Campus</a>
    <a href="#">Harrismith Campus</a>
    <a href="#">Kwetlisong Campus</a>
    <a href="#">Bonamelo Campus</a>
    <a href="#">Sefikeng Campus</a>
    <a href="#">Itemoheleng Campus</a>
    <a href="#">Lere la Tshepe Campus</a>
  </div>
</div>

        <div className="dropdown">
  <span className="dropdown-toggle">
    Staff <FiChevronDown className="dropdown-icon" />
  </span>

  <div className="dropdown-menu">
    <a href="#">Publications</a>
    <a href="#">Staff QMS</a>
        <a href="#">Maturity Model Staff Survey</a>
    <a href="#">Staff Survey</a>
  </div>
</div>


     <div className="dropdown">
  <span className="dropdown-toggle">
    Tenders & Vacancies <FiChevronDown className="dropdown-icon" />
  </span>

  <div className="dropdown-menu">
    <a href="#">Vacancies</a>
    <a href="#">Tenders</a>
  </div>
</div>

          
          <a href="#">Contact Us</a>
        </div>

        <div className="nav-actions">
          <FiSearch className="icon" />
          <button className="btn primary">Fraud Hotline</button>
        </div>
      </div>
    </nav>
  );
}