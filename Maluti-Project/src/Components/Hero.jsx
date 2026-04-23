import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

       
        <div className="hero-left">
          <h1>Discover Your Potential With Maluti TVET College</h1>
          <p>
            Great Place, Great Choice For Lifelong Learning.
          </p>

          <div className="hero-buttons">
            <a
  href="https://maluti.coltech.co.za/"
  target="_blank"
  rel="noopener noreferrer"
  className="btn primary"
>
  Apply Now
</a>
            <button className="btn outline">View Campuses</button>
          </div>
        </div>

        
        <div className="hero-right">

          <div className="hero-card highlight">
            <h3>2026 Applications Open</h3>
            <p>Apply now for the upcoming academic year.</p>
            <button className="btn secondary small">
            See Programmes
            </button>
          </div>


        </div>
      </div>
    </section>
  );
}