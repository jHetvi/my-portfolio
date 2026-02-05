// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import AllProjects from "./pages/AllProjects";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import { useLocalization } from "./contexts/LocalizationContext";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { FOOTER_CONSTANTS } from "./constants/textConstants";

const HomePage = ({ t }) => (
  <>
    <Navbar />
    <Hero />
    <Education />
    <Experience />
    <Skills />
    <Projects />
    <Certificates />
    <Hireme />
    <Contact />
    <footer className="p-3 text-center">
      <h6 className="mb-3">{t(FOOTER_CONSTANTS.NAME)}</h6>
      <p>{t(FOOTER_CONSTANTS.COPYRIGHT)}</p>
    </footer>
  </>
);

const App = () => {
  const { t } = useLocalization();

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage t={t} />} />
          <Route path="/all-projects" element={<AllProjects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

