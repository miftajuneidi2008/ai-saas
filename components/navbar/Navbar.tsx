import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="w-full bg-[#000000] h-20 sticky top-0 z-50">
      <nav className="max-w-[1340px] mx-auto h-full">
        {/* desktop Menu*/}
        <div className="hidden md:flex h-full w-full justify-between items-center px-4">
          <Image
            src={`/assets/images/logo.png`}
            alt="logo"
            width={120}
            height={50}
            className="object-contain"
          />
          <div className="flex gap-4 items-center">
            <Link href={`/`} className="text-[15px] text-[#B3B3B3]">
              Features
            </Link>
            <Link href={`/`} className="text-[15px] text-[#B3B3B3]">
              How it Works
            </Link>
            <Link href={`/`} className="text-[15px] text-[#B3B3B3]">
              Pricing
            </Link>
            <Link href={`/`} className="text-[15px] text-[#B3B3B3]">
              About
            </Link>
          </div>
          <div className="flex gap-4 items-center">
            <Link href={`/`} className="text-[14px] text-[#B3B3B3]">
              Sign In
            </Link>
            <Button className="bg-gradient-to-r from-[#FFCC33] to-[#B7860B] text-[#0D0D0D] cursor-pointer">
              Get Started
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
