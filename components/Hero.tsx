import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import * as motion from "motion/react-client";

const Hero = () => {
  return (
    <div className="mx-auto flex max-w-[1340px] flex-col items-center gap-6 overflow-hidden md:flex-row lg:h-[calc(100vh-80px)]">
      <div className="ml-10 flex w-full flex-col gap-4 md:ml-0 md:w-1/2">
        <p className="w-max rounded-lg border-[0.5px] border-[#FFD966] px-2 text-[12px] text-[#FFD966] md:text-[13px]">
          🚀 The Future of Brand Visibility
        </p>
        <h2 className="flex flex-col gap-2 text-3xl font-bold text-[#FFCC33] lg:text-6xl">
          <span>Track How LLMs</span>
          <span>See Your Brand.</span>
        </h2>
        <p className="flex flex-col gap-1 text-[20px] text-[#B3B3B3]">
          <span>Discover how AI models mention, crawl, and rank your</span>
          business across OpenAI, Perplexity, Anthropic, and more.<span></span>
        </p>
        <div className="flex gap-6 md:mt-4 md:gap-4">
          <Button className="flex cursor-pointer items-center gap-1 rounded-[24px] bg-linear-to-r from-[#FFCC33] to-[#B7860B] text-[#000000]">
            Get Started Free <span>→</span>
          </Button>
          <Button className="rounded-[24px] border-2 border-[#FFCC33] text-[#FFFFFF]">
            See Demo
          </Button>
        </div>
        <div className="flex gap-4 md:mt-6">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#16A249]" />
            <p className="text-[14px] text-[#B3B3B3]">
              No credit card required
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#FFCC33]" />
            <p className="text-[14px] text-[#B3B3B3]">Setup in 2 minutes</p>
          </div>
        </div>
      </div>
      <div className="relative mx-auto w-[95%] rounded-lg bg-black md:mx-0 md:w-1/2">
        <Image
          src={`/assets/images/banner.png`}
          alt="hero"
          width={600}
          height={400}
          className="w-full rounded-lg object-cover"
        />
        <div className="top-[-54] left-[500px] z-10 hidden p-2 md:absolute">
          <div className="relative bg-[#141414] px-2">
            <p className="text-[14px] text-[#FFCC33]">Live Crawls</p>
            <p className="text-[18px] text-[#FFFFFF]">14</p>
            <div className="absolute inset-0 -z-10 transform rounded-xl bg-[#FFCC33] blur-xs"></div>
          </div>
          <p className="text-12px] text-[#16A249]">+3 since yesterday</p>
        </div>
        <div>
          <div className="absolute inset-0 -z-10 -translate-y-1 transform rounded-xl bg-linear-to-b from-orange-500/20 via-yellow-500/10 to-[#FFFFFF] blur-lg"></div>

          <div className="absolute inset-0 -z-10 rounded-lg bg-linear-to-br from-[#FFD966] from-10% to-[#B7860B] to-10% opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
