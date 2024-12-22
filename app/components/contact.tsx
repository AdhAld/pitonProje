import React from "react";
import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 p-8 lg:p-32 bg-white">
      {/* Image */}
      <div className="flex justify-center lg:justify-center bg-[#FEF1E0] py-8 lg:py-10 lg:mx-28">
        <Image
          className="mt-10"
          src="/formImage.png"
          alt="Form Image"
          width={220}
          height={500}
        />
      </div>

      {/* Contact Form */}
      <div className="flex flex-col justify-center items-center lg:items-end px-16">
        {/* Form Başlığı */}
        <h2 className="text-2xl font-bold text-center lg:text-right text-[#101010] mb-6">
          we&apos;d love to hear <br /> from you
        </h2>

        {/* Form */}
        <form className="w-full max-w-md space-y-5">
          {/* Name Input */}
          <div>
            <label className="sr-only" htmlFor="name">
              Name*
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name*"
              className="w-full border border-[#101010] px-4 py-2 text-[#101010] placeholder-[#101010]"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="sr-only" htmlFor="email">
              Email*
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email*"
              className="w-full border border-[#101010] px-4 py-2 text-[#101010] placeholder-[#101010]"
            />
          </div>

          {/* Website URL Input */}
          <div>
            <label className="sr-only" htmlFor="website">
              Website URL*
            </label>
            <input
              id="website"
              type="url"
              placeholder="Website URL*"
              className="w-full border border-[#101010] px-4 py-2 text-[#101010] placeholder-[#101010]"
            />
          </div>

          {/* Project Details */}
          <div>
            <label className="sr-only" htmlFor="details">
              Project Details*
            </label>
            <textarea
              id="details"
              placeholder="Project Details*"
              className="w-full h-36 border border-[#101010] px-4 py-2 text-[#101010] placeholder-[#101010]"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white font-medium py-2 hover:bg-[#FEF1E0] hover:text-black transition duration-200"
          >
            Send Proposal
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
