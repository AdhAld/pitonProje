import React from "react";
import Image from "next/image";

const Team: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center py-7 bg-white">
      {/* Header */}
      <div className="mb-20">
        <h1 className="lg:text-3xl md:text-2xl sm:text-xl font-bold text-black">
          Meet the heroes behind the magic
        </h1>
      </div>

      {/* Team Members */}
      <div className="flex flex-wrap gap-10 pb-20">
        {/* Founder */}
        <div className="flex flex-col bg-white border border-gray-100 shadow-lg p-5 sm:max-w-xs md:max-w-sm">
          <Image
            className="mb-7"
            src="/founder.png"
            alt="Founder"
            width={300}
            height={500}
          />
          <h5 className="mb-2 text-xl font-bold text-gray-900">
            Esther Howard
          </h5>
          <span className="text-sm text-gray-500">Founder</span>
        </div>

        {/* Developer */}
        <div className="flex flex-col bg-white border border-gray-100 shadow-lg p-5 sm:max-w-xs md:max-w-sm">
          <Image
            className="mb-7"
            src="/developer.png"
            alt="Developer"
            width={300}
            height={500}
          />
          <h5 className="mb-2 text-xl font-bold text-black">Cody Fisher</h5>
          <span className="text-sm text-gray-500">Developer</span>
        </div>

        {/* Designer */}
        <div className="flex flex-col bg-white border border-gray-100 shadow-lg p-5 sm:max-w-xs md:max-w-sm">
          <Image
            className="mb-7"
            src="/designer.png"
            alt="Designer"
            width={300}
            height={500}
          />
          <h5 className="mb-2 text-xl font-bold text-black">
            Brooklyn Simmons
          </h5>
          <span className="text-sm text-gray-500">Designer</span>
        </div>
      </div>
    </div>
  );
};

export default Team;
