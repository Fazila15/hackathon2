import Image from 'next/image';

export default function EmailSignupSection() {
  return (
    <section className="relative w-full pt-12 pb-6 max-h-[444px]  md:px-8 overflow-hidden mx-auto">
      
      {/* Background Images */}
      <div className="hidden md:block absolute inset-0 z-0">
        <Image
          src="/signupImage-lg.svg"
          alt="Background Image for Large Screens"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

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
      <div className="hidden md:flex relative z-50 text-white pt-[250px] px-[40px] pb-[84px] mx-auto w-full max-w-[1440px]">
        <div className="flex justify-center items-center w-full">
          <input
            type="email"
            placeholder="youremail@.com"
            className="w-full sm:w-[354px] h-[56px] px-4 py-2 text-black"
          />
          <button className="bg-[#2A254B] text-white px-8 py-4 text-[16px] font-normal leading-6 transition duration-300 hover:bg-[#3b3569] ">
            Sign Up
          </button>
        </div>
      </div>

      {/* For Small Screens */}
      <div className="flex md:hidden relative z-50 flex-col text-white text-left gap-6 px-4 h-full">
        
        

        {/* Input Field and Signup Button */}
        <div className="flex items-center mb-4">
          <input
            type="email"
            placeholder="youremail@.com"
            className="flex-grow h-[56px] px-4 py-2 text-black "
          />
          <button className="bg-[#2A254B] text-white h-[56px] px-4 text-[16px] font-normal leading-6 transition duration-300 hover:bg-[#2A254B]  w-[120px]">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
}