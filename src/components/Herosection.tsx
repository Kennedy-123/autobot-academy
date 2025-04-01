import React from 'react';
import Image from 'next/image';
import banner from '../images/photo-1531482615713-2afd69097998.jpeg';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[100vh]">
      {/* Banner Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={banner}
          alt="Hero Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      </div>

      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Unlock Your Coding Potential with Autobot Academy
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Learn to code with expert instructors and build your future.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
