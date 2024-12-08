import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[704px]">
      {/* Text Content and Image for Small Screens */}
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex flex-col justify-center items-center px-6 gap-8 md:hidden">
        <h1 className="text-[24px] leading-[29.52px] font-normal text-[#2A254B] text-center mb-4">
          Luxury homeware for people who love timeless design quality
        </h1>
        <p className="text-[#2A254B] text-[16px] leading-[21.6px] font-normal text-center mb-6">
          With our new collection, view over 400 bespoke pieces from homeware through to furniture today
        </p>
        <Link href="/product">
         
        <button className="bg-gray-200 text-[#2A254B] w-full sm:w-[337px] h-[56px] px-8 py-4 text-[16px] font-normal leading-[24px] mx-auto">
          View Collection
        </button>
            
         
        </Link>
        <div className="w-full sm:w-full h-[304px]">
        <Link href="/about">
          <Image
            src="/heroImage2.svg"
            alt="/about"
            width={390}
            height={304}
          />
          </Link>
        </div>
      </div>

      {/* Background Image for Larger Screens */}
      <div className="w-full h-full hidden md:block">
      <Link href="/about">
        <Image
          src="/heroImage.svg"
          alt="/about"
          layout="fill"
          objectFit="cover"
          priority
        />
        </Link>
      </div>
    </section>
  );
}
