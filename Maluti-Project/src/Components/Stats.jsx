import { useEffect, useRef, useState } from "react";
import "../styles/Stats.css";

function Stats() {
  const stats = [
    { value: 11000, label: "Students", plus: true },
    { value: 8, label: "Campuses" },
    { value: 27, label: "Programmes", plus: true },
    { value: 500, label: "Staff Members", plus: true },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || started.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      if (rect.top < window.innerHeight - 100) {
        started.current = true;

        stats.forEach((stat, i) => {
          let start = 0;
          const end = stat.value;
          const duration = 1200;
          const increment = end / (duration / 16);

          const counter = setInterval(() => {
            start += increment;

            if (start >= end) {
              start = end;
              clearInterval(counter);
            }

            setCounts((prev) => {
              const updated = [...prev];
              updated[i] = Math.floor(start);
              return updated;
            });
          }, 16);
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="stats" ref={sectionRef}>
      <h2>Maluti TVET Today</h2>

      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat">
            <h3>
              {counts[i].toLocaleString()}
              {stat.plus && "+"}
            </h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;