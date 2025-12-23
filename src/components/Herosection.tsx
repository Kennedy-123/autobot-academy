"use client";
import Image from "next/image";
import banner from "../images/photo-1531482615713-2afd69097998.jpeg";
import { useRouter } from "next/navigation";

interface HeroProps {
  viewHeight?: string;
  heroTitle?: string;
  heroButton?: string;
  heroButtonLink?: string;
  heroDesc?: string;
}

const Hero = ({
  viewHeight,
  heroTitle,
  heroButton,
  heroButtonLink,
  heroDesc
}: HeroProps) => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };
  return (
    <section
      className={
        viewHeight ? `relative h-[50vh] md:h-[${viewHeight}vh] ` : `relative h-[100vh]`
      }
    >
      {/* Banner Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={banner}
          alt="Hero Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay */}
      </div>

      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-6">
        {heroTitle && (
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {heroTitle}
          </h1>
        )}

        {heroDesc && (
        <p className="text-lg md:text-xl mb-8">
          {heroDesc}
        </p>
        )}


        {heroButton && heroButtonLink && (
          <button
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:cursor-pointer hover:bg-cyan-100"
            onClick={() => handleNavigation(heroButtonLink)}
          >
            {heroButton}
          </button>
        )}
      </div>
    </section>
  );
};

export default Hero;
