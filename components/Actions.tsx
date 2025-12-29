import React from "react";
import ActionCard from "./card/ActionCard";

const Actions = () => {
  return (
    <div className="container mx-auto my-4 flex flex-col gap-10 overflow-hidden">
      <h1 className="text-center text-[30px] font-bold text-[#FFFFFF] md:text-[48px]">
        From Crawl to Visibility -
        <span className="text-[#FFCC33]">Made Simple</span>
      </h1>
      <div className="grid grid-cols-1 items-center gap-4 overflow-hidden md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <ActionCard
          badge="1"
          icon="🔍"
          title="Monitor"
          detail="See when and how LLMs crawl your site."
        />
        <ActionCard
          badge="2"
          icon="📊"
          title="Track Mentions"
          detail="Find out if your brand is cited in AI answers."
        />

        <ActionCard
          badge="3"
          icon="⚡"
          title="Optimize"
          detail="Get recommendations to improve AI visibility."
        />
      </div>
    </div>
  );
};

export default Actions;
