import "./styles/App.css";
import { useMemo, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Stack from "./components/Stack/Stack";
import Projects from "./components/Projects/Projects";
import ExperienceEducation from "./components/ExperienceEducation/ExperienceEducation";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import useScrollReveal from "./hooks/useScrollReveal";

function App() {
  // Define el estado 'isDarkMode' con useState
  const [isDarkMode, setIsDarkMode] = useState(true); // Por defecto, modo oscuro

  // Función para alternar el modo
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const revealConfig = useMemo(
    () => [
      { rootSelector: "#experience", itemSelector: ".experience-item", once: true },
      { rootSelector: "#education", itemSelector: ".experience-item", once: true },
      {
        rootSelector: "#stack",
        itemSelector: ".stack-left .stack-group, .stack-right > *",
        once: true,
      },
      { rootSelector: "#projects", itemSelector: ".project-card", once: true },
      {
        rootSelector: "#contact",
        itemSelector: ".contact-aside, .contact-form-shell",
        once: true,
      },
    ],
    []
  );
  const revealOptions = useMemo(
    () => ({
      root: null,
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.2,
    }),
    []
  );

  useScrollReveal(revealConfig, revealOptions);

  return (
    // Aplica la clase condicional al contenedor principal
    <div id="top" className="App" data-theme={isDarkMode ? "dark" : "light"}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="container">
        <Intro />
        <ExperienceEducation />
        <Stack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
