import React from "react";
type CardType = {
  badge: string;
  icon: string;
  title: string;
  detail: string;
};
const ActionCard = ({ badge, icon, title, detail }: CardType) => {
  return (
    <div className="relative mx-auto flex w-full flex-col items-center gap-4 rounded-[16px] border border-[#333333] bg-[#141414] px-4 py-4 md:mx-0">
      <div className="absolute -top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFCC33] text-[#0D0D0D]">
        {badge}
      </div>
      <p className="mt-4 text-[36px] text-[#FFFFFF]">{icon}</p>
      <p className="text-[20px] font-semibold text-[#FFFFFF]">{title}</p>
      <p className="text-[16px] text-[#B3B3B3]">{detail}</p>
    </div>
  );
};

export default ActionCard;
