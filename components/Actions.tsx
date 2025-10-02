import React from "react";
import ActionCard from "./card/ActionCard";

const Actions = () => {
  return (
    <div className="flex flex-col gap-10 my-4 container mx-auto overflow-hidden">
      <h1 className="text-[30px] md:text-[48px] text-[#FFFFFF] text-center font-bold">
        From Crawl to Visibility -
        <span className="text-[#FFCC33]">Made Simple</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 items-center overflow-hidden">
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
