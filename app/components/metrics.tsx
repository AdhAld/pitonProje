import React from 'react';

const Metrics: React.FC = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 items-center mx-auto max-w-7xl px-4">
        {/* Clients Worldwide */}
        <div className="text-center">
          <h2 className="text-[#FEC00A] text-4xl font-bold mb-2">350 +</h2>
          <p className="text-lg">Clients Worldwide</p>
        </div>

        {/* Team Members */}
        <div className="text-center">
          <h2 className="text-[#FEC00A] text-4xl font-bold mb-2">20 +</h2>
          <p className="text-lg">Team Members</p>
        </div>

        {/* Projects Completed */}
        <div className="text-center">
          <h2 className="text-[#FEC00A] text-4xl font-bold mb-2">100 +</h2>
          <p className="text-lg">Projects Completed</p>
        </div>

        {/* Revenue Generated */}
        <div className="text-center">
          <h2 className="text-[#FEC00A] text-4xl font-bold mb-2">85M +</h2>
          <p className="text-lg">Revenue Generated</p>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
