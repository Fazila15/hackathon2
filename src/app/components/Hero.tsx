import Image from "next/image";

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
        <button className="bg-gray-200 text-[#2A254B] w-full sm:w-[337px] h-[56px] px-8 py-4 text-[16px] font-normal leading-[24px] mx-auto">
          View Collection
        </button>
        <div className="w-full sm:w-full h-[304px]">
          <Image
            src="/heroImage2.svg"
            alt="Hero Section Image"
            width={390}
            height={304}
          />
        </div>
      </div>

      {/* Background Image for Larger Screens */}
      <div className="w-full h-full hidden md:block">
        <Image
          src="/heroImage.svg"
          alt="Hero Section Image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </section>
  );
}
