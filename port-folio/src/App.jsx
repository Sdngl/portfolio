import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import './App.css'; // Add this import

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/skills" element={<><Navbar /><Skills /></>} />
        <Route path="/about" element={<><Navbar /><About /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /></>} />
        <Route path="/projects" element={<><Navbar /><Projects /></>} />
      </Routes>
    </>
  );
};

export default App;