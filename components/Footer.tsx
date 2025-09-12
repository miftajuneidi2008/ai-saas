import Image from "next/image";
import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <footer className="mx-2 md:mx-auto flex  max-w-[1340px] flex-col justify-center gap-4 ">
      <section className="relative w-full py-4">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-bol flex flex-col items-center justify-center text-[20px] text-[#FFFFFF] md:text-[50px]">
            Your brand deserves to be seen{" "}
            <span className="text-[#FFCC33]">in AI search</span>
          </h2>
          <p className="mx-2 md:mx-auto max-w-2xl text-center text-[12px] text-[#B3B3B3] md:text-[20px]">
            Join forward-thinking marketers who are already tracking their AI
            visibility. Start your free trial today.
          </p>
          <button className="flex items-center gap-2 rounded-[24px] bg-[#FFCC33] px-4 py-2 text-[18px] leading-[28px]">
            Start Free Trial{" "}
            <Image
              src={`/assets/images/button.png`}
              width={8}
              height={8}
              alt="button"
            />
          </button>
          <p className="text-[14px] leading-[20px] text-[#B3B3B3]">
            No credit card required • 14-day free trial • Setup in 2 minutes
          </p>
        </div>
        <div className="t0-60% absolute inset-0 -z-10 bg-[#3b3111] opacity-100"></div>
      </section>
      <div className="bg-[#0D0D0D] p-4 opacity-50">
        <div className="flex flex-col gap-2 border-b-[1px] border-[#333333]">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-l from-[#FFCC33] to-[#B7860B] text-[14px] text-[#0D0D0D]">
                  LVT
                </div>
                <p className="text-[18px] text-[#FFFFFF]">
                  LLM Visibility Tracker
                </p>
              </div>
              <p className="text-[14px] text-[#B3B3B3]">
                Track how AI models see and mention your brand across the
                internet.
              </p>
            </div>
            <div className="ml-4 flex flex-col space-y-2">
              <Link
                href="#"
                className="text-[16px] leading-[24px] font-semibold text-[#FFFFFF]"
              >
                Products
              </Link>
              <div className="flex flex-col space-y-2">
                <Link
                  href="#"
                  className="text-[14px] leading-[24px] text-[#B3B3B3]"
                >
                  Features
                </Link>
                <Link
                  href="#"
                  className="text-[14px] leading-[24px] text-[#B3B3B3]"
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="text-[14px] leading-[24px] text-[#B3B3B3]"
                >
                  API
                </Link>
                <Link
                  href="#"
                  className="text-[14px] leading-[24px] text-[#B3B3B3]"
                >
                  Integrations
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Link
                href="#"
                className="text-[16px] leading-[24px] font-semibold text-[#FFFFFF]"
              >
                Resources
              </Link>
              <div className="flex flex-col space-y-2">
                <Link
                  href="#"
                  className="text-[14px] leading-[24px] text-[#B3B3B3]"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="text-[14px] leading-[24px] text-[#B3B3B3]"
                >
                  Documentation
                </Link>
                <Link
                  href="#"
                  className="text-[14px] leading-[24px] text-[#B3B3B3]"
                >
                  Help Center
                </Link>
                <Link
                  href="#"
                  className="text-[14px] leading-[24px] text-[#B3B3B3]"
                >
                  Community
                </Link>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <Link
                href="#"
                className="text-[16px] leading-[24px] font-semibold text-[#FFFFFF]"
              >
                Company
              </Link>
              <div className="flex flex-col space-y-2">
                <Link
                  href="#"
                  className="text-[14px] leading-[24px] text-[#B3B3B3]"
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="text-[14px] leading-[24px] text-[#B3B3B3]"
                >
                  Contact
                </Link>
                <Link
                  href="#"
                  className="text-[14px] leading-[24px] text-[#B3B3B3]"
                >
                  Terms
                </Link>
                <Link
                  href="#"
                  className="text-[14px] leading-[24px] text-[#B3B3B3]"
                >
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-4">
          <div className="text-[14px] leading-[20px] text-[#B3B3B3]">
            &copy; {new Date().getFullYear().toString()} LLM Visibility Tracker.
            All rights reserved.
          </div>
          <div className="flex gap-2 items-center">
           <Link href={`#`} className="text-[#FFFFFF]"><Image src={`/assets/images/x.png`} width={10} height={10} alt="x" className="text-[#FFFFFF]"/></Link>
            <Link href={`#`} className="text-[#FFFFFF]"><Image src={`/assets/images/in.png`} width={10} height={10} alt="x" className="text-[#FFFFFF]"/></Link>
             <Link href={`#`} className="text-[#FFFFFF]"><Image src={`/assets/images/mail.png`} width={10} height={10} alt="x" className="text-[#FFFFFF]"/></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
