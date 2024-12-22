import React from "react";
import Image from "next/image";

const Team: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center py-7 bg-white">
      {/* Header */}
      <div className="mb-20">
        <h1 className="text-3xl font-bold text-black">
          Meet the heroes behind the magic
        </h1>
      </div>

      {/* Team Members */}
      <div className="flex pb-20">
        {/* Founder */}
        <div className="flex max-w-sm flex-col bg-white border border-gray-200 shadow-lg p-4">
          <Image
            className="mb-3 shadow-lg"
            src="/founder.png"
            alt="Founder"
            width={350}
            height={500}
          />
          <h5 className="mb-1 text-lg font-bold text-gray-900">
            Esther Howard
          </h5>
          <span className="text-sm text-gray-500">Founder</span>
        </div>

        {/* Developer */}
        <div className="flex max-w-sm flex-col bg-white border border-gray-200 shadow-lg p-4">
          <Image
            className="mb-3 shadow-lg"
            src="/developer.png"
            alt="Developer"
            width={350}
            height={500}
          />
          <h5 className="mb-1 text-lg font-bold text-black ">Cody Fisher</h5>
          <span className="text-sm text-gray-500">Developer</span>
        </div>

        {/* Designer */}
        <div className="flex max-w-sm flex-col bg-white border border-gray-200 shadow-lg p-4">
          <Image
            className="mb-3 shadow-lg"
            src="/designer.png"
            alt="Designer"
            width={350}
            height={500}
          />
          <h5 className="mb-1 text-lg font-bold text-black ">
            Brooklyn Simmons
          </h5>
          <span className="text-sm text-gray-500">Designer</span>
        </div>
      </div>
    </div>
  );
};

export default Team;
