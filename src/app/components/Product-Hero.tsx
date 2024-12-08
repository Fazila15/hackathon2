import { FaMinus, FaPlus } from "react-icons/fa";

export default function ProductHero() {
  return (
    <section className="w-full py-16 px-4 lg:px-16">
      {/* Large Screen Layout */}
      <div className="hidden lg:flex w-full items-center">
        {/* Left Side - Image */}
        <div className="w-1/2 pr-8">
          <img
            src="/P-Hero-Image.svg"
            alt="Product Image"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Side - Product Details */}
        <div className="w-1/2 pl-[62px]">
          <h2 className="text-[36px] font-normal leading-[44.28px] text-[#2A254B] mb-4">The Dandy Chair</h2>
          <p className="text-[24px]  font-normal leading-[32.4px]text-[#2A254B] mb-4">£250</p>

          <div className="mb-4">
            <h4 className="font-normal text-[16px] leading-[19.68px] text-[#2A254B] mb-2">Description</h4>
            <p className="text-[16px] font-normal leading-[21.6px] text-[#2A254B] mb-2">A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery. This explains the product features briefly.</p>
            <ul className="list-disc pl-5 text-[16px] font-normal leading-[21.6px] text-[#2A254B]">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-normal text-[16px] leading-[19.68px] text-[#2A254B] mb-2">Dimensions</h4>
            <div className="flex text-[14px] font-normal leading-[17.22px] gap-8 text-[#2A254B]">
              <div className="text-center ">
                <p>Height</p>
                <p className="text-[16px] font-normal leading-[21.6px]">110cm</p>
              </div >
              <div className="text-center">
                <p>Width</p>
                <p className="text-[16px] font-normal leading-[21.6px]">75cm</p>
              </div>
              <div className="text-center">
                <p>Depth</p>
                <p className="text-[16px] font-normal leading-[21.6px]">50cm</p>
              </div>
            </div>
          </div>

          <div className="flex items-center mb-6 w-full md:w-[600px] gap-28">
            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="font-normal text-[16px] leading-[19.68px]">Amount:</span>
              <div className="flex items-center justify-center bg-gray-300">

                <button className="text-gray-200 w-8 h-8 flex items-center justify-center">
                  <FaMinus />
                </button>
                <input
                  type="text"
                  value="1"
                  className="w-12 h-8 text-center bg-slate-300 text-black "
                />
                <button className="text-gray-200 w-8 h-8 flex items-center justify-center">
                  <FaPlus />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-[143px] h-[56px] bg-[#2A254B] text-white text-center px-6 py-2 flex items-center justify-center gap-2">
              <p className="font-normal text-[16px] leading-[24px]">Add to Cart</p>
            </button>
          </div>

        </div>
      </div>

      {/* Small Screen Layout */}
      <div className="lg:hidden w-full">
        {/* Image on top for small screens */}
        <div className="w-full mb-4">
          <img
            src="/P-Hero-Image.svg" // Replace with actual image
            alt="Product Image"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Product Details Below */}
        <div className="text-[#2A254B] pl-6">
          <h3 className="text-[24px] font-normal leading-[33.6px] mb-3">The Dandy Chair</h3>
          <h4 className="font-normal text-[20px] leading-[28px] mb-7">£250</h4>

          <div className="mb-4">
            <h4 className="font-normal text-[16px] leading-[22.4px] mb-3">Product Description</h4>
            <p className="font-normal text-[14px] leding-[21px] mb-3">A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
            <ul className="list-disc pl-7 font-normal text-[14px] leading-[21px] text-[#2A254B]">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">Dimensions</h4>

            {/* Small Device Dimensions with Dividers */}
            
              <div className="flex justify-between p-3">
                <span>Height</span>
                <span>30cm</span>
              </div>
              <div className="flex justify-between p-3">
                <span>Width</span>
                <span>20cm</span>
              </div>
              <div className="flex justify-between p-3">
                <span>Depth</span>
                <span>15cm</span>
              </div>
            

            <div className="mb-6">
              {/* Quantity Section */}
              <div className="flex-row items-center w-[342px] h-[80px] gap-4 mb-4">
                <span className="font-normal  text-black ">Quantity</span>

                <div className="w-[342px] h-[46px] px-4 py-3 bg-gray-100 flex justify-center items-center mb-4">

                  <button className=" text-gray-200 w-8 h-8 flex justify-center items-center pl-5">
                    <FaMinus />
                  </button>
                  <input
                    type="text"
                    value="1"
                    className="bg-gray-100 text-center"
                  />
                  <button className="text-gray-300 w-8 h-8 flex justify-center items-center">
                    <FaPlus />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div>
                <button className="bg-[#2A254B] text-white w-full py-2 px-8 rounded-md hover:bg-[#3b3569] transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
