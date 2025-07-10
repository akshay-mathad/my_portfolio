import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      {/* <Education /> */}
      <Skills />
      <Projects />
      <Certifications />
      <Footer />
      {/* End */}
    </div>
  );
}
export default App;