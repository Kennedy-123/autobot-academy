import React from 'react';
import Hero from '../components/Herosection';
import Features from '../components/Features';
import ProgramsSection from '@/components/ProgramsSection';

export default function Home() {
  return (
    <div>
      <main className="flex-grow">
        <Hero heroTitle='Unlock Your Coding Potential with Autobot Academy' heroButton='View Courses' heroButtonLink='/courses' heroDesc='Learn to code with expert instructors and build your future.'/>
        <Features />
        <ProgramsSection/>
      </main>
    </div>
  );
}