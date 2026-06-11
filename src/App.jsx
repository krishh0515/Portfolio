import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import ResumeContact from './components/ResumeContact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} onThemeChange={setTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <ResumeContact />
      <Footer />
    </>
  );
}

export default App;
