import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 h-20 w-full bg-[#000000]">
      <nav className="mx-auto h-full max-w-[1340px]">
        {/* desktop Menu*/}
        <div className="hidden h-full w-full items-center justify-between px-4 md:flex">
          <Link href={`/`}>
            <Image
              src={`/assets/images/logo.png`}
              alt="logo"
              width={120}
              height={50}
              className="object-contain"
            />
          </Link>
          <div className="flex items-center gap-4">
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
          <div className="flex items-center gap-4">
            <Link href={`/`} className="text-[14px] text-[#B3B3B3]">
              Sign In
            </Link>
            <Button className="cursor-pointer bg-linear-to-r from-[#FFCC33] to-[#B7860B] text-[#0D0D0D]">
              Get Started
            </Button>
          </div>
        </div>
        {/*small  screen*/}
        <div className="flex justify-between object-center md:hidden">
          <Image
            src={`/assets/images/logo.png`}
            alt="logo"
            width={120}
            height={50}
            className="object-contain"
          />
          <button className="mr-2 cursor-pointer text-white">
            <Menu />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
