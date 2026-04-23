import "../styles/FooterLinks.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

function FooterLinks() {
  return (
    <footer className="footer">

      <div className="footer-container">
        <div className="footer-grid">

          {/* 🔥 NEW BRAND COLUMN */}
          <div className="footer-brand">
            <img src="/images/logo.png" alt="Maluti TVET College" />

            <h2>Maluti TVET College</h2>

            <p>
              Empowering students through quality education and practical skills
              development for a better future.
            </p>

            <span className="footer-location">
              Free State, South Africa
            </span>
          </div>

          <div className="footer-column">
            <h3>About</h3>
            <p>About the College</p>
            <p>Vision & Mission</p>
            <p>Campuses</p>
            <p>Leadership</p>
            <p>Vacancies</p>
          </div>

          <div className="footer-column">
            <h3>Study</h3>
            <p>Programmes</p>
            <p>Prospectus</p>
            <p>Academic Calendar</p>
            <p>Online Learning</p>
          </div>

          <div className="footer-column">
            <h3>Apply</h3>
            <p>Apply Online</p>
            <p>Admission Requirements</p>
            <p>Application Status</p>
            <p>NSFAS</p>
          </div>

          <div className="footer-column">
  <h3>Contact</h3>
  <p>Contact Us</p>
  <p>Campuses</p>
  <p>Email</p>
  <p>Phone Numbers</p>
</div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Maluti TVET College. All rights reserved.</p>

        <div className="footer-socials">
          <span><FaFacebookF /></span>
          <span><FaInstagram /></span>
          <span><FaYoutube /></span>
          <span><FaLinkedinIn /></span>
        </div>
      </div>

    </footer>
  );
}

export default FooterLinks;