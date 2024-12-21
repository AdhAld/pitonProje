import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="flex justify-center items-center px-16 py-20 bg-white text-black">
      {/* Who we are */}
      <div>
        <h1 className="font-bold text-2xl mb-3">Who we are</h1>
        <p className="text-xl">
          We love what we do and create partnerships with our clients to ensure
          their digital transformation is positioned for long-term success.We
          believe that the human dimensions essential to start any successful
          project and that this is where splendid emotional relationships
          between the company and people are born.
        </p>
      </div>
      {/* Mid Image */}
      <div className="">
        <Image
          src="/MidImage.png"
          alt="#"
          width={1225}
          height={300}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default About;
