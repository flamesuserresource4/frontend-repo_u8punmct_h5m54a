import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
