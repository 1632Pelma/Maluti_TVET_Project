import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "../styles/Study.css";

export default function Study() {
  const navigate = useNavigate();

  return (
    <section className="study-page">

   
      <button onClick={() => navigate(-1)} className="back-home-btn">
        <FiArrowLeft /> Go Back
      </button>

      
      <div className="study-header">
        <h1>Study at Maluti TVET College</h1>
        <p>Registration • Courses • Admissions • Student Success</p>
      </div>

      <div className="study-grid">

        <div className="study-card">
          <span className="study-tag">2026</span>
          <h3>Registration Portal</h3>
          <p>Access online registration for new and returning students.</p>
          <button>Open Portal</button>
        </div>

        <div className="study-card">
          <span className="study-tag">Step 1</span>
          <h3>Placement Test</h3>
          <p>Complete your compulsory placement screening first.</p>
          <button>Start Test</button>
        </div>

        <div className="study-card">
          <span className="study-tag">Step 2</span>
          <h3>Online Application</h3>
          <p>Submit your application and choose your programme.</p>
          <button>Apply Now</button>
        </div>

        <div className="study-card">
          <span className="study-tag">Download</span>
          <h3>College Prospectus</h3>
          <p>Explore all courses, campuses and admission details.</p>
          <button>View PDF</button>
        </div>

      </div>

     
      <div className="study-section">
        <h2>Registration Process</h2>

        <div className="steps-grid">
          <div className="step-card">1. Placement Test</div>
          <div className="step-card">2. Apply Online</div>
          <div className="step-card">3. Upload Documents</div>
          <div className="step-card">4. Await Approval</div>
        </div>
      </div>

      
      <div className="study-section">
        <h2>Important Information</h2>

        <div className="notice-box">
          <p>• Placement Screening is compulsory.</p>
          <p>• You may still choose your own preferred course.</p>
          <p>• Complete the screening honestly yourself.</p>
          <p>• Finish all assessments before submitting.</p>
        </div>
      </div>

    </section>
  );
}