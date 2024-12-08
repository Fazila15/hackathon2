import { GrLinkedin } from "react-icons/gr";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { FaSkype } from "react-icons/fa6";
import { RiTwitterFill } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2A254B] text-white pt-12 pb-6">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">

        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Menu */}
          <div>
            <h3 className="font-normal text-[16px] leading-[19.68px] mb-3">Menu</h3>
            <ul className="text-white">
              <li className="block hover:text-gray-400 mb-3">New arrivals</li>
              <li className="block hover:text-gray-400 mb-3">Best sellers</li>
              <li className="block hover:text-gray-400 mb-3">Recently viewed</li>
              <li className="block hover:text-gray-400 mb-3">Popular this week</li>
              <li className="block hover:text-gray-400 mb-3">All products</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-normal text-[16px] leading-[19.68px] mb-3">Categories</h3>
            <ul className="text-white">
              <li className="block hover:text-gray-400 mb-3">Crockery</li>
              <li className="block hover:text-gray-400 mb-3">Furniture</li>
              <li className="block hover:text-gray-400 mb-3">Homeware</li>
              <li className="block hover:text-gray-400 mb-3">Plant pots</li>
              <li className="block hover:text-gray-400 mb-3">Chairs</li>
              <li className="block hover:text-gray-400 mb-3">Crockery</li>
            </ul>
          </div>

          {/* For Large and Medium Screens - Our Company */}
          <div className="hidden lg:block">
            <h3 className="font-normal text-[16px] leading-[19.68px] mb-3">Our Company</h3>
            <ul className="text-white">
              <li className="block hover:text-gray-400 mb-3">About us</li>
              <li className="block hover:text-gray-400 mb-3">Vacancies</li>
              <li className="block hover:text-gray-400 mb-3">Contact us</li>
              <li className="block hover:text-gray-400 mb-3">Privacy</li>
              <li className="block hover:text-gray-400 mb-3">Returns policy</li>
            </ul>
          </div>

          {/* For Small Screens - Our Company */}
          <div className="sm:hidden">
            <h3 className="font-normal text-[16px] leading-[19.68px] mb-3">Our Company</h3>
            <ul className="text-white">
              <li className="block hover:text-gray-400 mb-3">About us</li>
              <li className="block hover:text-gray-400 mb-3">Vacancies</li>
              <li className="block hover:text-gray-400 mb-3">Contact us</li>
              <li className="block hover:text-gray-400 mb-3">Privacy</li>
              <li className="block hover:text-gray-400 mb-3">Returns policy</li>
            </ul>
          </div>

          {/* Join Our Mailing List Section */}
          <div className="lg:col-span-2 sm:col-span-2">
            <h3 className="font-normal text-[16px] leading-[19.68px] mb-3 text-left">Join our mailing list</h3>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="youremail@.com"
                className="pl-8 py-4 text-black bg-[#4E4D93] w-full sm:w-[320px] h-[56px] pr-[83px] mb-4 sm:mb-0"
              />
              <button className="bg-white text-gray-500 w-full sm:w-[118px] h-[56px] text-lg font-semibold">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Seperating Line */}
        <div className="border-t border-[#4E4D93] mb-6"></div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-500 font-normal text-[14px] leading-[18.9px] mb-6 sm:mb-0">
            Copyright 2022 Avion LTD
          </div>

          {/* Social Media Icons - Hidden on Small Screens */}
          <div className="flex justify-center gap-4 mb-6 sm:mb-0 hidden sm:flex">
            <a href="#" className="text-white hover:text-black">
              <GrLinkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-black">
              <IoLogoFacebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-black">
              <IoLogoInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-black">
              <FaSkype className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-black">
              <RiTwitterFill className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-black">
              <FaPinterest className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
