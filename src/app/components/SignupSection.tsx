import Image from 'next/image';
import { FaRegCheckCircle } from "react-icons/fa";

export default function EmailSignupSection() {
  return (
    <section className="relative w-full max-w-[1440px] h-[444px] py-16 px-4 md:px-8">
      
      {/* Background Images */}
      {/* Large and Medium Screens */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Image
          src="/signupImage-lg.svg"
          alt="Background Image for Large Screens"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Small Screens */}
      <div className="md:hidden absolute inset-0 z-0">
        <Image
          src="/signupImage-sm.svg"
          alt="Background Image for Small Screens"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* For Medium and Large Screens */}
      <div className="hidden md:flex relative z-50 text-center text-white pt-[250px] px-[400px] pb-[84px]">
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="youremail@.com"
            className="w-[354px] h-[56px] px-4 py-2 text-black"
          />
          <button className="bg-[#2A254B] text-white px-8 py-4 text-[16px] font-normal leading-6 transition duration-300 hover:bg-[#3b3569]">
            Sign Up
          </button>
        </div>
      </div>

      {/* For Small Screens */}
      <div className="flex md:hidden relative z-50 flex-col text-white text-left gap-6 px-4 h-full">
        {/* Heading and Text */}
        <h3 className="text-[24px] font-normal leading-[33.6px]">Join the club and get the benefits</h3>
        <p className="text-[14px] font-normal leading-[21px] mb-4">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>

        {/* Icons with Descriptions */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex gap-2 items-center">
            <FaRegCheckCircle className="w-6 h-6" />
            <p className="text-[16px] font-normal leading-[24px]">Exclusive Offers</p>
          </div>

          <div className="flex gap-2 items-center">
            <FaRegCheckCircle className="w-6 h-6" />
            <p className="text-[16px] font-normal leading-[24px]">Free events</p>
          </div>

          <div className="flex gap-2 items-center">
            <FaRegCheckCircle className="w-6 h-6" />
            <p className="text-[16px] font-normal leading-[24px]">Large discounts</p>
          </div>
        </div>

        {/* Input Field and Signup Button (Side by Side) */}
        <div className="flex mb-6">
          <input
            type="email"
            placeholder="youremail@.com"
            className="w-[70%] h-[56px] px-4 py-2 text-black"
          />
          <button className="bg-[#2A254B] text-white w-[30%] h-[56px] text-[16px] font-normal leading-6 transition duration-300 hover:bg-[#3b3569]">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
}
