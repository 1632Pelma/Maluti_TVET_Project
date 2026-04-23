import "../styles/Events.css";
import { useEffect, useRef, useState } from "react";

function Events() {
  const events = [
    {
      title: "Open Day 2026",
      date: "12 March 2026",
      time: "09:00 AM",
      location: "Main Campus",
    },
    {
      title: "Career Expo",
      date: "25 March 2026",
      time: "10:00 AM",
      location: "Hall A",
    },
    {
      title: "Graduation Ceremony",
      date: "10 April 2026",
      time: "08:00 AM",
      location: "Auditorium",
    },
    {
      title: "Tech Workshop",
      date: "18 April 2026",
      time: "11:00 AM",
      location: "Lab 3",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const sectionRef = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || hasStarted.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      if (rect.top < window.innerHeight - 150) {
        hasStarted.current = true;

        // 🔥 controlled one-by-one reveal
        let index = 0;

        const interval = setInterval(() => {
          index++;
          setVisibleCount(index);

          if (index >= events.length) {
            clearInterval(interval);
          }
        }, 300); // speed (adjust if needed)
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="events" ref={sectionRef}>
      <div className="events-container">

        {/* LEFT IMAGE */}
        <div className="event-image">
          <img src="/images/event.png" alt="event" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="event-content">
          <h2>Upcoming Events</h2>

          <div className="event-list">
            {events.slice(0, visibleCount).map((event, index) => (
              <div
                key={index}
                className={`event-line ${
                  activeIndex === index ? "active" : ""
                } ${index < visibleCount ? "show" : ""}`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <h3>{event.title}</h3>
                <p>
                  {event.date} • {event.time} • {event.location}
                </p>
              </div>
            ))}
          </div>

          <button className="learn-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Events;