import "../styles/About.css";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate(); 

  return (
    <section className="about">

      <div className="about-map"></div>

      <div className="about-container">

        <div className="about-left">
          <h2>WELCOME</h2>
        </div>

        <div className="about-right">
          <p>
            Maluti TVET College, a multi-site Technical Vocational Education
            and Training provider, is located in the North Eastern Free State
            with its Corporate Office in Bethlehem and Central Office in
            Phuthaditjhaba at the foothills of the majestic Maluti Mountains.
          </p>

          
          <button 
            className="about-btn"
            onClick={() => navigate("/about")}
          >
            Learn More
          </button>

        </div>

      </div>
    </section>
  );
}