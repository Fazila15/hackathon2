import { FaTimes } from 'react-icons/fa'; 
import { TbTruckDelivery } from "react-icons/tb";

export default function TopBar() {
  return (
    <div className="bg-[#2A254B] text-white w-full h-[54px] sm:h-[54px] md:h-[45px] flex items-center justify-between px-4 md:px-8">
      {/* Delivery Text and Icon */}
      <div className="flex-grow flex justify-center text-center text-[14px] font-normal leading-[18.9px]">
        <TbTruckDelivery className="w-6 h-6 mr-2" />
        Free delivery on all orders over £50 with code easter checkout
      </div>

      {/* Close (Cross) Icon on the right */}
      <div className="flex items-center">
        <FaTimes className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
}
