import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Herosection';
import Features from '../components/Features';
import ProgramsSection from '@/components/ProgramsSection';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <ProgramsSection/>
      </main>
      <Footer />
    </div>
  );
}