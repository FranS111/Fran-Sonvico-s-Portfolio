import "./styles/App.css";
import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Stack from "./components/Stack/Stack";
import Projects from "./components/Projects/Projects";
import ExperienceEducation from "./components/ExperienceEducation/ExperienceEducation";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  // Define el estado 'isDarkMode' con useState
  const [isDarkMode, setIsDarkMode] = useState(true); // Por defecto, modo oscuro

  // Función para alternar el modo
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

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
