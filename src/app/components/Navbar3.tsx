import { IoSearch } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
import { TbMenu } from "react-icons/tb";
import Link from 'next/link'; 

export default function Navbar3() {
  return (
    <header className="bg-white text-black">
      {/* Navbar Container */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-2 flex items-center justify-between">
        
        {/* Small Screen */}
        <div className="flex items-center justify-between w-full lg:hidden">
          {/* Left: Logo */}
          <Link href="/">
        <div className="text-[24px] font-normal leading-[29.52px] lg:hidden">Avion</div>
          
        </Link>

          {/* Right: Hamburger Menu */}
          <TbMenu className="w-6 h-6" />
        </div>

        {/* Large Screen */}
        <div className="hidden lg:flex items-center justify-between w-full">
          
          {/* Left: Logo */}
          <Link href="/">
        <div className="text-[24px] font-normal leading-[29.52px] lg:hidden">Avion</div>
          
        </Link>

          {/* Right: Links & Icons */}
          <div className="flex items-center gap-8">
            
            {/* Links */}
            <nav className="cursor-pointer">
              <ul className="flex gap-11 text-gray-600 font-normal text-[16px] leading-[130px]">
                
                <Link href="/about">
            About Us
          </Link>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-6">
              <IoSearch className="w-6 h-6" />
              <Link href="/shopping">
         
            <GrCart className="w-6 h-6 cursor-pointer"  />
        </Link>
              <FaRegUserCircle className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Separating Line */}
      <div className="border-t border-gray-200"></div>

      {/* Navigation Menu - Large Screen */}
      <nav className="hidden lg:flex justify-center items-center gap-11 py-2 bg-gray-200 cursor-pointer">
        <ul className="flex gap-11 text-gray-600 font-normal text-[16px] leading-[80px]">
          <li>All Products</li>
          <li>Plant Pots</li>
          <li>Ceramics</li>
          <li>Tables</li>
          <li>Chairs</li>
          <li>Crockery</li>
          <li>Tableware</li>
          <li>Cutlery</li>
        </ul>
      </nav>

      {/* Small Screen Dropdown */}
      <div className="lg:hidden flex justify-center items-center px-4 py-4">
        <ul className="flex gap-9 text-[#2A254B] font-normal text-[16px] leading-[60px]">
          <li>All Products</li>
          <li>Plant Pots</li>
          <li>Ceramics</li>
        </ul>
      </div>
    </header>
  );
}
