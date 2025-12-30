'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Hero from '../components/Herosection';
import Features from '../components/Features';
import ProgramsSection from '@/components/ProgramsSection';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const fromLogin = sessionStorage.getItem("fromLogin");
    if (fromLogin === "true") {
      window.location.reload()
      sessionStorage.removeItem("fromLogin");
    }
  }, [router]);

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