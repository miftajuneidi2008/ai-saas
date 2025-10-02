import React from "react";
import ServiceCard from "./card/ServiceCard";

const Services = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1340px] flex-col justify-center gap-8 text-white md:h-max overflow-hidden">
      <div className="text-center">
        <p className="text-[12px] text-[#FFD966]">⚡ Core Features</p>
        <h2 className="flex flex-col text-[30px] font-bold text-[#FFFFFF] md:text-[48px]">
          Everything you need to win{" "}
          <span className="text-[#FFCC33]">AI visibility</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        <ServiceCard
          icon="🔎"
          title="LLM Crawls"
          subtitle="Know when bots crawl your pages."
          desc="Real-time monitoring of AI model crawlers across your website with detailed analytics and timestamps."
        />
        <ServiceCard
          icon="📈"
          title="Keyword Tracking"
          subtitle="Measure visibility for strategic prompts."
          desc="Track how your brand appears in AI responses for industry-specific queries and keywords."
        />
        <ServiceCard
          icon="🏆"
          title="Competitor Mentions"
          subtitle="Compare how often rivals get cited."
          desc="Benchmark your AI visibility against competitors and identify opportunities to improve."
        />
        <ServiceCard
          icon="⚡"
          title="Alerts & Reports"
          subtitle="Instant updates on rank ups, drops, and opportunities."
          desc="Get notified immediately when your visibility changes or new opportunities arise."
        />
      </div>
      <div className="flex items-center self-center my-6">
      <div className="flex flex-col gap-4 border-[2px] border-[#FFCC33] bg-[#291d04] w-max items-center p-2 rounded-2xl text-center ">
        <p className="text-[36px]">🚀</p>
        <p className="text-[#FFFFFF] text-[20px]">Advanced AI Analytics</p>
        <p className="text-[#B3B3B3] max-w-[500px]">Deep insights into how different AI models perceive and reference your brand,with actionable recommendations to improve your AI search presence.</p>
      </div>
      </div>
    </div>
  );
};

export default Services;
