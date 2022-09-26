import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Gallery from './pages/Gallery/Gallery';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Nav from './components/Nav';

const Router = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
};

export default Router;
