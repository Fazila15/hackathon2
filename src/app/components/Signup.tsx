export default function Signup() {
    return (
        <section className="w-full  pt-12 pb-6 bg-gray-100 flex justify-center items-center">
            <div className=" w-[1237px] h-[364px] py-16 px-4 ">

                {/* Heading and Paragraph */}
                <div className="text-center mb-8">
                    <h1 className="text-[20px] font-normal leading-[28px] md:text-[32px]  md:leading-[40px] lg:text-[36px] lg:leading-[50.4px] text-black">
                        Join the club and get the benefits
                    </h1>
                    <p className="text-[14px] leading-[21px] font-normal md:text-[16px]  md:leading-[24px] text-[#2A254B] mt-4">
                        Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
                    </p>
                </div>

                {/* Input Field and Signup Button */}
                <div className="flex justify-center items-center text-center">
                    <input
                        type="email"
                        placeholder="youremail@.com"
                        className="w-full sm:w-[354px] h-[56px] px-4 py-2 bg-gray-100 text-black transition duration-300 hover:bg-gray-300"
                    />
                    <button className="bg-gray-200 sm:h-[56px] sm:w-[100px] text-black lg:text-[16px] font-normal lg:leading-6 transition duration-300 hover:bg-gray-300 ">
                        Sign Up
                    </button>
                </div>
            </div>
        </section>
    );
}
