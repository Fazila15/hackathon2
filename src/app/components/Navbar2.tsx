import { IoSearch } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
import { TbMenu } from "react-icons/tb";
import Link from "next/link";

export default function Navbar2() {
  return (
    <header className="bg-white text-black">
      
      {/* Navbar Container */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-4 lg:w-[1440px] lg:h-[132px] flex items-center justify-between">
        
        {/* Small Screen Navbar */}
        <div className="flex items-center justify-between w-full lg:hidden">
          {/* Left: Logo */}
          <Link href="/">
        <div className="text-[24px] font-normal leading-[29.52px] lg:hidden">Avion</div>
          
        </Link>

          {/* Right: Search, Icons & Menu */}
          <div className="flex items-center space-x-4">
            <IoSearch className="w-6 h-6" />
            <Link href="/shopping">
         
            <GrCart className="w-6 h-6 cursor-pointer"  />
        </Link>
            <FaRegUserCircle className="w-6 h-6" />
            <TbMenu className="w-6 h-6" />
          </div>
        </div>

        {/* Large Screen Navbar */}
        <div className="hidden lg:flex items-center justify-between w-full">
          {/* Left: Logo */}
          <Link href="/">
        <div className="text-[24px] font-normal leading-[29.52px] lg:hidden">Avion</div>
          
        </Link>

          {/* Center: Navigation Links */}
          <nav className="flex gap-11 cursor-pointer">
            <ul className="flex gap-11 text-gray-400 font-normal text-[16px] leading-[130px]">
              <li>Plant pots</li>
              <li>Ceramics</li>
              <li>Tables</li>
              <li>Chairs</li>
              <li>Crockery</li>
              <li>Tableware</li>
              <li>Cutlery</li>
            </ul>
          </nav>

          {/* Right: Search & Icons */}
          <div className="flex items-center gap-6">
            <IoSearch className="w-6 h-6" />
            <Link href="/shopping">
         
            <GrCart className="w-6 h-6 cursor-pointer"  />
        </Link>
            <FaRegUserCircle className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Separating Line */}
      <div className="border-t border-gray-200"></div>
    </header>
  );
}
