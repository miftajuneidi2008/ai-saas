import React from "react";
import PriceCard from "./card/PriceCard";

const Pricing = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1340px] flex-col justify-center gap-6 md:h-screen">
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
      <div className="grid grid-cols-3 gap-2">
        <PriceCard
          title="Free"
          price="$0"
          subtitle="Perfect to get started with visibility tracking"
          buttonText="Start Free"
          buttonColor="transparent"
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
          buttonText="Get Started"
          buttonColor="#FFCC33"
          cardBorder="#FFCC33"
          duration="month"
          buttonTextColor="#0D0D0D"
          absoluteHeader="Most Popular"
          lists={[
            "1 Brand",
            "20 Keyword Tracking",
            "Competitor Analysis & AI Overviews",
            "Automated Weekly Reports",
            "Standard Support"
          ]}
        />
      </div>
    </div>
  );
};

export default Pricing;
