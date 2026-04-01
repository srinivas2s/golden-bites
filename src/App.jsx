import React, { useEffect } from 'react';
import useLenis from './hooks/useLenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Scrollytelling from './components/Scrollytelling';
import Reviews from './components/Reviews';
import VisitUs from './components/VisitUs';
import Footer from './components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useLenis();

  useEffect(() => {
    console.log("Golden Bites App Mounted Successfully!");
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Scrollytelling />
        <Reviews />
        <VisitUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
