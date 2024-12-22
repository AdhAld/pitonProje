import React from "react";
import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-60 p-32 bg-white">
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
      <div className="flex flex-col items-center py-10">
        {/* Form Başlığı */}
        <h2 className="text-2xl font-bold text-right text-[#101010] mb-6">
          we&apos;d love to hear <br /> from you
        </h2>

        {/* Form */}
        <form className="w-full max-w-md space-y-4">
          {/* Name Input */}
          <div>
            <label className="sr-only text-purple-300" htmlFor="name">
              Name*
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name*"
              className="w-full border border-[#101010] px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
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
              className="w-full border border-[#101010] px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
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
              className="w-full border border-[#101010] px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Project Details Textarea */}
          <div>
            <label className="sr-only" htmlFor="details">
              Project Details*
            </label>
            <textarea
              id="details"
              placeholder="Project Details*"
              
              className="w-full border border-[#101010] px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white font-medium py-2 rounded-md hover:bg-gray-800 transition duration-200"
          >
            Send Proposal
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
