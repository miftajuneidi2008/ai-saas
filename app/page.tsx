import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex  gap-6 items-center h-full md:h-[calc(100vh-80px)] max-w-[1340px] mx-auto">
      <div className="flex flex-col gap-4 w-1/2">
        <p className="text-[12px] text-[#FFD966]">
          🚀he Future of Brand Visibility
        </p>
        <h2 className="text-5xl font-bold text-[#FFCC33] flex flex-col gap-2">
          <span>Track How LLMs</span>
          <span>See Your Brand.</span>
        </h2>
        <p className="text-[#B3B3B3] text-[17px] flex flex-col gap-1">
          <span>Discover how AI models mention, crawl, and rank your</span>
          business across OpenAI, Perplexity, Anthropic, and more.<span></span>
        </p>
        <div className="flex gap-4 md:mt-4">
          <Button className="flex items-center gap-1 text-[#000000] bg-gradient-to-r from-[#FFCC33] to-[#B7860B] rounded-[24px] cursor-pointer">
            Get Started Free <span>→</span>
          </Button>
          <Button className="rounded-[24px] border-[2px] border-[#FFCC33] text-[#FFFFFF]">See Demo</Button>
        </div>
        <div className="flex gap-4 md:mt-6">
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full bg-[#16A249]"/> 
            <p className="text-[#B3B3B3] text-[14px]">No credit card required</p>
          </div>

              <div className="flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full bg-[#FFCC33]"/> 
            <p className="text-[#B3B3B3] text-[14px]">Setup in 2 minutes</p>
          </div>

        </div>
      </div>
      <div className="w-1/2 hidden md:block  relative">
        <Image src={`/assets/images/banner.png`} alt="hero" width={600} height={400} className="object-cover"/>
        <div className="absolute left-[530.23px] top-[-42.08px] border-2 border-[#333333]">
          <p className="text-[#FFCC33] text-[14px]">Live Crawls</p>
          <p className="text-[#FFFFFF] text-[24px]">14</p>
          <p className="text-[#16A249] text-12px]">+3 since yesterday</p>
        </div>
      </div>
    </div>
  );
}
