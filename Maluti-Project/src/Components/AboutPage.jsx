import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "../styles/AboutPage.css";

function AboutPage() {
  const navigate = useNavigate();

  return (
    <section className="about-page">

   
      <button onClick={() => navigate(-1)} className="back-home-btn">
        <FiArrowLeft /> Go Back
      </button>

      
      <div className="about-header">
        <h1>About Maluti TVET College</h1>
        <p>Building futures through skills, innovation and education</p>
      </div>

      <div className="about-section">
        <h2>History of the College</h2>

        <p>
          Maluti Technical Vocational Education and Training College was established on the 1st of September 2002.
        </p>

        <p>
          Maluti TVET College is a Technical Vocational Education & Training Institution operating under the
          Department of Higher Education and Training. The College is accredited by Umalusi and several Sector
          Education and Training Authorities (SETAs).
        </p>

        <p>
          The Free State Department of Education merged former Colleges of Education (Bonamelo, Sefikeng) and
          Technical Colleges (Itemoheleng, Bethlehem, Kwetlisong and Lere la Tshepe) to form Maluti TVET College.
        </p>

        <p>Today, the college operates across eight campuses:</p>

        <ul className="campus-list">
          <li>Bethlehem – Bethlehem</li>
          <li>Bonamelo – Phuthaditjhaba</li>
          <li>Harrismith – Harrismith</li>
          <li>Itemoheleng – Phuthaditjhaba</li>
          <li>Kwetlisong – Riverside</li>
          <li>Main Campus – Phuthaditjhaba</li>
          <li>Lere la Tshepe – Tseki Village</li>
          <li>Sefikeng – Phuthaditjhaba</li>
        </ul>
      </div>

    
      <div className="about-section split">

        <div>
          <h2>Vision</h2>
          <p>
            To provide excellence, innovation and success that inspires entrepreneurship and employability to transform lives.
          </p>
        </div>

        <div>
          <h2>Mission</h2>
          <ul>
            <li>Offer relevant and responsive areas of learning, knowledge and skills</li>
            <li>Provide world-class programmes in partnership with institutions of excellence</li>
            <li>Sustain public confidence in Maluti TVET College</li>
            <li>Maintain a strong culture of teaching and learning</li>
            <li>Provide opportunities for lifelong learning</li>
          </ul>
        </div>

      </div>


      <div className="about-section">
        <h2>Our Values</h2>

        <div className="values-grid">
          <div><strong>Integrity</strong><p>Uprightness and sincerity</p></div>
          <div><strong>Accountability</strong><p>Responsibility for our actions</p></div>
          <div><strong>Innovation</strong><p>Driving development and progress</p></div>
          <div><strong>Professionalism</strong><p>How we conduct ourselves</p></div>
          <div><strong>Transparency</strong><p>Openness in all operations</p></div>
          <div><strong>Redress</strong><p>Uplifting disadvantaged individuals</p></div>
          <div><strong>Inclusiveness</strong><p>No discrimination</p></div>
          <div><strong>Sustainability</strong><p>Supporting future generations</p></div>
        </div>
      </div>

    </section>
  );
}

export default AboutPage;