import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import ThreeScene from './components/ThreeScene';
import { HashRouter, Route, Routes } from 'react-router-dom';

const App = () => (
  <div className="App">
    <HashRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Hero />} />
      </Routes>
    </HashRouter>
    
    <ThreeScene />
  </div>
);

export default App;
