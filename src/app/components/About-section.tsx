import Link from 'next/link';
export default function AboutSection() {
  return (
    <section className="py-16 px-4 lg:px-8 bg-gray-100">
      <div className="max-w-screen-xl mx-auto text-center flex flex-col justify-center items-center gap-6 lg:flex-row lg:gap-[288px]">

        {/* Description */}
        <p className="text-[36px] font-normal leading-[50.4px] text-[#2A254B] mb-6 lg:mb-0">
          A brand built on the love of craftsmanship,<br />
          quality and outstanding customer service
        </p>

        {/* Button */}
        <Link href="/product">


          <button className="bg-white text-[#2A254B] w-full lg:w-[192px] h-[56px] text-[16px] font-normal py-4 px-4 leading-[24px]">
            View Our Products
          </button>

        </Link>
      </div>
    </section>
  );
}
