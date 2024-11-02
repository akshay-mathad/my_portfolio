// Start of Selection
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes basename="/my_portfolio">
          <Route path="/my_portfolio" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<h1>Welcome to My Portfolio</h1>} /> {/* Optional Home Page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;