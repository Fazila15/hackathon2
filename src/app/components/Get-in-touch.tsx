import Link from "next/link";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="w-full bg-white h-[603px]">
      <div className="flex flex-col md:flex-row w-full mx-auto">
        
        {/* First Div with Image */}
        <div className="w-full md:w-1/2 h-full">
        <Link href="/about">
          <Image
            src="/getInTouch.svg" // Replace with your image source
            alt="/about"
            width={768}
            height={768}
            className="w-full h-full object-cover"
          />
           </Link>
        </div>
       

        {/* Second Div with Text and Button */}
        <div className="w-full md:w-1/2 flex flex-col justify-between px-4 py-8 bg-gray-100">
          <h2 className="text-[20px] leading-[28px] font-normal md:text-[24px] md:leading-[33.6px] mb-4 text-[#2A254B]">
            Our service isn’t just personal, it’s actually hyper personally exquisite
          </h2>
          <p className="font-normal text-[14px] leading-[21px] md:text-[16px] md:leading-[21.6px] mb-4 text-[#505977]">
            When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. 
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so our Chelsea boutique became the hotbed for the London interior design community.
          </p>

          {/* Button */}
          <Link href="/product">
         
          <button className="text-black py-3 px-6 text-[16px] font-normal mt-auto bg-[#4E4D93] hover:bg-[#3b3569] transition duration-300 w-full sm:w-auto">
            Get in Touch
          </button>
            
        
        </Link>
        </div>
        
      </div>
    </section>
  );
}
