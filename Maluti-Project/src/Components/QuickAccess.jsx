import "../styles/QuickAccess.css"
import { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  FileText,
  User,
  Wallet,
  MapPin,
} from "lucide-react";

function QuickAccess() {
const items = [
  { title: "Programmes", icon: <GraduationCap size={36} /> },
  { title: "Apply Online", icon: <FileText size={36} /> },
  { title: "Student Portal", icon: <User size={36} /> },
  { title: "Financial Aid", icon: <Wallet size={36} /> },
  { title: "Campuses", icon: <MapPin size={36} /> },
];

  const [visibleCount, setVisibleCount] = useState(0);
  const sectionRef = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || hasStarted.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      if (rect.top < window.innerHeight - 150) {
        hasStarted.current = true;

        // 🔥 THIS is the key fix (interval, not many timeouts)
        let index = 0;

        const interval = setInterval(() => {
          index++;
          setVisibleCount(index);

          if (index >= items.length) {
            clearInterval(interval);
          }
        }, 300); // speed of reveal (adjust here)
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="quick" ref={sectionRef}>
      <h2>Quick Access</h2>

     <div className="quick-grid">
  {items.map((item, i) => (
  <div
  key={i}
  className={`quick-card ${i < visibleCount ? "show" : ""}`}
>
  <div className="quick-icon">{item.icon}</div>

  <div className="quick-text">
    <h3>{item.title}</h3>
    <p>{item.desc}</p>
  </div>
</div>
  ))}
</div>
    </section>
  );
}

export default QuickAccess;