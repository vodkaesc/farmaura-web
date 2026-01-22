import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecognitionStrip from './components/RecognitionStrip';
import NationalAchievements from './components/NationalAchievements';
import About from './components/About';
import Process from './components/Process';
import Benefits from './components/Benefits';
import ImpactEstimator from './components/ImpactEstimator';
import Services from './components/Services';
import AppShowcase from './components/AppShowcase';
import VideoDemo from './components/VideoDemo';
import TechStack from './components/TechStack';
import Impact from './components/Impact';
import Testimonials from './components/Testimonials';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <RecognitionStrip />
      <NationalAchievements />
      <About />
      <Process />
      <Benefits />
      <ImpactEstimator />
      <Services />
      <AppShowcase />
      <VideoDemo />
      <TechStack />
      <Impact />
      <Testimonials />
      <Roadmap />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;