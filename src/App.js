import React from 'react';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import MySkills from './components/Myskills';
import NavigationBar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <NavigationBar />
      <HeroBanner />
      <AboutMe />
      <MySkills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
