import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";


import Hero from "./Components/Hero";
import About from "./Components/About";
import QuickAccess from "./Components/QuickAccess";
import Announcements from "./Components/Announcements";
import Programmes from "./Components/Programmes";
import Events from "./Components/Events";
import Stats from "./Components/Stats";
import FooterLinks from "./Components/FooterLinks";
import Campuses from "./Components/Campuses";
import Contact from "./Components/Contact";
import AboutPage from "./Components/AboutPage";
import Study from "./Components/Study";
import ScrollToTop from "./Components/ScrollToTop";



import "./App.css";


function Home() {
  return (
    <>
      <Hero />
      <About />
      <QuickAccess />
      <Programmes />
      <Announcements />
      <Events />
      <Campuses />
      <Stats />
      <FooterLinks />

       <ScrollToTop />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        
        <Route path="/study" element={<Study />} />
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;