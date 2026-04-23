import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "../styles/Contact.css";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <section className="contact-section">

     
      <button onClick={() => navigate(-1)} className="back-home-btn">
        <FiArrowLeft /> Go Back
      </button>

      <h2>Contact Us</h2>

      <div className="campus-grid">

      
        <div className="campus-card green">
          <h3>Central Office (Phuthaditjhaba)</h3>
          <p><strong>Address:</strong> Mampoi Road, Phuthaditjhaba, 9866</p>
          <p><strong>Tel:</strong> +27 (58) 713 6100</p>
          <p><strong>Email:</strong> info@malutitvet.co.za</p>
          <p><strong>Hours:</strong> Mon – Fri, 8:00 AM – 4:00 PM</p>
        </div>

       
        <div className="campus-card green">
          <h3>Bethlehem Campus</h3>
          <p><strong>Address:</strong> Wessels Street, Bethlehem, 9700</p>
          <p><strong>Tel:</strong> +27 (87) 941 6839</p>
          <p><strong>Email:</strong> bethlehem@malutitvet.co.za</p>
          <p><strong>Hours:</strong> Mon – Fri, 8:00 AM – 4:00 PM</p>
        </div>

      
        <div className="campus-card blue">
          <h3>Harrismith Campus</h3>
          <p><strong>Address:</strong> Harrismith, Free State</p>
          <p><strong>Tel:</strong> +27 (58) 623 2767</p>
          <p><strong>Email:</strong> harrismith@malutitvet.co.za</p>
          <p><strong>Hours:</strong> Mon – Fri, 8:00 AM – 4:00 PM</p>
        </div>

       
        <div className="campus-card blue">
          <h3>Bonamelo Campus</h3>
          <p><strong>Address:</strong> Mampoi Road, Phuthaditjhaba, 9866</p>
          <p><strong>Tel:</strong> +27 (58) 713 6100</p>
          <p><strong>Email:</strong> bonamelo@malutitvet.co.za</p>
          <p><strong>Hours:</strong> Mon – Fri, 8:00 AM – 4:00 PM</p>
        </div>

      
        <div className="campus-card green">
          <h3>Itemoheleng Campus</h3>
          <p><strong>Address:</strong> Phuthaditjhaba, Free State</p>
          <p><strong>Tel:</strong> +27 (58) 713 6100</p>
          <p><strong>Email:</strong> itemoheleng@malutitvet.co.za</p>
          <p><strong>Hours:</strong> Mon – Fri, 8:00 AM – 4:00 PM</p>
        </div>

       
        <div className="campus-card blue">
          <h3>Kwetlisong Campus</h3>
          <p><strong>Address:</strong> Riverside, Free State</p>
          <p><strong>Tel:</strong> +27 (58) 713 6100</p>
          <p><strong>Email:</strong> kwetlisong@malutitvet.co.za</p>
          <p><strong>Hours:</strong> Mon – Fri, 8:00 AM – 4:00 PM</p>
        </div>

        
        <div className="campus-card green">
          <h3>Lere la Tshepe Campus</h3>
          <p><strong>Address:</strong> Tseki Village, Free State</p>
          <p><strong>Tel:</strong> +27 (58) 713 6100</p>
          <p><strong>Email:</strong> lerelatshepe@malutitvet.co.za</p>
          <p><strong>Hours:</strong> Mon – Fri, 8:00 AM – 4:00 PM</p>
        </div>

        
        <div className="campus-card blue">
          <h3>Sefikeng Campus</h3>
          <p><strong>Address:</strong> Phuthaditjhaba, Free State</p>
          <p><strong>Tel:</strong> +27 (58) 713 6100</p>
          <p><strong>Email:</strong> sefikeng@malutitvet.co.za</p>
          <p><strong>Hours:</strong> Mon – Fri, 8:00 AM – 4:00 PM</p>
        </div>

      </div>
    </section>
  );
}