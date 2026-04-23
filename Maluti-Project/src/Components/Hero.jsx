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
           <a href="#campuses" className="btn outline">
  View Campuses
</a>
          </div>
        </div>

        
        <div className="hero-right">

          <div className="hero-card highlight">
            <h3>2026 Applications Open</h3>
            <p>Apply now.</p>
<br/>
            <a href="#programmes" className="btn secondary small">
  See Programmes
</a>
          </div>


        </div>
      </div>
    </section>
  );
}