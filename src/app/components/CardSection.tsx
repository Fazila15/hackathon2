import { FaTruckFast } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { AiOutlineCreditCard } from "react-icons/ai";
import { LuSprout } from "react-icons/lu";

export default function CardSection() {
    return (
        <section className="py-16 bg-white w-full">
            {/* Section Heading */}
            <div className="text-center mb-12">
                <h2 className="text-[24px] font-normal text-black leading-[33.6px]">What makes our brand different</h2>
            </div>

            {/* Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Card 1 */}
                <div className="w-full h-[244px] bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center text-black">
                    <div className="flex justify-center items-center mb-4">
                        <FaTruckFast className="w-6 h-6" />
                    </div>
                    <h3 className="text-[20px] font-normal leading-7">Next day as standard</h3>
                    <p className="font-normal leading-6 text-[16px] mt-2 text-center">
                        Order before 3pm and get your order the next day as standard
                    </p>
                </div>

                {/* Card 2 */}
                <div className="w-full h-[244px] bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center text-black">
                    <div className="flex justify-center items-center mb-4">
                        <FaRegCheckCircle className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-[20px] font-normal leading-7">Made by true artisans</h3>
                    <p className="font-normal leading-6 text-[16px] mt-2 text-center">
                        Handmade crafted goods made with real passion and craftsmanship
                    </p>
                </div>

                {/* Card 3 */}
                <div className="w-full h-[244px] bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center text-black">
                    <div className="flex justify-center items-center mb-4">
                        <AiOutlineCreditCard className="w-6 h-6" />
                    </div>
                    <h3 className="text-[20px] font-normal leading-7">Unbeatable prices</h3>
                    <p className="font-normal leading-6 text-[16px] mt-2 text-center">
                        For our materials and quality you won’t find better prices anywhere
                    </p>
                </div>

                {/* Card 4 */}
                <div className="w-full h-[244px] bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center text-black">
                    <div className="flex justify-center items-center mb-4">
                        <LuSprout className="w-6 h-6" />
                    </div>
                    <h3 className="text-[20px] font-normal leading-7">Recycled packaging</h3>
                    <p className="font-normal leading-6 text-[16px] mt-2 text-center">
                        We use 100% recycled to ensure our footprint is more manageable
                    </p>
                </div>
            </div>
        </section>
    );
}
