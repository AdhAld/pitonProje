import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-[#FDCA09] text-black text-center overflow-hidden">
      {/* Arkaplandaki shape */}
      <div className="absolute z-0">
      <Image
        src="/BgShape.svg"
        alt="#"
        width={1200}
        height={600}
        objectFit="contain"
      />
</div>
      {/* Ortadaki Yazı */}
      <div className="z-20 mb-40">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
          Let’s create something <br /> great together.
        </h1>
      </div>

      {/* Alttaki el resimleri */}
      <div className="absolute bottom-0 w-full flex justify-center z-10">
        <Image
          src="/HeroImage.png"
          alt="#"
          width={1225}
          height={300}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
