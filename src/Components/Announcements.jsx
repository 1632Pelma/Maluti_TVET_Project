import "../styles/Announcements.css";

function Announcements() {
  const updates = [
  {
    title: "2026 Registrations",
    text: "Applications for the 2026 academic year are now open.",
    desc: "Prospective students are encouraged to apply early to secure placement in their preferred programmes.",
    category: "Registration",
    action: "Apply Now",
    date: "12 Mar 2026",
  },
  {
    title: "Tender Updates",
    text: "Latest procurement notices available.",
    desc: "View all active tenders and submission requirements issued by the institution.",
    category: "Tender",
    image: "/images/tender.png",
    action: "Read More",
    date: "10 Mar 2026",
  },
  {
    title: "Staff Survey",
    text: "Participate in our feedback survey.",
    desc: "Your input helps improve institutional processes and staff wellbeing initiatives.",
    category: "Survey",
    image: "/images/survey.png",
    action: "Take Survey",
    date: "08 Mar 2026",
  },
  {
    title: "College Report",
    text: "View our annual institutional report.",
    desc: "Explore performance, achievements, and strategic developments over the past year.",
    category: "Report",
    image: "/images/report.png",
    action: "View Report",
    date: "06 Mar 2026",
  },
  {
    title: "Bursary Applications",
    text: "Apply for financial assistance.",
    desc: "Funding opportunities are available for qualifying students across multiple programmes.",
    category: "Bursary",
    image: "/images/bursary.png",
    action: "Apply Now",
    date: "05 Mar 2026",
  },
  {
    title: "Vacancies",
    text: "Explore available job opportunities.",
    desc: "Join our institution and contribute to academic and operational excellence.",
    category: "Vacancy",
    image: "/images/vacancy.png",
    action: "View Jobs",
    date: "03 Mar 2026",
  },
  {
    title: "Exam Timetable",
    text: "Check your upcoming exams.",
    desc: "Ensure you are prepared by reviewing dates, venues, and instructions.",
    category: "Notice",
    image: "/images/timetable.png",
    action: "View Timetable",
    date: "02 Mar 2026",
  },
  {
    title: "Campus Maintenance",
    text: "Scheduled upgrades this weekend.",
    desc: "Temporary disruptions may occur while infrastructure improvements are underway.",
    category: "Notice",
    image: "/images/maint.png",
    action: "Read More",
    date: "01 Mar 2026",
  },
];


  return (
    <section className="announcements">
      <h2>Announcements</h2>

      <div className="ann-grid">
  {updates.map((item, index) => (
    <div key={index} className="ann-card">

    
      <div className="ann-header">
        <span className="ann-category">{item.category}</span>
        <h3>{item.title}</h3>
      </div>

     
      <div className="ann-body">
        <span className="ann-date">{item.date}</span>

        <p className="ann-text">{item.text}</p>
        <p className="ann-desc">{item.desc}</p>

        <button className="ann-btn">
          {item.action} →
        </button>
      </div>

    </div>
  ))}
</div>
       

      
      <div className="ann-footer">
        <button className="view-more">View More</button>
      </div>
    </section>
  );
}

export default Announcements;