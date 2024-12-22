import React from "react";
import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-10 p-32 bg-white">
      {/* Image */}
      <div className="flex flex-col bg-[#FEF1E0] p-16 ml-16 sm:max-w-xs md:max-w-sm">
        <Image
          className="mt-10 ml-8"
          src="/formImage.png"
          alt="Founder"
          width={200}
          height={500}
        />
      </div>

      {/* Contact Form */}
      <div></div>
    </div>
  );
};

export default Contact;
