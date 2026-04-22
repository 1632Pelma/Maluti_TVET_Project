import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

       
        <div className="hero-left">
          <h1>Build Your Future with Maluti TVET College</h1>
          <p>
            Practical skills. Real opportunities. A better tomorrow.
          </p>

          <div className="hero-buttons">
            <button className="btn primary">Apply Now</button>
            <button className="btn outline">Explore Courses</button>
          </div>
        </div>

        
        <div className="hero-right">

          <div className="hero-card highlight">
            <h3>2026 Applications Open</h3>
            <p>Apply now for the upcoming academic year.</p>
            <button className="btn secondary small">
              Download Prospectus
            </button>
          </div>


        </div>
      </div>
    </section>
  );
}