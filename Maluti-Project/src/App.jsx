import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import QuickAccess from "./Components/QuickAccess";
import Announcements from "./Components/Announcements";
import "./App.css";  

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <QuickAccess />
      <Announcements />
    </>
  );
}

export default App;