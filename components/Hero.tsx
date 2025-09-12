import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center lg:h-[calc(100vh-80px)] max-w-[1340px] mx-auto overflow-hidden">
      <div className="flex flex-col gap-4 w-full md:w-1/2 ml-10 md:ml-0">
        <p className="text-[12px] md:text-[13px] text-[#FFD966] border-[0.5px] border-[#FFD966] rounded-lg w-max px-2">
          🚀 The Future of Brand Visibility
        </p>
        <h2 className="text-3xl lg:text-6xl font-bold text-[#FFCC33] flex flex-col gap-2">
          <span>Track How LLMs</span>
          <span>See Your Brand.</span>
        </h2>
        <p className="text-[#B3B3B3] text-[20px] flex flex-col gap-1">
          <span>Discover how AI models mention, crawl, and rank your</span>
          business across OpenAI, Perplexity, Anthropic, and more.<span></span>
        </p>
        <div className="flex gap-6 md:gap-4 md:mt-4">
          <Button className="flex items-center gap-1 text-[#000000] bg-gradient-to-r from-[#FFCC33] to-[#B7860B] rounded-[24px] cursor-pointer">
            Get Started Free <span>→</span>
          </Button>
          <Button className="rounded-[24px] border-[2px] border-[#FFCC33] text-[#FFFFFF]">
            See Demo
          </Button>
        </div>
        <div className="flex gap-4 md:mt-6">
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full bg-[#16A249]" />
            <p className="text-[#B3B3B3] text-[14px]">
              No credit card required
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full bg-[#FFCC33]" />
            <p className="text-[#B3B3B3] text-[14px]">Setup in 2 minutes</p>
          </div>
        </div>
      </div>
      <div className="w-[95%] mx-auto md:mx-0 md:w-1/2 relative bg-black rounded-lg">
        <Image
          src={`/assets/images/banner.png`}
          alt="hero"
          width={600}
          height={400}
          className="object-cover w-full rounded-lg"
        />
        <div className="hidden md:absolute left-[500px] top-[-54] p-2 z-10">
          <div className="bg-[#141414] relative px-2">
            <p className="text-[#FFCC33] text-[14px]">Live Crawls</p>
            <p className="text-[#FFFFFF] text-[18px]">14</p>
            <div className="absolute inset-0 bg-[#FFCC33] rounded-xl blur-xs -z-10 transform "></div>
          </div>
          <p className="text-[#16A249] text-12px]">+3 since yesterday</p>
        </div>
        <div>
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 via-yellow-500/10 to-[#FFFFFF] rounded-xl blur-lg -z-10 transform -translate-y-1"></div>

          <div className="absolute inset-0 bg-gradient-to-br from-[#FFD966] from-10% to-[#B7860B] to-10% opacity-50 -z-10 rounded-lg" />
        </div>
      </div>
    </div>
  )
}

export default Hero