import React from 'react'

const Metrics: React.FC = () => {
    return (
        <div className="bg-black text-white py-10">
          <div className="flex justify-around items-center mx-auto max-w-7xl">
            {/* Clients Worldwide */}
            <div>
              <h2 className="text-[#FEC00A] text-4xl font-bold mb-2">350 +</h2>
              <p className="text-lg">Clients Worldwide</p>
            </div>
      
            {/* Team Members */}
            <div>
              <h2 className="text-[#FEC00A] text-4xl font-bold mb-2">20 +</h2>
              <p className="text-lg">Team Members</p>
            </div>
      
            {/* Projects Completed */}
            <div>
              <h2 className="text-[#FEC00A] text-4xl font-bold mb-2">100 +</h2>
              <p className="text-lg">Projects Completed</p>
            </div>
      
            {/* Revenue Generated */}
            <div>
              <h2 className="text-[#FEC00A] text-4xl font-bold mb-2">85M +</h2>
              <p className="text-lg">Revenue Generated</p>
            </div>
          </div>
        </div>
      );
      
}
export default Metrics