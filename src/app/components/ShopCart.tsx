export default function Cart() {
    return (
      <div className="container mx-auto py-8">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-center mb-8">Your Shopping Cart</h2>
  
          <div className="grid grid-cols-3 gap-6 mb-4">
            {/* Product Image and Name */}
            <div className="flex items-center gap-4">
              <img
                src="/cart1.svg"
                alt="Product"
                className="w-20 h-20 object-cover"
              />
              <div>
                <p className="text-[16px] font-normal leading-[22.4px]">Graystone vase</p>
                <p className="text-[14px] font-normal leading-[21px]">A timeless ceramic vase with 
                a tri color grey glaze.</p>
              </div>
            </div>
  
            {/* Quantity */}
            <div className="flex justify-center items-center">
              <input
                type="number"
                className="w-16 text-center border rounded-md"
                defaultValue="1"
              />
            </div>
  
            {/* Price */}
            <div className="text-right flex justify-end items-center">
              <p className="text-lg font-semibold">£85</p>
            </div>
          </div>
  
          <div className="grid grid-cols-3 gap-6 mb-4">
            {/* Product Image and Name */}
            <div className="flex items-center gap-4">
              <img
                src="/cart2.svg"
                alt="Product"
                className="w-20 h-20 object-cover"
              />
              <div>
                <p className="text-[16px] font-normal leading-[22.4px]">Basic white vase</p>
                <p className="text-[14px] font-normal leading-[21px]">Beautiful and simple this is
                one for the classics</p>
              </div>
            </div>
  
            {/* Quantity */}
            <div className="flex justify-center items-center">
              <input
                type="number"
                className="w-16 text-center border rounded-md"
                defaultValue="2"
              />
            </div>
  
            {/* Price */}
            <div className="text-right flex justify-end items-center">
              <p className="text-lg font-semibold">£85</p>
            </div>
          </div>
  
          {/* Divider */}
          <div className="border-t border-gray-300 my-6"></div>
  
          {/* Subtotal */}
          <div className="flex gap-1 justify-end items-center">
            <p className="text-[20px] leading-[28px] font-normal">Subtotal</p>
            <p className="text-[24px] leading-[33.6px] font-normal">£210</p>
          </div>
          <div className="flex justify-end mt-6">
            <p className="text-[14px] leading-[21px] font-normal">Taxes and shipping are calculated at checkout</p>
          </div>
  
  
          {/* Checkout Button */}
          <div className="flex justify-end mt-6">
            <button className="bg-[#2A254B] text-white py-2 px-8">
              Go to Checkout
            </button>
          </div>
        </div>
      </div>
    );
  }
  