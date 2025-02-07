import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CartProvider>
          <WishlistProvider>
            <body>
              <div className="mx-auto xxs:max-w-[534px] xs:max-w-[639px] sm:max-w-[767px] md:max-w-[1023px] lg:max-w-[1334px] xl:max-w-[1440px] overflow-x-hidden text-[#2A254B]">
                <Navbar />
                {children}
                <Footer />
              </div>
            </body>
          </WishlistProvider>
        </CartProvider>
      </html>
    </ClerkProvider>

  );
}

