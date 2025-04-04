import React from 'react';
import Hero from '../components/Herosection';
import Features from '../components/Features';
import ProgramsSection from '@/components/ProgramsSection';

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <main className="flex-grow">
        <Hero />
        <Features />
        <ProgramsSection/>
      </main>
    </div>
  );
}