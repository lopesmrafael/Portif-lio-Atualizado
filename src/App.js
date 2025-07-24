import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { useEffect } from "react";

import Home from "./components/pages/Home";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";
import Project from "./components/pages/Projects";

import Container from "./components/Layout/Container";
import NavBar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer";

function App() {

  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setViewportHeight();

    window.addEventListener('resize', setViewportHeight);

    return () => {
      window.removeEventListener('resize', setViewportHeight);
    };
  }, []);


    return (
    <Router>
      <NavBar />
      <Container className="my_section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
