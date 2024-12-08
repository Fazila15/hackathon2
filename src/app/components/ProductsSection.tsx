import Image from "next/image"; 
import Link from "next/link";

export default function ProductSection() {
    return (
        <section className="py-16 bg-white w-full  mx-auto">
            {/* Cards Container */}
            <div className="flex justify-center gap-8 flex-wrap cursor-pointer">
                {/* Product Cards */}
                {[
                    { img: "/productImage1.svg", title: "The Dandy chair", price: "£250" },
                    { img: "/productImage2.svg", title: "Rustic Vase Set", price: "£155" },
                    { img: "/productImage3.svg", title: "The Silky Vase", price: "£125" },
                    { img: "/productImage4.svg", title: "The Lucy Lamp", price: "£399" }
                ].map((product, nanoid) => (
                    <div key={nanoid} className="w-[305px] h-[462px] flex flex-col items-center">
                        <Image
                            src={product.img}
                            alt={product.title}
                            width={305}
                            height={375}
                            className="mb-4"
                        />
                        <div className="w-full text-left">
                            <h3 className="text-[18px] md:text-[20px] font-normal leading-7 text-[#2A254B] pb-2">
                                {product.title}
                            </h3>
                            <p className="text-[#2A254B] text-[16px] md:text-[18px] font-normal leading-[27px]">
                                {product.price}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* View Collection Button */}
            <div className="flex justify-center items-center mt-8 mb-14">
                <Link href="/product">
          
                <button  className="bg-gray-300 text-black w-full max-w-[305px] md:max-w-[170px] h-[56px] text-[16px] font-semibold hover:bg-gray-500 transition duration-300 onClick:">
                    View Collection
                </button>
            
          
        </Link>
            </div>
        </section>
    );
}
