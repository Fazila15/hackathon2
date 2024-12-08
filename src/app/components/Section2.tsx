import Image from "next/image";
import Link from "next/link";

export default function SectionTwo() {
    return (
        <section className="w-full py-16 px-4 md:py-[60px] md:px-20 bg-white">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
                {/* First Div with Heading, Text, and Button */}
                <div className="w-full md:w-1/2 h-auto md:h-[478px] flex flex-col justify-between items-start bg-[#2A254B] text-white p-8 md:pt-[64px] md:pl-[64px] gap-3">
                    <h2 className="text-[24px] md:text-[32px] font-normal leading-[36px] md:leading-[39.36px] mb-3">
                        It started with a small idea
                    </h2>
                    <p className="text-[16px] md:text-[18px] font-normal leading-[22px] md:leading-[24.3px] mb-8 md:mb-[205px]">
                        A global brand with local beginnings, our story began in a
                        <br />
                        small studio in South London in early 2014
                    </p>

                    {/* View Collection Button */}
                    <div className="w-full max-w-[305px] md:max-w-[170px]">
                        <Link href="/product">
          
                        <button className="bg-[#4E4D93] text-black w-full h-[56px] text-[16px] font-normal leading-6 hover:bg-[#6354b0] transition duration-300">
                            View Collection
                        </button>
            
          
        </Link>
                    </div>
                </div>

                {/* Second Div with Image */}
                <div className="w-full md:w-1/2 md:h-[478px] ">
                    <Image
                        src="/section2Image.svg"
                        alt="Product Collection"
                        width={768}
                        height={465}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
}