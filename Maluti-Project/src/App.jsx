import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import QuickAccess from "./Components/QuickAccess";
import Announcements from "./Components/Announcements";
import Programmes from "./Components/Programmes";
import Events from "./Components/Events";
import Stats from "./Components/Stats";
import FooterLinks from "./Components/FooterLinks";
import "./App.css";  

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <QuickAccess />
      <Programmes />
      <Announcements />
      <Events />
      <Stats />
      <FooterLinks />
    </>
  );
}

export default App;