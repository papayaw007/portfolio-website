'use client';

import About from "./components/About";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";   
import Projects from "./components/Projects";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);
  return (
    <div className="scroll-smooth">
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}
