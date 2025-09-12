import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mx-auto flex min-h-screen max-w-[1340px] flex-col justify-center gap-4 md:h-screen">
      <section className="relative w-full py-4">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-bol flex flex-col items-center justify-center text-[30px] text-[#FFFFFF] md:text-[50px]">
            Your brand deserves to be seen{" "}
            <span className="text-[#FFCC33]">in AI search</span>
          </h2>
          <p className="max-w-2xl text-center text-[14px] text-[#B3B3B3] md:text-[20px]">
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
      <div className="flex flex-col gap-2 border-b-[1px] border-[#333333] bg-[#0D0D0D] opacity-50 p-4">
        <div className="grid grid-cols-1 gap-2 md:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col gap-2">
                <div className="flex gap-2 ">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-l from-[#FFCC33] to-[#B7860B] text-[#0D0D0D] text-[14px] flex items-center justify-center">LVT</div>
                    <p className="text-[18px] text-[#FFFFFF]">LLM Visibility Tracker</p>
                </div>
                <p className="text-[#B3B3B3] text-[14px]">Track how AI models see and mention your brand across the internet.</p>
            </div>
            <div className="flex flex-col space-y-2 ml-4">
                <Link href="#" className="text-[16px] leading-[24px] font-semibold text-[#FFFFFF] ">Products</Link>
                <div className="flex flex-col space-y-2">
                    <Link href="#" className="text-[14px] leading-[24px]  text-[#B3B3B3]">Features</Link>
                    <Link href="#" className="text-[14px] leading-[24px]  text-[#B3B3B3]">Pricing</Link>
                    <Link href="#" className="text-[14px] leading-[24px]  text-[#B3B3B3]">API</Link>
                    <Link href="#" className="text-[14px] leading-[24px]  text-[#B3B3B3]">Integrations</Link>
                </div>
            </div>
             <div className="flex flex-col space-y-2">
                <Link href="#" className="text-[16px] leading-[24px] font-semibold text-[#FFFFFF]">Resources</Link>
                <div className="flex flex-col space-y-2">
                    <Link href="#" className="text-[14px] leading-[24px]  text-[#B3B3B3]">Blog</Link>
                    <Link href="#" className="text-[14px] leading-[24px]  text-[#B3B3B3]">Documentation</Link>
                    <Link href="#" className="text-[14px] leading-[24px]  text-[#B3B3B3]">Help Center</Link>
                    <Link href="#" className="text-[14px] leading-[24px]  text-[#B3B3B3]">Community</Link>
                </div>
            </div>

             <div className="flex flex-col space-y-2">
                <Link href="#" className="text-[16px] leading-[24px] font-semibold text-[#FFFFFF]">Company</Link>
                <div className="flex flex-col space-y-2">
                    <Link href="#" className="text-[14px] leading-[24px]  text-[#B3B3B3]">About</Link>
                    <Link href="#" className="text-[14px] leading-[24px]  text-[#B3B3B3]">Contact</Link>
                    <Link href="#" className="text-[14px] leading-[24px]  text-[#B3B3B3]">Terms</Link>
                    <Link href="#" className="text-[14px] leading-[24px]  text-[#B3B3B3]">Privacy</Link>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
