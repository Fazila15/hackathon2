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
        <div className="w-1/2">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Product Name</h2>
          <p className="text-xl text-gray-700 mb-4">£99.99</p>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">Product Description</h4>
            <p className="text-sm text-gray-600 mb-2">A short description of the product goes here. This explains the product features briefly.</p>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">Dimensions</h4>
            <div className="flex  text-sm gap-8 text-gray-600">
              <div className="text-center ">
                <p>Height</p>
                <p>30cm</p>
              </div >
              <div className="text-center">
                <p>Width</p>
                <p>20cm</p>
              </div>
              <div className="text-center">
                <p>Depth</p>
                <p>15cm</p>
              </div>
            </div>
          </div>

          <div className="flex items-center mb-6">
            {/* Quantity Selector */}
            <button className="bg-gray-200 text-gray-700 w-8 h-8 flex items-center justify-center">
              <FaMinus />
            </button>
            <input
              type="text"
              value="1"
              className="w-8 h-8 text-center border-t border-b border-gray-300 focus:outline-none"
            />
            <button className="bg-gray-200 text-gray-700 w-8 h-8 flex items-center justify-center">
              <FaPlus />
            </button>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-blue-600 text-white py-2 px-8 rounded-md hover:bg-blue-700 transition duration-300">
            Add to Cart
          </button>
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
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Product Name</h2>
          <p className="text-lg text-gray-700 mb-2">£99.99</p>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">Product Description</h4>
            <p className="text-sm text-gray-600 mb-2">A short description of the product goes here. This explains the product features briefly.</p>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">Dimensions</h4>
            <div className="flex justify-between mb-4 text-sm text-gray-600">
              <div className="text-center">
                <p>Height</p>
                <p>30cm</p>
              </div>
              <div className="text-center">
                <p>Width</p>
                <p>20cm</p>
              </div>
              <div className="text-center">
                <p>Depth</p>
                <p>15cm</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <span className="font-semibold text-gray-800">Quantity</span>
            {/* Quantity Selector */}
            <button className="bg-gray-200 text-gray-700 w-10 h-10 flex items-center justify-center">
              <FaMinus />
            </button>
            <input
              type="text"
              value="1"
              className="w-12 text-center border-t border-b border-gray-300 focus:outline-none"
            />
            <button className="bg-gray-200 text-gray-700 w-10 h-10 flex items-center justify-center">
              <FaPlus />
            </button>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-blue-600 text-white py-2 px-8 rounded-md hover:bg-blue-700 transition duration-300 w-full">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
