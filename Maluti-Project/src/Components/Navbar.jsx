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
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
