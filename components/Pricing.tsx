import React from "react";
import PriceCard from "./card/PriceCard";

const Pricing = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1340px] flex-col justify-center gap-6 lg:h-screen overflow-hidden">
      <div className="text-center">
        <p className="inline-flex text-[12px] text-[#FFD966]">
          💳 Simple Pricing
        </p>
        <h2 className="text-[30px] font-bold text-[#FFFFFF] md:text-[48px]">
          Simple, <span className="text-[#FFCC33]">transparent pricing</span>
        </h2>
        <p className="mx-auto my-6 max-w-[600px] text-[18px] text-[#B3B3B3]">
          Choose the plan that fits your needs. All plans include tracking
          across OpenAI, Perplexity, and Anthropic LLMs — so you never miss
          where your brand shows up.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PriceCard
          title="Free"
          price="$0"
          subtitle="Perfect to get started with visibility tracking"
          height = "h-[404px]"
          buttonText="Start Free"
          buttonColor="bg-transparent"
           buttonTextColor="#FFFFFF"
          cardBorder="#333333"
          duration="forever"
          lists={[
            "1 Brand",
            "1 Keyword Tracking",
            "Real-time Crawl Tracking",
            "30-day Data Retention",
          ]}
        />
        <PriceCard
          title="Pro"
          price="$17"
          subtitle="For founders and marketers who want deeper insights"
          height = "h-[460px]"
          buttonText="Get Started"
          buttonColor="bg-gradient-to-br from-[#FFCC33] to-[#B7860B]"
          cardBorder="#FFCC33"
          duration="month"
          buttonTextColor="#0D0D0D"
          absoluteHeader="Most Popular"
          lists={[
            "1 Brand",
            "20 Keyword Tracking",
            "Real-time Crawl Tracking",
            "Competitor Analysis & AI Overviews",
            "Automated Weekly Reports",
            "Standard Support"
          ]}
        />
            <PriceCard
          title="Multi-Brand"
          price="$25"
          subtitle="Best for agencies and teams monitoring multiple brands"
          height = "h-[428px]"
          buttonText="Get Started"
          buttonColor="bg-transparent"
           buttonTextColor="#FFFFFF"
          cardBorder="#333333"
          duration="month"
          lists={[
            "2 Brands",
            "20 Keywords / Brand",
            "Real-time Crawl Tracking",
            "Competitor Analysis & AI Overviews",
            "Automated Weekly Reports",
            "Priority Support"
          ]}
        />
      </div>
      <div className="flex flex-col gap-2 my-2">
        <p className="text-[14px] text-[#B3B3B3] self-center">No setup fees • Cancel anytime • Start with Free plan and upgrade anytime</p>
        <div className="flex gap-2 items-center justify-center">
       <div className="flex gap-4 items-center">
        <div className="w-2 h-2 rounded-full bg-[#16A249]"/>
        <p className="text-[12px] text-[#B3B3B3]">SSL Secured</p>
       </div>
          <div className="flex gap-4 items-center">
        <div className="w-2 h-2 rounded-full bg-[#B7860B]"/>
        <p className="text-[12px] text-[#B3B3B3]">24/7 Support</p>
       </div>
       </div>
      </div>
    </div>
  );
};

export default Pricing;
